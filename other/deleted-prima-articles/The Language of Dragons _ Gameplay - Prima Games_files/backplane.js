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

window.Backplane=window.Backplane||function(){var a=function(a){if(Backplane.getChannelID())a();else{var c=Backplane.onInit;Backplane.onInit=function(){c();a()}}};a.log=function(a){window.console&&window.console.log&&console.log("Backplane: "+a)};a.warn=function(a){window.console&&window.console.warn&&console.warn("Backplane WARNING: "+a)};a.error=function(a){window.console&&window.console.error&&console.error("Backplane ERROR: "+a)};a.version="1.2.7";a.channelByBus={};a.config={};a.initialized=!1;
a.runRequests=!1;a.firstFrameReceived=!1;a.cachedMessages={};a.cachedMessagesIndex=[];a.cacheMax=5;a.subscribers={};a.serverChannel=!0;a.awaiting={since:0,until:0,queue:[]};a.intervals={min:1,frequent:5,regular:60,slowdown:120};a.onInit=function(){};return a}();
Backplane.init=function(a){a=a||{};if(this.initialized||!a.serverBaseURL||!a.busName)return!1;this.initialized=!0;this.timers={};this.config=a;this.config.serverBaseURL=this.normalizeURL(a.serverBaseURL);this.channelByBus=this.getCookieChannels();this.cacheMax=a.cacheMax||this.cacheMax;"undefined"!==typeof a.serverChannel&&(this.serverChannel=a.serverChannel);"undefined"==typeof this.config.channelExpires&&(a=new Date,a.setFullYear(a.getFullYear()+5),this.config.channelExpires=a.toGMTString());this.renameOldCache();
this.getChannelName()?this.finishInit(!1):(this.invalidateCache(),this.fetchNewChannel());return!0};
Backplane.renameOldCache=function(){if(window.localStorage){var a=localStorage.getItem("cacheExpires"),b=localStorage.getItem("cachedMessages"),c=localStorage.getItem("cachedMessagesIndex");a&&(b&&c)&&(localStorage.setItem("backplaneCacheExpires",a),localStorage.setItem("backplaneCachedMessages",b),localStorage.setItem("backplaneCachedMessagesIndex",c),localStorage.removeItem("cacheExpires"),localStorage.removeItem("cachedMessages"),localStorage.removeItem("cachedMessagesIndex"))}};
Backplane.subscribe=function(a){if(!this.initialized)return!1;this.checkSubscribers()||(this.runRequests=!0,this.request());var b=(new Date).valueOf()+Math.random();this.subscribers[b]=a;if(this.firstFrameReceived)for(var c=0;c<this.cachedMessagesIndex.length;c++)a(this.cachedMessages[this.cachedMessagesIndex[c]]);return b};Backplane.unsubscribe=function(a){if(!this.initialized||!a)return!1;delete this.subscribers[a];this.checkSubscribers()||(this.runRequests=!1)};
Backplane.getChannelID=function(){return!this.initialized?!1:this.config.channelID};Backplane.expectMessages=function(a){this.expectMessagesWithin(60,a)};Backplane.expectMessagesWithin=function(a,b){if(!this.initialized||!a)return!1;this.awaiting.since=this.getTS();this.awaiting.interval=a;this.awaiting.nonstop=!b;b&&(b="string"==typeof b?[b]:b,this.awaiting.queue.push(b));var c=this.awaiting.since+a;c>this.awaiting.until&&(this.awaiting.until=c);this.request()};
Backplane.finishInit=function(a){"undefined"===typeof a?this.error("finishInit: server failed to return a new channel; stopping the request loop"):(a&&(this.channelByBus[this.config.busName]=a),this.setCookieChannels(),this.config.channelName=this.getChannelName(),this.config.channelID=this.generateChannelID(),this.onInit(),this.request())};Backplane.generateChannelID=function(){return this.config.serverBaseURL+"/bus/"+this.config.busName+"/channel/"+this.config.channelName};
Backplane.getChannelName=function(){if(!this.initialized)return!1;if(!this.channelByBus[this.config.busName]||"false"===this.channelByBus[this.config.busName]){if(this.serverChannel)return!1;this.invalidateCache();this.channelByBus[this.config.busName]=(new Date).valueOf().toString()+Math.random().toString().substr(2,5);this.setCookieChannels()}return this.channelByBus[this.config.busName]};Backplane.getTS=function(){return Math.round((new Date).valueOf()/1E3)};
Backplane.checkSubscribers=function(){for(var a in this.subscribers)return!0;return!1};Backplane.getCookieChannels=function(){var a=(document.cookie||"").match(/backplane-channel=(.*?)(?:$|;)/);if(!a||!a[1])return{};for(var b={},a=a[1].split("|"),c=0;c<a.length;c++){var d=a[c].split(":");b[decodeURIComponent(d[0])]=decodeURIComponent(d[1])}return b};
Backplane.setCookieChannels=function(){var a=[],b;for(b in this.channelByBus)this.channelByBus.hasOwnProperty(b)&&a.push(encodeURIComponent(b)+":"+encodeURIComponent(this.channelByBus[b]));document.cookie="backplane-channel="+a.join("|")+";expires="+this.config.channelExpires+";path=/"};
Backplane.resetCookieChannel=function(){delete this.channelByBus[this.config.busName];this.invalidateCache();this.setCookieChannels();this.serverChannel?this.fetchNewChannel():(this.config.channelName=this.getChannelName(),this.config.channelID=this.generateChannelID())};
Backplane.fetchNewChannel=function(){for(var a=document.getElementById("fetchChannelId");a&&a.parentNode;){a.parentNode.removeChild(a);for(var b in a)delete a[b];a=document.getElementById("fetchChannelId")}a=document.createElement("script");a.src=this.config.serverBaseURL+"/bus/"+this.config.busName+"/channel/new?callback=Backplane.finishInit&rnd="+Math.random();a.type="text/javascript";a.id="fetchChannelId";b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(a,b)};
Backplane.invalidateCache=function(){Backplane.log("removing cached backplane messages");this.cachedMessages={};this.cachedMessagesIndex=[];window.localStorage&&(localStorage.removeItem("backplaneCacheExpires"),localStorage.removeItem("backplaneCachedMessages"),localStorage.removeItem("backplaneCachedMessagesIndex"))};Backplane.normalizeURL=function(a){return a.replace(/^\s*(https?:\/\/)?(.*?)[\s\/]*$/,function(a,c,d){return(c||window.location.protocol+"//")+d})};
Backplane.calcTimeout=function(){var a;a=this.getTS();if(a<this.awaiting.until){if(!this.awaiting.nonstop&&!this.awaiting.queue.length)return this.awaiting.until=a,this.calcTimeout();a-=this.awaiting.since;var b=this.intervals.frequent-this.intervals.min;a=this.intervals.min+Math.round(b*a/this.awaiting.interval)}else a<this.awaiting.until+this.intervals.slowdown?(a-=this.awaiting.until,b=this.intervals.regular-this.intervals.frequent,a=this.intervals.frequent+Math.round(b*a/this.intervals.slowdown)):
(a="undefined"==typeof this.since?0:this.intervals.regular,this.awaiting.nonstop=!1);return 1E3*a};
Backplane.request=function(){var a=this;if(!this.initialized||!this.runRequests)return!1;this.stopTimer("regular");this.stopTimer("watchdog");this.timers.regular=setTimeout(function(){a.timers.watchdog=setTimeout(function(){a.request()},5E3);if(window.localStorage&&!a.since){var b=localStorage.getItem("backplaneCacheExpires");if(b)if(b=Date.parse(b),new Date>b)a.log("cache expired"),a.invalidateCache();else if(a.cachedMessages=JSON.parse(localStorage.getItem("backplaneCachedMessages")),a.cachedMessagesIndex=
JSON.parse(localStorage.getItem("backplaneCachedMessagesIndex")),a.cachedMessages){for(var b=[],c=0;c<a.cachedMessagesIndex.length;c++)b[c]=a.cachedMessages[a.cachedMessagesIndex[c]];a.log(b.length+" message(s) in cache");a.response(b);return}}var d=document.createElement("script");d.type="text/javascript";d.charset="utf-8";d.src=a.config.channelID+"?callback=Backplane.response"+(a.since?"&since="+encodeURIComponent(a.since):"")+"&rnd="+Math.random();b=document.getElementsByTagName("head")[0]||document.documentElement;
b.insertBefore(d,b.firstChild);d.onload=d.onreadystatechange=function(){var a=d.readyState;if(!a||"loaded"===a||"complete"===a)d.onload=d.onreadystatechange=null,d.parentNode&&d.parentNode.removeChild(d)}},this.calcTimeout())};
Backplane.response=function(a){this.stopTimer("watchdog");var a=a||[],b=a.length?a[a.length-1].id:this.since;"undefined"==typeof this.since&&(a="undefined"!=typeof this.config.initFrameFilter?this.config.initFrameFilter(a):[]);this.since=b||"";for(b=0;b<a.length;b++){for(var c in this.subscribers)if(this.subscribers.hasOwnProperty(c))this.subscribers[c](a[b].message);if(0<this.cacheMax&&(this.cachedMessages.hasOwnProperty([a[b].id])||(this.cachedMessages[a[b].id]=a[b],this.cachedMessagesIndex.push(a[b].id)),
this.cachedMessagesIndex.length>this.cacheMax&&(delete this.cachedMessages[this.cachedMessagesIndex[0]],this.cachedMessagesIndex.splice(0,1)),window.localStorage)){localStorage.setItem("backplaneCachedMessages",JSON.stringify(this.cachedMessages));localStorage.setItem("backplaneCachedMessagesIndex",JSON.stringify(this.cachedMessagesIndex));var d=new Date;d.setDate(d.getDate()+7);localStorage.setItem("backplaneCacheExpires",d.toUTCString())}for(var d=[],e=0;e<this.awaiting.queue.length;e++){for(var g=
!1,f=0;f<this.awaiting.queue[e].length;f++)this.awaiting.queue[e][f]==a[b].message.type&&(g=!0);g||d.push(this.awaiting.queue[e])}this.awaiting.queue=d}this.firstFrameReceived=!0;this.request()};Backplane.stopTimer=function(a){(a=this.timers[a])&&clearTimeout(a)};


}
/*
     FILE ARCHIVED ON 19:09:56 Feb 14, 2014 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 12:10:25 Dec 14, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.531
  exclusion.robots: 0.017
  exclusion.robots.policy: 0.008
  esindex: 0.009
  cdx.remote: 24.792
  LoadShardBlock: 190.817 (6)
  PetaboxLoader3.datanode: 243.89 (8)
  load_resource: 252.368 (2)
  PetaboxLoader3.resolve: 100.094 (2)
*/