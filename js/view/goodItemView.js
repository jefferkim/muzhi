Muzhi.goodItemView = Backbone.View.extend({

    tagName: "li",

    className: "list-item",

    events: {
        "click .J-refresh": "refreshPrice",
        "click .J-join": "join",
        "tap .dynamic": "refreshPrice"
    },

    initialize: function () {

        this.model.on("joinNow", this.render, this);
    },

    join: function (e) {
        e.preventDefault();
        var currentModel = this.model;
        var itemId = currentModel.get("mzBasePart").itemId;
        var successTpl = '<div class="join-tip"><em class="cz"></em><b>斗价成功</b>您可以立即购买,也可以继续等待</div>';

        var url = {api:"mtop.mz.doJoinMz",data:{"itemId": itemId}};
        Muzhi.mtopH5.getApi(url.api, "1.0", url.data, {}, function (resp) {
            if(!Muzhi.Util._checkLogin(resp,itemId,true)) return;
            if(resp.data.success == "false"){
                notification.flash(resp.data.errorMsg);
                return ;
            }
            var currentMyNum = $("#J-myNum");
            notification.flash(successTpl).show();
            currentModel.set(resp.data.defaultData);
            currentMyNum.text(parseInt(currentMyNum.text())+1);

            currentModel.trigger("joinNow");//backbone不判断深度

        });

    },
    //刷新价格
    refreshPrice: function (e) {
        e.preventDefault();
        var self = this;
        var currentModel = this.model;

        var url = {api:"mtop.mz.getMzItemInfo",data:{"itemId": currentModel.get("mzBasePart").itemId}};
        Muzhi.mtopH5.getApi(url.api, "1.0", url.data, {}, function (resp) {

            self.refreshRender(resp.data.defaultData);
        });

    },

    refreshRender:function(data){
        var oldRegion = this.model.priceRegion(),
            newRegion = this.model.set(data).priceRegion();

        var posTransformArray = [110,92,69,46,23,3], //pos的运动位置
            tipTransformArray = [85,65,57,35,20,0], //tip的运动位置
            arrowTransformArray = [28,29,15,15,7,7];//小箭头的位置,最主要小箭头的位置

        var pos = this.$el.find(".current-pos"),
            tip = this.$el.find(".dynamic"),
            desc = this.$el.find(".desc"),
            arrow = tip.find("s");

        if(oldRegion != newRegion){ //有区间变动，需要加入css动画
            tip.find(".current-price").text("￥"+data.mzCorePart.nowPrice);
            tip.find("em").text(data.mzCorePart.numOfJoiners+"人斗价");
            desc.text(data.mzInfoPart.desc);
            console.log(data.mzInfoPart.desc);
            pos.animate({
                top:  posTransformArray[newRegion]
            },500,'line');

            tip.animate({
                top: tipTransformArray[newRegion]
            },500,'line');

            arrow.css({top:arrowTransformArray[newRegion]});
        }else{
            this.render();
        }
    },

    render: function () {
        var goodItemInfo = this.model.getItemInfo();
        return this.$el.html(_.template($("#J-itemTemplate").html(), goodItemInfo));
    }

});