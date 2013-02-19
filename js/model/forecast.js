Muzhi.Forecast = Backbone.Model.extend({
    defaults:{

    },

    getItemInfo: function () {

        return {
            isSubscribed:isSubscribed,
            title:title,
            time:time
        };
    }

});