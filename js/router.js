/**
 * Author: jason_chen(chenwei)
 * Date: 12-12-11
 */
define(function (require, exports, module) {
    var $ = require('zepto'),
        backbone = require('backbone'),
        router = backbone.Router.extend({
            initialize:function () {
                this.dfState = this.cmState = this.itState = this.isFirst = true
                this.parent = $('#J_main');
                this.dfEle = $('#J_new');
                this.hotEle = $('#J_hot');
                this.mineEle = $('#J_mine');
                this.loadEle = $('#J_fullload');
                this.curELe = null;
            },
            routes:{
                '':'list',
                '!list':'list',
                '!list/:listCode/p:page':'list', //商品列表
                '!hot':'hot',
                '!mine':'mine'
            },
            list:function (){

            },
            start:function (){
                backbone.history.start();
            }
        });
    module.exports = router;
});