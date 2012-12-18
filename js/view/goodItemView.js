Muzhi.goodItemView = Backbone.View.extend({

    tagName: "li",

    className: "list-item",

    events: {
        "click .J-refresh": "refreshPrice",
        "click .J-join": "join"
    },

    initialize: function () {

        this.model.on("joinNow", this.render, this);

    },

    join: function (e) {
        e.preventDefault();

        var currentModel = this.model;
        var successTpl = '<div class="join-tip"><em class="cz"></em><b>斗价成功</b>您可以立即购买,也可以继续等待</div>';
        $.ajax({
            url: 'http://api.waptest.taobao.com/rest/api2.do?api=mtop.mz.doJoinMz&v=1.0&type=jsonp&callback=?&data=' + JSON.stringify({"itemId": currentModel.get("mzBasePart").itemId}),
            success: function (resp) {
                notification.flash(successTpl).show();

                var newData = currentModel.toJSON();
                newData.mzBasePart.status = 2;
                newData.mzClickPart.showName = "立刻购买";

                currentModel.set(newData);
                currentModel.trigger("joinNow");//backbone不判断深度
            }
        })


    },
    //刷新价格
    refreshPrice: function (e) {
        e.preventDefault();
        var self = this;
        var currentModel = this.model;
        $.ajax({
            //url: 'http://api.waptest.taobao.com/rest/api2.do?api=mtop.mz.getMzItemInfo&v=1.0&type=jsonp&callback=?&data=' +
           //     JSON.stringify({"itemId": currentModel.get("mzBasePart").itemId}),

            url:"http://127.0.0.1/gitRep/muzhi/js/json/refresh.json",

            success: function (resp) {
                self.refreshRender(resp.data.defaultData);
            }
        })
    },

    refreshRender:function(data){
        var oldRegion = this.model.priceRegion(),
            newRegion = this.model.set(data).priceRegion();

        var posTransformArray = [110,92,69,46,23,3], //pos的运动位置
            tipTransformArray = [85,80,57,35,20,0], //tip的运动位置
            arrowTransformArray = [28,15,15,15,7,7];//小箭头的位置,最主要小箭头的位置

        var pos = this.$el.find(".current-pos"),
            tip = this.$el.find(".dynamic"),
            arrow = tip.find("s");

        if(oldRegion != newRegion){ //有区间变动，需要加入css动画
            tip.find(".current-price").text("￥"+data.mzCorePart.nowPrice);
            tip.find("em").text(data.mzCorePart.numOfJoiners+"人斗价");
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