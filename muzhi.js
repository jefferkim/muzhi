/* Zepto v1.0rc1 - polyfill zepto event detect fx ajax form touch - zeptojs.com/license */

(function(a){String.prototype.trim===a&&(String.prototype.trim=function(){return this.replace(/^\s+/,"").replace(/\s+$/,"")}),Array.prototype.reduce===a&&(Array.prototype.reduce=function(b){if(this===void 0||this===null)throw new TypeError;var c=Object(this),d=c.length>>>0,e=0,f;if(typeof b!="function")throw new TypeError;if(d==0&&arguments.length==1)throw new TypeError;if(arguments.length>=2)f=arguments[1];else do{if(e in c){f=c[e++];break}if(++e>=d)throw new TypeError}while(!0);while(e<d)e in c&&(f=b.call(a,f,c[e],e,c)),e++;return f})})();var Zepto=function(){function A(a){return v.call(a)=="[object Function]"}function B(a){return a instanceof Object}function C(b){var c,d;if(v.call(b)!=="[object Object]")return!1;d=A(b.constructor)&&b.constructor.prototype;if(!d||!hasOwnProperty.call(d,"isPrototypeOf"))return!1;for(c in b);return c===a||hasOwnProperty.call(b,c)}function D(a){return a instanceof Array}function E(a){return typeof a.length=="number"}function F(b){return b.filter(function(b){return b!==a&&b!==null})}function G(a){return a.length>0?[].concat.apply([],a):a}function H(a){return a.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function I(a){return a in i?i[a]:i[a]=new RegExp("(^|\\s)"+a+"(\\s|$)")}function J(a,b){return typeof b=="number"&&!k[H(a)]?b+"px":b}function K(a){var b,c;return h[a]||(b=g.createElement(a),g.body.appendChild(b),c=j(b,"").getPropertyValue("display"),b.parentNode.removeChild(b),c=="none"&&(c="block"),h[a]=c),h[a]}function L(b,d){return d===a?c(b):c(b).filter(d)}function M(a,b,c,d){return A(b)?b.call(a,c,d):b}function N(a,b,d){var e=a%2?b:b.parentNode;e?e.insertBefore(d,a?a==1?e.firstChild:a==2?b:null:b.nextSibling):c(d).remove()}function O(a,b){b(a);for(var c in a.childNodes)O(a.childNodes[c],b)}var a,b,c,d,e=[],f=e.slice,g=window.document,h={},i={},j=g.defaultView.getComputedStyle,k={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},l=/^\s*<(\w+|!)[^>]*>/,m=[1,3,8,9,11],n=["after","prepend","before","append"],o=g.createElement("table"),p=g.createElement("tr"),q={tr:g.createElement("tbody"),tbody:o,thead:o,tfoot:o,td:p,th:p,"*":g.createElement("div")},r=/complete|loaded|interactive/,s=/^\.([\w-]+)$/,t=/^#([\w-]+)$/,u=/^[\w-]+$/,v={}.toString,w={},x,y,z=g.createElement("div");return w.matches=function(a,b){if(!a||a.nodeType!==1)return!1;var c=a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.matchesSelector;if(c)return c.call(a,b);var d,e=a.parentNode,f=!e;return f&&(e=z).appendChild(a),d=~w.qsa(e,b).indexOf(a),f&&z.removeChild(a),d},x=function(a){return a.replace(/-+(.)?/g,function(a,b){return b?b.toUpperCase():""})},y=function(a){return a.filter(function(b,c){return a.indexOf(b)==c})},w.fragment=function(b,d){d===a&&(d=l.test(b)&&RegExp.$1),d in q||(d="*");var e=q[d];return e.innerHTML=""+b,c.each(f.call(e.childNodes),function(){e.removeChild(this)})},w.Z=function(a,b){return a=a||[],a.__proto__=arguments.callee.prototype,a.selector=b||"",a},w.isZ=function(a){return a instanceof w.Z},w.init=function(b,d){if(!b)return w.Z();if(A(b))return c(g).ready(b);if(w.isZ(b))return b;var e;if(D(b))e=F(b);else if(C(b))e=[c.extend({},b)],b=null;else if(m.indexOf(b.nodeType)>=0||b===window)e=[b],b=null;else if(l.test(b))e=w.fragment(b.trim(),RegExp.$1),b=null;else{if(d!==a)return c(d).find(b);e=w.qsa(g,b)}return w.Z(e,b)},c=function(a,b){return w.init(a,b)},c.extend=function(c){return f.call(arguments,1).forEach(function(d){for(b in d)d[b]!==a&&(c[b]=d[b])}),c},w.qsa=function(a,b){var c;return a===g&&t.test(b)?(c=a.getElementById(RegExp.$1))?[c]:e:a.nodeType!==1&&a.nodeType!==9?e:f.call(s.test(b)?a.getElementsByClassName(RegExp.$1):u.test(b)?a.getElementsByTagName(b):a.querySelectorAll(b))},c.isFunction=A,c.isObject=B,c.isArray=D,c.isPlainObject=C,c.inArray=function(a,b,c){return e.indexOf.call(b,a,c)},c.trim=function(a){return a.trim()},c.uuid=0,c.map=function(a,b){var c,d=[],e,f;if(E(a))for(e=0;e<a.length;e++)c=b(a[e],e),c!=null&&d.push(c);else for(f in a)c=b(a[f],f),c!=null&&d.push(c);return G(d)},c.each=function(a,b){var c,d;if(E(a)){for(c=0;c<a.length;c++)if(b.call(a[c],c,a[c])===!1)return a}else for(d in a)if(b.call(a[d],d,a[d])===!1)return a;return a},c.fn={forEach:e.forEach,reduce:e.reduce,push:e.push,indexOf:e.indexOf,concat:e.concat,map:function(a){return c.map(this,function(b,c){return a.call(b,c,b)})},slice:function(){return c(f.apply(this,arguments))},ready:function(a){return r.test(g.readyState)?a(c):g.addEventListener("DOMContentLoaded",function(){a(c)},!1),this},get:function(b){return b===a?f.call(this):this[b]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){this.parentNode!=null&&this.parentNode.removeChild(this)})},each:function(a){return this.forEach(function(b,c){a.call(b,c,b)}),this},filter:function(a){return c([].filter.call(this,function(b){return w.matches(b,a)}))},add:function(a,b){return c(y(this.concat(c(a,b))))},is:function(a){return this.length>0&&w.matches(this[0],a)},not:function(b){var d=[];if(A(b)&&b.call!==a)this.each(function(a){b.call(this,a)||d.push(this)});else{var e=typeof b=="string"?this.filter(b):E(b)&&A(b.item)?f.call(b):c(b);this.forEach(function(a){e.indexOf(a)<0&&d.push(a)})}return c(d)},eq:function(a){return a===-1?this.slice(a):this.slice(a,+a+1)},first:function(){var a=this[0];return a&&!B(a)?a:c(a)},last:function(){var a=this[this.length-1];return a&&!B(a)?a:c(a)},find:function(a){var b;return this.length==1?b=w.qsa(this[0],a):b=this.map(function(){return w.qsa(this,a)}),c(b)},closest:function(a,b){var d=this[0];while(d&&!w.matches(d,a))d=d!==b&&d!==g&&d.parentNode;return c(d)},parents:function(a){var b=[],d=this;while(d.length>0)d=c.map(d,function(a){if((a=a.parentNode)&&a!==g&&b.indexOf(a)<0)return b.push(a),a});return L(b,a)},parent:function(a){return L(y(this.pluck("parentNode")),a)},children:function(a){return L(this.map(function(){return f.call(this.children)}),a)},siblings:function(a){return L(this.map(function(a,b){return f.call(b.parentNode.children).filter(function(a){return a!==b})}),a)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(a){return this.map(function(){return this[a]})},show:function(){return this.each(function(){this.style.display=="none"&&(this.style.display=null),j(this,"").getPropertyValue("display")=="none"&&(this.style.display=K(this.nodeName))})},replaceWith:function(a){return this.before(a).remove()},wrap:function(a){return this.each(function(){c(this).wrapAll(c(a)[0].cloneNode(!1))})},wrapAll:function(a){return this[0]&&(c(this[0]).before(a=c(a)),a.append(this)),this},unwrap:function(){return this.parent().each(function(){c(this).replaceWith(c(this).children())}),this},clone:function(){return c(this.map(function(){return this.cloneNode(!0)}))},hide:function(){return this.css("display","none")},toggle:function(b){return(b===a?this.css("display")=="none":b)?this.show():this.hide()},prev:function(){return c(this.pluck("previousElementSibling"))},next:function(){return c(this.pluck("nextElementSibling"))},html:function(b){return b===a?this.length>0?this[0].innerHTML:null:this.each(function(a){var d=this.innerHTML;c(this).empty().append(M(this,b,a,d))})},text:function(b){return b===a?this.length>0?this[0].textContent:null:this.each(function(){this.textContent=b})},attr:function(c,d){var e;return typeof c=="string"&&d===a?this.length==0||this[0].nodeType!==1?a:c=="value"&&this[0].nodeName=="INPUT"?this.val():!(e=this[0].getAttribute(c))&&c in this[0]?this[0][c]:e:this.each(function(a){if(this.nodeType!==1)return;if(B(c))for(b in c)this.setAttribute(b,c[b]);else this.setAttribute(c,M(this,d,a,this.getAttribute(c)))})},removeAttr:function(a){return this.each(function(){this.nodeType===1&&this.removeAttribute(a)})},prop:function(b,c){return c===a?this[0]?this[0][b]:a:this.each(function(a){this[b]=M(this,c,a,this[b])})},data:function(b,c){var d=this.attr("data-"+H(b),c);return d!==null?d:a},val:function(b){return b===a?this.length>0?this[0].value:a:this.each(function(a){this.value=M(this,b,a,this.value)})},offset:function(){if(this.length==0)return null;var a=this[0].getBoundingClientRect();return{left:a.left+window.pageXOffset,top:a.top+window.pageYOffset,width:a.width,height:a.height}},css:function(c,d){if(d===a&&typeof c=="string")return this.length==0?a:this[0].style[x(c)]||j(this[0],"").getPropertyValue(c);var e="";for(b in c)typeof c[b]=="string"&&c[b]==""?this.each(function(){this.style.removeProperty(H(b))}):e+=H(b)+":"+J(b,c[b])+";";return typeof c=="string"&&(d==""?this.each(function(){this.style.removeProperty(H(c))}):e=H(c)+":"+J(c,d)),this.each(function(){this.style.cssText+=";"+e})},index:function(a){return a?this.indexOf(c(a)[0]):this.parent().children().indexOf(this[0])},hasClass:function(a){return this.length<1?!1:I(a).test(this[0].className)},addClass:function(a){return this.each(function(b){d=[];var e=this.className,f=M(this,a,b,e);f.split(/\s+/g).forEach(function(a){c(this).hasClass(a)||d.push(a)},this),d.length&&(this.className+=(e?" ":"")+d.join(" "))})},removeClass:function(b){return this.each(function(c){if(b===a)return this.className="";d=this.className,M(this,b,c,d).split(/\s+/g).forEach(function(a){d=d.replace(I(a)," ")}),this.className=d.trim()})},toggleClass:function(b,d){return this.each(function(e){var f=M(this,b,e,this.className);(d===a?!c(this).hasClass(f):d)?c(this).addClass(f):c(this).removeClass(f)})}},["width","height"].forEach(function(b){c.fn[b]=function(d){var e,f=b.replace(/./,function(a){return a[0].toUpperCase()});return d===a?this[0]==window?window["inner"+f]:this[0]==g?g.documentElement["offset"+f]:(e=this.offset())&&e[b]:this.each(function(a){var e=c(this);e.css(b,M(this,d,a,e[b]()))})}}),n.forEach(function(a,b){c.fn[a]=function(){var a=c.map(arguments,function(a){return B(a)?a:w.fragment(a)});if(a.length<1)return this;var d=this.length,e=d>1,f=b<2;return this.each(function(c,g){for(var h=0;h<a.length;h++){var i=a[f?a.length-h-1:h];O(i,function(a){a.nodeName!=null&&a.nodeName.toUpperCase()==="SCRIPT"&&(!a.type||a.type==="text/javascript")&&window.eval.call(window,a.innerHTML)}),e&&c<d-1&&(i=i.cloneNode(!0)),N(b,g,i)}})},c.fn[b%2?a+"To":"insert"+(b?"Before":"After")]=function(b){return c(b)[a](this),this}}),w.Z.prototype=c.fn,w.camelize=x,w.uniq=y,c.zepto=w,c}();window.Zepto=Zepto,"$"in window||(window.$=Zepto),function(a){function f(a){return a._zid||(a._zid=d++)}function g(a,b,d,e){b=h(b);if(b.ns)var g=i(b.ns);return(c[f(a)]||[]).filter(function(a){return a&&(!b.e||a.e==b.e)&&(!b.ns||g.test(a.ns))&&(!d||f(a.fn)===f(d))&&(!e||a.sel==e)})}function h(a){var b=(""+a).split(".");return{e:b[0],ns:b.slice(1).sort().join(" ")}}function i(a){return new RegExp("(?:^| )"+a.replace(" "," .* ?")+"(?: |$)")}function j(b,c,d){a.isObject(b)?a.each(b,d):b.split(/\s/).forEach(function(a){d(a,c)})}function k(b,d,e,g,i,k){k=!!k;var l=f(b),m=c[l]||(c[l]=[]);j(d,e,function(c,d){var e=i&&i(d,c),f=e||d,j=function(a){var c=f.apply(b,[a].concat(a.data));return c===!1&&a.preventDefault(),c},l=a.extend(h(c),{fn:d,proxy:j,sel:g,del:e,i:m.length});m.push(l),b.addEventListener(l.e,j,k)})}function l(a,b,d,e){var h=f(a);j(b||"",d,function(b,d){g(a,b,d,e).forEach(function(b){delete c[h][b.i],a.removeEventListener(b.e,b.proxy,!1)})})}function p(b){var c=a.extend({originalEvent:b},b);return a.each(o,function(a,d){c[a]=function(){return this[d]=m,b[a].apply(b,arguments)},c[d]=n}),c}function q(a){if(!("defaultPrevented"in a)){a.defaultPrevented=!1;var b=a.preventDefault;a.preventDefault=function(){this.defaultPrevented=!0,b.call(this)}}}var b=a.zepto.qsa,c={},d=1,e={};e.click=e.mousedown=e.mouseup=e.mousemove="MouseEvents",a.event={add:k,remove:l},a.proxy=function(b,c){if(a.isFunction(b)){var d=function(){return b.apply(c,arguments)};return d._zid=f(b),d}if(typeof c=="string")return a.proxy(b[c],b);throw new TypeError("expected function")},a.fn.bind=function(a,b){return this.each(function(){k(this,a,b)})},a.fn.unbind=function(a,b){return this.each(function(){l(this,a,b)})},a.fn.one=function(a,b){return this.each(function(c,d){k(this,a,b,null,function(a,b){return function(){var c=a.apply(d,arguments);return l(d,b,a),c}})})};var m=function(){return!0},n=function(){return!1},o={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};a.fn.delegate=function(b,c,d){var e=!1;if(c=="blur"||c=="focus")a.iswebkit?c=c=="blur"?"focusout":c=="focus"?"focusin":c:e=!0;return this.each(function(f,g){k(g,c,d,b,function(c){return function(d){var e,f=a(d.target).closest(b,g).get(0);if(f)return e=a.extend(p(d),{currentTarget:f,liveFired:g}),c.apply(f,[e].concat([].slice.call(arguments,1)))}},e)})},a.fn.undelegate=function(a,b,c){return this.each(function(){l(this,b,c,a)})},a.fn.live=function(b,c){return a(document.body).delegate(this.selector,b,c),this},a.fn.die=function(b,c){return a(document.body).undelegate(this.selector,b,c),this},a.fn.on=function(b,c,d){return c==undefined||a.isFunction(c)?this.bind(b,c):this.delegate(c,b,d)},a.fn.off=function(b,c,d){return c==undefined||a.isFunction(c)?this.unbind(b,c):this.undelegate(c,b,d)},a.fn.trigger=function(b,c){return typeof b=="string"&&(b=a.Event(b)),q(b),b.data=c,this.each(function(){"dispatchEvent"in this&&this.dispatchEvent(b)})},a.fn.triggerHandler=function(b,c){var d,e;return this.each(function(f,h){d=p(typeof b=="string"?a.Event(b):b),d.data=c,d.target=h,a.each(g(h,b.type||b),function(a,b){e=b.proxy(d);if(d.isImmediatePropagationStopped())return!1})}),e},"focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout change select keydown keypress keyup error".split(" ").forEach(function(b){a.fn[b]=function(a){return this.bind(b,a)}}),["focus","blur"].forEach(function(b){a.fn[b]=function(a){if(a)this.bind(b,a);else if(this.length)try{this.get(0)[b]()}catch(c){}return this}}),a.Event=function(a,b){var c=document.createEvent(e[a]||"Events"),d=!0;if(b)for(var f in b)f=="bubbles"?d=!!b[f]:c[f]=b[f];return c.initEvent(a,d,!0,null,null,null,null,null,null,null,null,null,null,null,null),c}}(Zepto),function(a){function b(a){var b=this.os={},c=this.browser={},d=a.match(/WebKit\/([\d.]+)/),e=a.match(/(Android)\s+([\d.]+)/),f=a.match(/(iPad).*OS\s([\d_]+)/),g=!f&&a.match(/(iPhone\sOS)\s([\d_]+)/),h=a.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),i=h&&a.match(/TouchPad/),j=a.match(/Kindle\/([\d.]+)/),k=a.match(/Silk\/([\d._]+)/),l=a.match(/(BlackBerry).*Version\/([\d.]+)/);if(c.webkit=!!d)c.version=d[1];e&&(b.android=!0,b.version=e[2]),g&&(b.ios=b.iphone=!0,b.version=g[2].replace(/_/g,".")),f&&(b.ios=b.ipad=!0,b.version=f[2].replace(/_/g,".")),h&&(b.webos=!0,b.version=h[2]),i&&(b.touchpad=!0),l&&(b.blackberry=!0,b.version=l[2]),j&&(b.kindle=!0,b.version=j[1]),k&&(c.silk=!0,c.version=k[1]),!k&&b.android&&a.match(/Kindle Fire/)&&(c.silk=!0)}b.call(a,navigator.userAgent),a.__detect=b}(Zepto),function(a,b){function l(a){return a.toLowerCase()}function m(a){return d?d+a:l(a)}var c="",d,e,f,g={Webkit:"webkit",Moz:"",O:"o",ms:"MS"},h=window.document,i=h.createElement("div"),j=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,k={};a.each(g,function(a,e){if(i.style[a+"TransitionProperty"]!==b)return c="-"+l(a)+"-",d=e,!1}),k[c+"transition-property"]=k[c+"transition-duration"]=k[c+"transition-timing-function"]=k[c+"animation-name"]=k[c+"animation-duration"]="",a.fx={off:d===b&&i.style.transitionProperty===b,cssPrefix:c,transitionEnd:m("TransitionEnd"),animationEnd:m("AnimationEnd")},a.fn.animate=function(b,c,d,e){return a.isObject(c)&&(d=c.easing,e=c.complete,c=c.duration),c&&(c/=1e3),this.anim(b,c,d,e)},a.fn.anim=function(d,e,f,g){var h,i={},l,m=this,n,o=a.fx.transitionEnd;e===b&&(e=.4),a.fx.off&&(e=0);if(typeof d=="string")i[c+"animation-name"]=d,i[c+"animation-duration"]=e+"s",o=a.fx.animationEnd;else{for(l in d)j.test(l)?(h||(h=[]),h.push(l+"("+d[l]+")")):i[l]=d[l];h&&(i[c+"transform"]=h.join(" ")),!a.fx.off&&typeof d=="object"&&(i[c+"transition-property"]=Object.keys(d).join(", "),i[c+"transition-duration"]=e+"s",i[c+"transition-timing-function"]=f||"linear")}return n=function(b){if(typeof b!="undefined"){if(b.target!==b.currentTarget)return;a(b.target).unbind(o,arguments.callee)}a(this).css(k),g&&g.call(this)},e>0&&this.bind(o,n),setTimeout(function(){m.css(i),e<=0&&setTimeout(function(){m.each(function(){n.call(this)})},0)},0),this},i=null}(Zepto),function($){function triggerAndReturn(a,b,c){var d=$.Event(b);return $(a).trigger(d,c),!d.defaultPrevented}function triggerGlobal(a,b,c,d){if(a.global)return triggerAndReturn(b||document,c,d)}function ajaxStart(a){a.global&&$.active++===0&&triggerGlobal(a,null,"ajaxStart")}function ajaxStop(a){a.global&&!--$.active&&triggerGlobal(a,null,"ajaxStop")}function ajaxBeforeSend(a,b){var c=b.context;if(b.beforeSend.call(c,a,b)===!1||triggerGlobal(b,c,"ajaxBeforeSend",[a,b])===!1)return!1;triggerGlobal(b,c,"ajaxSend",[a,b])}function ajaxSuccess(a,b,c){var d=c.context,e="success";c.success.call(d,a,e,b),triggerGlobal(c,d,"ajaxSuccess",[b,c,a]),ajaxComplete(e,b,c)}function ajaxError(a,b,c,d){var e=d.context;d.error.call(e,c,b,a),triggerGlobal(d,e,"ajaxError",[c,d,a]),ajaxComplete(b,c,d)}function ajaxComplete(a,b,c){var d=c.context;c.complete.call(d,b,a),triggerGlobal(c,d,"ajaxComplete",[b,c]),ajaxStop(c)}function empty(){}function mimeToDataType(a){return a&&(a==htmlType?"html":a==jsonType?"json":scriptTypeRE.test(a)?"script":xmlTypeRE.test(a)&&"xml")||"text"}function appendQuery(a,b){return(a+"&"+b).replace(/[&?]{1,2}/,"?")}function serializeData(a){isObject(a.data)&&(a.data=$.param(a.data)),a.data&&(!a.type||a.type.toUpperCase()=="GET")&&(a.url=appendQuery(a.url,a.data))}function serialize(a,b,c,d){var e=$.isArray(b);$.each(b,function(b,f){d&&(b=c?d:d+"["+(e?"":b)+"]"),!d&&e?a.add(f.name,f.value):(c?$.isArray(f):isObject(f))?serialize(a,f,c,b):a.add(b,f)})}var jsonpID=0,isObject=$.isObject,document=window.document,key,name,rscript=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,scriptTypeRE=/^(?:text|application)\/javascript/i,xmlTypeRE=/^(?:text|application)\/xml/i,jsonType="application/json",htmlType="text/html",blankRE=/^\s*$/;$.active=0,$.ajaxJSONP=function(a){var b="jsonp"+ ++jsonpID,c=document.createElement("script"),d=function(){$(c).remove(),b in window&&(window[b]=empty),ajaxComplete("abort",e,a)},e={abort:d},f;return a.error&&(c.onerror=function(){e.abort(),a.error()}),window[b]=function(d){clearTimeout(f),$(c).remove(),delete window[b],ajaxSuccess(d,e,a)},serializeData(a),c.src=a.url.replace(/=\?/,"="+b),$("head").append(c),a.timeout>0&&(f=setTimeout(function(){e.abort(),ajaxComplete("timeout",e,a)},a.timeout)),e},$.ajaxSettings={type:"GET",beforeSend:empty,success:empty,error:empty,complete:empty,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript",json:jsonType,xml:"application/xml, text/xml",html:htmlType,text:"text/plain"},crossDomain:!1,timeout:0},$.ajax=function(options){var settings=$.extend({},options||{});for(key in $.ajaxSettings)settings[key]===undefined&&(settings[key]=$.ajaxSettings[key]);ajaxStart(settings),settings.crossDomain||(settings.crossDomain=/^([\w-]+:)?\/\/([^\/]+)/.test(settings.url)&&RegExp.$2!=window.location.host);var dataType=settings.dataType,hasPlaceholder=/=\?/.test(settings.url);if(dataType=="jsonp"||hasPlaceholder)return hasPlaceholder||(settings.url=appendQuery(settings.url,"callback=?")),$.ajaxJSONP(settings);settings.url||(settings.url=window.location.toString()),serializeData(settings);var mime=settings.accepts[dataType],baseHeaders={},protocol=/^([\w-]+:)\/\//.test(settings.url)?RegExp.$1:window.location.protocol,xhr=$.ajaxSettings.xhr(),abortTimeout;settings.crossDomain||(baseHeaders["X-Requested-With"]="XMLHttpRequest"),mime&&(baseHeaders.Accept=mime,mime.indexOf(",")>-1&&(mime=mime.split(",",2)[0]),xhr.overrideMimeType&&xhr.overrideMimeType(mime));if(settings.contentType||settings.data&&settings.type.toUpperCase()!="GET")baseHeaders["Content-Type"]=settings.contentType||"application/x-www-form-urlencoded";settings.headers=$.extend(baseHeaders,settings.headers||{}),xhr.onreadystatechange=function(){if(xhr.readyState==4){clearTimeout(abortTimeout);var result,error=!1;if(xhr.status>=200&&xhr.status<300||xhr.status==304||xhr.status==0&&protocol=="file:"){dataType=dataType||mimeToDataType(xhr.getResponseHeader("content-type")),result=xhr.responseText;try{dataType=="script"?(1,eval)(result):dataType=="xml"?result=xhr.responseXML:dataType=="json"&&(result=blankRE.test(result)?null:JSON.parse(result))}catch(e){error=e}error?ajaxError(error,"parsererror",xhr,settings):ajaxSuccess(result,xhr,settings)}else ajaxError(null,"error",xhr,settings)}};var async="async"in settings?settings.async:!0;xhr.open(settings.type,settings.url,async);for(name in settings.headers)xhr.setRequestHeader(name,settings.headers[name]);return ajaxBeforeSend(xhr,settings)===!1?(xhr.abort(),!1):(settings.timeout>0&&(abortTimeout=setTimeout(function(){xhr.onreadystatechange=empty,xhr.abort(),ajaxError(null,"timeout",xhr,settings)},settings.timeout)),xhr.send(settings.data?settings.data:null),xhr)},$.get=function(a,b){return $.ajax({url:a,success:b})},$.post=function(a,b,c,d){return $.isFunction(b)&&(d=d||c,c=b,b=null),$.ajax({type:"POST",url:a,data:b,success:c,dataType:d})},$.getJSON=function(a,b){return $.ajax({url:a,success:b,dataType:"json"})},$.fn.load=function(a,b){if(!this.length)return this;var c=this,d=a.split(/\s/),e;return d.length>1&&(a=d[0],e=d[1]),$.get(a,function(a){c.html(e?$(document.createElement("div")).html(a.replace(rscript,"")).find(e).html():a),b&&b.call(c)}),this};var escape=encodeURIComponent;$.param=function(a,b){var c=[];return c.add=function(a,b){this.push(escape(a)+"="+escape(b))},serialize(c,a,b),c.join("&").replace("%20","+")}}(Zepto),function(a){a.fn.serializeArray=function(){var b=[],c;return a(Array.prototype.slice.call(this.get(0).elements)).each(function(){c=a(this);var d=c.attr("type");this.nodeName.toLowerCase()!="fieldset"&&!this.disabled&&d!="submit"&&d!="reset"&&d!="button"&&(d!="radio"&&d!="checkbox"||this.checked)&&b.push({name:c.attr("name"),value:c.val()})}),b},a.fn.serialize=function(){var a=[];return this.serializeArray().forEach(function(b){a.push(encodeURIComponent(b.name)+"="+encodeURIComponent(b.value))}),a.join("&")},a.fn.submit=function(b){if(b)this.bind("submit",b);else if(this.length){var c=a.Event("submit");this.eq(0).trigger(c),c.defaultPrevented||this.get(0).submit()}return this}}(Zepto),function(a){function d(a){return"tagName"in a?a:a.parentNode}function e(a,b,c,d){var e=Math.abs(a-b),f=Math.abs(c-d);return e>=f?a-b>0?"Left":"Right":c-d>0?"Up":"Down"}function h(){g=null,b.last&&(b.el.trigger("longTap"),b={})}function i(){g&&clearTimeout(g),g=null}var b={},c,f=750,g;a(document).ready(function(){var j,k;a(document.body).bind("touchstart",function(e){j=Date.now(),k=j-(b.last||j),b.el=a(d(e.touches[0].target)),c&&clearTimeout(c),b.x1=e.touches[0].pageX,b.y1=e.touches[0].pageY,k>0&&k<=250&&(b.isDoubleTap=!0),b.last=j,g=setTimeout(h,f)}).bind("touchmove",function(a){i(),b.x2=a.touches[0].pageX,b.y2=a.touches[0].pageY}).bind("touchend",function(a){i(),b.isDoubleTap?(b.el.trigger("doubleTap"),b={}):b.x2&&Math.abs(b.x1-b.x2)>30||b.y2&&Math.abs(b.y1-b.y2)>30?(b.el.trigger("swipe")&&b.el.trigger("swipe"+e(b.x1,b.x2,b.y1,b.y2)),b={}):"last"in b&&(b.el.trigger("tap"),c=setTimeout(function(){c=null,b.el.trigger("singleTap"),b={}},250))}).bind("touchcancel",function(){c&&clearTimeout(c),g&&clearTimeout(g),g=c=null,b={}})}),["swipe","swipeLeft","swipeRight","swipeUp","swipeDown","doubleTap","tap","singleTap","longTap"].forEach(function(b){a.fn[b]=function(a){return this.bind(b,a)}})}(Zepto);
//     Underscore.js 1.4.2
//     http://underscorejs.org
//     (c) 2009-2012 Jeremy Ashkenas, DocumentCloud Inc.
//     Underscore may be freely distributed under the MIT license.

(function() {

  // Baseline setup
  // --------------

  // Establish the root object, `window` in the browser, or `global` on the server.
  var root = this;

  // Save the previous value of the `_` variable.
  var previousUnderscore = root._;

  // Establish the object that gets returned to break out of a loop iteration.
  var breaker = {};

  // Save bytes in the minified (but not gzipped) version:
  var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;

  // Create quick reference variables for speed access to core prototypes.
  var push             = ArrayProto.push,
      slice            = ArrayProto.slice,
      concat           = ArrayProto.concat,
      unshift          = ArrayProto.unshift,
      toString         = ObjProto.toString,
      hasOwnProperty   = ObjProto.hasOwnProperty;

  // All **ECMAScript 5** native function implementations that we hope to use
  // are declared here.
  var
    nativeForEach      = ArrayProto.forEach,
    nativeMap          = ArrayProto.map,
    nativeReduce       = ArrayProto.reduce,
    nativeReduceRight  = ArrayProto.reduceRight,
    nativeFilter       = ArrayProto.filter,
    nativeEvery        = ArrayProto.every,
    nativeSome         = ArrayProto.some,
    nativeIndexOf      = ArrayProto.indexOf,
    nativeLastIndexOf  = ArrayProto.lastIndexOf,
    nativeIsArray      = Array.isArray,
    nativeKeys         = Object.keys,
    nativeBind         = FuncProto.bind;

  // Create a safe reference to the Underscore object for use below.
  var _ = function(obj) {
    if (obj instanceof _) return obj;
    if (!(this instanceof _)) return new _(obj);
    this._wrapped = obj;
  };

  // Export the Underscore object for **Node.js**, with
  // backwards-compatibility for the old `require()` API. If we're in
  // the browser, add `_` as a global object via a string identifier,
  // for Closure Compiler "advanced" mode.
  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = _;
    }
    exports._ = _;
  } else {
    root['_'] = _;
  }

  // Current version.
  _.VERSION = '1.4.2';

  // Collection Functions
  // --------------------

  // The cornerstone, an `each` implementation, aka `forEach`.
  // Handles objects with the built-in `forEach`, arrays, and raw objects.
  // Delegates to **ECMAScript 5**'s native `forEach` if available.
  var each = _.each = _.forEach = function(obj, iterator, context) {
    if (obj == null) return;
    if (nativeForEach && obj.forEach === nativeForEach) {
      obj.forEach(iterator, context);
    } else if (obj.length === +obj.length) {
      for (var i = 0, l = obj.length; i < l; i++) {
        if (iterator.call(context, obj[i], i, obj) === breaker) return;
      }
    } else {
      for (var key in obj) {
        if (_.has(obj, key)) {
          if (iterator.call(context, obj[key], key, obj) === breaker) return;
        }
      }
    }
  };

  // Return the results of applying the iterator to each element.
  // Delegates to **ECMAScript 5**'s native `map` if available.
  _.map = _.collect = function(obj, iterator, context) {
    var results = [];
    if (obj == null) return results;
    if (nativeMap && obj.map === nativeMap) return obj.map(iterator, context);
    each(obj, function(value, index, list) {
      results[results.length] = iterator.call(context, value, index, list);
    });
    return results;
  };

  // **Reduce** builds up a single result from a list of values, aka `inject`,
  // or `foldl`. Delegates to **ECMAScript 5**'s native `reduce` if available.
  _.reduce = _.foldl = _.inject = function(obj, iterator, memo, context) {
    var initial = arguments.length > 2;
    if (obj == null) obj = [];
    if (nativeReduce && obj.reduce === nativeReduce) {
      if (context) iterator = _.bind(iterator, context);
      return initial ? obj.reduce(iterator, memo) : obj.reduce(iterator);
    }
    each(obj, function(value, index, list) {
      if (!initial) {
        memo = value;
        initial = true;
      } else {
        memo = iterator.call(context, memo, value, index, list);
      }
    });
    if (!initial) throw new TypeError('Reduce of empty array with no initial value');
    return memo;
  };

  // The right-associative version of reduce, also known as `foldr`.
  // Delegates to **ECMAScript 5**'s native `reduceRight` if available.
  _.reduceRight = _.foldr = function(obj, iterator, memo, context) {
    var initial = arguments.length > 2;
    if (obj == null) obj = [];
    if (nativeReduceRight && obj.reduceRight === nativeReduceRight) {
      if (context) iterator = _.bind(iterator, context);
      return arguments.length > 2 ? obj.reduceRight(iterator, memo) : obj.reduceRight(iterator);
    }
    var length = obj.length;
    if (length !== +length) {
      var keys = _.keys(obj);
      length = keys.length;
    }
    each(obj, function(value, index, list) {
      index = keys ? keys[--length] : --length;
      if (!initial) {
        memo = obj[index];
        initial = true;
      } else {
        memo = iterator.call(context, memo, obj[index], index, list);
      }
    });
    if (!initial) throw new TypeError('Reduce of empty array with no initial value');
    return memo;
  };

  // Return the first value which passes a truth test. Aliased as `detect`.
  _.find = _.detect = function(obj, iterator, context) {
    var result;
    any(obj, function(value, index, list) {
      if (iterator.call(context, value, index, list)) {
        result = value;
        return true;
      }
    });
    return result;
  };

  // Return all the elements that pass a truth test.
  // Delegates to **ECMAScript 5**'s native `filter` if available.
  // Aliased as `select`.
  _.filter = _.select = function(obj, iterator, context) {
    var results = [];
    if (obj == null) return results;
    if (nativeFilter && obj.filter === nativeFilter) return obj.filter(iterator, context);
    each(obj, function(value, index, list) {
      if (iterator.call(context, value, index, list)) results[results.length] = value;
    });
    return results;
  };

  // Return all the elements for which a truth test fails.
  _.reject = function(obj, iterator, context) {
    var results = [];
    if (obj == null) return results;
    each(obj, function(value, index, list) {
      if (!iterator.call(context, value, index, list)) results[results.length] = value;
    });
    return results;
  };

  // Determine whether all of the elements match a truth test.
  // Delegates to **ECMAScript 5**'s native `every` if available.
  // Aliased as `all`.
  _.every = _.all = function(obj, iterator, context) {
    iterator || (iterator = _.identity);
    var result = true;
    if (obj == null) return result;
    if (nativeEvery && obj.every === nativeEvery) return obj.every(iterator, context);
    each(obj, function(value, index, list) {
      if (!(result = result && iterator.call(context, value, index, list))) return breaker;
    });
    return !!result;
  };

  // Determine if at least one element in the object matches a truth test.
  // Delegates to **ECMAScript 5**'s native `some` if available.
  // Aliased as `any`.
  var any = _.some = _.any = function(obj, iterator, context) {
    iterator || (iterator = _.identity);
    var result = false;
    if (obj == null) return result;
    if (nativeSome && obj.some === nativeSome) return obj.some(iterator, context);
    each(obj, function(value, index, list) {
      if (result || (result = iterator.call(context, value, index, list))) return breaker;
    });
    return !!result;
  };

  // Determine if the array or object contains a given value (using `===`).
  // Aliased as `include`.
  _.contains = _.include = function(obj, target) {
    var found = false;
    if (obj == null) return found;
    if (nativeIndexOf && obj.indexOf === nativeIndexOf) return obj.indexOf(target) != -1;
    found = any(obj, function(value) {
      return value === target;
    });
    return found;
  };

  // Invoke a method (with arguments) on every item in a collection.
  _.invoke = function(obj, method) {
    var args = slice.call(arguments, 2);
    return _.map(obj, function(value) {
      return (_.isFunction(method) ? method : value[method]).apply(value, args);
    });
  };

  // Convenience version of a common use case of `map`: fetching a property.
  _.pluck = function(obj, key) {
    return _.map(obj, function(value){ return value[key]; });
  };

  // Convenience version of a common use case of `filter`: selecting only objects
  // with specific `key:value` pairs.
  _.where = function(obj, attrs) {
    if (_.isEmpty(attrs)) return [];
    return _.filter(obj, function(value) {
      for (var key in attrs) {
        if (attrs[key] !== value[key]) return false;
      }
      return true;
    });
  };

  // Return the maximum element or (element-based computation).
  // Can't optimize arrays of integers longer than 65,535 elements.
  // See: https://bugs.webkit.org/show_bug.cgi?id=80797
  _.max = function(obj, iterator, context) {
    if (!iterator && _.isArray(obj) && obj[0] === +obj[0] && obj.length < 65535) {
      return Math.max.apply(Math, obj);
    }
    if (!iterator && _.isEmpty(obj)) return -Infinity;
    var result = {computed : -Infinity};
    each(obj, function(value, index, list) {
      var computed = iterator ? iterator.call(context, value, index, list) : value;
      computed >= result.computed && (result = {value : value, computed : computed});
    });
    return result.value;
  };

  // Return the minimum element (or element-based computation).
  _.min = function(obj, iterator, context) {
    if (!iterator && _.isArray(obj) && obj[0] === +obj[0] && obj.length < 65535) {
      return Math.min.apply(Math, obj);
    }
    if (!iterator && _.isEmpty(obj)) return Infinity;
    var result = {computed : Infinity};
    each(obj, function(value, index, list) {
      var computed = iterator ? iterator.call(context, value, index, list) : value;
      computed < result.computed && (result = {value : value, computed : computed});
    });
    return result.value;
  };

  // Shuffle an array.
  _.shuffle = function(obj) {
    var rand;
    var index = 0;
    var shuffled = [];
    each(obj, function(value) {
      rand = _.random(index++);
      shuffled[index - 1] = shuffled[rand];
      shuffled[rand] = value;
    });
    return shuffled;
  };

  // An internal function to generate lookup iterators.
  var lookupIterator = function(value) {
    return _.isFunction(value) ? value : function(obj){ return obj[value]; };
  };

  // Sort the object's values by a criterion produced by an iterator.
  _.sortBy = function(obj, value, context) {
    var iterator = lookupIterator(value);
    return _.pluck(_.map(obj, function(value, index, list) {
      return {
        value : value,
        index : index,
        criteria : iterator.call(context, value, index, list)
      };
    }).sort(function(left, right) {
      var a = left.criteria;
      var b = right.criteria;
      if (a !== b) {
        if (a > b || a === void 0) return 1;
        if (a < b || b === void 0) return -1;
      }
      return left.index < right.index ? -1 : 1;
    }), 'value');
  };

  // An internal function used for aggregate "group by" operations.
  var group = function(obj, value, context, behavior) {
    var result = {};
    var iterator = lookupIterator(value);
    each(obj, function(value, index) {
      var key = iterator.call(context, value, index, obj);
      behavior(result, key, value);
    });
    return result;
  };

  // Groups the object's values by a criterion. Pass either a string attribute
  // to group by, or a function that returns the criterion.
  _.groupBy = function(obj, value, context) {
    return group(obj, value, context, function(result, key, value) {
      (_.has(result, key) ? result[key] : (result[key] = [])).push(value);
    });
  };

  // Counts instances of an object that group by a certain criterion. Pass
  // either a string attribute to count by, or a function that returns the
  // criterion.
  _.countBy = function(obj, value, context) {
    return group(obj, value, context, function(result, key, value) {
      if (!_.has(result, key)) result[key] = 0;
      result[key]++;
    });
  };

  // Use a comparator function to figure out the smallest index at which
  // an object should be inserted so as to maintain order. Uses binary search.
  _.sortedIndex = function(array, obj, iterator, context) {
    iterator = iterator == null ? _.identity : lookupIterator(iterator);
    var value = iterator.call(context, obj);
    var low = 0, high = array.length;
    while (low < high) {
      var mid = (low + high) >>> 1;
      iterator.call(context, array[mid]) < value ? low = mid + 1 : high = mid;
    }
    return low;
  };

  // Safely convert anything iterable into a real, live array.
  _.toArray = function(obj) {
    if (!obj) return [];
    if (obj.length === +obj.length) return slice.call(obj);
    return _.values(obj);
  };

  // Return the number of elements in an object.
  _.size = function(obj) {
    return (obj.length === +obj.length) ? obj.length : _.keys(obj).length;
  };

  // Array Functions
  // ---------------

  // Get the first element of an array. Passing **n** will return the first N
  // values in the array. Aliased as `head` and `take`. The **guard** check
  // allows it to work with `_.map`.
  _.first = _.head = _.take = function(array, n, guard) {
    return (n != null) && !guard ? slice.call(array, 0, n) : array[0];
  };

  // Returns everything but the last entry of the array. Especially useful on
  // the arguments object. Passing **n** will return all the values in
  // the array, excluding the last N. The **guard** check allows it to work with
  // `_.map`.
  _.initial = function(array, n, guard) {
    return slice.call(array, 0, array.length - ((n == null) || guard ? 1 : n));
  };

  // Get the last element of an array. Passing **n** will return the last N
  // values in the array. The **guard** check allows it to work with `_.map`.
  _.last = function(array, n, guard) {
    if ((n != null) && !guard) {
      return slice.call(array, Math.max(array.length - n, 0));
    } else {
      return array[array.length - 1];
    }
  };

  // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
  // Especially useful on the arguments object. Passing an **n** will return
  // the rest N values in the array. The **guard**
  // check allows it to work with `_.map`.
  _.rest = _.tail = _.drop = function(array, n, guard) {
    return slice.call(array, (n == null) || guard ? 1 : n);
  };

  // Trim out all falsy values from an array.
  _.compact = function(array) {
    return _.filter(array, function(value){ return !!value; });
  };

  // Internal implementation of a recursive `flatten` function.
  var flatten = function(input, shallow, output) {
    each(input, function(value) {
      if (_.isArray(value)) {
        shallow ? push.apply(output, value) : flatten(value, shallow, output);
      } else {
        output.push(value);
      }
    });
    return output;
  };

  // Return a completely flattened version of an array.
  _.flatten = function(array, shallow) {
    return flatten(array, shallow, []);
  };

  // Return a version of the array that does not contain the specified value(s).
  _.without = function(array) {
    return _.difference(array, slice.call(arguments, 1));
  };

  // Produce a duplicate-free version of the array. If the array has already
  // been sorted, you have the option of using a faster algorithm.
  // Aliased as `unique`.
  _.uniq = _.unique = function(array, isSorted, iterator, context) {
    var initial = iterator ? _.map(array, iterator, context) : array;
    var results = [];
    var seen = [];
    each(initial, function(value, index) {
      if (isSorted ? (!index || seen[seen.length - 1] !== value) : !_.contains(seen, value)) {
        seen.push(value);
        results.push(array[index]);
      }
    });
    return results;
  };

  // Produce an array that contains the union: each distinct element from all of
  // the passed-in arrays.
  _.union = function() {
    return _.uniq(concat.apply(ArrayProto, arguments));
  };

  // Produce an array that contains every item shared between all the
  // passed-in arrays.
  _.intersection = function(array) {
    var rest = slice.call(arguments, 1);
    return _.filter(_.uniq(array), function(item) {
      return _.every(rest, function(other) {
        return _.indexOf(other, item) >= 0;
      });
    });
  };

  // Take the difference between one array and a number of other arrays.
  // Only the elements present in just the first array will remain.
  _.difference = function(array) {
    var rest = concat.apply(ArrayProto, slice.call(arguments, 1));
    return _.filter(array, function(value){ return !_.contains(rest, value); });
  };

  // Zip together multiple lists into a single array -- elements that share
  // an index go together.
  _.zip = function() {
    var args = slice.call(arguments);
    var length = _.max(_.pluck(args, 'length'));
    var results = new Array(length);
    for (var i = 0; i < length; i++) {
      results[i] = _.pluck(args, "" + i);
    }
    return results;
  };

  // Converts lists into objects. Pass either a single array of `[key, value]`
  // pairs, or two parallel arrays of the same length -- one of keys, and one of
  // the corresponding values.
  _.object = function(list, values) {
    var result = {};
    for (var i = 0, l = list.length; i < l; i++) {
      if (values) {
        result[list[i]] = values[i];
      } else {
        result[list[i][0]] = list[i][1];
      }
    }
    return result;
  };

  // If the browser doesn't supply us with indexOf (I'm looking at you, **MSIE**),
  // we need this function. Return the position of the first occurrence of an
  // item in an array, or -1 if the item is not included in the array.
  // Delegates to **ECMAScript 5**'s native `indexOf` if available.
  // If the array is large and already in sort order, pass `true`
  // for **isSorted** to use binary search.
  _.indexOf = function(array, item, isSorted) {
    if (array == null) return -1;
    var i = 0, l = array.length;
    if (isSorted) {
      if (typeof isSorted == 'number') {
        i = (isSorted < 0 ? Math.max(0, l + isSorted) : isSorted);
      } else {
        i = _.sortedIndex(array, item);
        return array[i] === item ? i : -1;
      }
    }
    if (nativeIndexOf && array.indexOf === nativeIndexOf) return array.indexOf(item, isSorted);
    for (; i < l; i++) if (array[i] === item) return i;
    return -1;
  };

  // Delegates to **ECMAScript 5**'s native `lastIndexOf` if available.
  _.lastIndexOf = function(array, item, from) {
    if (array == null) return -1;
    var hasIndex = from != null;
    if (nativeLastIndexOf && array.lastIndexOf === nativeLastIndexOf) {
      return hasIndex ? array.lastIndexOf(item, from) : array.lastIndexOf(item);
    }
    var i = (hasIndex ? from : array.length);
    while (i--) if (array[i] === item) return i;
    return -1;
  };

  // Generate an integer Array containing an arithmetic progression. A port of
  // the native Python `range()` function. See
  // [the Python documentation](http://docs.python.org/library/functions.html#range).
  _.range = function(start, stop, step) {
    if (arguments.length <= 1) {
      stop = start || 0;
      start = 0;
    }
    step = arguments[2] || 1;

    var len = Math.max(Math.ceil((stop - start) / step), 0);
    var idx = 0;
    var range = new Array(len);

    while(idx < len) {
      range[idx++] = start;
      start += step;
    }

    return range;
  };

  // Function (ahem) Functions
  // ------------------

  // Reusable constructor function for prototype setting.
  var ctor = function(){};

  // Create a function bound to a given object (assigning `this`, and arguments,
  // optionally). Binding with arguments is also known as `curry`.
  // Delegates to **ECMAScript 5**'s native `Function.bind` if available.
  // We check for `func.bind` first, to fail fast when `func` is undefined.
  _.bind = function bind(func, context) {
    var bound, args;
    if (func.bind === nativeBind && nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
    if (!_.isFunction(func)) throw new TypeError;
    args = slice.call(arguments, 2);
    return bound = function() {
      if (!(this instanceof bound)) return func.apply(context, args.concat(slice.call(arguments)));
      ctor.prototype = func.prototype;
      var self = new ctor;
      var result = func.apply(self, args.concat(slice.call(arguments)));
      if (Object(result) === result) return result;
      return self;
    };
  };

  // Bind all of an object's methods to that object. Useful for ensuring that
  // all callbacks defined on an object belong to it.
  _.bindAll = function(obj) {
    var funcs = slice.call(arguments, 1);
    if (funcs.length == 0) funcs = _.functions(obj);
    each(funcs, function(f) { obj[f] = _.bind(obj[f], obj); });
    return obj;
  };

  // Memoize an expensive function by storing its results.
  _.memoize = function(func, hasher) {
    var memo = {};
    hasher || (hasher = _.identity);
    return function() {
      var key = hasher.apply(this, arguments);
      return _.has(memo, key) ? memo[key] : (memo[key] = func.apply(this, arguments));
    };
  };

  // Delays a function for the given number of milliseconds, and then calls
  // it with the arguments supplied.
  _.delay = function(func, wait) {
    var args = slice.call(arguments, 2);
    return setTimeout(function(){ return func.apply(null, args); }, wait);
  };

  // Defers a function, scheduling it to run after the current call stack has
  // cleared.
  _.defer = function(func) {
    return _.delay.apply(_, [func, 1].concat(slice.call(arguments, 1)));
  };

  // Returns a function, that, when invoked, will only be triggered at most once
  // during a given window of time.
  _.throttle = function(func, wait) {
    var context, args, timeout, throttling, more, result;
    var whenDone = _.debounce(function(){ more = throttling = false; }, wait);
    return function() {
      context = this; args = arguments;
      var later = function() {
        timeout = null;
        if (more) {
          result = func.apply(context, args);
        }
        whenDone();
      };
      if (!timeout) timeout = setTimeout(later, wait);
      if (throttling) {
        more = true;
      } else {
        throttling = true;
        result = func.apply(context, args);
      }
      whenDone();
      return result;
    };
  };

  // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds. If `immediate` is passed, trigger the function on the
  // leading edge, instead of the trailing.
  _.debounce = function(func, wait, immediate) {
    var timeout, result;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) result = func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) result = func.apply(context, args);
      return result;
    };
  };

  // Returns a function that will be executed at most one time, no matter how
  // often you call it. Useful for lazy initialization.
  _.once = function(func) {
    var ran = false, memo;
    return function() {
      if (ran) return memo;
      ran = true;
      memo = func.apply(this, arguments);
      func = null;
      return memo;
    };
  };

  // Returns the first function passed as an argument to the second,
  // allowing you to adjust arguments, run code before and after, and
  // conditionally execute the original function.
  _.wrap = function(func, wrapper) {
    return function() {
      var args = [func];
      push.apply(args, arguments);
      return wrapper.apply(this, args);
    };
  };

  // Returns a function that is the composition of a list of functions, each
  // consuming the return value of the function that follows.
  _.compose = function() {
    var funcs = arguments;
    return function() {
      var args = arguments;
      for (var i = funcs.length - 1; i >= 0; i--) {
        args = [funcs[i].apply(this, args)];
      }
      return args[0];
    };
  };

  // Returns a function that will only be executed after being called N times.
  _.after = function(times, func) {
    if (times <= 0) return func();
    return function() {
      if (--times < 1) {
        return func.apply(this, arguments);
      }
    };
  };

  // Object Functions
  // ----------------

  // Retrieve the names of an object's properties.
  // Delegates to **ECMAScript 5**'s native `Object.keys`
  _.keys = nativeKeys || function(obj) {
    if (obj !== Object(obj)) throw new TypeError('Invalid object');
    var keys = [];
    for (var key in obj) if (_.has(obj, key)) keys[keys.length] = key;
    return keys;
  };

  // Retrieve the values of an object's properties.
  _.values = function(obj) {
    var values = [];
    for (var key in obj) if (_.has(obj, key)) values.push(obj[key]);
    return values;
  };

  // Convert an object into a list of `[key, value]` pairs.
  _.pairs = function(obj) {
    var pairs = [];
    for (var key in obj) if (_.has(obj, key)) pairs.push([key, obj[key]]);
    return pairs;
  };

  // Invert the keys and values of an object. The values must be serializable.
  _.invert = function(obj) {
    var result = {};
    for (var key in obj) if (_.has(obj, key)) result[obj[key]] = key;
    return result;
  };

  // Return a sorted list of the function names available on the object.
  // Aliased as `methods`
  _.functions = _.methods = function(obj) {
    var names = [];
    for (var key in obj) {
      if (_.isFunction(obj[key])) names.push(key);
    }
    return names.sort();
  };

  // Extend a given object with all the properties in passed-in object(s).
  _.extend = function(obj) {
    each(slice.call(arguments, 1), function(source) {
      for (var prop in source) {
        obj[prop] = source[prop];
      }
    });
    return obj;
  };

  // Return a copy of the object only containing the whitelisted properties.
  _.pick = function(obj) {
    var copy = {};
    var keys = concat.apply(ArrayProto, slice.call(arguments, 1));
    each(keys, function(key) {
      if (key in obj) copy[key] = obj[key];
    });
    return copy;
  };

   // Return a copy of the object without the blacklisted properties.
  _.omit = function(obj) {
    var copy = {};
    var keys = concat.apply(ArrayProto, slice.call(arguments, 1));
    for (var key in obj) {
      if (!_.contains(keys, key)) copy[key] = obj[key];
    }
    return copy;
  };

  // Fill in a given object with default properties.
  _.defaults = function(obj) {
    each(slice.call(arguments, 1), function(source) {
      for (var prop in source) {
        if (obj[prop] == null) obj[prop] = source[prop];
      }
    });
    return obj;
  };

  // Create a (shallow-cloned) duplicate of an object.
  _.clone = function(obj) {
    if (!_.isObject(obj)) return obj;
    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
  };

  // Invokes interceptor with the obj, and then returns obj.
  // The primary purpose of this method is to "tap into" a method chain, in
  // order to perform operations on intermediate results within the chain.
  _.tap = function(obj, interceptor) {
    interceptor(obj);
    return obj;
  };

  // Internal recursive comparison function for `isEqual`.
  var eq = function(a, b, aStack, bStack) {
    // Identical objects are equal. `0 === -0`, but they aren't identical.
    // See the Harmony `egal` proposal: http://wiki.ecmascript.org/doku.php?id=harmony:egal.
    if (a === b) return a !== 0 || 1 / a == 1 / b;
    // A strict comparison is necessary because `null == undefined`.
    if (a == null || b == null) return a === b;
    // Unwrap any wrapped objects.
    if (a instanceof _) a = a._wrapped;
    if (b instanceof _) b = b._wrapped;
    // Compare `[[Class]]` names.
    var className = toString.call(a);
    if (className != toString.call(b)) return false;
    switch (className) {
      // Strings, numbers, dates, and booleans are compared by value.
      case '[object String]':
        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
        // equivalent to `new String("5")`.
        return a == String(b);
      case '[object Number]':
        // `NaN`s are equivalent, but non-reflexive. An `egal` comparison is performed for
        // other numeric values.
        return a != +a ? b != +b : (a == 0 ? 1 / a == 1 / b : a == +b);
      case '[object Date]':
      case '[object Boolean]':
        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
        // millisecond representations. Note that invalid dates with millisecond representations
        // of `NaN` are not equivalent.
        return +a == +b;
      // RegExps are compared by their source patterns and flags.
      case '[object RegExp]':
        return a.source == b.source &&
               a.global == b.global &&
               a.multiline == b.multiline &&
               a.ignoreCase == b.ignoreCase;
    }
    if (typeof a != 'object' || typeof b != 'object') return false;
    // Assume equality for cyclic structures. The algorithm for detecting cyclic
    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
    var length = aStack.length;
    while (length--) {
      // Linear search. Performance is inversely proportional to the number of
      // unique nested structures.
      if (aStack[length] == a) return bStack[length] == b;
    }
    // Add the first object to the stack of traversed objects.
    aStack.push(a);
    bStack.push(b);
    var size = 0, result = true;
    // Recursively compare objects and arrays.
    if (className == '[object Array]') {
      // Compare array lengths to determine if a deep comparison is necessary.
      size = a.length;
      result = size == b.length;
      if (result) {
        // Deep compare the contents, ignoring non-numeric properties.
        while (size--) {
          if (!(result = eq(a[size], b[size], aStack, bStack))) break;
        }
      }
    } else {
      // Objects with different constructors are not equivalent, but `Object`s
      // from different frames are.
      var aCtor = a.constructor, bCtor = b.constructor;
      if (aCtor !== bCtor && !(_.isFunction(aCtor) && (aCtor instanceof aCtor) &&
                               _.isFunction(bCtor) && (bCtor instanceof bCtor))) {
        return false;
      }
      // Deep compare objects.
      for (var key in a) {
        if (_.has(a, key)) {
          // Count the expected number of properties.
          size++;
          // Deep compare each member.
          if (!(result = _.has(b, key) && eq(a[key], b[key], aStack, bStack))) break;
        }
      }
      // Ensure that both objects contain the same number of properties.
      if (result) {
        for (key in b) {
          if (_.has(b, key) && !(size--)) break;
        }
        result = !size;
      }
    }
    // Remove the first object from the stack of traversed objects.
    aStack.pop();
    bStack.pop();
    return result;
  };

  // Perform a deep comparison to check if two objects are equal.
  _.isEqual = function(a, b) {
    return eq(a, b, [], []);
  };

  // Is a given array, string, or object empty?
  // An "empty" object has no enumerable own-properties.
  _.isEmpty = function(obj) {
    if (obj == null) return true;
    if (_.isArray(obj) || _.isString(obj)) return obj.length === 0;
    for (var key in obj) if (_.has(obj, key)) return false;
    return true;
  };

  // Is a given value a DOM element?
  _.isElement = function(obj) {
    return !!(obj && obj.nodeType === 1);
  };

  // Is a given value an array?
  // Delegates to ECMA5's native Array.isArray
  _.isArray = nativeIsArray || function(obj) {
    return toString.call(obj) == '[object Array]';
  };

  // Is a given variable an object?
  _.isObject = function(obj) {
    return obj === Object(obj);
  };

  // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp.
  each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp'], function(name) {
    _['is' + name] = function(obj) {
      return toString.call(obj) == '[object ' + name + ']';
    };
  });

  // Define a fallback version of the method in browsers (ahem, IE), where
  // there isn't any inspectable "Arguments" type.
  if (!_.isArguments(arguments)) {
    _.isArguments = function(obj) {
      return !!(obj && _.has(obj, 'callee'));
    };
  }

  // Optimize `isFunction` if appropriate.
  if (typeof (/./) !== 'function') {
    _.isFunction = function(obj) {
      return typeof obj === 'function';
    };
  }

  // Is a given object a finite number?
  _.isFinite = function(obj) {
    return _.isNumber(obj) && isFinite(obj);
  };

  // Is the given value `NaN`? (NaN is the only number which does not equal itself).
  _.isNaN = function(obj) {
    return _.isNumber(obj) && obj != +obj;
  };

  // Is a given value a boolean?
  _.isBoolean = function(obj) {
    return obj === true || obj === false || toString.call(obj) == '[object Boolean]';
  };

  // Is a given value equal to null?
  _.isNull = function(obj) {
    return obj === null;
  };

  // Is a given variable undefined?
  _.isUndefined = function(obj) {
    return obj === void 0;
  };

  // Shortcut function for checking if an object has a given property directly
  // on itself (in other words, not on a prototype).
  _.has = function(obj, key) {
    return hasOwnProperty.call(obj, key);
  };

  // Utility Functions
  // -----------------

  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
  // previous owner. Returns a reference to the Underscore object.
  _.noConflict = function() {
    root._ = previousUnderscore;
    return this;
  };

  // Keep the identity function around for default iterators.
  _.identity = function(value) {
    return value;
  };

  // Run a function **n** times.
  _.times = function(n, iterator, context) {
    for (var i = 0; i < n; i++) iterator.call(context, i);
  };

  // Return a random integer between min and max (inclusive).
  _.random = function(min, max) {
    if (max == null) {
      max = min;
      min = 0;
    }
    return min + (0 | Math.random() * (max - min + 1));
  };

  // List of HTML entities for escaping.
  var entityMap = {
    escape: {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#x27;',
      '/': '&#x2F;'
    }
  };
  entityMap.unescape = _.invert(entityMap.escape);

  // Regexes containing the keys and values listed immediately above.
  var entityRegexes = {
    escape:   new RegExp('[' + _.keys(entityMap.escape).join('') + ']', 'g'),
    unescape: new RegExp('(' + _.keys(entityMap.unescape).join('|') + ')', 'g')
  };

  // Functions for escaping and unescaping strings to/from HTML interpolation.
  _.each(['escape', 'unescape'], function(method) {
    _[method] = function(string) {
      if (string == null) return '';
      return ('' + string).replace(entityRegexes[method], function(match) {
        return entityMap[method][match];
      });
    };
  });

  // If the value of the named property is a function then invoke it;
  // otherwise, return it.
  _.result = function(object, property) {
    if (object == null) return null;
    var value = object[property];
    return _.isFunction(value) ? value.call(object) : value;
  };

  // Add your own custom functions to the Underscore object.
  _.mixin = function(obj) {
    each(_.functions(obj), function(name){
      var func = _[name] = obj[name];
      _.prototype[name] = function() {
        var args = [this._wrapped];
        push.apply(args, arguments);
        return result.call(this, func.apply(_, args));
      };
    });
  };

  // Generate a unique integer id (unique within the entire client session).
  // Useful for temporary DOM ids.
  var idCounter = 0;
  _.uniqueId = function(prefix) {
    var id = idCounter++;
    return prefix ? prefix + id : id;
  };

  // By default, Underscore uses ERB-style template delimiters, change the
  // following template settings to use alternative delimiters.
  _.templateSettings = {
    evaluate    : /<%([\s\S]+?)%>/g,
    interpolate : /<%=([\s\S]+?)%>/g,
    escape      : /<%-([\s\S]+?)%>/g
  };

  // When customizing `templateSettings`, if you don't want to define an
  // interpolation, evaluation or escaping regex, we need one that is
  // guaranteed not to match.
  var noMatch = /(.)^/;

  // Certain characters need to be escaped so that they can be put into a
  // string literal.
  var escapes = {
    "'":      "'",
    '\\':     '\\',
    '\r':     'r',
    '\n':     'n',
    '\t':     't',
    '\u2028': 'u2028',
    '\u2029': 'u2029'
  };

  var escaper = /\\|'|\r|\n|\t|\u2028|\u2029/g;

  // JavaScript micro-templating, similar to John Resig's implementation.
  // Underscore templating handles arbitrary delimiters, preserves whitespace,
  // and correctly escapes quotes within interpolated code.
  _.template = function(text, data, settings) {
    settings = _.defaults({}, settings, _.templateSettings);

    // Combine delimiters into one regular expression via alternation.
    var matcher = new RegExp([
      (settings.escape || noMatch).source,
      (settings.interpolate || noMatch).source,
      (settings.evaluate || noMatch).source
    ].join('|') + '|$', 'g');

    // Compile the template source, escaping string literals appropriately.
    var index = 0;
    var source = "__p+='";
    text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
      source += text.slice(index, offset)
        .replace(escaper, function(match) { return '\\' + escapes[match]; });
      source +=
        escape ? "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'" :
        interpolate ? "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'" :
        evaluate ? "';\n" + evaluate + "\n__p+='" : '';
      index = offset + match.length;
    });
    source += "';\n";

    // If a variable is not specified, place data values in local scope.
    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

    source = "var __t,__p='',__j=Array.prototype.join," +
      "print=function(){__p+=__j.call(arguments,'');};\n" +
      source + "return __p;\n";

    try {
      var render = new Function(settings.variable || 'obj', '_', source);
    } catch (e) {
      e.source = source;
      throw e;
    }

    if (data) return render(data, _);
    var template = function(data) {
      return render.call(this, data, _);
    };

    // Provide the compiled function source as a convenience for precompilation.
    template.source = 'function(' + (settings.variable || 'obj') + '){\n' + source + '}';

    return template;
  };

  // Add a "chain" function, which will delegate to the wrapper.
  _.chain = function(obj) {
    return _(obj).chain();
  };

  // OOP
  // ---------------
  // If Underscore is called as a function, it returns a wrapped object that
  // can be used OO-style. This wrapper holds altered versions of all the
  // underscore functions. Wrapped objects may be chained.

  // Helper function to continue chaining intermediate results.
  var result = function(obj) {
    return this._chain ? _(obj).chain() : obj;
  };

  // Add all of the Underscore functions to the wrapper object.
  _.mixin(_);

  // Add all mutator Array functions to the wrapper.
  each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      var obj = this._wrapped;
      method.apply(obj, arguments);
      if ((name == 'shift' || name == 'splice') && obj.length === 0) delete obj[0];
      return result.call(this, obj);
    };
  });

  // Add all accessor Array functions to the wrapper.
  each(['concat', 'join', 'slice'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      return result.call(this, method.apply(this._wrapped, arguments));
    };
  });

  _.extend(_.prototype, {

    // Start chaining a wrapped Underscore object.
    chain: function() {
      this._chain = true;
      return this;
    },

    // Extracts the result from a wrapped and chained object.
    value: function() {
      return this._wrapped;
    }

  });

}).call(this);
//     Backbone.js 0.9.2

