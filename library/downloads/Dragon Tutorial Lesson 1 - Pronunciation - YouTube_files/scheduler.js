var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

(function(){var e=this;function f(a){a=a.split(".");for(var b=e,c;c=a.shift();)if(null!=b[c])b=b[c];else return null;return b}
function h(a,b,c){return a.call.apply(a.bind,arguments)}
function k(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function l(a,b,c){l=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?h:k;return l.apply(null,arguments)}
var m=Date.now||function(){return+new Date};
function n(a,b){a=a.split(".");var c=e;a[0]in c||!c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]?c=c[d]:c=c[d]={}:c[d]=b}
;var p=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};n("yt.config_",p);n("yt.tokens_",window.yt&&window.yt.tokens_||{});var q=window.yt&&window.yt.msgs_||f("window.ytcfg.msgs")||{};n("yt.msgs_",q);function r(){this.g=this.g;this.j=this.j}
r.prototype.g=!1;r.prototype.isDisposed=function(){return this.g};
r.prototype.dispose=function(){this.g||(this.g=!0,this.m())};
r.prototype.m=function(){if(this.j)for(;this.j.length;)this.j.shift()()};function t(a){r.call(this);this.a=[];this.a[4]=[];this.a[3]=[];this.a[2]=[];this.a[1]=[];this.a[0]=[];a=a||{};this.F=a.timeout||1;this.c={};this.i=t.a;this.A=this.b=this.h=0;this.o=this.l=!1;this.f=[];this.w=l(this.H,this);this.D=l(this.J,this);this.B=l(this.G,this);this.C=l(this.I,this);this.s=!1;this.v=!!window.requestIdleCallback;(this.u=!!a.useRaf&&!!window.requestAnimationFrame)&&document.addEventListener("visibilitychange",this.w)}
(function(){var a=t;function b(){}
b.prototype=r.prototype;a.L=r.prototype;a.prototype=new b;a.prototype.constructor=a;a.M=function(a,b,g){for(var c=Array(arguments.length-2),d=2;d<arguments.length;d++)c[d-2]=arguments[d];return r.prototype[b].apply(a,c)}})();
t.b=1E3/60;t.c=3E3;t.f=300;t.g=3;t.a=t.b-3;function u(a,b,c,d){++a.A;var g=a.A;a.c[g]=b;a.l&&!d?a.f.push({id:g,K:c}):(a.a[c].push(g),a.o||a.l||(0!=a.b&&v(a)!=a.h&&y(a),a.start()));return g}
function z(a){a.f.length=0;for(var b=4;0<=b;b--)a.a[b].length=0;a.c={};y(a)}
function v(a){for(var b=4;1<=b;b--)if(0<a.a[b].length)return!document.hidden&&a.u?3:2;return 1}
function A(a){try{a()}catch(b){(a=f("yt.logging.errors.log"))&&a(b)}}
t.prototype.G=function(a){var b=void 0;a&&(b=a.timeRemaining());this.s=!0;C(this,b);this.s=!1};
t.prototype.J=function(){C(this)};
t.prototype.I=function(){C(this)};
t.prototype.H=function(){this.b&&(y(this),this.start())};
function C(a,b){y(a);a.l=!0;b=m()+(b||a.i);for(var c=a.a[4];c.length;){var d=c.shift(),g=a.c[d];delete a.c[d];g&&A(g)}if(!(m()>=b)){do{a:{c=a;d=c.s?0:1;for(g=3;g>=d;g--)for(var w=c.a[g];w.length;){var x=w.shift(),B=c.c[x];delete c.c[x];if(B){c=B;break a}}c=null}c&&A(c)}while(c&&m()<b)}a.l=!1;b=0;for(c=a.f.length;b<c;b++)d=a.f[b],a.a[d.K].push(d.id);a.i=t.a;a:{for(b=3;0<=b;b--)if(a.a[b].length){b=!0;break a}b=!1}(b||a.f.length)&&a.start();a.f.length=0}
t.prototype.start=function(){this.o=!1;if(0==this.b)switch(this.h=v(this),this.h){case 1:var a=this.B;this.b=this.v?window.requestIdleCallback(a,{timeout:3E3}):window.setTimeout(a,300);break;case 2:this.b=window.setTimeout(this.D,this.F);break;case 3:this.b=window.requestAnimationFrame(this.C)}};
function y(a){if(a.b){switch(a.h){case 1:var b=a.b;a.v?window.cancelIdleCallback(b):window.clearTimeout(b);break;case 2:window.clearTimeout(a.b);break;case 3:window.cancelAnimationFrame(a.b)}a.b=0}}
t.prototype.m=function(){z(this);y(this);this.u&&document.removeEventListener("visibilitychange",this.w);t.L.m.call(this)};function D(){var a=f("yt.scheduler.instance.instance_");if(!a||a.isDisposed())a=new t(("scheduler"in p?p.scheduler:void 0)||{}),n("yt.scheduler.instance.instance_",a);return a}
function E(){var a=f("yt.scheduler.instance.instance_");a&&(a&&"function"==typeof a.dispose&&a.dispose(),n("yt.scheduler.instance.instance_",null))}
function F(){z(D())}
var G=f("yt.scheduler.instance.timerIdMap_")||{};function H(a,b,c){if(0==c||void 0===c)return c=void 0===c,-u(D(),a,b,c);var d=window.setTimeout(function(){var c=u(D(),a,b);G[d]=c},c);
return d}
function I(a){var b=D(),c=m();A(a);a=m()-c;b.i-=a}
function J(a){var b=D();if(0>a)delete b.c[-a];else{var c=G[a];c?(delete b.c[c],delete G[a]):window.clearTimeout(a)}}
function K(){D().start()}
function L(){var a=D();y(a);a.o=!0}
;f("yt.scheduler.initialized")||(n("yt.scheduler.instance.dispose",E),n("yt.scheduler.instance.addJob",H),n("yt.scheduler.instance.addImmediateJob",I),n("yt.scheduler.instance.cancelJob",J),n("yt.scheduler.instance.cancelAllJobs",F),n("yt.scheduler.instance.start",K),n("yt.scheduler.instance.pause",L),n("yt.scheduler.initialized",!0));})();


}
/*
     FILE ARCHIVED ON 22:18:49 Oct 27, 2016 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 13:45:32 Dec 01, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.653
  exclusion.robots: 0.02
  exclusion.robots.policy: 0.009
  esindex: 0.014
  cdx.remote: 7.263
  LoadShardBlock: 236.666 (6)
  PetaboxLoader3.datanode: 412.515 (8)
  load_resource: 649.687 (2)
  PetaboxLoader3.resolve: 382.749 (2)
*/