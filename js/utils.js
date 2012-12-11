/**
 * Author: jason_chen(chenwei)
 * Date: 12-12-11
 */
define(function(require,exports,module){
    var $=require('zepto');
    var Utils={

        initTab:function (){
            var tab=$('#J_tab'),
            tab_list=$('#J_tab_list');
            tab.find('a').on('click',function (){
                var index=$(this).parent().index();
                console.log(index);
            })
        },
        slideDown:function (){

        },
        slideUp:function (){

        }
    }
    module.exports = Utils
});