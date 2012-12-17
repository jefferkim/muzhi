Muzhi.Good = Backbone.Model.extend({
    default: function () {

    },



    getItemInfo: function () {
        return {
           title:this.get("mzBasePart").title,
           pic:this.get("mzBasePart").pic,

           desc:this.get("")

        };
    }

});