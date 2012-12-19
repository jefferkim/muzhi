//create global collection
Muzhi.Goods = new Muzhi.goodList;

//begin router
Muzhi.Router = Backbone.Router.extend({

    routes: {
        '': "list", //首页
        '!list/:id/p:pageNo': "list", //列表
        '!sold/p:pageNo': "sold",//售罄
        '!my/p:pageNo': "my"//我的斗价
    },

    initialize: function () {
        var self = this;

        var slider = new Swipe($('#J-slider')[0],{
             //auto:3000,
            callback: function(e,pos) {
               var bullets = $("em","#J-position");
               bullets.removeClass("on");
               bullets.eq(pos).addClass("on");
            }
        });

        //分类显示
        Muzhi.Util.catShow();

        var tabA = $("a","#J-tab");
        tabA.on("click",function(e){
            e.preventDefault();
            var CUR_CLS = "cur", url = $(this).attr("href");
            tabA.removeClass(CUR_CLS);
            $(this).addClass(CUR_CLS);
            self.navigate(url,{'trigger':true});
        });

    },

    _listRender: function (resp) {
        if(!Muzhi.Util._checkLogin(resp)) return;

        if(resp.data.success == "false"){
            notification.flash("调用请求错误").show();
            return ;
        }
        var data = resp.data.defaultData;
        var soldObj = $("#J-soldNum");
        (data.mzExtPart && data.mzExtPart.numOfBarelySold) ? soldObj.text(data.mzExtPart.numOfBarelySold) : soldObj.hide();

        Muzhi.Goods.reset(data.mzPartList);
        new Muzhi.goodlistView({
            collection: Muzhi.Goods
        }).render();

        var pageNav = new PageNav({'id': '#J-pageNav', 'pageCount': Math.ceil(data.mzExtPart.totalCount / 12), 'objId': 'p'});
    },

    //列表页
    list: function (id, pageNo) {
        var self = this;
        if (!Muzhi.menuList)
            Muzhi.Util.getMenu();
        else
            Muzhi.Util.setCurrentMenu(id);

        $("#J-list").html('<div class="loading"><span></span></div>');

        var url = {api:"mtop.mz.getMzList", data:{"b2c": "0", "cc": id||0, "pre": "0", "page": pageNo || 1, "pagesize": "12", "ext": "1"}};

        Muzhi.mtopH5.getApi(url.api, "1.0", url.data, {}, function (resp) {

            self._listRender(resp);
        });

    },

    sold: function (pageNo) {
        var self = this;
        $.ajax({
            url: 'http://api.waptest.taobao.com/rest/api2.do?api=mtop.mz.getMzBarelyList&v=1.0&type=jsonp&callback=?&data=' +
                JSON.stringify({"b2c": "0", "page": pageNo || 1, "pagesize": "12"}),
            success: function (resp) {
                self._listRender(resp);
            }
        })
    },

    my: function (pageNo) {
        var self = this;
        $.ajax({
            url: 'http://api.waptest.taobao.com/rest/api2.do?api=mtop.mz.getMyMzList&v=1.0&type=jsonp&callback=?&data=' +
                JSON.stringify({"page": pageNo || 1, "pagesize": "12"}),
            //url:"js/json/list2.json",
            success: function (resp) {
                self._listRender(resp);
            }
        })
    }

});



