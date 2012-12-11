/**
 * Author: jason_chen(chenwei)
 * Date: 12-12-11
 */
define(function (require, exports, module) {

    var $ = require('zepto'),

        Mustache = require('mu'),

        Backbone = require('backbone'),
        good = require('../model/good');

    var goodslistView = Backbone.View.extend({
        tagName:'li',
        template:require('./goodslistViewMu'),
        el:'#',
        events:{
            "click .J_btn":'showPop'
        },

        initialize:function () {
            var self = this;

        },
        //显示弹窗
        showPop:function (e){
            e.preventDefalut();

        },
        render:function (){
//            var goodItemInfo=this.model.getItemInfo();
        }
    });
    return new goodslistView();
});