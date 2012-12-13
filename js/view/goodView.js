Muzhi.goodView = Backbone.View.extend({
    tagName: 'li',
    events: {
        "click .J-priceBar":'refreshInfo',//刷新数据
        "click .J_btn": 'showPop'
    },

    initialize: function () {
        var self = this;

        self.startPos = 0;
        self.endPos = 10;

    },

    render: function () {

       var template = JST["template/goodItem"];
        console.log(template);



    }
});