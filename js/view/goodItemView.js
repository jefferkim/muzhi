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

        var pos = this.$el.find(".current-pos"),
            tip = this.$el.find(".dynamic"),
            desc = this.$el.find(".desc");


        var maxP = data.mzCorePart.maxPrice,
            nowP = data.mzCorePart.nowPrice,
            minP = data.mzCorePart.minPrice,
            indicatorOffset,infoboxOffset;

        if (minP == nowP) {
            indicatorOffset = 110;
            infoboxOffset = 85;
        }  else if(maxP == nowP){
            indicatorOffset = 0;
            infoboxOffset = 0;
        }  else {
            indicatorOffset = Math.min(85, 15+70*(maxP-nowP)/(maxP-minP));
            infoboxOffset = Math.min(66, 18+48*(maxP-nowP)/(maxP-minP));
        }
        tip.find(".current-price").html("&yen;"+data.mzCorePart.nowPrice);
        tip.find("em").text(data.mzCorePart.numOfJoiners+"人斗价");
        desc.text(data.mzInfoPart.desc);
        pos.animate({
            top:  indicatorOffset
        },500);

        tip.animate({
            top: infoboxOffset
        },500);
    },

    render: function () {
        var goodItemInfo = this.model.getItemInfo();
        return this.$el.html(_.template($("#J-itemTemplate").html(), goodItemInfo));
    }

});