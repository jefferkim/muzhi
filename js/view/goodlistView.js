Muzhi.goodlistView = Backbone.View.extend({
    el: '#J-content',

    initialize: function () {
        var self = this;

        self.startPos = 0;
        self.endPos = 10;


    },

    addItem:function(good){
        var goodView = new Muzhi.goodItemView({model:good});
        return goodView.render();
    },

    render: function () {
       var self = this;
        $("#J-list").html("");
       this.collection.each(function(good){
           $("#J-list").append(self.addItem(good));
       });

    }
});