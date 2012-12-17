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

        /*var url = {api:"mtop.mz.getMzList", data:{"b2c":"0","cc":"0","pre":"0","page":"1","pagesize":"12","ext":"1"}};

        Muzhi.mtopH5.getApi(url.api, "1.0", url.data, {},function(resp){
            console.log(resp);
            var data = resp.data.defaultData;
            Muzhi.Goods.reset(data.mzPartList);
            new Muzhi.goodlistView({
                collection:Muzhi.Goods
            }).render();
        });*/

        $.ajax({
            url:'js/json/list.json',
            success:function(resp){
                var data = resp.data.defaultData;
                Muzhi.Goods.reset(data.mzPartList);
                new Muzhi.goodlistView({
                    collection:Muzhi.Goods
                }).render();
           }
        });

    }


});



