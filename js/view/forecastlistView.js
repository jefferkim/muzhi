Muzhi.forecastlistView = Backbone.View.extend({

    el:'body',

    events:{
        "click .J-subscribe":"subscribe",
        "click #J-close":"destroySubscribe",
        "click .confirm-btn":"confirmSubscribe",
        "click .hd":"toggleList"
    },

    initialize:function () {
        var self = this;

        this.itemTemplate = '<% _.each(list,function(item){%><li><p><img src="<%= item.mzBasePart.pic %>"/><span class="price"><%= item.mzCorePart.maxPrice%></span></p><span><%= item.mzBasePart.title%></span></li><%})%>';
        this.subscribeBoxTpl = $("#J-subsribe-box").html();
        this.mask = $("#J-mask");
        this.currentPageNo = 1;
        this.currentGid = 0;

        var isTmall = $("#J_isTmall").val() == "true" ? 1 : 0;
        var url = {api:"mtop.mz.getMzPre", data:{"b2c":isTmall, "page":1, "pagesize":"12"}};

        // Muzhi.mtopH5.getApi(url.api, "1.0", url.data, {}, function (resp) {
        $.ajax({
            url:"js/json/forecastlist.json",
            dataType:"json",
            success:function (resp) {
                var forecastList = resp.data.defaultData.mzPrePromList;
                var nextList = resp.data.defaultData.mzPartList;
                var lastFCIndex = forecastList.length - 1;
                var html = _.template($("#J-forecastItemTemplate").html(), {"forecastList":forecastList, "len":lastFCIndex});
                $("#J-list").html(html);
                $(".mod").eq(lastFCIndex).find("ul").html(_.template(self.itemTemplate, {list:nextList}));
                $("#J-cloneNode").html($(".open").find(".hd").clone());
            }
        });


        var fixBar = function (e) {
            var el = $(".open"),
                elHd = el.find(".hd"),
                elBd = el.find(".bd");
            if (el.length < 1) return; // no open element

            if (window.pageYOffset + $(window).height() > el.height() + el.offset().top) {
                self.currentPageNo++;
                self._queryList(self.currentPageNo);
            }

            // hd will fixed to the top where scroll
            if (el.offset().top + 20 < window.pageYOffset) {
                $("#J-cloneNode").show().css({
                    "position":"fixed",
                    "top":0
                });

            } else {
                $("#J-cloneNode").hide()
            }
        }


        var isIDevice = (/iphone|ipad|itouch/gi).test(navigator.appVersion);

        var eventType = isIDevice ? "touchmove" : "scroll"; //idevice use the touchmove ,android use scroll

        $(window).on(eventType, function (e) {
            fixBar(e)
        });


        //adjust the height where resize
        window.addEventListener("resize", function () {
            $("#J-mask").height(document.body.clientHeight);
        });

    },


    renderSubscribe:function (e) {
        this.mask.height(document.body.clientHeight);
        this.mask.show();
        $("#J-subscribeBox").show();
        $(".J-input").val(localStorage.getItem("MZ_mobile"));
        this.input_handle();

        this.handle = handle = function (e) {
            e.preventDefault()
        };

        document.addEventListener("touchmove", handle, false);  //disabled the touchmove will avoid of adjusting the height of mask
    },

    destroySubscribe:function (e) {
        e.preventDefault();
        var self = this;
        this.mask.hide();
        $("#J-subscribeBox").hide();
        document.removeEventListener("touchmove", self.handle, false);

    },

    input_handle:function () {

        var numberInput = $(".J-input"),
            delBtn = $(".input-clear");
        var _isEmpty = function () {
            numberInput.val() !== "" ? delBtn.show() : delBtn.hide();
        }
        numberInput.on("input",function () {
            _isEmpty();
        }).on("keyup", function () {
                _isEmpty();
            });

        delBtn.on("click", function (e) {
            e.preventDefault();
            numberInput.val("");
            delBtn.hide();
        });

    },

    subscribe:function (e) {
        e.preventDefault();
        var self = this;

        var target = e.currentTarget;

        if ($(target).hasClass("subscribed")) return;

        this.currentGid = $(target).parents(".hd").attr("data-gid"); //set the gid

        var subscribeBox = $("#J-subscribeBox");

        if (subscribeBox.length > 0)
            subscribeBox.show();
        else
            $("body").append(this.subscribeBoxTpl);

        self.renderSubscribe();
    },


    confirmSubscribe:function (e) {
        e.preventDefault();
        var self = this,
            subscribeBtn = $(".open").find(".J-subscribe"),
            mobileNumber = $(".J-input").val(); //TODO:add RegExp


        if (!/^1[3|4|5|8][0-9]\d{4,8}$/.test(mobileNumber)) {
            notification.flash("电话号码不正确").show();
            return;
        }
        var url = {api:"mtop.mz.doSubMz", data:{"step":"2", "gid":this.currentGid, "mobile":mobileNumber}};

        //Muzhi.mtopH5.getApi(url.api, "1.0", url.data, {}, function (resp) {
        $.ajax({
            url:"js/json/subscribe.json",
            dataType:"json",
            success:function (resp) {
                var isSuccess = resp.data.success;
                if (isSuccess == "true") {
                    subscribeBtn.addClass("subscribed");
                    self.destroySubscribe(e);
                    notification.flash('<div class="success-subscribed"><span class="icon"></span>已经成功订阅</div>');
                    localStorage.setItem("MZ_mobile", mobileNumber);
                } else {
                    notification.flash(resp.data.errorMsg).show();
                }

            }
        });

    },

    //toggle  the pre list
    toggleList:function (e) {
        this.currentPageNo = 1; //reset the pageno where open a new pre list

        var target = e.target,
            currentTarget = e.currentTarget;

        var currentMod = $(currentTarget).parents(".mod"),
            currentModHd = currentMod.find(".hd"),
            siblingMod = currentMod.siblings(".mod");

        if ($(target).hasClass("J-subscribe")) return;

        //condition

        if ($(currentTarget).parents(".mod").length == 0) {
            $(".open").siblings(".mod").find(".bd").addClass("hide");
            $(".open").find(".bd").toggleClass("hide");
            $(".open").siblings(".mod").removeClass("open");
            $(".open").toggleClass("open");
            $(currentTarget).parents("#J-cloneNode").hide();

        } else {
            siblingMod.find(".bd").addClass("hide");
            currentMod.find(".bd").toggleClass("hide");

            //remove open class
            siblingMod.removeClass("open");
            currentMod.toggleClass("open");
            //clone the node for fixed element
            $("#J-cloneNode").html(currentModHd.clone());
        }

        currentModHd.css({
            "position":"relative",
            "top":0
        });
        currentMod.find(".bd").css({
            "padding-top":0
        });

        //query list
        this._queryList();
    },

    //query the list
    _queryList:function (pageNo) {
        var self = this;

        var url = {api:"mtop.mz.getMzListById", data:{"gid":this.currentGid}};

        //Muzhi.mtopH5.getApi(url.api, "1.0", url.data, {}, function (resp) {
        $.ajax({
            url:"js/json/queryList.json",
            data:{"pageNo":pageNo},
            dataType:"json",
            success:function (resp) {
                var list = resp.data.defaultData.mzPartList;
                if (!list) return;
                var html = _.template(self.itemTemplate, {list:list});
                if (pageNo)
                    $(".open").find("ul").append(html);
                else
                    $(".open").find("ul").html(html);
            }
        });

    }
});