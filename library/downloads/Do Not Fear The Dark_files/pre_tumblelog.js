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

/*! scripts/pre_tumblelog.js */
!function(){function e(a){var r=a.target||a.srcElement;if("password"===r.type)return n(t)?void window.removeEventListener("keypress",e,!0):(r.value="",!1)}var t=translated_warning_string,n=window.confirm;"undefined"!=typeof window.addEventListener&&window.addEventListener("keypress",e,!0)}(),function(){function e(e,t){if(s.push(t),o)for(;s.length;){var n=s.shift();e.contentWindow.postMessage(n,e.src.split("/analytics.html")[0])}}if("undefined"!=typeof __pbpa&&__pbpa!==!1){var t={},n=document.createElement("a"),a=window.addEventListener?"addEventListener":"attachEvent",i="attachEvent"===a?"onmessage":"message",o=!1,s=[];window[a](i,function(e){var t=e.data&&e.data.split?e.data.split(";"):"";"analytics_iframe_ga_non_ajax_received"===t[0]&&(o=!0)},!1);var c=function(){var t=document.getElementById("ga_target");if(!t)return!0;var a="/";"undefined"!=typeof this.called_url&&(a=this.called_url),n.href=a,a=n.href;var r="unknown_ajax_blog_route";n.pathname.match(/^\/page/)&&(r="/page/:page"),n.pathname.match(/^\/api\/read\/json/)&&(r="/api/read/json");try{var i=!0,o=["tick_google_analytics",i,a,r].join(";");if(e(t,o),"undefined"!=typeof COMSCORE){var s="tick_comscore;"+a;e(t,s)}}catch(c){}return!0},p=function(){if("undefined"==typeof __pbpm||__pbpm!==!1){try{var e=parseInt(this.getResponseHeader("X-Tumblr-Pixel"));if(!e)return;for(var t,n="",a=0;e>a;a++){if(t=this.getResponseHeader("X-Tumblr-Pixel-"+a),!t)return;n+=t}var i,o=n.split("--");o.forEach(function(e){e+="&A=1",i=new Image(1,1),i.src=(r=e.replace(/&R=[^&$]*/,""))+("&R="+escape(document.referrer)).substr(0,2e3-r.length).replace(/%.?.?$/,"")})}catch(s){}return!0}},l=function(){var e="/";"undefined"!=typeof this.called_url&&(e=this.called_url),n.href=e;var t="unknown_ajax_blog_route";n.pathname.match(/^\/page/)&&(t="/page/:page"),n.pathname.match(/^\/api\/read\/json/)&&(t="/api/read/json");try{var a=window.YAHOO;if(a&&a.rapid){var r={pd:t,_li:0,i_rad:0,i_strm:0};a.rapid.beaconEvent("tpv",r)}}catch(i){}return!0},d=function(){var e=document.createElement("div");e.innerHTML=this.responseText;for(var t=e.getElementsByTagName("script"),n=0;n<t.length;n++){var a,r=t[n];a=r.classList?r.classList.contains("pppt"):new RegExp("(^| )pppt( |$)","gi").test(r.className),a&&new Function(r.text)()}},u=function(e){n.href=e;var a=n.pathname;return"/"!==a[0]&&(a="/"+a),a.match(/^\/page\/[0-9]+\/?$/)||a.match(/^\/api\/read\/json$/)?t[a]?!1:(t[a]=1,!0):!1},h=XMLHttpRequest.prototype.send;XMLHttpRequest.prototype.onCreate;XMLHttpRequest.prototype.send=function(e){var t=this;u(this.called_url)&&(this[a]("load",function(){return p.call(t)},!0),this[a]("load",function(){return c.call(t)},!1),this[a]("load",function(){return l.call(t)},!1),this[a]("load",function(){return d.call(t)},!0)),h.call(this,e)};var f=XMLHttpRequest.prototype.open;XMLHttpRequest.prototype.open=function(e,t,n){this.called_url=t,f.call(this,e,t,n)}}}(),function(){"#_=_"===window.location.hash&&(window.history&&window.history.replaceState?history.replaceState("",document.title,window.location.pathname+window.location.search):window.location.hash="")}();

}
/*
     FILE ARCHIVED ON 19:41:05 Oct 27, 2016 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 13:51:40 Dec 01, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.819
  exclusion.robots: 0.023
  exclusion.robots.policy: 0.01
  esindex: 0.014
  cdx.remote: 45.022
  LoadShardBlock: 404.384 (6)
  PetaboxLoader3.datanode: 387.726 (8)
  load_resource: 156.146 (2)
  PetaboxLoader3.resolve: 103.935
*/