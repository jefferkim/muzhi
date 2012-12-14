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

        /*var url = {api:"com.taobao.wap.rest2.wo3", data:{"method":"getItemsFromList", "listCode":11, "pageSize":"30", "pageNo":1 }};
        Muzhi.mtopH5.getApi(url.api, "1.0", url.data, {},function(resp){
            console.log(resp);

        });*/

        $.ajax({
            url:"http://127.0.0.1/gitRep/muzhi/js/json/list.json",
            success:function(resp){
                Muzhi.Goods.reset(resp.MzListPart);
                new Muzhi.goodlistView({
                    collection:Muzhi.Goods
                }).render();
            }
        });

    }


});



