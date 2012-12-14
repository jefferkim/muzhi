Muzhi.goodItemView = Backbone.View.extend({

    tagName:"li",

    className:"list-item",

    events:{
       "click .J-priceBar":"refreshPrice"
    },

    initialize:function () {

       this.model.on("change",this.render,this);

    },

    //刷新价格
    refreshPrice:function(e){
        e.preventDefault();
        var self = this;
        $.ajax({
            url:"http://127.0.0.1/gitRep/muzhi/js/json/refresh.json",
            success:function(resp){
                self.model.set(resp);
            }
        })



    },

    render:function () {
        var goodItemInfo = this.model.toJSON();
        console.log(goodItemInfo);
        console.log("changed");
        return this.$el.html($("#J-itemTemplate").html());
    }

});