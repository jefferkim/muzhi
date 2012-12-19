//create global collection
Muzhi.Goods = new Muzhi.goodList;

//begin router
Muzhi.Router = Backbone.Router.extend({

    routes: {
        '': "index", //首页
        '!list/:id/p:pageNo': "list", //列表
        '!sold/p:pageNo': "sold",//售罄
        '!my/p:pageNo': "my"//我的斗价
    },

    initialize: function () {
        var self = this;
        var slider = new Swipe($('#J-slider')[0]);

        //分类显示
        Muzhi.Util.catShow();

       /* window.addEventListener("hashchange",function(){
            var locHash = location.hash.split("/")[0];
            var CURCLS = "cur";
            $("a","#J-tab").removeClass(CURCLS);
            switch(locHash){
                case "#!list":
                    $("#J-filterLink").addClass(CURCLS);
                    break;
                case "#!sold":
                    $("#J-soldOut").addClass(CURCLS);
                    break;
                case "#!my":
                    $("#J-My").addClass(CURCLS);
                    break;
                default :
                    $("#J-filterLink").addClass(CURCLS);
                    break;
            }
        },false);*/

        var tabA = $("a","#J-tab");
        tabA.on("click",function(e){
            e.preventDefault();
            var url = $(this).attr("href");
            tabA.removeClass("cur");
            $(this).addClass("cur");
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

        var data = {"b2c": "0", "cc": id, "pre": "0", "page": pageNo || 1, "pagesize": "12", "ext": "1"};
        $.ajax({
            url: 'http://api.waptest.taobao.com/rest/api2.do?api=mtop.mz.getMzList&v=1.0&type=jsonp&callback=?&data=' +
                JSON.stringify(data),
            success: function (resp) {
                self._listRender(resp);
            }
        })
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
            success: function (resp) {
                self._listRender(resp);
            }
        })
    }

});



