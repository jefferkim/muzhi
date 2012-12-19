Muzhi.goodlistView = Backbone.View.extend({
    el: '#J-content',

    initialize: function () {

    },

    addItem: function (good) {
        var goodView = new Muzhi.goodItemView({model: good});
        return goodView.render();
    },

    render: function () {
        var self = this;
        $("#J-list").html("");
        this.collection.each(function (good) {
            $("#J-list").append(self.addItem(good));
        });
    }
});