//     (c) 2010-2012 Jeremy Ashkenas, DocumentCloud Inc.
//     Backbone may be freely distributed under the MIT license.
//     For all details and documentation:
//     http://backbonejs.org

(function(){

  // Initial Setup
  // -------------

  // Save a reference to the global object (`window` in the browser, `global`
  // on the server).
  var root = this;

  // Save the previous value of the `Backbone` variable, so that it can be
  // restored later on, if `noConflict` is used.
  var previousBackbone = root.Backbone;

  // Create a local reference to slice/splice.
  var slice = Array.prototype.slice;
  var splice = Array.prototype.splice;

  // The top-level namespace. All public Backbone classes and modules will
  // be attached to this. Exported for both CommonJS and the browser.
  var Backbone;
  if (typeof exports !== 'undefined') {
    Backbone = exports;
  } else {
    Backbone = root.Backbone = {};
  }

  // Current version of the library. Keep in sync with `package.json`.
  Backbone.VERSION = '0.9.2';

  // Require Underscore, if we're on the server, and it's not already present.
  var _ = root._;
  if (!_ && (typeof require !== 'undefined')) _ = require('underscore');

  // For Backbone's purposes, jQuery, Zepto, or Ender owns the `$` variable.
  var $ = root.jQuery || root.Zepto || root.ender;

  // Set the JavaScript library that will be used for DOM manipulation and
  // Ajax calls (a.k.a. the `$` variable). By default Backbone will use: jQuery,
  // Zepto, or Ender; but the `setDomLibrary()` method lets you inject an
  // alternate JavaScript library (or a mock library for testing your views
  // outside of a browser).
  Backbone.setDomLibrary = function(lib) {
    $ = lib;
  };

  // Runs Backbone.js in *noConflict* mode, returning the `Backbone` variable
  // to its previous owner. Returns a reference to this Backbone object.
  Backbone.noConflict = function() {
    root.Backbone = previousBackbone;
    return this;
  };

  // Turn on `emulateHTTP` to support legacy HTTP servers. Setting this option
  // will fake `"PUT"` and `"DELETE"` requests via the `_method` parameter and
  // set a `X-Http-Method-Override` header.
  Backbone.emulateHTTP = false;

  // Turn on `emulateJSON` to support legacy servers that can't deal with direct
  // `application/json` requests ... will encode the body as
  // `application/x-www-form-urlencoded` instead and will send the model in a
  // form param named `model`.
  Backbone.emulateJSON = false;

  // Backbone.Events
  // -----------------

  // Regular expression used to split event strings
  var eventSplitter = /\s+/;

  // A module that can be mixed in to *any object* in order to provide it with
  // custom events. You may bind with `on` or remove with `off` callback functions
  // to an event; trigger`-ing an event fires all callbacks in succession.
  //
  //     var object = {};
  //     _.extend(object, Backbone.Events);
  //     object.on('expand', function(){ alert('expanded'); });
  //     object.trigger('expand');
  //
  var Events = Backbone.Events = {

    // Bind one or more space separated events, `events`, to a `callback`
    // function. Passing `"all"` will bind the callback to all events fired.
    on: function(events, callback, context) {

      var calls, event, node, tail, list;
      if (!callback) return this;
      events = events.split(eventSplitter);
      calls = this._callbacks || (this._callbacks = {});

      // Create an immutable callback list, allowing traversal during
      // modification.  The tail is an empty object that will always be used
      // as the next node.
      while (event = events.shift()) {
        list = calls[event];
        node = list ? list.tail : {};
        node.next = tail = {};
        node.context = context;
        node.callback = callback;
        calls[event] = {tail: tail, next: list ? list.next : node};
      }

      return this;
    },

    // Remove one or many callbacks. If `context` is null, removes all callbacks
    // with that function. If `callback` is null, removes all callbacks for the
    // event. If `events` is null, removes all bound callbacks for all events.
    off: function(events, callback, context) {
      var event, calls, node, tail, cb, ctx;

      // No events, or removing *all* events.
      if (!(calls = this._callbacks)) return;
      if (!(events || callback || context)) {
        delete this._callbacks;
        return this;
      }

      // Loop through the listed events and contexts, splicing them out of the
      // linked list of callbacks if appropriate.
      events = events ? events.split(eventSplitter) : _.keys(calls);
      while (event = events.shift()) {
        node = calls[event];
        delete calls[event];
        if (!node || !(callback || context)) continue;
        // Create a new list, omitting the indicated callbacks.
        tail = node.tail;
        while ((node = node.next) !== tail) {
          cb = node.callback;
          ctx = node.context;
          if ((callback && cb !== callback) || (context && ctx !== context)) {
            this.on(event, cb, ctx);
          }
        }
      }

      return this;
    },

    // Trigger one or many events, firing all bound callbacks. Callbacks are
    // passed the same arguments as `trigger` is, apart from the event name
    // (unless you're listening on `"all"`, which will cause your callback to
    // receive the true name of the event as the first argument).
    trigger: function(events) {
      var event, node, calls, tail, args, all, rest;
      if (!(calls = this._callbacks)) return this;
      all = calls.all;
      events = events.split(eventSplitter);
      rest = slice.call(arguments, 1);

      // For each event, walk through the linked list of callbacks twice,
      // first to trigger the event, then to trigger any `"all"` callbacks.
      while (event = events.shift()) {
        if (node = calls[event]) {
          tail = node.tail;
          while ((node = node.next) !== tail) {
            node.callback.apply(node.context || this, rest);
          }
        }
        if (node = all) {
          tail = node.tail;
          args = [event].concat(rest);
          while ((node = node.next) !== tail) {
            node.callback.apply(node.context || this, args);
          }
        }
      }

      return this;
    }

  };

  // Aliases for backwards compatibility.
  Events.bind   = Events.on;
  Events.unbind = Events.off;

  // Backbone.Model
  // --------------

  // Create a new model, with defined attributes. A client id (`cid`)
  // is automatically generated and assigned for you.
  var Model = Backbone.Model = function(attributes, options) {
    var defaults;
    attributes || (attributes = {});
    if (options && options.parse) attributes = this.parse(attributes);
    if (defaults = getValue(this, 'defaults')) {
      attributes = _.extend({}, defaults, attributes);
    }
    if (options && options.collection) this.collection = options.collection;
    this.attributes = {};
    this._escapedAttributes = {};
    this.cid = _.uniqueId('c');
    this.changed = {};
    this._silent = {};
    this._pending = {};
    this.set(attributes, {silent: true});
    // Reset change tracking.
    this.changed = {};
    this._silent = {};
    this._pending = {};
    this._previousAttributes = _.clone(this.attributes);
    this.initialize.apply(this, arguments);
  };

  // Attach all inheritable methods to the Model prototype.
  _.extend(Model.prototype, Events, {

    // A hash of attributes whose current and previous value differ.
    changed: null,

    // A hash of attributes that have silently changed since the last time
    // `change` was called.  Will become pending attributes on the next call.
    _silent: null,

    // A hash of attributes that have changed since the last `'change'` event
    // began.
    _pending: null,

    // The default name for the JSON `id` attribute is `"id"`. MongoDB and
    // CouchDB users may want to set this to `"_id"`.
    idAttribute: 'id',

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){},

    // Return a copy of the model's `attributes` object.
    toJSON: function(options) {
      return _.clone(this.attributes);
    },

    // Get the value of an attribute.
    get: function(attr) {
      return this.attributes[attr];
    },

    // Get the HTML-escaped value of an attribute.
    escape: function(attr) {
      var html;
      if (html = this._escapedAttributes[attr]) return html;
      var val = this.get(attr);
      return this._escapedAttributes[attr] = _.escape(val == null ? '' : '' + val);
    },

    // Returns `true` if the attribute contains a value that is not null
    // or undefined.
    has: function(attr) {
      return this.get(attr) != null;
    },

    // Set a hash of model attributes on the object, firing `"change"` unless
    // you choose to silence it.
    set: function(key, value, options) {
      var attrs, attr, val;

      // Handle both `"key", value` and `{key: value}` -style arguments.
      if (_.isObject(key) || key == null) {
        attrs = key;
        options = value;
      } else {
        attrs = {};
        attrs[key] = value;
      }

      // Extract attributes and options.
      options || (options = {});
      if (!attrs) return this;
      if (attrs instanceof Model) attrs = attrs.attributes;
      if (options.unset) for (attr in attrs) attrs[attr] = void 0;

      // Run validation.
      if (!this._validate(attrs, options)) return false;

      // Check for changes of `id`.
      if (this.idAttribute in attrs) this.id = attrs[this.idAttribute];

      var changes = options.changes = {};
      var now = this.attributes;
      var escaped = this._escapedAttributes;
      var prev = this._previousAttributes || {};

      // For each `set` attribute...
      for (attr in attrs) {
        val = attrs[attr];

        // If the new and current value differ, record the change.
        if (!_.isEqual(now[attr], val) || (options.unset && _.has(now, attr))) {
          delete escaped[attr];
          (options.silent ? this._silent : changes)[attr] = true;
        }

        // Update or delete the current value.
        options.unset ? delete now[attr] : now[attr] = val;

        // If the new and previous value differ, record the change.  If not,
        // then remove changes for this attribute.
        if (!_.isEqual(prev[attr], val) || (_.has(now, attr) != _.has(prev, attr))) {
          this.changed[attr] = val;
          if (!options.silent) this._pending[attr] = true;
        } else {
          delete this.changed[attr];
          delete this._pending[attr];
        }
      }

      // Fire the `"change"` events.
      if (!options.silent) this.change(options);
      return this;
    },

    // Remove an attribute from the model, firing `"change"` unless you choose
    // to silence it. `unset` is a noop if the attribute doesn't exist.
    unset: function(attr, options) {
      (options || (options = {})).unset = true;
      return this.set(attr, null, options);
    },

    // Clear all attributes on the model, firing `"change"` unless you choose
    // to silence it.
    clear: function(options) {
      (options || (options = {})).unset = true;
      return this.set(_.clone(this.attributes), options);
    },

    // Fetch the model from the server. If the server's representation of the
    // model differs from its current attributes, they will be overriden,
    // triggering a `"change"` event.
    fetch: function(options) {
      options = options ? _.clone(options) : {};
      var model = this;
      var success = options.success;
      options.success = function(resp, status, xhr) {
        if (!model.set(model.parse(resp, xhr), options)) return false;
        if (success) success(model, resp);
      };
      options.error = Backbone.wrapError(options.error, model, options);
      return (this.sync || Backbone.sync).call(this, 'read', this, options);
    },

    // Set a hash of model attributes, and sync the model to the server.
    // If the server returns an attributes hash that differs, the model's
    // state will be `set` again.
    save: function(key, value, options) {
      var attrs, current;

      // Handle both `("key", value)` and `({key: value})` -style calls.
      if (_.isObject(key) || key == null) {
        attrs = key;
        options = value;
      } else {
        attrs = {};
        attrs[key] = value;
      }
      options = options ? _.clone(options) : {};

      // If we're "wait"-ing to set changed attributes, validate early.
      if (options.wait) {
        if (!this._validate(attrs, options)) return false;
        current = _.clone(this.attributes);
      }

      // Regular saves `set` attributes before persisting to the server.
      var silentOptions = _.extend({}, options, {silent: true});
      if (attrs && !this.set(attrs, options.wait ? silentOptions : options)) {
        return false;
      }

      // After a successful server-side save, the client is (optionally)
      // updated with the server-side state.
      var model = this;
      var success = options.success;
      options.success = function(resp, status, xhr) {
        var serverAttrs = model.parse(resp, xhr);
        if (options.wait) {
          delete options.wait;
          serverAttrs = _.extend(attrs || {}, serverAttrs);
        }
        if (!model.set(serverAttrs, options)) return false;
        if (success) {
          success(model, resp);
        } else {
          model.trigger('sync', model, resp, options);
        }
      };

      // Finish configuring and sending the Ajax request.
      options.error = Backbone.wrapError(options.error, model, options);
      var method = this.isNew() ? 'create' : 'update';
      var xhr = (this.sync || Backbone.sync).call(this, method, this, options);
      if (options.wait) this.set(current, silentOptions);
      return xhr;
    },

    // Destroy this model on the server if it was already persisted.
    // Optimistically removes the model from its collection, if it has one.
    // If `wait: true` is passed, waits for the server to respond before removal.
    destroy: function(options) {
      options = options ? _.clone(options) : {};
      var model = this;
      var success = options.success;

      var triggerDestroy = function() {
        model.trigger('destroy', model, model.collection, options);
      };

      if (this.isNew()) {
        triggerDestroy();
        return false;
      }

      options.success = function(resp) {
        if (options.wait) triggerDestroy();
        if (success) {
          success(model, resp);
        } else {
          model.trigger('sync', model, resp, options);
        }
      };

      options.error = Backbone.wrapError(options.error, model, options);
      var xhr = (this.sync || Backbone.sync).call(this, 'delete', this, options);
      if (!options.wait) triggerDestroy();
      return xhr;
    },

    // Default URL for the model's representation on the server -- if you're
    // using Backbone's restful methods, override this to change the endpoint
    // that will be called.
    url: function() {
      var base = getValue(this, 'urlRoot') || getValue(this.collection, 'url') || urlError();
      if (this.isNew()) return base;
      return base + (base.charAt(base.length - 1) == '/' ? '' : '/') + encodeURIComponent(this.id);
    },

    // **parse** converts a response into the hash of attributes to be `set` on
    // the model. The default implementation is just to pass the response along.
    parse: function(resp, xhr) {
      return resp;
    },

    // Create a new model with identical attributes to this one.
    clone: function() {
      return new this.constructor(this.attributes);
    },

    // A model is new if it has never been saved to the server, and lacks an id.
    isNew: function() {
      return this.id == null;
    },

    // Call this method to manually fire a `"change"` event for this model and
    // a `"change:attribute"` event for each changed attribute.
    // Calling this will cause all objects observing the model to update.
    change: function(options) {
      options || (options = {});
      var changing = this._changing;
      this._changing = true;

      // Silent changes become pending changes.
      for (var attr in this._silent) this._pending[attr] = true;

      // Silent changes are triggered.
      var changes = _.extend({}, options.changes, this._silent);
      this._silent = {};
      for (var attr in changes) {
        this.trigger('change:' + attr, this, this.get(attr), options);
      }
      if (changing) return this;

      // Continue firing `"change"` events while there are pending changes.
      while (!_.isEmpty(this._pending)) {
        this._pending = {};
        this.trigger('change', this, options);
        // Pending and silent changes still remain.
        for (var attr in this.changed) {
          if (this._pending[attr] || this._silent[attr]) continue;
          delete this.changed[attr];
        }
        this._previousAttributes = _.clone(this.attributes);
      }

      this._changing = false;
      return this;
    },

    // Determine if the model has changed since the last `"change"` event.
    // If you specify an attribute name, determine if that attribute has changed.
    hasChanged: function(attr) {
      if (!arguments.length) return !_.isEmpty(this.changed);
      return _.has(this.changed, attr);
    },

    // Return an object containing all the attributes that have changed, or
    // false if there are no changed attributes. Useful for determining what
    // parts of a view need to be updated and/or what attributes need to be
    // persisted to the server. Unset attributes will be set to undefined.
    // You can also pass an attributes object to diff against the model,
    // determining if there *would be* a change.
    changedAttributes: function(diff) {
      if (!diff) return this.hasChanged() ? _.clone(this.changed) : false;
      var val, changed = false, old = this._previousAttributes;
      for (var attr in diff) {
        if (_.isEqual(old[attr], (val = diff[attr]))) continue;
        (changed || (changed = {}))[attr] = val;
      }
      return changed;
    },

    // Get the previous value of an attribute, recorded at the time the last
    // `"change"` event was fired.
    previous: function(attr) {
      if (!arguments.length || !this._previousAttributes) return null;
      return this._previousAttributes[attr];
    },

    // Get all of the attributes of the model at the time of the previous
    // `"change"` event.
    previousAttributes: function() {
      return _.clone(this._previousAttributes);
    },

    // Check if the model is currently in a valid state. It's only possible to
    // get into an *invalid* state if you're using silent changes.
    isValid: function() {
      return !this.validate(this.attributes);
    },

    // Run validation against the next complete set of model attributes,
    // returning `true` if all is well. If a specific `error` callback has
    // been passed, call that instead of firing the general `"error"` event.
    _validate: function(attrs, options) {
      if (options.silent || !this.validate) return true;
      attrs = _.extend({}, this.attributes, attrs);
      var error = this.validate(attrs, options);
      if (!error) return true;
      if (options && options.error) {
        options.error(this, error, options);
      } else {
        this.trigger('error', this, error, options);
      }
      return false;
    }

  });

  // Backbone.Collection
  // -------------------

  // Provides a standard collection class for our sets of models, ordered
  // or unordered. If a `comparator` is specified, the Collection will maintain
  // its models in sort order, as they're added and removed.
  var Collection = Backbone.Collection = function(models, options) {
    options || (options = {});
    if (options.model) this.model = options.model;
    if (options.comparator) this.comparator = options.comparator;
    this._reset();
    this.initialize.apply(this, arguments);
    if (models) this.reset(models, {silent: true, parse: options.parse});
  };

  // Define the Collection's inheritable methods.
  _.extend(Collection.prototype, Events, {

    // The default model for a collection is just a **Backbone.Model**.
    // This should be overridden in most cases.
    model: Model,

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){},

    // The JSON representation of a Collection is an array of the
    // models' attributes.
    toJSON: function(options) {
      return this.map(function(model){ return model.toJSON(options); });
    },

    // Add a model, or list of models to the set. Pass **silent** to avoid
    // firing the `add` event for every new model.
    add: function(models, options) {
      var i, index, length, model, cid, id, cids = {}, ids = {}, dups = [];
      options || (options = {});
      models = _.isArray(models) ? models.slice() : [models];

      // Begin by turning bare objects into model references, and preventing
      // invalid models or duplicate models from being added.
      for (i = 0, length = models.length; i < length; i++) {
        if (!(model = models[i] = this._prepareModel(models[i], options))) {
          throw new Error("Can't add an invalid model to a collection");
        }
        cid = model.cid;
        id = model.id;
        if (cids[cid] || this._byCid[cid] || ((id != null) && (ids[id] || this._byId[id]))) {
          dups.push(i);
          continue;
        }
        cids[cid] = ids[id] = model;
      }

      // Remove duplicates.
      i = dups.length;
      while (i--) {
        models.splice(dups[i], 1);
      }

      // Listen to added models' events, and index models for lookup by
      // `id` and by `cid`.
      for (i = 0, length = models.length; i < length; i++) {
        (model = models[i]).on('all', this._onModelEvent, this);
        this._byCid[model.cid] = model;
        if (model.id != null) this._byId[model.id] = model;
      }

      // Insert models into the collection, re-sorting if needed, and triggering
      // `add` events unless silenced.
      this.length += length;
      index = options.at != null ? options.at : this.models.length;
      splice.apply(this.models, [index, 0].concat(models));
      if (this.comparator) this.sort({silent: true});
      if (options.silent) return this;
      for (i = 0, length = this.models.length; i < length; i++) {
        if (!cids[(model = this.models[i]).cid]) continue;
        options.index = i;
        model.trigger('add', model, this, options);
      }
      return this;
    },

    // Remove a model, or a list of models from the set. Pass silent to avoid
    // firing the `remove` event for every model removed.
    remove: function(models, options) {
      var i, l, index, model;
      options || (options = {});
      models = _.isArray(models) ? models.slice() : [models];
      for (i = 0, l = models.length; i < l; i++) {
        model = this.getByCid(models[i]) || this.get(models[i]);
        if (!model) continue;
        delete this._byId[model.id];
        delete this._byCid[model.cid];
        index = this.indexOf(model);
        this.models.splice(index, 1);
        this.length--;
        if (!options.silent) {
          options.index = index;
          model.trigger('remove', model, this, options);
        }
        this._removeReference(model);
      }
      return this;
    },

    // Add a model to the end of the collection.
    push: function(model, options) {
      model = this._prepareModel(model, options);
      this.add(model, options);
      return model;
    },

    // Remove a model from the end of the collection.
    pop: function(options) {
      var model = this.at(this.length - 1);
      this.remove(model, options);
      return model;
    },

    // Add a model to the beginning of the collection.
    unshift: function(model, options) {
      model = this._prepareModel(model, options);
      this.add(model, _.extend({at: 0}, options));
      return model;
    },

    // Remove a model from the beginning of the collection.
    shift: function(options) {
      var model = this.at(0);
      this.remove(model, options);
      return model;
    },

    // Get a model from the set by id.
    get: function(id) {
      if (id == null) return void 0;
      return this._byId[id.id != null ? id.id : id];
    },

    // Get a model from the set by client id.
    getByCid: function(cid) {
      return cid && this._byCid[cid.cid || cid];
    },

    // Get the model at the given index.
    at: function(index) {
      return this.models[index];
    },

    // Return models with matching attributes. Useful for simple cases of `filter`.
    where: function(attrs) {
      if (_.isEmpty(attrs)) return [];
      return this.filter(function(model) {
        for (var key in attrs) {
          if (attrs[key] !== model.get(key)) return false;
        }
        return true;
      });
    },

    // Force the collection to re-sort itself. You don't need to call this under
    // normal circumstances, as the set will maintain sort order as each item
    // is added.
    sort: function(options) {
      options || (options = {});
      if (!this.comparator) throw new Error('Cannot sort a set without a comparator');
      var boundComparator = _.bind(this.comparator, this);
      if (this.comparator.length == 1) {
        this.models = this.sortBy(boundComparator);
      } else {
        this.models.sort(boundComparator);
      }
      if (!options.silent) this.trigger('reset', this, options);
      return this;
    },

    // Pluck an attribute from each model in the collection.
    pluck: function(attr) {
      return _.map(this.models, function(model){ return model.get(attr); });
    },

    // When you have more items than you want to add or remove individually,
    // you can reset the entire set with a new list of models, without firing
    // any `add` or `remove` events. Fires `reset` when finished.
    reset: function(models, options) {
      models  || (models = []);
      options || (options = {});
      for (var i = 0, l = this.models.length; i < l; i++) {
        this._removeReference(this.models[i]);
      }
      this._reset();
      this.add(models, _.extend({silent: true}, options));
      if (!options.silent) this.trigger('reset', this, options);
      return this;
    },

    // Fetch the default set of models for this collection, resetting the
    // collection when they arrive. If `add: true` is passed, appends the
    // models to the collection instead of resetting.
    fetch: function(options) {
      options = options ? _.clone(options) : {};
      if (options.parse === undefined) options.parse = true;
      var collection = this;
      var success = options.success;
      options.success = function(resp, status, xhr) {
        collection[options.add ? 'add' : 'reset'](collection.parse(resp, xhr), options);
        if (success) success(collection, resp);
      };
      options.error = Backbone.wrapError(options.error, collection, options);
      return (this.sync || Backbone.sync).call(this, 'read', this, options);
    },

    // Create a new instance of a model in this collection. Add the model to the
    // collection immediately, unless `wait: true` is passed, in which case we
    // wait for the server to agree.
    create: function(model, options) {
      var coll = this;
      options = options ? _.clone(options) : {};
      model = this._prepareModel(model, options);
      if (!model) return false;
      if (!options.wait) coll.add(model, options);
      var success = options.success;
      options.success = function(nextModel, resp, xhr) {
        if (options.wait) coll.add(nextModel, options);
        if (success) {
          success(nextModel, resp);
        } else {
          nextModel.trigger('sync', model, resp, options);
        }
      };
      model.save(null, options);
      return model;
    },

    // **parse** converts a response into a list of models to be added to the
    // collection. The default implementation is just to pass it through.
    parse: function(resp, xhr) {
      return resp;
    },

    // Proxy to _'s chain. Can't be proxied the same way the rest of the
    // underscore methods are proxied because it relies on the underscore
    // constructor.
    chain: function () {
      return _(this.models).chain();
    },

    // Reset all internal state. Called when the collection is reset.
    _reset: function(options) {
      this.length = 0;
      this.models = [];
      this._byId  = {};
      this._byCid = {};
    },

    // Prepare a model or hash of attributes to be added to this collection.
    _prepareModel: function(model, options) {
      options || (options = {});
      if (!(model instanceof Model)) {
        var attrs = model;
        options.collection = this;
        model = new this.model(attrs, options);
        if (!model._validate(model.attributes, options)) model = false;
      } else if (!model.collection) {
        model.collection = this;
      }
      return model;
    },

    // Internal method to remove a model's ties to a collection.
    _removeReference: function(model) {
      if (this == model.collection) {
        delete model.collection;
      }
      model.off('all', this._onModelEvent, this);
    },

    // Internal method called every time a model in the set fires an event.
    // Sets need to update their indexes when models change ids. All other
    // events simply proxy through. "add" and "remove" events that originate
    // in other collections are ignored.
    _onModelEvent: function(event, model, collection, options) {
      if ((event == 'add' || event == 'remove') && collection != this) return;
      if (event == 'destroy') {
        this.remove(model, options);
      }
      if (model && event === 'change:' + model.idAttribute) {
        delete this._byId[model.previous(model.idAttribute)];
        this._byId[model.id] = model;
      }
      this.trigger.apply(this, arguments);
    }

  });

  // Underscore methods that we want to implement on the Collection.
  var methods = ['forEach', 'each', 'map', 'reduce', 'reduceRight', 'find',
    'detect', 'filter', 'select', 'reject', 'every', 'all', 'some', 'any',
    'include', 'contains', 'invoke', 'max', 'min', 'sortBy', 'sortedIndex',
    'toArray', 'size', 'first', 'initial', 'rest', 'last', 'without', 'indexOf',
    'shuffle', 'lastIndexOf', 'isEmpty', 'groupBy'];

  // Mix in each Underscore method as a proxy to `Collection#models`.
  _.each(methods, function(method) {
    Collection.prototype[method] = function() {
      return _[method].apply(_, [this.models].concat(_.toArray(arguments)));
    };
  });

  // Backbone.Router
  // -------------------

  // Routers map faux-URLs to actions, and fire events when routes are
  // matched. Creating a new one sets its `routes` hash, if not set statically.
  var Router = Backbone.Router = function(options) {
    options || (options = {});
    if (options.routes) this.routes = options.routes;
    this._bindRoutes();
    this.initialize.apply(this, arguments);
  };

  // Cached regular expressions for matching named param parts and splatted
  // parts of route strings.
  var namedParam    = /:\w+/g;
  var splatParam    = /\*\w+/g;
  var escapeRegExp  = /[-[\]{}()+?.,\\^$|#\s]/g;

  // Set up all inheritable **Backbone.Router** properties and methods.
  _.extend(Router.prototype, Events, {

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){},

    // Manually bind a single named route to a callback. For example:
    //
    //     this.route('search/:query/p:num', 'search', function(query, num) {
    //       ...
    //     });
    //
    route: function(route, name, callback) {
      Backbone.history || (Backbone.history = new History);
      if (!_.isRegExp(route)) route = this._routeToRegExp(route);
      if (!callback) callback = this[name];
      Backbone.history.route(route, _.bind(function(fragment) {
        var args = this._extractParameters(route, fragment);
        callback && callback.apply(this, args);
        this.trigger.apply(this, ['route:' + name].concat(args));
        Backbone.history.trigger('route', this, name, args);
      }, this));
      return this;
    },

    // Simple proxy to `Backbone.history` to save a fragment into the history.
    navigate: function(fragment, options) {
      Backbone.history.navigate(fragment, options);
    },

    // Bind all defined routes to `Backbone.history`. We have to reverse the
    // order of the routes here to support behavior where the most general
    // routes can be defined at the bottom of the route map.
    _bindRoutes: function() {
      if (!this.routes) return;
      var routes = [];
      for (var route in this.routes) {
        routes.unshift([route, this.routes[route]]);
      }
      for (var i = 0, l = routes.length; i < l; i++) {
        this.route(routes[i][0], routes[i][1], this[routes[i][1]]);
      }
    },

    // Convert a route string into a regular expression, suitable for matching
    // against the current location hash.
    _routeToRegExp: function(route) {
      route = route.replace(escapeRegExp, '\\$&')
                   .replace(namedParam, '([^\/]+)')
                   .replace(splatParam, '(.*?)');
      return new RegExp('^' + route + '$');
    },

    // Given a route, and a URL fragment that it matches, return the array of
    // extracted parameters.
    _extractParameters: function(route, fragment) {
      return route.exec(fragment).slice(1);
    }

  });

  // Backbone.History
  // ----------------

  // Handles cross-browser history management, based on URL fragments. If the
  // browser does not support `onhashchange`, falls back to polling.
  var History = Backbone.History = function() {
    this.handlers = [];
    _.bindAll(this, 'checkUrl');
  };

  // Cached regex for cleaning leading hashes and slashes .
  var routeStripper = /^[#\/]/;

  // Cached regex for detecting MSIE.
  var isExplorer = /msie [\w.]+/;

  // Has the history handling already been started?
  History.started = false;

  // Set up all inheritable **Backbone.History** properties and methods.
  _.extend(History.prototype, Events, {

    // The default interval to poll for hash changes, if necessary, is
    // twenty times a second.
    interval: 50,

    // Gets the true hash value. Cannot use location.hash directly due to bug
    // in Firefox where location.hash will always be decoded.
    getHash: function(windowOverride) {
      var loc = windowOverride ? windowOverride.location : window.location;
      var match = loc.href.match(/#(.*)$/);
      return match ? match[1] : '';
    },

    // Get the cross-browser normalized URL fragment, either from the URL,
    // the hash, or the override.
    getFragment: function(fragment, forcePushState) {
      if (fragment == null) {
        if (this._hasPushState || forcePushState) {
          fragment = window.location.pathname;
          var search = window.location.search;
          if (search) fragment += search;
        } else {
          fragment = this.getHash();
        }
      }
      if (!fragment.indexOf(this.options.root)) fragment = fragment.substr(this.options.root.length);
      return fragment.replace(routeStripper, '');
    },

    // Start the hash change handling, returning `true` if the current URL matches
    // an existing route, and `false` otherwise.
    start: function(options) {
      if (History.started) throw new Error("Backbone.history has already been started");
      History.started = true;

      // Figure out the initial configuration. Do we need an iframe?
      // Is pushState desired ... is it available?
      this.options          = _.extend({}, {root: '/'}, this.options, options);
      this._wantsHashChange = this.options.hashChange !== false;
      this._wantsPushState  = !!this.options.pushState;
      this._hasPushState    = !!(this.options.pushState && window.history && window.history.pushState);
      var fragment          = this.getFragment();
      var docMode           = document.documentMode;
      var oldIE             = (isExplorer.exec(navigator.userAgent.toLowerCase()) && (!docMode || docMode <= 7));

      if (oldIE) {
        this.iframe = $('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo('body')[0].contentWindow;
        this.navigate(fragment);
      }

      // Depending on whether we're using pushState or hashes, and whether
      // 'onhashchange' is supported, determine how we check the URL state.
      if (this._hasPushState) {
        $(window).bind('popstate', this.checkUrl);
      } else if (this._wantsHashChange && ('onhashchange' in window) && !oldIE) {
        $(window).bind('hashchange', this.checkUrl);
      } else if (this._wantsHashChange) {
        this._checkUrlInterval = setInterval(this.checkUrl, this.interval);
      }

      // Determine if we need to change the base url, for a pushState link
      // opened by a non-pushState browser.
      this.fragment = fragment;
      var loc = window.location;
      var atRoot  = loc.pathname == this.options.root;

      // If we've started off with a route from a `pushState`-enabled browser,
      // but we're currently in a browser that doesn't support it...
      if (this._wantsHashChange && this._wantsPushState && !this._hasPushState && !atRoot) {
        this.fragment = this.getFragment(null, true);
        window.location.replace(this.options.root + '#' + this.fragment);
        // Return immediately as browser will do redirect to new url
        return true;

      // Or if we've started out with a hash-based route, but we're currently
      // in a browser where it could be `pushState`-based instead...
      } else if (this._wantsPushState && this._hasPushState && atRoot && loc.hash) {
        this.fragment = this.getHash().replace(routeStripper, '');
        window.history.replaceState({}, document.title, loc.protocol + '//' + loc.host + this.options.root + this.fragment);
      }

      if (!this.options.silent) {
        return this.loadUrl();
      }
    },

    // Disable Backbone.history, perhaps temporarily. Not useful in a real app,
    // but possibly useful for unit testing Routers.
    stop: function() {
      $(window).unbind('popstate', this.checkUrl).unbind('hashchange', this.checkUrl);
      clearInterval(this._checkUrlInterval);
      History.started = false;
    },

    // Add a route to be tested when the fragment changes. Routes added later
    // may override previous routes.
    route: function(route, callback) {
      this.handlers.unshift({route: route, callback: callback});
    },

    // Checks the current URL to see if it has changed, and if it has,
    // calls `loadUrl`, normalizing across the hidden iframe.
    checkUrl: function(e) {
      var current = this.getFragment();
      if (current == this.fragment && this.iframe) current = this.getFragment(this.getHash(this.iframe));
      if (current == this.fragment) return false;
      if (this.iframe) this.navigate(current);
      this.loadUrl() || this.loadUrl(this.getHash());
    },

    // Attempt to load the current URL fragment. If a route succeeds with a
    // match, returns `true`. If no defined routes matches the fragment,
    // returns `false`.
    loadUrl: function(fragmentOverride) {
      var fragment = this.fragment = this.getFragment(fragmentOverride);
      var matched = _.any(this.handlers, function(handler) {
        if (handler.route.test(fragment)) {
          handler.callback(fragment);
          return true;
        }
      });
      return matched;
    },

    // Save a fragment into the hash history, or replace the URL state if the
    // 'replace' option is passed. You are responsible for properly URL-encoding
    // the fragment in advance.
    //
    // The options object can contain `trigger: true` if you wish to have the
    // route callback be fired (not usually desirable), or `replace: true`, if
    // you wish to modify the current URL without adding an entry to the history.
    navigate: function(fragment, options) {
      if (!History.started) return false;
      if (!options || options === true) options = {trigger: options};
      var frag = (fragment || '').replace(routeStripper, '');
      if (this.fragment == frag) return;

      // If pushState is available, we use it to set the fragment as a real URL.
      if (this._hasPushState) {
        if (frag.indexOf(this.options.root) != 0) frag = this.options.root + frag;
        this.fragment = frag;
        window.history[options.replace ? 'replaceState' : 'pushState']({}, document.title, frag);

      // If hash changes haven't been explicitly disabled, update the hash
      // fragment to store history.
      } else if (this._wantsHashChange) {
        this.fragment = frag;
        this._updateHash(window.location, frag, options.replace);
        if (this.iframe && (frag != this.getFragment(this.getHash(this.iframe)))) {
          // Opening and closing the iframe tricks IE7 and earlier to push a history entry on hash-tag change.
          // When replace is true, we don't want this.
          if(!options.replace) this.iframe.document.open().close();
          this._updateHash(this.iframe.location, frag, options.replace);
        }

      // If you've told us that you explicitly don't want fallback hashchange-
      // based history, then `navigate` becomes a page refresh.
      } else {
        window.location.assign(this.options.root + fragment);
      }
      if (options.trigger) this.loadUrl(fragment);
    },

    // Update the hash location, either replacing the current entry, or adding
    // a new one to the browser history.
    _updateHash: function(location, fragment, replace) {
      if (replace) {
        location.replace(location.toString().replace(/(javascript:|#).*$/, '') + '#' + fragment);
      } else {
        location.hash = fragment;
      }
    }
  });

  // Backbone.View
  // -------------

  // Creating a Backbone.View creates its initial element outside of the DOM,
  // if an existing element is not provided...
  var View = Backbone.View = function(options) {
    this.cid = _.uniqueId('view');
    this._configure(options || {});
    this._ensureElement();
    this.initialize.apply(this, arguments);
    this.delegateEvents();
  };

  // Cached regex to split keys for `delegate`.
  var delegateEventSplitter = /^(\S+)\s*(.*)$/;

  // List of view options to be merged as properties.
  var viewOptions = ['model', 'collection', 'el', 'id', 'attributes', 'className', 'tagName'];

  // Set up all inheritable **Backbone.View** properties and methods.
  _.extend(View.prototype, Events, {

    // The default `tagName` of a View's element is `"div"`.
    tagName: 'div',

    // jQuery delegate for element lookup, scoped to DOM elements within the
    // current view. This should be prefered to global lookups where possible.
    $: function(selector) {
      return this.$el.find(selector);
    },

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){},

    // **render** is the core function that your view should override, in order
    // to populate its element (`this.el`), with the appropriate HTML. The
    // convention is for **render** to always return `this`.
    render: function() {
      return this;
    },

    // Remove this view from the DOM. Note that the view isn't present in the
    // DOM by default, so calling this method may be a no-op.
    remove: function() {
      this.$el.remove();
      return this;
    },

    // For small amounts of DOM Elements, where a full-blown template isn't
    // needed, use **make** to manufacture elements, one at a time.
    //
    //     var el = this.make('li', {'class': 'row'}, this.model.escape('title'));
    //
    make: function(tagName, attributes, content) {
      var el = document.createElement(tagName);
      if (attributes) $(el).attr(attributes);
      if (content) $(el).html(content);
      return el;
    },

    // Change the view's element (`this.el` property), including event
    // re-delegation.
    setElement: function(element, delegate) {
      if (this.$el) this.undelegateEvents();
      this.$el = (element instanceof $) ? element : $(element);
      this.el = this.$el[0];
      if (delegate !== false) this.delegateEvents();
      return this;
    },

    // Set callbacks, where `this.events` is a hash of
    //
    // *{"event selector": "callback"}*
    //
    //     {
    //       'mousedown .title':  'edit',
    //       'click .button':     'save'
    //       'click .open':       function(e) { ... }
    //     }
    //
    // pairs. Callbacks will be bound to the view, with `this` set properly.
    // Uses event delegation for efficiency.
    // Omitting the selector binds the event to `this.el`.
    // This only works for delegate-able events: not `focus`, `blur`, and
    // not `change`, `submit`, and `reset` in Internet Explorer.
    delegateEvents: function(events) {
      if (!(events || (events = getValue(this, 'events')))) return;
      this.undelegateEvents();
      for (var key in events) {
        var method = events[key];
        if (!_.isFunction(method)) method = this[events[key]];
        if (!method) throw new Error('Method "' + events[key] + '" does not exist');
        var match = key.match(delegateEventSplitter);
        var eventName = match[1], selector = match[2];
        method = _.bind(method, this);
        eventName += '.delegateEvents' + this.cid;
        if (selector === '') {
          this.$el.bind(eventName, method);
        } else {
          this.$el.delegate(selector, eventName, method);
        }
      }
    },

    // Clears all callbacks previously bound to the view with `delegateEvents`.
    // You usually don't need to use this, but may wish to if you have multiple
    // Backbone views attached to the same DOM element.
    undelegateEvents: function() {
      this.$el.unbind('.delegateEvents' + this.cid);
    },

    // Performs the initial configuration of a View with a set of options.
    // Keys with special meaning *(model, collection, id, className)*, are
    // attached directly to the view.
    _configure: function(options) {
      if (this.options) options = _.extend({}, this.options, options);
      for (var i = 0, l = viewOptions.length; i < l; i++) {
        var attr = viewOptions[i];
        if (options[attr]) this[attr] = options[attr];
      }
      this.options = options;
    },

    // Ensure that the View has a DOM element to render into.
    // If `this.el` is a string, pass it through `$()`, take the first
    // matching element, and re-assign it to `el`. Otherwise, create
    // an element from the `id`, `className` and `tagName` properties.
    _ensureElement: function() {
      if (!this.el) {
        var attrs = getValue(this, 'attributes') || {};
        if (this.id) attrs.id = this.id;
        if (this.className) attrs['class'] = this.className;
        this.setElement(this.make(this.tagName, attrs), false);
      } else {
        this.setElement(this.el, false);
      }
    }

  });

  // The self-propagating extend function that Backbone classes use.
  var extend = function (protoProps, classProps) {
    var child = inherits(this, protoProps, classProps);
    child.extend = this.extend;
    return child;
  };

  // Set up inheritance for the model, collection, and view.
  Model.extend = Collection.extend = Router.extend = View.extend = extend;

  // Backbone.sync
  // -------------

  // Map from CRUD to HTTP for our default `Backbone.sync` implementation.
  var methodMap = {
    'create': 'POST',
    'update': 'PUT',
    'delete': 'DELETE',
    'read':   'GET'
  };

  // Override this function to change the manner in which Backbone persists
  // models to the server. You will be passed the type of request, and the
  // model in question. By default, makes a RESTful Ajax request
  // to the model's `url()`. Some possible customizations could be:
  //
  // * Use `setTimeout` to batch rapid-fire updates into a single request.
  // * Send up the models as XML instead of JSON.
  // * Persist models via WebSockets instead of Ajax.
  //
  // Turn on `Backbone.emulateHTTP` in order to send `PUT` and `DELETE` requests
  // as `POST`, with a `_method` parameter containing the true HTTP method,
  // as well as all requests with the body as `application/x-www-form-urlencoded`
  // instead of `application/json` with the model in a param named `model`.
  // Useful when interfacing with server-side languages like **PHP** that make
  // it difficult to read the body of `PUT` requests.
  Backbone.sync = function(method, model, options) {
    var type = methodMap[method];

    // Default options, unless specified.
    options || (options = {});

    // Default JSON-request options.
    var params = {type: type, dataType: 'json'};

    // Ensure that we have a URL.
    if (!options.url) {
      params.url = getValue(model, 'url') || urlError();
    }

    // Ensure that we have the appropriate request data.
    if (!options.data && model && (method == 'create' || method == 'update')) {
      params.contentType = 'application/json';
      params.data = JSON.stringify(model.toJSON());
    }

    // For older servers, emulate JSON by encoding the request into an HTML-form.
    if (Backbone.emulateJSON) {
      params.contentType = 'application/x-www-form-urlencoded';
      params.data = params.data ? {model: params.data} : {};
    }

    // For older servers, emulate HTTP by mimicking the HTTP method with `_method`
    // And an `X-HTTP-Method-Override` header.
    if (Backbone.emulateHTTP) {
      if (type === 'PUT' || type === 'DELETE') {
        if (Backbone.emulateJSON) params.data._method = type;
        params.type = 'POST';
        params.beforeSend = function(xhr) {
          xhr.setRequestHeader('X-HTTP-Method-Override', type);
        };
      }
    }

    // Don't process data on a non-GET request.
    if (params.type !== 'GET' && !Backbone.emulateJSON) {
      params.processData = false;
    }

    // Make the request, allowing the user to override any Ajax options.
    return $.ajax(_.extend(params, options));
  };

  // Wrap an optional error callback with a fallback error event.
  Backbone.wrapError = function(onError, originalModel, options) {
    return function(model, resp) {
      resp = model === originalModel ? resp : model;
      if (onError) {
        onError(originalModel, resp, options);
      } else {
        originalModel.trigger('error', originalModel, resp, options);
      }
    };
  };

  // Helpers
  // -------

  // Shared empty constructor function to aid in prototype-chain creation.
  var ctor = function(){};

  // Helper function to correctly set up the prototype chain, for subclasses.
  // Similar to `goog.inherits`, but uses a hash of prototype properties and
  // class properties to be extended.
  var inherits = function(parent, protoProps, staticProps) {
    var child;

    // The constructor function for the new subclass is either defined by you
    // (the "constructor" property in your `extend` definition), or defaulted
    // by us to simply call the parent's constructor.
    if (protoProps && protoProps.hasOwnProperty('constructor')) {
      child = protoProps.constructor;
    } else {
      child = function(){ parent.apply(this, arguments); };
    }

    // Inherit class (static) properties from parent.
    _.extend(child, parent);

    // Set the prototype chain to inherit from `parent`, without calling
    // `parent`'s constructor function.
    ctor.prototype = parent.prototype;
    child.prototype = new ctor();

    // Add prototype properties (instance properties) to the subclass,
    // if supplied.
    if (protoProps) _.extend(child.prototype, protoProps);

    // Add static properties to the constructor function, if supplied.
    if (staticProps) _.extend(child, staticProps);

    // Correctly set child's `prototype.constructor`.
    child.prototype.constructor = child;

    // Set a convenience property in case the parent's prototype is needed later.
    child.__super__ = parent.prototype;

    return child;
  };

  // Helper function to get a value from a Backbone object as a property
  // or as a function.
  var getValue = function(object, prop) {
    if (!(object && object[prop])) return null;
    return _.isFunction(object[prop]) ? object[prop]() : object[prop];
  };

  // Throw an error when a URL is needed, and none is supplied.
  var urlError = function() {
    throw new Error('A "url" property or function must be specified');
  };

}).call(this);
window.Muzhi || (Muzhi = {});
window.application || (application = {});

window.application.init = function () {
    Muzhi.router = new Muzhi.Router();
    Backbone.history.start();
    linkfocus("a");
};
/*
 *宝贝列表翻页
 *
 *  caochun edit by 20120724,修复safari下,前进回退键到当前页面onscroll事件失效
 */


window.lazyload = {
    init:function (opt) {
        var that = this;
        that.img.init();
    },
    img:{
        trigger:function () {
            var that = this,
                src = that.op,
            isPhone = that.isPhone,
                eventType = isPhone && 'touchend' || 'scroll';
            if (that['prevlist']) {
                that['prevlist'].each(function (n, node) {
                    node && (node.onerror = node.onload = null);
                });
            }
            //console.log(that['prevlist']);
            that['imglist'] = $('img.lazy');
            that['prevlist'] = $(that['imglist'].concat());
            $(window).trigger(eventType);
        },
        init:function () {
            var that = this,
                minDist = 5,
                minTime = 200, //单位ms
                systemVer = navigator.appVersion.match(/(iPhone\sOS)\s([\d_]+)/),
                isPhone = systemVer && true || false,
                version = isPhone && systemVer[2].split('_');
            version = version && parseFloat(version.length > 1 ? version.splice(0, 2).join('.') : version[0], 10);
            isPhone = that.isPhone = isPhone && version < 6;
            if (isPhone) {  //针对ios6以内的版本,后退键回到页面不触发onscroll时，直接使用touch事件替代
                var touchLazy,
                    timerPhone;
                $(window).on('touchstart',function (ev) {
                    //var et = ev.changedTouches[0];
                    touchLazy = {
                        //sx : et.clientX,
                        sy:window.scrollY,
                        time:Date.now()
                    };
                    //$('#test')[0].innerHTML += 'starty:'+window.scrollY+'<br>';
                    timerPhone && clearTimeout(timerPhone);
                }).on('touchend',function (ev) {
                        if (ev && ev.changedTouches) {
                            var disty = Math.abs(window.scrollY - touchLazy.sy);
                            //distx = Math.abs(et.clientX - touchLazy.sx),
                            //$('#test')[0].innerHTML += 'endy:'+window.scrollY+'<br>';
                            if (disty > minDist) {/* && disty > distx*/
                                var timedist = Date.now() - touchLazy.time;
                                timerPhone = setTimeout(function () {
                                    that.changeimg();
                                    touchLazy = {};
                                    clearTimeout(timerPhone);
                                    timerPhone = null;
                                }, timedist > minTime ? 0 : 200);
                            }
                        }
                        else {
                            that.changeimg();
                        }
                    }).on('touchcancel', function () {
                        timerPhone && clearTimeout(timerPhone);
                        touchLazy = {};
                    });
            }
            else {
                $(window).on('scroll', function () {
                    that.changeimg();

                });
            }
            that.trigger();
        },

        _inViewport:function(el,threshold){
              var top = window.pageYOffset,
                    btm = window.pageYOffset + window.innerHeight,
                    elTop = el.offset().top;
                return elTop >= top && elTop + (threshold || -100) <= btm;
        },

        
        changeimg:function () {
            var that = this;
           
            function act(_self, n) {
                var original = _self.attr('dataimg');
                _self.attr('src', original);

                if (!_self[0].onload) {
                    _self[0].onload = function () {
                        $(this).removeClass('lazy').removeAttr('dataimg');
                        that['imglist'][n] = null;
                        this.onerror = this.onload = null;
                    }
                    _self[0].onerror = function () {
                        this.src = 'http://a.tbcdn.cn/mw/s/common/icons/nopic/no-90.png';
                        $(this).removeClass('lazy').removeAttr('dataimg');
                        that['imglist'][n] = null;
                        this.onerror = this.onload = null;
                    }
                }
            }



            var hasCommentItem = $('img.hascomment');
            if(hasCommentItem.length >0 && that._inViewport(hasCommentItem,20)){
                $(document.body).trigger("list:popcomment",[hasCommentItem]);
            }

            that['imglist'].each(function (index, node) {
                if (!node) return;
                var $this = $(node);
                if (!that._inViewport($this)) return
                act($this, index);

            });
        }
    }
};
var appVersion = navigator.appVersion,
    webkitTest = (/webkit/gi),
    androidTest = (/android/gi)
    ;

function addEvent(el) {
    el.addEventListener('touchend', ontouchend, false);
    el.addEventListener('touchmove', ontouchmove, false);
}

function removeEvent(el) {
    el.removeEventListener('touchend', ontouchend, false);
    el.removeEventListener('touchmove', ontouchmove, false);
}

function ontouchstart(e) {
    var el = this;
    addEvent(el);
}

function ontouchmove(e) {
    var el = this;
    removeEvent(el)
}

function ontouchend(e) {
    var el = this;

    el.className += ' c-linkfocus-active';

    setTimeout(function () {
        var className = el.className;
        el.className = className.replace(/c\-linkfocus\-active/g, '');
        removeEvent(el);
    }, 200);
}

function linkfocus(selector) {
    if (webkitTest.test(appVersion) && androidTest.test(appVersion)) {
        var ss = document.styleSheets[0];
        ss.addRule('*', '-webkit-tap-highlight-color:rgba(0,0,0,0);');

        if (selector !== false) {
            ss.addRule('.c-linkfocus', '-webkit-mask:none;');
            ss.addRule('.c-linkfocus-move', '-webkit-mask:none;');
            ss.addRule('.c-linkfocus-active', [
                'background:transparent!important;',
                'background-color:transparent!important;',
                '-webkit-mask-clip: content-box;',
                '-webkit-mask-origin: content;',
                '-webkit-mask-repeat: no-repeat;',
                '-webkit-border-radius: 3px;',
                '-webkit-mask-image: -webkit-gradient(linear, 0% 0%, 0% 100%, from(rgba(0,0,0,0.3)), to(rgba(0,0,0,0.3)));'
            ].join(''));

            //$(selector).addClass('c-linkfocus-active');

            if (typeof selector == 'string') {
                $(document).on('touchstart', selector || '*[class~="c-linkfocus"]', ontouchstart);
            } else if (typeof selector == 'object') {
                $(selector).on('touchstart', ontouchstart);
            }
        }
    }
}
;
var win = $(window),

    T_float = [
        '<div class="c-float-popWrap msgMode hide">',
        '<div class="c-float-modePop">',
        '<div class="warnMsg"></div>',
        '<div class="content"></div>',
        '</div>',
        '</div>'
    ].join(''),

    E_float = $(T_float),
    E_floatMsg = E_float.find('.warnMsg'),
    E_floatContent = E_float.find('.content'),

    initDom = false,
    domContainer = '#tbh5v0',
    flashTimeoutId
    ;

function ModePop(options) {
    this._options = $.extend({
        mode:'msg',
        text:'网页提示',
        useTap:false
    }, options || {});

    this._init();
}

$.extend(ModePop.prototype, {
    _init:function () {
        var that = this,
            opt = that._options,
            mode = opt.mode,
            text = opt.text,
            content = opt.content,
            callback = opt.callback,
            background = opt.background,
            clickEvent = opt.useTap ? 'tap' : 'click';
        ;

        // set mode
        var classTxt = E_float.attr('class');
        classTxt = classTxt.replace(/(msg|alert|confirm)Mode/i, mode + 'Mode');
        E_float.attr('class', classTxt);

        // set background
        background && E_float.css('background', background);

        // set text & content
        text && E_floatMsg.html(text);
        content && E_floatContent.html(content);


        if (!initDom) {
            initDom = true;
            $(domContainer).append(E_float);            
            win.on('resize', function () {
                setTimeout(function () {
                    that._pos();
                }, 500);
            });
        }
    },

    _pos:function () {
        var that = this,
            doc = document,
            docEl = doc.documentElement,
            body = doc.body,
            top, left, cW, cH, eW, eH
            ;

        if (!that.isHide()) {
            top = body.scrollTop;
            left = body.scrollLeft;
            cW = docEl.clientWidth;
            cH = docEl.clientHeight;
            eW = E_float.width();
            eH = E_float.height();

            E_float.css({
                top:top + (cH - eH) / 2,
                left:left + (cW - eW) / 2
            });
        }
    },

    isShow:function () {
        return E_float.hasClass('show');
    },

    isHide:function () {
        return E_float.hasClass('hide');
    },

    _cbShow:function () {
        var that = this,
            opt = that._options,
            onShow = opt.onShow
            ;

        E_float.css('opacity', '1').addClass('show');
        onShow && onShow.call(that);
    },


    show:function () {
        var that = this
            ;

        if (flashTimeoutId) {
            clearTimeout(flashTimeoutId);
            flashTimeoutId = undefined;
        }

        if (!that.isShow()) {

            E_float.css('opacity', '0').removeClass('hide');
            that._pos();

            setTimeout(function () {
                that._cbShow();
            }, 300);
            setTimeout(function () {
                E_float.animate({'opacity':'1'}, 300, 'linear');
            }, 1);

        } else {
            that._cbShow();
        }
    },

    _cbHide:function () {
        var that = this,
            opt = that._options,
            onHide = opt.onHide
            ;

        E_float.css('opacity', '0').addClass('hide');
        onHide && onHide.call(that);
    },

    hide:function () {
        var that = this
            ;

        if (!that.isHide()) {
            E_float.css('opacity', '1').removeClass('show');

            setTimeout(function () {
                that._cbHide();
            }, 300);
            setTimeout(function () {
                E_float.animate({'opacity':'0'}, 300, 'linear');
            }, 1);

        } else {
            that._cbHide();
        }
    },

    flash:function (timeout) {
        var that = this
        opt = that._options
        ;

        opt.onShow = function () {
            flashTimeoutId = setTimeout(function () {
                if (flashTimeoutId) {
                    that.hide();
                }
            }, timeout);
        }

        that.show();
    }
});

window.notification = new function () {

    this.flash = function (text, bg, timeout) {
        if (arguments.length == 2) {
            if (typeof arguments[1] == 'number') {
                timeout = arguments[1];
                bg = undefined;
            }
        }

        var pop = new ModePop({
            mode:'msg',
            text:text,
            background:bg
        });

        pop.flash(timeout || 2000);
        return pop;
    }


};
 window.PageNav = function Page(options) {
        this.init(options);
    }

 PageNav.prototype = {
        setIndex:function (pageIndex) {
            var _self = this;
            pageIndex = Number(pageIndex);
            if (isNaN(pageIndex)) {
                pageIndex = 1;
            }
            if (pageIndex > _self.pageCount) {
                pageIndex = _self.pageCount;
            }
            if (pageIndex <= 0) {
                pageIndex = 1;
            }
            _self.index = pageIndex;
            _self.renderPage();
        },
        init:function (options) {
            if (!this.$container) {
                this.$container = $(options.id);
            }
            this.index = Number(options.index ? options.index : 1);
            this.pageCount = Number(options.pageCount ? options.pageCount : 1);
            this.preFix = options.preFix ? options.preFix : '!page/';
            this.objId = options.objId ? options.objId : 'Z';    //单页面单控件显示'Z'
            this.disableHash = options.disableHash//hash不变功能支持
            this.oldIndex = -1;                 //避免部分android机器select相同选择也会触发change事件
            var length = this.preFix.toString().length;
            if (this.preFix[length - 1] != '/') {
                this.preFix += '/';
            }

            if (isNaN(this.index)) {
                this.index = 1;
            }
            if (this.index > this.pageCount) {
                this.index = this.pageCount;
            }
            if (this.index <= 0) {
                this.index = 1;
            }
            this.createDom();
            this.eventAttach();
            this.parseHash();
            this.renderPage();

        },
        parseHash:function () {
            //获取hash(一个页面多个分页控件)
            var _self = this,
                hashValue = location.hash,
                currHash = hashValue.substr(hashValue.lastIndexOf('/') + 1),
                hashArr = [],
                index = 0,
                mixArr = [];

            hashArr = currHash.split('-');

            for (var i = 0; i < hashArr.length; i++) {
                mixArr = hashArr[i].split('');
                var objId = mixArr.shift();
                if (objId == this.objId) {
                    index = Number(mixArr.join(''));
                    if (isNaN(index) || index <= 0) {
                        _self.index = 1;
                    }
                    if (index > _self.pageCount) {
                        _self.index = _self.pageCount;
                    }

                    _self.index = index;
                }
            }
        },
        setContainer:function (containerId) {
            this.$container = $(containerId);
        },
        getObjId:function () {
            return this.objId;
        },
        changeHash:function () {
            var _self = this,
                hashVal = location.hash;
            if (hashVal == '') {
                location.hash = _self.preFix + '-' + _self.objId + _self.index;
            }
            else {
                var begin = hashVal.lastIndexOf(_self.objId),
                    end = begin;
                if (begin == -1) {
                    location.hash += '-' + _self.objId + _self.index;
                }
                else {
                    while (true) {
                        end++;
                        if (hashVal[end] == '-' || !hashVal[end]) break;
                    }
                    hashVal = hashVal.replace(hashVal.substring(begin, end), _self.objId + _self.index);
                    location.hash = hashVal;
                }
            }
        },
        createDom:function () {

            var _self = this;
            _self.$container.empty();
            var htmlArr = [
                '<section class="c-p-sec">',
                '<div class="c-p-pre">',
                '<span class="c-p-p">',
                '<em></em>',
                '</span><a>上一页</a>',
                '</div>',
                '<div class="c-p-cur">',
                '<div class="c-p-arrow c-p-down"><span></span><span></span></div>',
                '<select class="c-p-select">',
                '</select></div>',
                '<div class="c-p-next">',
                '<a>下一页</a><span class="c-p-p">',
                '<em></em>',
                '</span>',
                '</div>',
                '</section>'
            ];
            _self.$container.html(htmlArr.join(''));

            $('select', _self.$container).empty();
            htmlArr = [];
            for (var index = 1; index <= _self.pageCount; index++) {
                htmlArr[index - 1] = '<option>第' + index + '页</option>';
            }
            $('select', _self.$container).append(htmlArr.join(''));

        },
        renderPage:function () {
            var _self = this,
                selectLen = $('option', _self.$container).length ,
                $lastPage = $('.c-p-pre', _self.$container),
                $nextPage = $('.c-p-next', _self.$container);

            if (selectLen <= 1) {
                $lastPage.addClass('c-p-grey');
                $nextPage.addClass('c-p-grey');
                selectLen = 1;
            }
            else {
                if (_self.index == 1) {
                    $lastPage.addClass('c-p-grey');
                    if (selectLen > 1) {
                        $nextPage.removeClass('c-p-grey');
                    }
                }
                else if (_self.index == selectLen) {
                    $nextPage.addClass('c-p-grey');
                    if (selectLen > 1) {
                        $lastPage.removeClass('c-p-grey');
                    }
                }
                else {
                    if (_self.index > 1 && _self.index < selectLen) {
                        $lastPage.removeClass('c-p-grey');
                        $nextPage.removeClass('c-p-grey');
                    }
                }
            }

            var pageText = _self.index + '/' + selectLen;
            $('.c-p-arrow span:first-child', _self.$container).text(pageText);
            $('select', _self.$container).get(0).selectedIndex = this.index - 1;

            $lastPage = null;
            $nextPage = null;
        },
        //解绑定完全可以有更优雅的方式，涉及应用有点多，挫了。。。
        eventDetach:function () {
            var _self = this,
                $$container = $(_self.$container);
            //Modify arrow.
            $$container.undelegate('select', 'mousedown', _self.modifyArr);

            $$container.undelegate('select', 'blur', _self.blur);

            //last page
            //此种方式修改为了修复ios下的焦点反馈变大问题。改动最小。。
            $$container.find('.c-p-pre').undelegate('a', 'click', _self.lastPage);

            //next page
            $$container.find('.c-p-next').undelegate('a', 'click', _self.nextPage);

            //select change.
            $$container.undelegate('select', 'change', _self.selectChange);

            $$container = null;
        },
        eventAttach:function () {
            var _self = this,
                $$container = $(_self.$container);
            //Modify arrow.
            $$container.delegate('select', 'mousedown', _self.modifyArr = function (e) {
                //修改箭头
                $('.c-p-arrow', _self.$container).removeClass('c-p-down').addClass('c-p-up');
            });

            $$container.delegate('select', 'blur', _self.blur = function (e) {
                //修改箭头
                $('.c-p-arrow', _self.$container).removeClass('c-p-up').addClass('c-p-down');
            });

            //last page
            $$container.find('.c-p-pre').delegate('a', 'click', _self.lastPage = function (e) {
                e.preventDefault();

                if ($(this).parent().hasClass('c-p-grey')) {
                    return false;
                }
                else {
                    _self.index--;
                    _self.renderPage();

                    if (!_self.disableHash) {
                        //锚点
                        _self.changeHash();
                    }
                    else {
                        _self.$container.trigger('P:switchPage', {index:_self.index,type:'pre'});
                    }
                }

                _self.oldIndex = _self.index;

            });

            //next page
            $$container.find('.c-p-next').delegate('a','click', _self.nextPage = function (e) {
                e.preventDefault();

                if ($(this).parent().hasClass('c-p-grey')) {
                    return false;
                }
                else {
                    _self.index++;
                    _self.renderPage();


                    if (!_self.disableHash) {
                        //锚点
                        _self.changeHash();
                    }
                    else {
                        _self.$container.trigger('P:switchPage', {index:_self.index,type:'next'});
                    }
                }
                _self.oldIndex = _self.index;
            });

            //select change.
            $$container.delegate('select', 'change', _self.selectChange = function () {
                _self.index = $(this).get(0).selectedIndex + 1;
                if (_self.oldIndex == _self.index) {
                    return;
                }
                _self.renderPage();
                //修改箭头
                $('.c-p-arrow', _self.$container).removeClass('c-p-up').addClass('c-p-down');

                if (!_self.disableHash) {
                    //锚点
                    _self.changeHash();
                }
                else {
                    _self.$container.trigger('P:switchPage', {index:_self.index,type:'select'});
                }

                _self.oldIndex = _self.index;
            });
        },
        pContainer:function () {
            return this.$container;
        }
    };
/*
 * Swipe 1.0
 *
 * Brad Birdsall, Prime
 * Copyright 2011, Licensed GPL & MIT
 *
*/


window.Swipe = function(element, options) {

  // return immediately if element doesn't exist
  if (!element) return null;

  var _this = this;

  // retreive options
  this.options = options || {};
  this.index = this.options.startSlide || 0;
  this.speed = this.options.speed || 300;
  this.callback = this.options.callback || function() {};
  this.delay = this.options.auto || 0;
  this.vertical = !!this.options.vertical;
  this.preload = this.options.preload;
  this.lazyloadClass = this.options.lazyloadClass || 'lazy';
  this.lazyloadDataAttr = this.options.lazyloadDataAttr || 'src';
  this.fixWidth = this.options.fixWidth;  //not to calculate the container width

  // reference dom elements
  this.container = element;
  this.element = this.container.children[0]; // the slide pane

  // static css
  this.container.style.overflow = 'hidden';
  this.element.style.listStyle = 'none';
  this.element.style.margin = 0;

  // trigger slider initialization
  this.setup();

  // begin auto slideshow
  this.begin();

  // add event listeners
  if (this.element.addEventListener) {
    this.element.addEventListener('touchstart', this, false);
    this.element.addEventListener('touchmove', this, false);
    this.element.addEventListener('touchend', this, false);
    this.element.addEventListener('webkitTransitionEnd', this, false);
    this.element.addEventListener('msTransitionEnd', this, false);
    this.element.addEventListener('oTransitionEnd', this, false);
    this.element.addEventListener('transitionend', this, false);
    window.addEventListener('resize', this, false);
  }

};

Swipe.prototype = {

  setup: function() {

    // get and measure amt of slides
    this.slides = this.element.children;
    this.length = this.slides.length;

    // return immediately if their are less than two slides
    if (this.length < 2) return null;

    // determine width of each slide

    this.width = this.fixWidth || (Math.ceil(("getBoundingClientRect" in this.container) ? this.container.getBoundingClientRect().width : this.container.offsetWidth));

    // return immediately if measurement fails
    if (!this.width) return null;

    // hide slider element but keep positioning during setup
    this.container.style.visibility = 'hidden';

    // dynamic css
    if (this.vertical) {
      this.element.style.height = Math.ceil(this.slides.length * 60) + 'px';
    } else {
      this.element.style.width = Math.ceil(this.slides.length * this.width) + 'px';
      var index = this.slides.length;
      while (index--) {
        var el = this.slides[index];
        el.style.width = this.width + 'px';
        el.style.display = 'table-cell';
        el.style.verticalAlign = 'top';
      }
    }


    // set start position and force translate to remove initial flickering
    this.slide(this.index, 0);

    // show slider element
    this.container.style.visibility = 'visible';

  },

  slide: function(index, duration) {

    var style = this.element.style;

    // fallback to default speed
    if (duration == undefined) {
        duration = this.speed;
    }

    // set duration speed (0 represents 1-to-1 scrolling)
    style.webkitTransitionDuration = style.MozTransitionDuration = style.msTransitionDuration = style.OTransitionDuration = style.transitionDuration = duration + 'ms';

    // translate to given index position
    if (this.vertical) {
      style.MozTransform = style.webkitTransform = 'translate3d(0, ' + -(index * 60) + 'px,0)';
      //style.msTransform = style.OTransform = 'translateX(' + -(index * this.width) + 'px)';
    } else {
      style.MozTransform = style.webkitTransform = 'translate3d(' + -(index * this.width) + 'px,0,0)';
      style.msTransform = style.OTransform = 'translateX(' + -(index * this.width) + 'px)';
    }

    // set new index to allow for expression arguments
    this.index = index;

    if (this.vertical) {
      if (this.index < 0) this.index = 0;
      if (this.index > this.length - 4) this.index = this.length - 4;
      style.MozTransform = style.webkitTransform = 'translate3d(0, ' + -(this.index * 60) + 'px,0)';
    }

  },

  getPos: function() {

    // return current index position
    return this.index;

  },

  prev: function(delay) {

    // cancel next scheduled automatic transition, if any
    this.delay = delay || 0;
    clearTimeout(this.interval);

    // if not at first slide
    if (this.index) this.slide(this.index-1, this.speed);

  },

  next: function(delay) {

    // cancel next scheduled automatic transition, if any
    this.delay = delay || 0;
    clearTimeout(this.interval);

    if (this.index < this.length - 1) this.slide(this.index+1, this.speed); // if not last slide
    else this.slide(0, this.speed); //if last slide return to start

  },

  begin: function() {

    var _this = this;

    this.interval = (this.delay)
      ? setTimeout(function() {
        _this.next(_this.delay);
      }, this.delay)
      : 0;

  },

  stop: function() {
    this.delay = 0;
    clearTimeout(this.interval);
  },

  resume: function() {
    this.delay = this.options.auto || 0;
    this.begin();
  },

  load: function() {
    if (!this.preload) return;
    var self = this;

    for (var i = 0; i < this.preload; i++) {
      (function() {
        if (self.index + i < self.length) {
          var slide = self.slides[self.index + i];
          if (!slide.getAttribute('loaded')) self._loadImages(slide);
        }
      })()
    }
  },

  _loadImages: function(slide) {
    var images = slide.querySelectorAll('img.' + this.lazyloadClass);
    for (var i = 0; i < images.length; i++) {
      (function() {
        var j = i, img = new Image;
        img.onload = function() {
          images[j].src = this.src;
          slide.setAttribute('loaded', true);
        };
        // TODO img.onerror for 404s
        img.src = images[i].getAttribute('data-' + this.lazyloadDataAttr);
      }).call(this);
    }
  },

  handleEvent: function(e) {
    switch (e.type) {
      case 'touchstart': this.onTouchStart(e); break;
      case 'touchmove': this.onTouchMove(e); break;
      case 'touchend': this.onTouchEnd(e); break;
      case 'webkitTransitionEnd':
      case 'msTransitionEnd':
      case 'oTransitionEnd':
      case 'transitionend': this.transitionEnd(e); break;
      case 'resize': this.setup(); break;
    }
  },

  transitionEnd: function(e) {

    if (this.preload) this.load();

    if (this.delay) this.begin();

    this.callback(e, this.index, this.slides[this.index]);

  },

  onTouchStart: function(e) {

    this.start = {

      // get touch coordinates for delta calculations in onTouchMove
      pageX: e.touches[0].pageX,
      pageY: e.touches[0].pageY,

      // set initial timestamp of touch sequence
      time: Number( new Date() )

    };

    // used for testing first onTouchMove event
    this.isScrolling = undefined;

    // reset deltaX
    this.deltaX = 0;
    this.deltaY = 0;

    // set transition time to 0 for 1-to-1 touch movement
    this.element.style.MozTransitionDuration = this.element.style.webkitTransitionDuration = 0;

    e.stopPropagation();
  },

  onTouchMove: function(e) {

    // ensure swiping with one touch and not pinching
    if(e.touches.length > 1 || e.scale && e.scale !== 1) return;

    this.deltaX = e.touches[0].pageX - this.start.pageX;
    this.deltaY = e.touches[0].pageY - this.start.pageY;

    // determine if scrolling test has run - one time test
    if ( typeof this.isScrolling == 'undefined') {
      this.isScrolling = !!( this.isScrolling || Math.abs(this.deltaX) < Math.abs(e.touches[0].pageY - this.start.pageY) );
    }

    // if user is not trying to scroll vertically
    if (!this.isScrolling && !this.vertical) {

      // prevent native scrolling
      e.preventDefault();

      // cancel slideshow
      clearTimeout(this.interval);

      // increase resistance if first or last slide
      this.deltaX =
        this.deltaX /
          ( (!this.index && this.deltaX > 0               // if first slide and sliding left
            || this.index == this.length - 1              // or if last slide and sliding right
            && this.deltaX < 0                            // and if sliding at all
          ) ?
          ( Math.abs(this.deltaX) / this.width + 1 )      // determine resistance level
          : 1 );                                          // no resistance if false

      // translate immediately 1-to-1
      this.element.style.MozTransform = this.element.style.webkitTransform = 'translate3d(' + (this.deltaX - this.index * this.width) + 'px,0,0)';

      e.stopPropagation();

    }

    if (this.vertical) {

      e.preventDefault();

      clearTimeout(this.interval);

      this.deltaY =
        this.deltaY /
          ( (!this.index && this.deltaY > 0               // if first slide and sliding left
            || this.index == this.length - 4              // or if last slide and sliding right
            && this.deltaY < 0                           // and if sliding at all
          ) ?
          ( Math.abs(this.deltaY) / 60 + 1 )      // determine resistance level
          : 1 );                                          // no resistance if false

      // translate immediately 1-to-1
      this.element.style.MozTransform = this.element.style.webkitTransform = 'translate3d(0, ' + (this.deltaY - this.index * 60) + 'px,0)';

      e.stopPropagation();
    }

  },

  onTouchEnd: function(e) {

    // determine if slide attempt triggers next/prev slide
    var isValidSlide =
          Number(new Date()) - this.start.time < 250      // if slide duration is less than 250ms
          && Math.abs(this.deltaX) > 20                   // and if slide amt is greater than 20px
          || Math.abs(this.deltaX) > this.width/2,        // or if slide amt is greater than half the width

    // determine if slide attempt is past start and end
        isPastBounds =
          !this.index && this.deltaX > 0                          // if first slide and slide amt is greater than 0
          || this.index == this.length - 1 && this.deltaX < 0;    // or if last slide and slide amt is less than 0

    if (this.vertical) {
      isValidSlide = Number(new Date()) - this.start.time < 250
          && Math.abs(this.deltaY) > 20
          || Math.abs(this.deltaY) > this.width/2;

      isPastBounds =
          !this.index && this.deltaY > 0
          || this.index == this.length - 4 && this.deltaY < 0;
    }

    // if not scrolling vertically
    if (!this.isScrolling && !this.vertical) {

      // call slide function with slide end value based on isValidSlide and isPastBounds tests
      this.slide( this.index + ( isValidSlide && !isPastBounds ? (this.deltaX < 0 ? 1 : -1) : 0 ), this.speed );

    }

    if (this.vertical) {

      var deltai = Math.ceil(Math.abs(this.deltaY) / 60);
      this.slide( this.index + ( isValidSlide && !isPastBounds ? (this.deltaY < 0 ? deltai : -deltai) : 0 ), this.speed );

    }

    e.stopPropagation();
  },

  destroy:function(){
        this.element.removeEventListener('touchstart', this);
        this.element.removeEventListener('touchmove', this);
        this.element.removeEventListener('touchend', this);
        this.element.removeEventListener('webkitTransitionEnd', this);
        this.element.removeEventListener('msTransitionEnd', this);
        this.element.removeEventListener('oTransitionEnd', this);
        this.element.removeEventListener('transitionend', this);
  }

};
/**
 * 简化 h5APi 的调用
 * 前提：
 *   调用之前当前文档必须包含一个J_app_key的AppKey隐藏字段
 * 一般直接调用
 * getApi(
 *     api, 如：mtop.logistic.getlogisticbyorder
 *      v, 1.0
 *      data,  {'orderId':148697349962715}
 *  extParam,  {'pds':'seeflow#order'}
 *  callback,
 *  errorback
 * );
 *
 */


/*===========h5 base ==========*/

function h5_base() {
    var exports = {};///返回对象


    //paramKey
    exports.paramKey = 'paramKey';
    exports.targetUrl = 'targetUrl';
    //userinfoKey
    exports.userInfoKey = 'userInfoKey';
    //href hash
    exports.hrefHash = 'hrefHashKey';

    // for token
    exports.appKey = 'app_key';
    exports.appToken = 'app_token';
    exports.appRefreshToken = 'app_ref_token';
    exports.appTokenExpired = 'app_token_expired';
    exports.appTokenBetween = 'app_token_between';
    exports.appRequestFailed = 'app_request_failed_tag';


    // Extend a given object with all the properties in passed-in object(s).
    function extend(obj) {
        var args = Array.prototype.slice.call(arguments, 1);
        for (var i = 0, len = args.length; i < len; i++) {
            for (var prop in args[i]) {
                obj[prop] = args[i][prop];
            }
        }
        return obj;
    }

    ;


    exports.useLocalstorage = useLocalstorage = window.localStorage != null;

    //类似于map的set方法，如果value不是string对象，会用JSON.stringify转化为string，存储到本地
    exports.set = function (key, value) {
        if (useLocalstorage) {
            if (typeof (value) != "string") {
                value = JSON.stringify(value);
                // JSON.parse
            }
            ;
            window.localStorage.setItem(key, value);
            return true;
        }
        return false;
    }

    exports.add = function (key, value) {
        if (useLocalstorage) {
            if (typeof (value) == "string") {
                value = JSON.parse(value);
            } else {
                // JSON.parse
                try {
                    extend(value, JSON.parse(getValue(key)));
                } catch (e) {
                    console.log(e);
                }
                value = JSON.stringify(value);
            }
            window.localStorage.setItem(key, value);
            return true;
        }
        return false;
    }

    //简单的做了一个window.localStorage.getItem 映射
    exports.get = getValue = function (key) {
        if (useLocalstorage) {
            return window.localStorage.getItem(key);
        }
        return null;
    }

    //简单的做了一个window.localStorage.getItem 映射
    exports.removeValue = function (key) {
        if (useLocalstorage) {
            return window.localStorage.removeItem(key);
        }
    }
    //清除所有localStorage
    exports.clearAll = function () {
        if (useLocalstorage) {
            return window.localStorage.clear();
        }
    }


    //获取指定参数值
    exports.getParamFromStorage = function (key) {
        try {
            return JSON.parse(this.get(this.paramKey))[key];
        }
        catch (ex) {
            //
        }
        return null;

    }

    //获取指定参数值
    exports.getUserProFromStorage = function (pro) {
        try {
            return JSON.parse(this.get(this.userInfoKey))[pro];
        }
        catch (ex) {
            //
        }
        return null;
    }
    //当前时间与服务器当前时间比较
    exports.getBetweenTime = function (currentSeverTime) {
        return  (new Date()).getTime() - currentSeverTime;

    }

    exports.checkIsBlank = function (s) {
        return null == s || '' == s;
    }

    //判断是否登录

    exports.isLogin = function () {
        var nick = this.getUserProFromStorage('nick');

        if (nick == '' || nick == null) {
            return false;
        }
        else {
            return true;
        }
    }
    return exports;
}


/*=======end h5_base =======*/




/*======== config=======*/
function _checkSysType() {
    var _checkSysType = 'wapa';
    if (window.location.host == 'localhost' || window.location.host.match('.*\\waptest\\.(taobao|tmall|etao|alibaba|alipay|aliyun)\\.com.*')) {
        _checkSysType = 'waptest';
    } else if (window.location.host.match('.*\\wapa\\.(taobao|tmall|etao|alibaba|alipay|aliyun)\\.com.*')) {
        _checkSysType = 'wapa';
    }
    else if (window.location.host.match('.*\\m\\.(taobao|tmall|etao|alibaba|alipay|aliyun)\\.com.*')) {
        _checkSysType = 'm';
    }
    return _checkSysType;
}

/*======= end config =======*/
/*======== uri =======*/
function uriMod() {

    var tbh5 = h5_base();

    var exports = {};///返回对象


    // configure options for M\WAPA\WAPTEST
    exports.uri = {
        protocol:'http://',
        sysType:_checkSysType() || 'm',
        defaultDomain:'taobao'
    };

    var _domainWhiteList = ['taobao', 'tmall', 'etao', 'alibaba', 'alipay'];
    var _Domainholder = '${_serverDomain}';
    // waptest/wapa/m/wap.${_serverDomain}.com
    exports._serverHost = exports.uri.sysType + '.' + _Domainholder + '.com';

    // sub uri , can be extended
    exports.subUri = {
        index:exports.uri.protocol + exports._serverHost,
        // you can add ur uri here
    };

    // sid & tt & default url query str
    exports.ttQueryStr = "";

    // load
    try {
        var defaultParams = JSON.parse(tbh5.get(tbh5.userInfoKey) || '{}') || {};
        var sid = defaultParams.sid;
        if (null != sid && '' != sid) {
            exports.ttQueryStr += ('sid=' + sid);
        }
        var paramKeyValues = JSON.parse(tbh5.get(tbh5.paramKey) || '{}') || {};
        if (paramKeyValues.ttid && '' != paramKeyValues.ttid) {
            exports.ttQueryStr += ("&ttid=" + paramKeyValues.ttid);
        }

        //		console.log(exports.ttQueryStr);
    } catch (e) {
        // do nothing
    }

    // ~~~ exportsort function begin ~~~

    /**
     * render tool: sub uri
     * @uri        [must]exports.subUri, you can add new configuration or extends this module to define new subUri
     * @target    [optional]pageName, just like 'index.htm'
     * @param    [optional]json value, url param, just like {param1:'value1', param2:'value2'}
     * @path        [optional]url path, no need the first and the last '/', just like 'subPath1/subPath2/subPath3'
     * @domain    [optional]domainName, just like 'tmall', default is ${exports.uri.defaultDomain}
     *
     * you can use like :
     - URI_MODULE.renderURI(URI_MODULE.subUri.shopHost, 'shop_index.htm', {'shopId':1688},'shop','tmall');
     - URI_MODULE.renderURI(URI_MODULE.subUri.shopHost, 'shop_index.htm', {'shopId':1688},'shop');
     - URI_MODULE.renderURI(URI_MODULE.subUri.shopHost, 'shop_index.htm', {'shopId':1688});
     - URI_MODULE.renderURI(URI_MODULE.subUri.shopHost, 'shop_index.htm');
     - URI_MODULE.renderURI(URI_MODULE.subUri.shopHost);
     *
     * error : URI_MODULE.renderURI();
     */
    exports.renderURI = function (uri, target, param, path, domain) {
        return _render(buildUrl(_getServerHost(uri, domain), target, param, path));
    }

    /**
     * render tool: domain
     * @target    [optional]pageName, just like 'index.htm'
     * @param    [optional]json value, url param, just like {param1:'value1', param2:'value2'}
     * @path        [optional]url path, no need the first and the last '/', just like 'subPath1/subPath2/subPath3'
     * @domain    [optional]domainName, just like 'tmall', default is ${exports.uri.defaultDomain}
     *
     * you can use like :
     - URI_MODULE.renderDomain('a.htm',{'a':3},'subPath','etao');
     - URI_MODULE.renderDomain('a.htm',{'a':3},'subPath');
     - URI_MODULE.renderDomain('a.htm',{'a':3});
     - URI_MODULE.renderDomain('a.htm'));
     - URI_MODULE.renderDomain();
     */
    exports.renderDomain = function (target, param, path, domain) {
        return _render(buildUrl(_getServerHost(exports.subUri.index, domain), target, param, path));
    }

    /**
     * render tool: server
     * @target    [optional]pageName, just like 'index.htm'
     * @param    [optional]json value, url param, just like {param1:'value1', param2:'value2'}
     * @path        [optional]url path, no need the first and the last '/', just like 'subPath1/subPath2/subPath3'
     * @server    [must]base url, like 'http://www.taobao.com/juhuasuan'
     *
     * you can use like :
     - URI_MODULE.renderServer('detail.htm',{'id':3},'s1/s2','http://m.etao.com');
     - URI_MODULE.renderServer('detail.htm',{'id':3},'','http://m.etao.com/s1/s2');
     - URI_MODULE.renderServer('detail.htm',{},'','http://m.etao.com');
     - URI_MODULE.renderServer('',{},'','http://m.etao.com');
     *
     * error : URI_MODULE.renderServer('detail.htm',{'id':3},'s1/s2');
     */
    exports.renderServer = function (target, param, path, server) {
        return _render(buildUrl(server, target, param, path));
    }

    // encode
    exports.encode = function (v) {
        return encodeURI(v);
    }

    // getStrParamFromJson
    exports.getStrParamFromJson = function (j) {
        return _getJsonStr(j);
    }

    // createURI for extends
    exports.createURI = function (name) {
        if (name === 'home') {
            return exports.uri.protocol + exports._serverHost;
        } else {
            return exports.uri.protocol + name + '.' + exports._serverHost;
        }
    }

    // ~~~ exportsort function end ~~~ //

    // --- private _method begin ---

    // add default queryString to url
    function _render(url) {
        if (null != exports.ttQueryStr && '' != exports.ttQueryStr) {
            var m = url.match("\\.[a-zA-Z]+\\?");
            if (null != m && 0 < m.length) {
                if (url.indexOf('?') == (url.length - 1)) {
                    url = url + exports.ttQueryStr;
                } else {
                    url = url + '&' + exports.ttQueryStr;
                }
            } else {
                url = url + '?' + exports.ttQueryStr;
            }

            console.log("render:", url);
        }

        return url;
    }

    // build url
    function buildUrl(base, target, param, folder) {
        if (!_checkIsBlank(folder)) {
            base += ('/' + folder);
        }

        if (!_checkIsBlank(target)) {
            base += ('/' + target);
        }

        var havParam = false;
        if (null != param) {
            for (var k in param) {
                if (null != param[k]) {
                    havParam = true;
                    break;
                }
            }
        }

        if (havParam) {
            base += ('?' + _getJsonStr(param));
        }
        return base;
    }

    // check domain is ok or not
    function _checkDomain(domain) {
        if (_checkIsBlank(domain)) {
            return false;
        }

        for (var i = 0; i < _domainWhiteList.length; i++) {
            if (_domainWhiteList[i].toLowerCase() == domain.toLowerCase()) {
                return true;
            }
        }

        return false;
    }

    function _checkIsBlank(s) {
        return tbh5.checkIsBlank(s);
    }

    // get server host, replace ${PlaceHolder} with domain
    function _getServerHost(host, domain) {
        return host.replace(_Domainholder, function () {
            if (!_checkDomain(domain)) {
                return exports.uri.defaultDomain;
            } else {
                return domain;
            }
        });
    }

    // change json object to json string
    function _getJsonStr(j) {
        var s = '';
        if (null == j) {
            return s;
        }

        for (var k in j) {
            if (null != j[k] && '' != j[k]) {
                s += (k + '=' + encodeURIComponent(j[k]) + '&');
            }
        }

        if ('' != s && (s.length - 1) == s.lastIndexOf('&')) {
            s = s.substr(0, s.length - 1);
        }

        return s;
    }

    // --- private method end --- //

    return exports;
}


/*======= end uri =======*/


function mtop_h5() {
    var exports = {};//返回对象

    // require module
    var tbh5 = h5_base();
    var uri = uriMod();

    // app key is stored pre step, for example : loading page
    var app_key_id = 'J_app_key';
    var apiType = 'h5Api.do';

    // ~~~ public method begin ~~~

    /**
     * get first token
     * @v            : version ,default is '1.0'
     * @successback    : success method
     * @errorback    : error method
     */
    exports.getFirstToken = function (v, successback, errorback) {
        var extParam = {};
        extParam.api = 'mtop.auth.h5.getFirstToken2';
        extParam.v = v || "1.0";
        extParam.appKey = document.getElementById(app_key_id).value;
        extParam.t = (new Date()).getTime();
        //get URL
        var firstTokenUrl = _addJsonParam(uri.renderURI(uri.createURI('api'), apiType, extParam, 'rest'));

        $.ajax({
            type:'GET',
            url:firstTokenUrl,
            success:function (result) {
                var ret = (result.ret ? result.ret : "").toString();
                if (-1 != ret.indexOf('SUCCESS::')) {
                    _saveNewToken(result);
                }
                // callback
                if (successback) {
                    successback(result);
                }
            },
            error:function (error) {
                console.log('getFirstToken ajax error.');
                if (errorback) {
                    errorback(error);
                }
            }
        });
    }

    /**
     *H5 mtop 接口
     * 主流程：
     * 1、判断本地token是否存在或是否超时；如是则调用getFirstToken获取token，然后调用业务接口
     * 否则直接调用业务接口
     * 2、如果业务接口调用失败，清除本地token，返回失败
     *
     */
    exports.getApi = function (api, v, data, extParam, callback, errorback) {

        extParam.api = api;
        extParam.v = v || "*";
        extParam.data = typeof (data) == "string" ? data : JSON.stringify(data);

        var url = uri.renderURI(uri.createURI('api'), apiType, extParam, 'rest');

        var app_key = document.getElementById(app_key_id).value;

        //     console.log("request url="+url);
        //判断是否调用取得firstToken
        if (_isgetFirstToken()) {
            // no token , to error page
            //        console.log('need invoke getFirstToken');
            exports.getFirstToken('1.0',
                function (result) {
                    var ret = (result.ret ? result.ret : "").toString();
                    //如果成功发送请求
                    if (-1 != ret.indexOf('SUCCESS::')) {
                        //invoke biz api,直接使用返回结果的token
                        _send(url, app_key, result.data.token.token, extParam.data, callback, errorback);
                    }
                    else {
                        if (callback) {
                            callback(result);
                        }
                    }
                },
                //错误直接向上抛
                function (error) {
                    if (errorback) {
                        errorback(error);
                    }
                    //           console.log('get first token fail!');
                });
        }
        else {
            //invoke biz api
            _send(url, app_key, tbh5.get(tbh5.appToken), extParam.data, callback, errorback);

        }
    }

    // ~~~ public method end ~~~

    // --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---//

    // ~~~ private method begin ~~~
    /**
     * 判断是否调用取得token接口
     */
    var _isgetFirstToken = function () {
        var app_token = tbh5.get(tbh5.appToken);
        if (tbh5.checkIsBlank(app_token)) {
            return true;
        }
        else {
            var app_token_expired = parseInt(tbh5.get(tbh5.appTokenExpired) || '0');
            var app_token_between = parseInt(tbh5.get(tbh5.appTokenBetween) || '0');
            var currentTime = (new Date()).getTime() - app_token_between;
            //提前五分钟取新的token
            if ((app_token_expired - currentTime) < 300000) {
                return true;
            }
            else {
                return false;
            }
        }
    }

    /**
     * 发送业务请求
     * 1、如果返回超时会清楚localStoary
     *
     */
    var _send = function (url, app_key, app_token, data, callback, errorback) {
        url = _createSignUrl(url, app_key, app_token, data);
        //		console.log('use token send : ' + app_token+";url="+url);
        $.ajax({
            type:'GET',
            url:url,
            success:function (result) {
                // if token is expired, low percent event.
                var ret = (result.ret ? result.ret : "").toString();
                //if(-1 != ret.indexOf('TOKEN_EXOIRED::')  || -1 != ret.indexOf('ILLEGAL_REFRESH_TOKEN')) {
                //fail ,remove token
                //TODO:修改登录，令牌失效
                if(-1 != ret.indexOf('TOKEN_EXOIRED::')){
                    notification.flash("发生了一点小问题，请刷新页面").show();
                }
                if (-1 == ret.indexOf('SUCCESS')) {
                    _removeToken();
                }
                if (callback) {
                    callback(result);
                }
            },
            error:function (error) {
                if (errorback) {
                    errorback(error);
                }
            }
        });
    }

    var _createSignUrl = function (url, app_key, app_token, data) {
        var t = (new Date()).getTime();
        return _addJsonParam(url) + '&appKey=' + app_key + '&sign=' + _sign(app_key, app_token, t, data) + '&t=' + t;
    }

    var _addJsonParam = function (url) {
        if (-1 == url.indexOf('callback=')) {
            var index = url.indexOf('?');
            return url.substr(0, index) + '?callback=?&type=jsonp&' + url.substr(index + 1, url.length);
        }
        else {
            return url;
        }
    }

    var _sign = function (app_key, app_token, t, data) {
        var signTemp = app_token + '&' + t + "&" + app_key + "&" + data;

        return MD5(signTemp);
    }


    var _removeToken = function () {
        try {
            tbh5.removeValue(tbh5.appToken);
            tbh5.removeValue(tbh5.appRefreshToken);
            tbh5.removeValue(tbh5.appTokenExpired);
            tbh5.removeValue(tbh5.appTokenBetween);
        } catch (e) {

        }

    }


    var _saveNewToken = function (r) {
        var newToken = r.data.token.token;
        var newTokenExpired = parseInt(r.data.token.createTime || '0') + (parseInt(r.data.token.lifetime || '0') * 1000);
        var newTokenCreate = parseInt(r.data.token.createTime || '0');
        var refreToken = r.data.token.refreshToken;

        var currentTime = (new Date()).getTime();
        var newTokenBetween = tbh5.getBetweenTime(newTokenCreate);

        if (!tbh5.checkIsBlank(newToken) && newTokenExpired > (currentTime - newTokenBetween)) {
            try {
                tbh5.set(tbh5.appToken, newToken);
                tbh5.set(tbh5.appRefreshToken, refreToken);
                tbh5.set(tbh5.appTokenExpired, newTokenExpired);
                tbh5.set(tbh5.appTokenBetween, newTokenBetween);

                if (tbh5.get(tbh5.appToken) == newToken) {
                    return newToken;
                }
            } catch (e) {
                return null;
            }
        } else {
            return null;
        }
    }

    // ~~~ md5 method begin ~~~
    var MD5 = function (string) {

        function RotateLeft(lValue, iShiftBits) {
            return (lValue << iShiftBits) | (lValue >>> (32 - iShiftBits));
        }

        function AddUnsigned(lX, lY) {
            var lX4, lY4, lX8, lY8, lResult;
            lX8 = (lX & 0x80000000);
            lY8 = (lY & 0x80000000);
            lX4 = (lX & 0x40000000);
            lY4 = (lY & 0x40000000);
            lResult = (lX & 0x3FFFFFFF) + (lY & 0x3FFFFFFF);
            if (lX4 & lY4) {
                return (lResult ^ 0x80000000 ^ lX8 ^ lY8);
            }
            if (lX4 | lY4) {
                if (lResult & 0x40000000) {
                    return (lResult ^ 0xC0000000 ^ lX8 ^ lY8);
                } else {
                    return (lResult ^ 0x40000000 ^ lX8 ^ lY8);
                }
            } else {
                return (lResult ^ lX8 ^ lY8);
            }
        }

        function F(x, y, z) {
            return (x & y) | ((~x) & z);
        }

        function G(x, y, z) {
            return (x & z) | (y & (~z));
        }

        function H(x, y, z) {
            return (x ^ y ^ z);
        }

        function I(x, y, z) {
            return (y ^ (x | (~z)));
        }

        function FF(a, b, c, d, x, s, ac) {
            a = AddUnsigned(a, AddUnsigned(AddUnsigned(F(b, c, d), x), ac));
            return AddUnsigned(RotateLeft(a, s), b);
        }

        ;

        function GG(a, b, c, d, x, s, ac) {
            a = AddUnsigned(a, AddUnsigned(AddUnsigned(G(b, c, d), x), ac));
            return AddUnsigned(RotateLeft(a, s), b);
        }

        ;

        function HH(a, b, c, d, x, s, ac) {
            a = AddUnsigned(a, AddUnsigned(AddUnsigned(H(b, c, d), x), ac));
            return AddUnsigned(RotateLeft(a, s), b);
        }

        ;

        function II(a, b, c, d, x, s, ac) {
            a = AddUnsigned(a, AddUnsigned(AddUnsigned(I(b, c, d), x), ac));
            return AddUnsigned(RotateLeft(a, s), b);
        }

        ;

        function ConvertToWordArray(string) {
            var lWordCount;
            var lMessageLength = string.length;
            var lNumberOfWords_temp1 = lMessageLength + 8;
            var lNumberOfWords_temp2 = (lNumberOfWords_temp1 - (lNumberOfWords_temp1 % 64)) / 64;
            var lNumberOfWords = (lNumberOfWords_temp2 + 1) * 16;
            var lWordArray = Array(lNumberOfWords - 1);
            var lBytePosition = 0;
            var lByteCount = 0;
            while (lByteCount < lMessageLength) {
                lWordCount = (lByteCount - (lByteCount % 4)) / 4;
                lBytePosition = (lByteCount % 4) * 8;
                lWordArray[lWordCount] = (lWordArray[lWordCount] | (string.charCodeAt(lByteCount) << lBytePosition));
                lByteCount++;
            }
            lWordCount = (lByteCount - (lByteCount % 4)) / 4;
            lBytePosition = (lByteCount % 4) * 8;
            lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80 << lBytePosition);
            lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
            lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
            return lWordArray;
        }

        ;

        function WordToHex(lValue) {
            var WordToHexValue = "", WordToHexValue_temp = "", lByte, lCount;
            for (lCount = 0; lCount <= 3; lCount++) {
                lByte = (lValue >>> (lCount * 8)) & 255;
                WordToHexValue_temp = "0" + lByte.toString(16);
                WordToHexValue = WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length - 2, 2);
            }
            return WordToHexValue;
        }

        ;

        function Utf8Encode(string) {
            string = string.replace(/\r\n/g, "\n");
            var utftext = "";

            for (var n = 0; n < string.length; n++) {

                var c = string.charCodeAt(n);

                if (c < 128) {
                    utftext += String.fromCharCode(c);
                }
                else if ((c > 127) && (c < 2048)) {
                    utftext += String.fromCharCode((c >> 6) | 192);
                    utftext += String.fromCharCode((c & 63) | 128);
                }
                else {
                    utftext += String.fromCharCode((c >> 12) | 224);
                    utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                    utftext += String.fromCharCode((c & 63) | 128);
                }

            }

            return utftext;
        }

        ;

        var x = Array();
        var k, AA, BB, CC, DD, a, b, c, d;
        var S11 = 7, S12 = 12, S13 = 17, S14 = 22;
        var S21 = 5, S22 = 9 , S23 = 14, S24 = 20;
        var S31 = 4, S32 = 11, S33 = 16, S34 = 23;
        var S41 = 6, S42 = 10, S43 = 15, S44 = 21;

        string = Utf8Encode(string);

        x = ConvertToWordArray(string);

        a = 0x67452301;
        b = 0xEFCDAB89;
        c = 0x98BADCFE;
        d = 0x10325476;

        for (k = 0; k < x.length; k += 16) {
            AA = a;
            BB = b;
            CC = c;
            DD = d;
            a = FF(a, b, c, d, x[k + 0], S11, 0xD76AA478);
            d = FF(d, a, b, c, x[k + 1], S12, 0xE8C7B756);
            c = FF(c, d, a, b, x[k + 2], S13, 0x242070DB);
            b = FF(b, c, d, a, x[k + 3], S14, 0xC1BDCEEE);
            a = FF(a, b, c, d, x[k + 4], S11, 0xF57C0FAF);
            d = FF(d, a, b, c, x[k + 5], S12, 0x4787C62A);
            c = FF(c, d, a, b, x[k + 6], S13, 0xA8304613);
            b = FF(b, c, d, a, x[k + 7], S14, 0xFD469501);
            a = FF(a, b, c, d, x[k + 8], S11, 0x698098D8);
            d = FF(d, a, b, c, x[k + 9], S12, 0x8B44F7AF);
            c = FF(c, d, a, b, x[k + 10], S13, 0xFFFF5BB1);
            b = FF(b, c, d, a, x[k + 11], S14, 0x895CD7BE);
            a = FF(a, b, c, d, x[k + 12], S11, 0x6B901122);
            d = FF(d, a, b, c, x[k + 13], S12, 0xFD987193);
            c = FF(c, d, a, b, x[k + 14], S13, 0xA679438E);
            b = FF(b, c, d, a, x[k + 15], S14, 0x49B40821);
            a = GG(a, b, c, d, x[k + 1], S21, 0xF61E2562);
            d = GG(d, a, b, c, x[k + 6], S22, 0xC040B340);
            c = GG(c, d, a, b, x[k + 11], S23, 0x265E5A51);
            b = GG(b, c, d, a, x[k + 0], S24, 0xE9B6C7AA);
            a = GG(a, b, c, d, x[k + 5], S21, 0xD62F105D);
            d = GG(d, a, b, c, x[k + 10], S22, 0x2441453);
            c = GG(c, d, a, b, x[k + 15], S23, 0xD8A1E681);
            b = GG(b, c, d, a, x[k + 4], S24, 0xE7D3FBC8);
            a = GG(a, b, c, d, x[k + 9], S21, 0x21E1CDE6);
            d = GG(d, a, b, c, x[k + 14], S22, 0xC33707D6);
            c = GG(c, d, a, b, x[k + 3], S23, 0xF4D50D87);
            b = GG(b, c, d, a, x[k + 8], S24, 0x455A14ED);
            a = GG(a, b, c, d, x[k + 13], S21, 0xA9E3E905);
            d = GG(d, a, b, c, x[k + 2], S22, 0xFCEFA3F8);
            c = GG(c, d, a, b, x[k + 7], S23, 0x676F02D9);
            b = GG(b, c, d, a, x[k + 12], S24, 0x8D2A4C8A);
            a = HH(a, b, c, d, x[k + 5], S31, 0xFFFA3942);
            d = HH(d, a, b, c, x[k + 8], S32, 0x8771F681);
            c = HH(c, d, a, b, x[k + 11], S33, 0x6D9D6122);
            b = HH(b, c, d, a, x[k + 14], S34, 0xFDE5380C);
            a = HH(a, b, c, d, x[k + 1], S31, 0xA4BEEA44);
            d = HH(d, a, b, c, x[k + 4], S32, 0x4BDECFA9);
            c = HH(c, d, a, b, x[k + 7], S33, 0xF6BB4B60);
            b = HH(b, c, d, a, x[k + 10], S34, 0xBEBFBC70);
            a = HH(a, b, c, d, x[k + 13], S31, 0x289B7EC6);
            d = HH(d, a, b, c, x[k + 0], S32, 0xEAA127FA);
            c = HH(c, d, a, b, x[k + 3], S33, 0xD4EF3085);
            b = HH(b, c, d, a, x[k + 6], S34, 0x4881D05);
            a = HH(a, b, c, d, x[k + 9], S31, 0xD9D4D039);
            d = HH(d, a, b, c, x[k + 12], S32, 0xE6DB99E5);
            c = HH(c, d, a, b, x[k + 15], S33, 0x1FA27CF8);
            b = HH(b, c, d, a, x[k + 2], S34, 0xC4AC5665);
            a = II(a, b, c, d, x[k + 0], S41, 0xF4292244);
            d = II(d, a, b, c, x[k + 7], S42, 0x432AFF97);
            c = II(c, d, a, b, x[k + 14], S43, 0xAB9423A7);
            b = II(b, c, d, a, x[k + 5], S44, 0xFC93A039);
            a = II(a, b, c, d, x[k + 12], S41, 0x655B59C3);
            d = II(d, a, b, c, x[k + 3], S42, 0x8F0CCC92);
            c = II(c, d, a, b, x[k + 10], S43, 0xFFEFF47D);
            b = II(b, c, d, a, x[k + 1], S44, 0x85845DD1);
            a = II(a, b, c, d, x[k + 8], S41, 0x6FA87E4F);
            d = II(d, a, b, c, x[k + 15], S42, 0xFE2CE6E0);
            c = II(c, d, a, b, x[k + 6], S43, 0xA3014314);
            b = II(b, c, d, a, x[k + 13], S44, 0x4E0811A1);
            a = II(a, b, c, d, x[k + 4], S41, 0xF7537E82);
            d = II(d, a, b, c, x[k + 11], S42, 0xBD3AF235);
            c = II(c, d, a, b, x[k + 2], S43, 0x2AD7D2BB);
            b = II(b, c, d, a, x[k + 9], S44, 0xEB86D391);
            a = AddUnsigned(a, AA);
            b = AddUnsigned(b, BB);
            c = AddUnsigned(c, CC);
            d = AddUnsigned(d, DD);
        }

        var temp = WordToHex(a) + WordToHex(b) + WordToHex(c) + WordToHex(d);

        return temp.toLowerCase();
    }
    // ~~~ md5 methodn end ~~~
    return exports;
}

Muzhi.mtopH5 = mtop_h5();
Muzhi.uriSysType = _checkSysType();
Muzhi.Util = {

    getMenu: function () {
        var self = this;
        var liTpl = '<% _.each(navItems, function(item) { %><li><a href="#!list/<%= item.id%>/p1" id="J-catA-<%= item.id%>"><%= item.name%></a></li><%});%>';

        var url = {api:"mtop.mz.getMzNav",data:{}};
        Muzhi.mtopH5.getApi(url.api, "1.0", url.data, {}, function (resp) {
            if(!resp.data.defaultData){
                $("#J-catList").addClass("none");
                return;
            }
            var menuList = Muzhi.menuList = resp.data.defaultData.navItems;
            $("#J-catList").html(_.template(liTpl, {navItems: menuList}));
            var isList = location.hash.match(/!list\/(\d)/);
            self.setCurrentMenu(isList&&isList[1] || 0);
        });
    },

    setCurrentMenu: function (id) {
        var currentMenu = _.find(Muzhi.menuList, function (item) {
            return item.id == id
        });
        $("a","#J-catList").removeClass("cur");
        $("#J-catA-"+id).addClass("cur");

        $("small",".J-filter").text(":"+currentMenu.name);
        $("a",".J-filter").attr("href","#!list/"+id+"/p1")
    },

    _checkLogin:function(resp,id,isCanpai){
        if (resp.data.success == "false" && resp.data.errorCode == "PP_USER_NOT_LOGIN") {
            var currentUrl,
                host = location.hostname.match(/$|\.(?:m|waptest|wapa)\.taobao\.com/gi);
            if(id){
                var isTmall = $("#J_isTmall").val() == "true";
                var isTmallParam = isTmall ? "?mz_key=1":"";
                var isCanpaiParam = (isCanpai ? (isTmall ? "&":"?")+"func=dxp":"");
                currentUrl = "http://a.m.taobao.com/i"+id+".htm"+isTmallParam+isCanpaiParam;
            }else{
                currentUrl = encodeURIComponent(location.href.split("#")[0]);
            }

            if(location.href.indexOf("localhost") != -1){
                host[0] = ".waptest.taobao.com";
            }
            location.href = "http://login" + host[0] + "/login.htm?redirectURL=" + currentUrl;
            return false;
        }
        return true;
    },

    catShow:function(){

        var locHash = location.hash.split("/")[0];
        var CURCLS = "cur";
        $("a","#J-tab").removeClass(CURCLS);
        switch(locHash){
            case "#!list":
                $("#J-filterLink").addClass(CURCLS);
                break;
            case "#!sold":
                $("#J-soldOut").addClass(CURCLS);
                break;
            case "#!my":
                $("#J-My").addClass(CURCLS);
                break;
            default :
                $("#J-filterLink").addClass(CURCLS);
                break;
        }
        
        $("#J-filterLink").on("click",function(e){
            e.preventDefault();
            if(!Muzhi.menuList) return;
            $("#J-catSel").toggleClass("none");
            $(this).find('.arr').toggleClass("up");
        });
        
        $("#J-catList").on("click","a",function(e){
            e.preventDefault();
            $("#J-catSel").addClass("none");
            var hashToGo = $(this).attr("href");
            $("a",".J-filter").attr("href",hashToGo);
            $(".arr",".J-filter").removeClass("up");
            Muzhi.router.navigate(hashToGo,{'trigger':true});
        });

    }

};
Muzhi.Good = Backbone.Model.extend({
    defaults:{
        "lazyRender":false //TODO:后期尝试局部刷新
    },

    //true,可点击
    stateMap: function (st) {
        var map = {
            "-1": ["sell-out",true],        //MZ_FINISHED 已结束
            "3": ["obligation",true],       //MZ_ORDERED 待付款
            "4": ["success",true],          //MZ_ORDER_SUCCESS  已成功抢购
            "5": ["close",false],            //MZ_ORDER_CANCEL 未付款，交易关闭
            "0": ["to-begin",false],         //MZ_WILL_START  即将开始
            "1": ["J-join",true],             //MZ_WAIT_JOIN  参与斗价
            "2": ["buy",true],              //MZ_BUYNOW    立即购买
            "6": ["sell-out",false],         // MZ_SOLDOUT  卖光了
            "7": ["chance",false]            //MZ_CHANCE   还有机会
        };
        return map[st];
    },


    toFixed: function (num, precision) {
        var power = Math.pow(10, precision || 0);
        var n = String(Math.round(num * power) / power);
        var nf = n.split('.')[1];
        var suffixLen = 0;
        if (nf) {
            suffixLen = nf.length;
        }
        else if (precision != suffixLen) {
            n = n + '.';
        }
        for (var i = 0; i < precision - suffixLen; i++) {
            n = n + '0';
        }
        return n;
    },


    //TODO:后期加入四舍五入的方式，但是会和现有想要实现的方案冲突，考虑到浮点数运算的很多问题，整数运算更能完成现有的交互逻辑
    priceRegion: function () {

        var mzCorePart = this.get("mzCorePart"),
            nowPrice = parseInt(mzCorePart.nowPrice || mzCorePart.maxPrice),  //即将开始时不提供当前值
            maxPrice = parseInt(mzCorePart.maxPrice),
            minPrice = parseInt(mzCorePart.minPrice),
            region = this.toFixed((maxPrice - minPrice) / 5, 2),
            inRegion = 0;
        for (var i = 0; i < 6; i++) {
            if (nowPrice >= (minPrice + region * i) && nowPrice <= (minPrice + region * (i + 1))) {
                inRegion = i;
            }
        }
        if(inRegion > 0 && inRegion < 5){
             inRegion ++;
        }

        return inRegion;
    },
    
    getDetailUrl:function(itemId){
    	var sys=Muzhi.uriSysType;
    	var mzKey=$('#J_isTmall').value=='true'?'?mz_key=1':'';
    	return "http://a."+sys+".taobao.com/i"+itemId+".htm"+mzKey;
    },

    getItemInfo: function () {
        var mzBase = this.get("mzBasePart"),
            mzClick = this.get("mzClickPart"),
            mzCorePart = this.get("mzCorePart"),
            mzInfoPart = this.get("mzInfoPart");

        var inRegion = this.priceRegion();

        return {
            title: mzBase.title,
            pic: mzBase.pic,
            link: this.getDetailUrl(mzBase.itemId),
            desc: mzInfoPart.desc,
            btnTxt: mzClick.showName, //按钮显示文案
            maxPrice: mzCorePart.maxPrice,
            minPrice: mzCorePart.minPrice,
            currentPrice: mzCorePart.nowPrice || mzCorePart.maxPrice,
            numOfJoiners: mzCorePart.numOfJoiners ? mzCorePart.numOfJoiners : false,
            btnClass: this.stateMap(mzBase.status),
            startTime: mzInfoPart.startTime ? mzInfoPart.startTime : false,  //即将开始的时候存在startTime字段
            region: inRegion,
            detailUrl: mzBase.status == 2 ? "http://a.m.taobao.com/i"+mzBase.itemId+".htm" : (mzBase.status==3?"http://tm.m.taobao.com/list.htm?statusId=0":"#"), //立刻购买是跳转地址
            allowRefresh: ([3, 4, 1, 2].indexOf(parseInt(mzBase.status)) != -1 && mzCorePart.nowPrice != mzCorePart.minPrice) || parseInt(mzBase.status) ==7   //TODO:已经斗至最低的
        };
    }

});
Muzhi.goodList = Backbone.Collection.extend({

   model:Muzhi.Good,

   url:function(){
   },

   parse:function(){

   }

});
Muzhi.goodItemView = Backbone.View.extend({

    tagName: "li",

    className: "list-item",

    events: {
        "click .J-refresh": "refreshPrice",
        "click .J-join": "join",
        "tap .dynamic": "refreshPrice"
    },

    initialize: function () {

        this.model.on("joinNow", this.render, this);
    },

    join: function (e) {
        e.preventDefault();
        var currentModel = this.model;
        var itemId = currentModel.get("mzBasePart").itemId;
        var successTpl = '<div class="join-tip"><em class="cz"></em><b>斗价成功</b>您可以立即购买,也可以继续等待</div>';

        var url = {api:"mtop.mz.doJoinMz",data:{"itemId": itemId}};
        Muzhi.mtopH5.getApi(url.api, "1.0", url.data, {}, function (resp) {
            if(!Muzhi.Util._checkLogin(resp,itemId,true)) return;
            if(resp.data.success == "false"){
                notification.flash(resp.data.errorMsg);
                return ;
            }
            var currentMyNum = $("#J-myNum");
            notification.flash(successTpl).show();
            currentModel.set(resp.data.defaultData);
            currentMyNum.text(parseInt(currentMyNum.text())+1);

            currentModel.trigger("joinNow");//backbone不判断深度

        });

    },
    //刷新价格
    refreshPrice: function (e) {
        e.preventDefault();
        var self = this;
        var currentModel = this.model;

        var url = {api:"mtop.mz.getMzItemInfo",data:{"itemId": currentModel.get("mzBasePart").itemId}};
        Muzhi.mtopH5.getApi(url.api, "1.0", url.data, {}, function (resp) {

            self.refreshRender(resp.data.defaultData);
        });

    },

    refreshRender:function(data){
        var oldRegion = this.model.priceRegion(),
            newRegion = this.model.set(data).priceRegion();

        var posTransformArray = [110,92,69,46,23,3], //pos的运动位置
            tipTransformArray = [85,65,57,35,20,0], //tip的运动位置
            arrowTransformArray = [28,29,15,15,7,7];//小箭头的位置,最主要小箭头的位置

        var pos = this.$el.find(".current-pos"),
            tip = this.$el.find(".dynamic"),
            desc = this.$el.find(".desc"),
            arrow = tip.find("s");

        if(oldRegion != newRegion){ //有区间变动，需要加入css动画
            tip.find(".current-price").text("￥"+data.mzCorePart.nowPrice);
            tip.find("em").text(data.mzCorePart.numOfJoiners+"人斗价");
            desc.text(data.mzInfoPart.desc);
            console.log(data.mzInfoPart.desc);
            pos.animate({
                top:  posTransformArray[newRegion]
            },500,'line');

            tip.animate({
                top: tipTransformArray[newRegion]
            },500,'line');

            arrow.css({top:arrowTransformArray[newRegion]});
        }else{
            this.render();
        }
    },

    render: function () {
        var goodItemInfo = this.model.getItemInfo();
        return this.$el.html(_.template($("#J-itemTemplate").html(), goodItemInfo));
    }

});
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
        $("#J-list").html('');
        this.collection.each(function (good) {
            $("#J-list").append(self.addItem(good));
        });
    }
});
//create global collection
Muzhi.Goods = new Muzhi.goodList;

