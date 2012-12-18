//create global collection
Muzhi.Goods = new Muzhi.goodList;

//begin router
Muzhi.Router = Backbone.Router.extend({

    routes: {
        '': "index", //首页
        '!list/:id/p:pageNo':"list", //列表
        '!sold':"sold",//售罄
        '!my':"my"//我的斗价
    },

    initialize: function () {

       var slider =  new Swipe($('#J-slider')[0]);

    },
    //列表页
    list: function (id) {

        console.log(id);
        var url = {api:"mtop.mz.getMzList", data:{"b2c":"0","cc":"0","pre":"0","page":"1","pagesize":"12","ext":"1"}};

        /*Muzhi.mtopH5.getApi(url.api, "1.0", url.data, {},function(resp){
            console.log(resp);
            var data = resp.data.defaultData;
            Muzhi.Goods.reset(data.mzPartList);
            new Muzhi.goodlistView({
                collection:Muzhi.Goods
            }).render();
        });*/

       /* $.ajax({
            url:"js/json/list1.json",
            dataType:"json",
            success:function(resp){
                var data = resp.data.defaultData;
                Muzhi.Goods.reset(data.mzPartList);
                new Muzhi.goodlistView({
                    collection:Muzhi.Goods
                }).render();

            }

        })*/


        $.ajax({
            url:'http://api.waptest.taobao.com/rest/api2.do?api=mtop.mz.getMzList&v=1.0&type=jsonp&callback=?&data='+
                JSON.stringify({"b2c":"0","cc":"0","pre":"0","page":"0","pagesize":"48","ext":"1"}),
            success:function(resp){

                var data = resp.data.defaultData;
                Muzhi.Goods.reset(data.mzPartList);
                new Muzhi.goodlistView({
                    collection:Muzhi.Goods
                }).render();

                var pageNav = new PageNav({'id':'#J-pageNav', 'pageCount':Math.ceil(resp.data.defaultData.mzExtPart.totalCount/12), 'objId':'p'});
            }
        })





    },

    sold:function(){


    },

    my:function(){



    }


});



