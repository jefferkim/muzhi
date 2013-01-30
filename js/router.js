//create global collection
Muzhi.Goods = new Muzhi.goodList;

//begin router
//TODO:菜单渲染将全部有模板来渲染，减少dom的反复修改样式等等
Muzhi.Router = Backbone.Router.extend({

    routes: {
        '': "listDefault", //首页
        '!list/:id/p:pageNo': "list", //列表
        '!page/-p:pageNo':"listAll",//
        '!sold/p:pageNo': "sold",//售罄
        '!my/p:pageNo': "my"//我的斗价
    },
    //TODO:代付款

    initialize: function () {

        var self = this;
        var bulletsH = "",len = $("li","#J-slider").length;
        for(var i = 0; i<len ;i++){
            if(i==0){
              bulletsH += '<em class="on"></em>';
            }else{
               bulletsH += '<em></em>';
            }
        }
        $("#J-position").html(bulletsH);
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
        if(!Muzhi.Util._checkLogin(resp)) return;//TODO:貌似不需要

        if(resp.data.success == "false"){
            notification.flash(resp.data.errorMsg).show();
            return ;
        }
        var data = resp.data.defaultData;
        if(!data){ //没有商品
            $("#J-list").html('<li class="tip-no-sold"><p class="txt">暂无宝贝，敬请期待！</p></li>');
            $("#J-pageNav").html('');
            return;
        }
        var soldObj = $("#J-soldNum");
        if(resp.api.indexOf("getMzBarelyList") !=-1){
            data.mzExtPart ? soldObj.text(data.mzExtPart.totalCount).show() : soldObj.text("").hide();
        }else if(resp.api.indexOf("getMzList") != -1 && soldObj.html() == ""){
            (data.mzExtPart && data.mzExtPart.numOfBarelySold && data.mzExtPart.numOfBarelySold !='0') ? soldObj.text(data.mzExtPart.numOfBarelySold).show() : soldObj.text(0).hide();
        }

        Muzhi.Goods.reset(data.mzPartList);
        new Muzhi.goodlistView({
            collection: Muzhi.Goods
        }).render();

        var pageNav = new PageNav({'id': '#J-pageNav', 'pageCount': Math.ceil(data.mzExtPart.totalCount / 12), 'objId': 'p'});



        var scrollToPx = Muzhi.Util.scrollToItem(Muzhi.Goods);
        if(scrollToPx){
           setTimeout(function(){
                window.scrollTo(0,scrollToPx)
                },20);
            localStorage.setItem("MZReturnToList",0);
        }
    },

    _queryList:function(listId,pageNo){
        var self = this;
        var sliderWrap = $("#J-sliderWrap");
        self._showNav();
        //只有在全部分类并且是第一页时才会显示slider
        if(listId == 0 && pageNo == 1)
            sliderWrap.show();
        else
            sliderWrap.hide(); $("#J-catSel").addClass("none"); $("#J-filterLink").find(".arr").addClass("up");


        if (!Muzhi.menuList)
            Muzhi.Util.getMenu();
        else
            Muzhi.Util.setCurrentMenu(listId);



        $("#J-list").html('<div class="loading"><span></span></div>');
		$("#J-pageNav").html('');
		$("#J-filterLink").addClass('cur');
        var isTmall = $("#J_isTmall").val() == "true" ? 1 :0;
        var url = {api:"mtop.mz.getMzList", data:{"b2c":isTmall, "cc": listId||0, "pre": "0", "page": pageNo || 1, "pagesize": "12", "ext": "1"}};

        Muzhi.mtopH5.getApi(url.api, "1.0", url.data, {}, function (resp) {
            self._listRender(resp);
            if(pageNo != 1){
                window.scrollTo(0,50);
            }

        });

    },

    //列表页
    list: function (id, pageNo) {
        this._queryList(id,pageNo);
    },

    listDefault:function(){
         this._queryList(0,1);
    },
    //获取全部列表
    listAll:function(pageNo){
        this._queryList(0,pageNo);
    },

    sold: function (pageNo) {
        var self = this;
        self._hideNav();
        $("#J-list").html('<div class="loading"><span></span></div>');
        $("#J-pageNav").html('');
        $("#J-soldOut").addClass('cur');
        var isTmall = $("#J_isTmall").val() == "true" ? 1 :0;
        var url = {api:"mtop.mz.getMzBarelyList",data:{"b2c": isTmall, "page": pageNo || 1, "pagesize": "12"}};
        Muzhi.mtopH5.getApi(url.api, "1.0", url.data, {}, function (resp) {
            if(!resp.data.defaultData){ //没有商品
                $("#J-list").html('<li class="tip-no-sold"><p class="txt">暂无即将售罄宝贝，返回宝贝页面</p><p>页面虽不曾留下痕迹，但我知你已飞过</p></li>');
                $("#J-soldNum").hide();
                return;
            }
            self._listRender(resp);
        });

    },

    //TODO:统一没有商品提示文案
    my: function (pageNo) {
        var self = this;
        self._hideNav();
        $("#J-list").html('<div class="loading"><span></span></div>');
        $("#J-pageNav").html('');
        $("#J-My").addClass('cur');
        var url = {api:"mtop.mz.getMyMzList",data:{"page": pageNo || 1, "pagesize": "12"}};
        Muzhi.mtopH5.getApi(url.api, "1.0", url.data, {}, function (resp) {
        	if(!Muzhi.Util._checkLogin(resp)) return;
            if(!resp.data.defaultData){ //没有商品
                $("#J-list").html('<li class="tip-no-dj"><div class="icon"></div><p class="txt">还未参与斗价，快去斗个宝贝吧！</p><p>给你一张画布，绘一个缤纷世界</p></li>');
                return;
            }
            var myNum = $("#J-myNum"),data = resp.data.defaultData;
            data.mzExtPart ? myNum.text(data.mzExtPart.totalCount).show() : myNum.text(0).hide();
            self._listRender(resp);
        });

    },
    
    // hide:隐藏频道导航
    _hideNav: function(){
    	$("#J-filterLink").find("small").hide();
    	$("#J-filterLink").find(".arr").hide();
    	$("#J-catSel").addClass("none");
    	$("#J-sliderWrap").hide();
    },
    
    // hide:显示频道导航
    _showNav: function(){
    	$("#J-filterLink").find("small").show();
    	$("#J-filterLink").find(".arr").show();
    	$("#J-sliderWrap").show();
    }
    
});



