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

        this.itemTemplate = '<% _.each(list,function(item){%><li><p><img src="<%= item.pic %>"/></p><span><%= item.title%></span></li><%})%>';
        this.subscribeBoxTpl = $("#J-subsribe-box").html();
        this.mask = $("#J-mask");


        var isTmall = $("#J_isTmall").val() == "true" ? 1 :0;
        var url = {api:"mtop.mz.getMzList", data:{"b2c":isTmall, "cc": 0, "pre": "1", "page": 1, "pagesize": "12", "ext": "1"}};

        Muzhi.mtopH5.getApi(url.api, "1.0", url.data, {}, function (resp) {
            var forecastList = resp.data.defaultData.mzList;
            var html = _.template($("#J-forecastItemTemplate").html(), {"forecastList":forecastList});

            $("#J-list").html(html);

            //mtop接口token校验并行请求会出错，所以回掉里面处理
            self._queryList();
        });



        //旋转时重置高度
        window.addEventListener("resize", function () {
            $("#J-mask").height(document.body.clientHeight);
        });

    },

    renderSubscribe:function (e) {

        this.mask.show();
        $("#J-subscribeBox").show();

        this.handle = handle = function(e){  e.preventDefault()};

        document.addEventListener("touchmove",handle,false);
    },

    destroySubscribe:function (e) {
        e.preventDefault();
        var self = this;
        this.mask.hide();
        $("#J-subscribeBox").hide();
        document.removeEventListener("touchmove",self.handle,false);

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


    confirmSubscribe:function(e){
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

    //展开列表
    toggleList:function(e){
        var target = e.target,
            currentTarget = e.currentTarget;

        var currentMod =  $(currentTarget).parents(".mod");

        if($(target).hasClass("J-subscribe")) return;

        currentMod.siblings(".mod").find(".bd").addClass("hide");

        $(currentTarget).next(".bd").toggleClass("hide");
        this._queryList($(currentTarget).next(".bd").find("ul"));
    },

    //请求
    _queryList:function (ul) {

        var self = this;

        var wrap = ul ? ul : $(".current");

        $.ajax({
            url:"js/json/queryList.json",
            dataType:"json",
            success:function (resp) {
                var list = resp.data.defaultData.mzList;
                var html = _.template(self.itemTemplate, {list:list});
                wrap.html(html);

            }
        })




       /* var url = {api:"mtop.mz.getMzListById", data:{"gid": wrap.attr("data-gid")}};

        Muzhi.mtopH5.getApi(url.api, "1.0", url.data, {}, function (resp) {
            var list = resp.data.defaultData.mzList;
            var html = _.template(self.itemTemplate, {list:list});
            wrap.html(html);
        });*/


    }
});