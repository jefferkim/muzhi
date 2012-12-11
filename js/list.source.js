/**
 * Author: jason_chen(chenwei)
 * Date: 12-12-11
 */
seajs.config({
    //base : 'http://10.12.12.26/base/',
    alias:{
        'zepto':'http://a.tbcdn.cn/mw/base/libs/zepto/1.0.0/zepto',
        'underscore':'http://a.tbcdn.cn/mw/base/libs/underscore/1.3.3/underscore',
        'backbone':'http://a.tbcdn.cn/mw/base/libs/backbone/0.9.2/backbone',
        'notification':'../../../../../base/styles/component/float/js/notification',
        'mu':'http://a.tbcdn.cn/mw/base/libs/mustache/0.5.0/mustache'
    },
    debug:1
});

define(function (require) {
    var $ = require('zepto'),
        linkfocus = require('../../../../base/modules/linkfocus/linkfocus'),
        Utils = require('./utils');
        base = require('./ju-base');
    linkfocus('#J_wrapper a');
//    base.catClickAction();
    Utils.initTab();
    var router = require('./router.js');
    new router().start();
});