//begin router
//TODO:菜单渲染将全部有模板来渲染，减少dom的反复修改样式等等
Muzhi.Router = Backbone.Router.extend({

    routes: {
        '': "listDefault", //首页
        '!list/:id/p:pageNo': "list", //列表
        '!page/-p:pageNo':"listAll",//
        '!sold/p:pageNo': "sold",//售罄
        '!my/p:pageNo': "my"//我的斗价
    },
    //TODO:代付款

    initialize: function () {
        var self = this;

        var bulletsH = "",len = $("li","#J-slider").length;
        for(var i = 0; i<len ;i++){
            if(i==0){
              bulletsH += '<em class="on"></em>';
            }else{
               bulletsH += '<em></em>';
            }
        }
        $("#J-position").html(bulletsH);
        var slider = new Swipe($('#J-slider')[0],{
             //auto:3000,
            callback: function(e,pos) {
               var bullets = $("em","#J-position");
               bullets.removeClass("on");
               bullets.eq(pos).addClass("on");
            }
        });

        //分类显示
        Muzhi.Util.catShow();

        var tabA = $("a","#J-tab");
        tabA.on("click",function(e){
            e.preventDefault();
            var CUR_CLS = "cur", url = $(this).attr("href");
            tabA.removeClass(CUR_CLS);
            $(this).addClass(CUR_CLS);
            self.navigate(url,{'trigger':true});
        });

    },

    _listRender: function (resp) {
        if(!Muzhi.Util._checkLogin(resp)) return;//TODO:貌似不需要

        if(resp.data.success == "false"){
            notification.flash(resp.data.errorMsg).show();
            return ;
        }
        var data = resp.data.defaultData;
        if(!data){ //没有商品
            $("#J-list").html('<li class="tip-no-sold"><p class="txt">暂无宝贝，敬请期待！</p></li>');
            $("#J-pageNav").html('');
            return;
        }
        var soldObj = $("#J-soldNum");
        if(resp.api.indexOf("getMzBarelyList") !=-1){
            data.mzExtPart ? soldObj.text(data.mzExtPart.totalCount).show() : soldObj.text("").hide();
        }else if(resp.api.indexOf("getMzList") != -1 && soldObj.html() == ""){
            (data.mzExtPart && data.mzExtPart.numOfBarelySold && data.mzExtPart.numOfBarelySold !='0') ? soldObj.text(data.mzExtPart.numOfBarelySold).show() : soldObj.text(0).hide();
        }

        Muzhi.Goods.reset(data.mzPartList);
        new Muzhi.goodlistView({
            collection: Muzhi.Goods
        }).render();

        var pageNav = new PageNav({'id': '#J-pageNav', 'pageCount': Math.ceil(data.mzExtPart.totalCount / 12), 'objId': 'p'});
    },

    _queryList:function(listId,pageNo){
        var self = this;
        var sliderWrap = $("#J-sliderWrap");
        self._showNav();
        //只有在全部分类并且是第一页时才会显示slider
        if(listId == 0 && pageNo == 1)
            sliderWrap.show();
        else
            sliderWrap.hide(); $("#J-catSel").addClass("none"); $("#J-filterLink").find(".arr").addClass("up");

        if (!Muzhi.menuList)
            Muzhi.Util.getMenu();
        else
            Muzhi.Util.setCurrentMenu(listId);

        $("#J-list").html('<div class="loading"><span></span></div>');
		$("#J-pageNav").html('');
		$("#J-filterLink").addClass('cur');
        var isTmall = $("#J_isTmall").val() == "true" ? 1 :0;
        var url = {api:"mtop.mz.getMzList", data:{"b2c":isTmall, "cc": listId||0, "pre": "0", "page": pageNo || 1, "pagesize": "12", "ext": "1"}};

        Muzhi.mtopH5.getApi(url.api, "1.0", url.data, {}, function (resp) {

            self._listRender(resp);
        });

    },

    //列表页
    list: function (id, pageNo) {
        this._queryList(id,pageNo);
    },

    listDefault:function(){
         this._queryList(0,1);
    },
    //获取全部列表
    listAll:function(pageNo){
        this._queryList(0,pageNo);
    },

    sold: function (pageNo) {
        var self = this;
        self._hideNav();
        $("#J-list").html('<div class="loading"><span></span></div>');
        $("#J-pageNav").html('');
        $("#J-soldOut").addClass('cur');
        var isTmall = $("#J_isTmall").val() == "true" ? 1 :0;
        var url = {api:"mtop.mz.getMzBarelyList",data:{"b2c": isTmall, "page": pageNo || 1, "pagesize": "12"}};
        Muzhi.mtopH5.getApi(url.api, "1.0", url.data, {}, function (resp) {
            if(!resp.data.defaultData){ //没有商品
                $("#J-list").html('<li class="tip-no-sold"><p class="txt">暂无即将售罄宝贝，返回宝贝页面</p><p>页面虽不曾留下痕迹，但我知你已飞过</p></li>');
                $("#J-soldNum").hide();
                return;
            }
            self._listRender(resp);
        });

    },

    //TODO:统一没有商品提示文案
    my: function (pageNo) {
        var self = this;
        self._hideNav();
        $("#J-list").html('<div class="loading"><span></span></div>');
        $("#J-pageNav").html('');
        $("#J-My").addClass('cur');
        var url = {api:"mtop.mz.getMyMzList",data:{"page": pageNo || 1, "pagesize": "12"}};
        Muzhi.mtopH5.getApi(url.api, "1.0", url.data, {}, function (resp) {
        	if(!Muzhi.Util._checkLogin(resp)) return;
            if(!resp.data.defaultData){ //没有商品
                $("#J-list").html('<li class="tip-no-dj"><div class="icon"></div><p class="txt">还未参与斗价，快去斗个宝贝吧！</p><p>给你一张画布，绘一个缤纷世界</p></li>');
                return;
            }
            var myNum = $("#J-myNum"),data = resp.data.defaultData;
            data.mzExtPart ? myNum.text(data.mzExtPart.totalCount).show() : myNum.text(0).hide();
            self._listRender(resp);
        });

    },
    
    // hide:隐藏频道导航
    _hideNav: function(){
    	$("#J-filterLink").find("small").hide();
    	$("#J-filterLink").find(".arr").hide();
    	$("#J-catSel").addClass("none");
    	$("#J-sliderWrap").hide();
    },
    
    // hide:显示频道导航
    _showNav: function(){
    	$("#J-filterLink").find("small").show();
    	$("#J-filterLink").find(".arr").show();
    	$("#J-sliderWrap").show();
    }
    
});






















