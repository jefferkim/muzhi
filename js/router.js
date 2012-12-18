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
        var self = this;
        var slider =  new Swipe($('#J-slider')[0]);
        var liTpl = '<% _.each(navItems, function(item) { %><li><a href="#!list/<%= item.id%>/p1"><%= item.name%></a></li><%});%>';
        $.ajax({
            url:"http://api.waptest.taobao.com/rest/api2.do?api=mtop.mz.getMzNav&type=jsonp&callback=?&v=1.0&data={}",
            success:function(resp){
                self.menu = resp.data.defaultData.navItems;
                $("#J-catList").html(_.template(liTpl,{navItems:resp.data.defaultData.navItems}));
            }
        });

    },
    //列表页
    list: function (id,pageNo) {

        console.log(id);


        /*Muzhi.mtopH5.getApi(url.api, "1.0", url.data, {},function(resp){
            console.log(resp);
            var data = resp.data.defaultData;
            Muzhi.Goods.reset(data.mzPartList);
            new Muzhi.goodlistView({
                collection:Muzhi.Goods
            }).render();
        });*/
        console.log(this.menu);
        var   data = {"b2c":"0","cc":id,"pre":"0","page":pageNo||1,"pagesize":"12","ext":"1"};

        $.ajax({
            url:'http://api.waptest.taobao.com/rest/api2.do?api=mtop.mz.getMzList&v=1.0&type=jsonp&callback=?&data='+
                JSON.stringify(data),
            success:function(resp){

                var data = resp.data.defaultData;
                Muzhi.Goods.reset(data.mzPartList);
                new Muzhi.goodlistView({
                    collection:Muzhi.Goods
                }).render();



                var pageNav = new PageNav({'id':'#J-pageNav', 'pageCount':Math.ceil(data.mzExtPart.totalCount/12), 'objId':'p'});


            }
        })





    },

    sold:function(){


    },

    my:function(){



    }


});



