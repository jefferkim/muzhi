Muzhi.forecastlistView = Backbone.View.extend({

    el: '#J-content',

    events: {
        "click .J-subscribe": "subscribe"
    },

    initialize: function () {
        var self = this;

        this.itemTemplate = '<% _.each(list,function(item){%><li><p><img src="<%= item.src %>"/></p><span><%= item.title%></span></li><%})%>';

        $.ajax({
            url:"js/json/forecastlist.json",
            dataType:"json",
            success:function(resp){

                var forecastList = resp.data.defaultData.mzList;
                var html =  _.template($("#J-forecastItemTemplate").html(), {"forecastList":forecastList});

                $("#J-list").html(html);

                //mtop接口token校验并行请求会出错，所以回掉里面处理
                self.queryList();

            }
        })

    },

    renderMask:function(){

    },

    destroyMask:function(){

    },

    subscribe: function (e) {
        e.preventDefault();
        var target = e.currentTarget;
        $.ajax({
            url:"js/json/subscribe.json",
            dataType:"json",
            success:function(resp){

                var isSuccess = resp.data.success;

                if(isSuccess == "true"){
                     $(target).addClass("subscribed");
                }else{
                    notification.flash("订阅失败").show();
                }

            }
        })


    },

    //请求
    queryList:function(ul){

        var self = this;

        var wrap = ul ? ul : $(".current");

        $.ajax({
            url:"js/json/queryList.json",
            dataType:"json",
            success:function(resp){
                var list = resp.data.defaultData.mzList;
                var html =  _.template(self.itemTemplate, {list:list});
                wrap.html(html);

            }
        })
    }
});