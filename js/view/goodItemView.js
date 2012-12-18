Muzhi.goodItemView = Backbone.View.extend({

    tagName:"li",

    className:"list-item",

    events:{
       "click .J-refresh":"refreshPrice",
       "click .J-join":"join"
    },

    initialize:function () {

       this.model.on("change",this.render,this);


    },


    join:function(e){
        e.preventDefault();

        var currentModel = this.model;
        var successTpl = '<div class="join-tip"><em class="cz"></em><b>斗价成功</b>您可以立即购买,也可以继续等待</div>';
        $.ajax({
            url:'http://api.waptest.taobao.com/rest/api2.do?api=mtop.mz.doJoinMz&v=1.0&type=jsonp&callback=?&data='+JSON.stringify({"itemId":currentModel.get("mzBasePart").itemId}),
            success:function(resp){
                console.log(resp);
                notification.flash(successTpl).show();
            }
        })


    },
    //刷新价格
    refreshPrice:function(e){
        e.preventDefault();
        var self = this;
        /*$.ajax({
            url:"http://127.0.0.1/gitRep/muzhi/js/json/refresh.json",
            success:function(resp){
                self.model.set(resp);
            }
        })*/

        var currentModel = this.model;
        $.ajax({
            url:'http://api.waptest.taobao.com/rest/api2.do?api=mtop.mz.getMzItemInfo&v=1.0&type=jsonp&callback=?&data='+
                JSON.stringify({"itemId":currentModel.get("mzBasePart").itemId}),
            success:function(resp){
                self.model.set(resp);
            }
        })
    },

    render:function () {
        var goodItemInfo = this.model.getItemInfo();
        return this.$el.html(_.template($("#J-itemTemplate").html(),goodItemInfo));
    }

});