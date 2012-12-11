/**
 * Author: jason_chen(chenwei)
 * Date: 12-12-11
 */
define(function (require, exports, module) {

    var Backbone = require('backbone');

    exports.Good = Backbone.Model.extend({
        default:function (){

        },
        getItemInfo:function (){
            return {};
        }

    });


});