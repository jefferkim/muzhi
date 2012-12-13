//create global collection
Muzhi.Goods = new Muzhi.goodList;

//begin router
Muzhi.Router = Backbone.Router.extend({

    routes: {
        '': "index", //首页
        '!list':"list" //列表
    },

    initialize: function () {

       var slider =  new Swipe($('#J-slider')[0]);

    },
    //列表页
    list: function () {
        new Muzhi.goodlistView({
            collection:Muzhi.Goods
        }).render();




    }


});



