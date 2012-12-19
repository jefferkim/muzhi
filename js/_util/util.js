Muzhi.Util = {

    getMenu: function () {
        var self = this;
        var liTpl = '<% _.each(navItems, function(item) { %><li><a href="#!list/<%= item.id%>/p1" id="J-catA-<%= item.id%>"><%= item.name%></a></li><%});%>';

        var url = {api:"mtop.mz.getMzNav",data:{}};
        Muzhi.mtopH5.getApi(url.api, "1.0", url.data, {}, function (resp) {
            var menuList = Muzhi.menuList = resp.data.defaultData.navItems;
            menuList.unshift({"id":0,"name":"全部"});
            $("#J-catList").html(_.template(liTpl, {navItems: menuList}));
            self.setCurrentMenu(location.hash.split("/")[1]);
        });
    },

    setCurrentMenu: function (id) {
        var currentMenu = _.find(Muzhi.menuList, function (item) {
            return item.id == id
        });
        $("a","#J-catList").removeClass("cur");
        $("#J-catA-"+id).addClass("cur");

        $("small",".J-filter").text(currentMenu.name);
        $("a",".J-filter").attr("href","#!list/"+id+"/p1")
    },

    _checkLogin:function(resp){
        if (resp.data.success == "false" && resp.data.errorCode == "PP_USER_NOT_LOGIN") {
            var currentUrl = encodeURIComponent(location.href.split("#")[0]),
                host = location.hostname.match(/$|\.(?:m|waptest|wapa)\.taobao\.com/gi);
            if(location.href.indexOf("localhost") != -1){
                host[0] = ".waptest.taobao.com";
            }
            location.href = "http://login" + host[0] + "/login.htm?redirectURL=" + currentUrl;
            return false;
        }
        return true;
    },

    catShow:function(){

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

        $(".J-filter").on("click",function(e){
            e.preventDefault();
            $("#J-catSel").show();
            $(this).find(".arr").addClass("up");
        });

        $("#J-catList").on("click","a",function(e){
            e.preventDefault();
            $("#J-catSel").hide();
            var hashToGo = $(this).attr("href");
            $("a",".J-filter").attr("href",hashToGo);
            $(".arr",".J-filter").removeClass("up");
            Muzhi.router.navigate(hashToGo,{'trigger':true});
        });

    }

};
