define(function(require, exports, module){
    var $ = require('zepto');
    var notification = require('../../../../base/styles/component/float/js/notification');
    var opt = {
        catSel: '#J_downlist',//分类列表选项
        curLi: $('#J_Tab .cur'),
        catName: '#J_Tab .cur small',//当前列表展示
        catShow: $('#J_Tab .cur span'),
        ccss: 'cur', //选择的分类样式
        isClient:$('#J_isClient')
    };
    var _monitor = function(pds){
        $.ajax({
            url: $("#J_MonitorURL").val(), //J_MonitorURL
            type: "get",
            dataType: "jsonp",
            data: {
                t: new Date().getTime(),
                pds: pds
            }
        });
    };
    //分类列表展开
    $.fn.slideDown = function(opts){
        var _self = $(this);
        var op = {
            callback: function(){
            }, //动画结束时的回调函数
            ease: 'ease-in-out', //滑动公式
            anitime: .3 //运动时间
        }
        $.extend(op, opts);

        _self.wrap('<div style="height:0px; overflow:hidden"></div>');
        _self.show();
        var _height = _self.height();
        _self.parent().anim({
            height: _height
        }, op.anitime, op.ease, function(){
            $(this).children().first().unwrap('<div></div>');
            op.callback();
        });
        return this;
    };
    
    //分类列表收起
    $.fn.slideUp = function(opts){
        var self = this;
        var op = {
            callback: function(){
            }, //动画结束时的回调函数
            ease: 'ease-in-out', //滑动公式
            anitime: .0 //运动时间
        }
        $.extend(op, opts);
        
        var _height = $(this).height();
        $(this).wrap('<div style="overflow:hidden"></div>');
        $(this).parent().height(_height).css("overflow", "hidden");
        $(this).parent().anim({
            height: '0'
        }, op.anitime, op.ease, function(){
            $(this).children().hide();
            $(this).children().unwrap('<div></div>');
            op.callback();
        });
        return this;
    };
    var base = {
        selEl: null,
        
        catClickAction: function(){
            if ($(opt.catSel)[0]) {
                //初始化当前选中的分类  
                var that = this,
                    par = $(opt.catSel),
                    hash = location.hash,
                    href,
                    firsthash = hash ? hash.substr(0, hash.lastIndexOf('/') + 3) + '1' : null,
                    firsthash;
                if (!hash) {
                    that.selEl = $(par.find('a')[0]);
                    
                }
                par.find('a').each(function(n, item){
                
                    if (!firsthash) {
                        if ($(item).hasClass(opt.ccss)) {
                            that.selEl = $(item);
                            $(opt.catName).text(that.selEl.text());
                        }
                    }
                    else {
                        href = $(item).attr('href');
                        if (firsthash == href) {
                            that.selEl = $(item);
                            $(opt.catName).text(that.selEl.text());
                        }
                    }
                    
                    
                });
                that.selEl.addClass(opt.ccss);
                
                //初始化分类样式展示3秒钟	
                // timer = setTimeout(function(){					
                //      if (opt.catShow.hasClass('up')) {
                //         opt.catShow.removeClass('up').addClass('down');
                //         par.slideUp();						
                //     }
                // }, 500);
                
                //分类点击展开、收起              
                opt.curLi.click(function(){
                
                    var _self = $(this);
                    _monitor(_self.attr("data-pds"));
                    if (_self.find('.down').length > 0) {
                        _self.find('.down').removeClass('down').addClass('up');
                        par.slideDown();
                    }
                    else 
                        if (_self.find('.up').length > 0) {
                            _self.find('.up').removeClass('up').addClass('down');
                            par.slideUp();
                        }
                })
                //点击分类的操作            
                par.find('a').click(function(){
                    var _self = $(this);
                    if (_self != that.selEl) {
                        _self.addClass(opt.ccss);
                        if (that.selEl && that.selEl.hasClass(opt.ccss)) {
                            that.selEl.removeClass(opt.ccss);
                        }
                        that.selEl = _self;
                        $(opt.catName).text(that.selEl.text());
                    }                   
                    if (opt.catShow.hasClass('up') > 0) {
                        opt.catShow.removeClass('up').addClass('down');
                        par.slideUp();
                    }
                });
            }
            
        },
        floatMsg: function(msg){
            var pop = notification.simple(msg);
            pop.show();
        },
        monitor: function(pds){
            _monitor(pds);
        },
        //分类收起
        catSlideUp: function(){
            if ($(opt.catSel)[0]) {
                var par = $(opt.catSel);
                if (opt.catShow.hasClass('up')) {
                    opt.catShow.removeClass('up').addClass('down');
                    par.slideUp();
                }
            }
        }
    };
    
    return base;
    
    
});
