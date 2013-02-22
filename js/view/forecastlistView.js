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


        var isTmall = $("#J_isTmall").val() == "true" ? 1 : 0;
        /* var url = {api:"mtop.mz.getMzList", data:{"b2c":isTmall, "cc": 0, "pre": "1", "page": 1, "pagesize": "12", "ext": "1"}};

         Muzhi.mtopH5.getApi(url.api, "1.0", url.data, {}, function (resp) {
         var forecastList = resp.data.defaultData.mzList;
         var html = _.template($("#J-forecastItemTemplate").html(), {"forecastList":forecastList});

         $("#J-list").html(html);

         //mtop接口token校验并行请求会出错，所以回掉里面处理
         self._queryList();
         });*/

        $.ajax({
            url:"js/json/forecastlist.json",
            dataType:"json",
            success:function (resp) {
                var forecastList = resp.data.defaultData.mzPrePromList;
                var nextList = resp.data.defaultData.mzPartList;
                var lastFCIndex = forecastList.length - 1;
                var html = _.template($("#J-forecastItemTemplate").html(), {"forecastList":forecastList, "len":lastFCIndex});

                $("#J-list").html(html);


                $(".mod").eq(lastFCIndex).find("ul").html(_.template(self.itemTemplate, {list:nextList}))

            }
        })


        document.addEventListener("touchmove", function (e) {
            /*

             var pageY,elOffsetY;

             pageY = e.pageY;
             var el = $(".open");

             elOffsetY = el.offset().top;

             if(pageY>elOffsetY){
             el.css({
             position:"absolute",
             top:0
             })
             }else{
             el.find("span").css({
             position:"relative"
             })
             }
             */


        }, false);

        //load more pages
        $(window).on("scroll", function (e) {
            var el = $(".open");
            if (window.pageYOffset + $(window).height() > el.height() + el.offset().top) {
                self.currentPageNo++;
                self._loadMoreList(self.currentPageNo);
            }
        });

        //adjust the height where resize
        window.addEventListener("resize", function () {
            $("#J-mask").height(document.body.clientHeight);
        });

    },

    //load more list where scroll to the bottom of list
    _loadMoreList:function (pageNo) {
        var self = this;

        $.ajax({
            url:"js/json/queryList.json",
            data:{"pageNo":pageNo},
            dataType:"json",
            success:function (resp) {
                var list = resp.data.defaultData.mzPartList;
                if(!list) return;
                var html = _.template(self.itemTemplate, {list:list});
                $(".open").find("ul").append(html);
            }
        });

    },

    renderSubscribe:function (e) {

        this.mask.show();
        $("#J-subscribeBox").show();

        this.handle = handle = function (e) {
            e.preventDefault()
        };

        document.addEventListener("touchmove", handle, false);
    },

    destroySubscribe:function (e) {
        e.preventDefault();
        var self = this;
        this.mask.hide();
        $("#J-subscribeBox").hide();
        document.removeEventListener("touchmove", self.handle, false);

    },

    subscribe:function (e) {
        e.preventDefault();
        var self = this;

        var target = e.currentTarget;

        if ($(target).hasClass("subscribed")) return;

        $(target).addClass("subscribing");

        var subscribeBox = $("#J-subscribeBox");

        if (subscribeBox.length > 0)
            subscribeBox.show();
        else
            $("body").append(this.subscribeBoxTpl);

        self.renderSubscribe();
    },


    confirmSubscribe:function (e) {
        e.preventDefault();
        var self = this;
        var subscribeBtn = $(".subscribing");
        $.ajax({
            url:"js/json/subscribe.json",
            dataType:"json",
            success:function (resp) {

                var isSuccess = resp.data.success;

                if (isSuccess == "true") {
                    subscribeBtn.addClass("subscribed");
                    $(".J-subscribe").removeClass("subscribing");
                    self.destroySubscribe(e);

                    notification.flash('<div class="success-subscribed"><span class="icon"></span>已经成功订阅</div>')
                } else {
                    notification.flash("订阅失败").show();
                }

            }
        })
    },

    //unfold the pre list
    toggleList:function (e) {
        this.currentPageNo = 1; //reset the pageno where open a new pre list

        var target = e.target,
            currentTarget = e.currentTarget;

        var currentMod = $(currentTarget).parents(".mod");

        if ($(target).hasClass("J-subscribe")) return;

        currentMod.siblings(".mod").find(".bd").addClass("hide");

        $(currentTarget).next(".bd").toggleClass("hide");
        currentMod.toggleClass("open");
        this._queryList($(currentTarget).next(".bd").find("ul"));
    },

    //query the list
    _queryList:function (ul) {

        var self = this;

        var wrap = ul ? ul : $(".current");

        $.ajax({
            url:"js/json/queryList.json",
            dataType:"json",
            success:function (resp) {
                var list = resp.data.defaultData.mzPartList;
                var html = _.template(self.itemTemplate, {list:list});
                wrap.html(html);

            }
        });


        /* var url = {api:"mtop.mz.getMzListById", data:{"gid": wrap.attr("data-gid")}};

         Muzhi.mtopH5.getApi(url.api, "1.0", url.data, {}, function (resp) {
         var list = resp.data.defaultData.mzList;
         var html = _.template(self.itemTemplate, {list:list});
         wrap.html(html);
         });*/


    }
});