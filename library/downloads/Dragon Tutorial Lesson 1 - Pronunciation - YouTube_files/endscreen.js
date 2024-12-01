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

(function(g){var window=this;var B9=function(a,b,c,d){var e=b.Gb();g.pe(a.element,"ytp-suggestion-set",!!e.videoId);var h=b.ag();d=b.Pc(c,d?d:"mqdefault.jpg");var k=b instanceof g.JB?g.Nk(b.lengthSeconds):null,m=!!h,h=m&&"RD"==g.hE(h).type;c={title:b.title,author:b.author,author_and_views:e.shortViewCount?b.author+" \u2022 "+e.shortViewCount:b.author,watch:g.P("YTP_WATCH_VIDEO_OR_PLAYLIST",{TITLE:b.title},b.title),duration:k,url:b.Gj(c),is_featured:e.vs,is_list:m,is_mix:h,background:d?"background-image: url("+d+")":""};b instanceof
g.kE&&(c.playlist_length=b.A);a.update(c)},C9=function(a){var b=g.T(a),c=b.experiments.Z("video_wall_moving_thumbnails_autoplay"),d=b.experiments.Z("video_wall_moving_thumbnails_hover"),c=c||d;
this.B=b.B&&!b.C;b=g.Hi||g.Dc?{style:"will-change: opacity"}:null;d={I:"img",V:"ytp-videowall-moving-thumbnail",T:{src:"{{moving_thumbnail}}"}};g.R.call(this,{I:"a",V:"ytp-videowall-still",T:{href:"{{url}}",target:this.B?"_blank":null,"aria-label":"{{watch}}","data-is-featured":"{{is_featured}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}"},P:[{I:"div",V:"ytp-videowall-still-image",T:{style:"{{background}}"}},c?d:null,{I:"span",V:"ytp-videowall-still-featured-label",P:[g.P("YTP_FEATURED")]},
{I:"span",V:"ytp-videowall-still-info",P:[{I:"span",V:"ytp-videowall-still-info-bg",P:[{I:"span",V:"ytp-videowall-still-info-content",T:b,P:[{I:"span",V:"ytp-videowall-still-info-title",P:["{{title}}"]},{I:"span",V:"ytp-videowall-still-info-author",P:["{{author_and_views}}"]},{I:"span",V:"ytp-videowall-still-info-duration",P:["{{duration}}"]}]}]}]},{I:"span",fa:["ytp-videowall-still-listlabel-regular","ytp-videowall-still-listlabel"],P:[{I:"span",V:"ytp-videowall-still-listlabel-icon"},g.P("YTP_PLAYLIST"),
{I:"span",V:"ytp-videowall-still-listlabel-length",P:[" (",{I:"span",P:["{{playlist_length}}"]},")"]}]},{I:"span",fa:["ytp-videowall-still-listlabel-mix","ytp-videowall-still-listlabel"],P:[{I:"span",V:"ytp-videowall-still-listlabel-mix-icon"},g.P("YTP_MIX"),{I:"span",V:"ytp-videowall-still-listlabel-length",P:[" (50+)"]}]}]});this.b=a;this.o=null;this.N("click",this.zK);this.N("keypress",this.AK);c&&this.S(this.sa["ytp-videowall-moving-thumbnail"],"load",this.CK);g.T(a).experiments.Z("player_interaction_logging")&&
(a=a.app.ca,g.pb(a.B,this),b=String(a.F++),this.element.setAttribute("data-visual-id",b),g.Nb(this,(0,g.x)(a.D,a,this)))},D9=function(a){if(5E5<g.Tw(a.b.app.ia)){var b=a.o.Aj();
b&&a.update({moving_thumbnail:b})}},E9=function(a){g.uE.call(this,a,{I:"div",
fa:["ytp-thumbnail-overlay","ytp-channel-overlay"],P:[{I:"div",V:"ytp-thumbnail-overlay-image",T:{style:"{{background}}"}},{I:"div",V:"ytp-thumbnail-overlay-curtain"}]})},F9=function(){g.R.call(this,["div",
"ytp-subscribe-card",["img","ytp-author-image",{src:"{{image}}"}],["div","ytp-subscribe-card-right",["div","ytp-author-name","{{author}}"],["div","html5-subscribe-button-container"]]])},G9=function(a){var b=g.T(a).experiments.Z("moving_thumbnails_autonav"),c={I:"img",
V:"ytp-upnext-moving-thumbnail",T:{src:"{{moving_thumbnail}}"}},c={I:"div",V:"ytp-upnext",T:{"aria-label":"{{watch}}"},P:[{I:"div",V:"ytp-thumbnail-overlay-image",T:{style:"{{background}}"}},b?c:null,{I:"div",V:"ytp-thumbnail-overlay-curtain"},{I:"span",V:"ytp-upnext-top",P:[{I:"span",V:"ytp-upnext-header",P:[g.P("YTP_PLAYLIST_UP_NEXT")]},{I:"span",V:"ytp-upnext-title",P:["{{title}}"]},{I:"span",V:"ytp-upnext-author",P:["{{author}}"]}]},{I:"a",V:"ytp-upnext-autoplay-icon",T:{href:"{{url}}"},P:[{I:"svg",
T:{height:"100%",version:"1.1",viewBox:"0 0 98 98",width:"100%"},P:[{I:"circle",V:"ytp-svg-autoplay-circle",T:{cx:"49",cy:"49",fill:"#000","fill-opacity":"0.8",r:"48"}},{I:"circle",V:"ytp-svg-autoplay-ring",T:{cx:"-49",cy:"49","fill-opacity":"0",r:"46.5",stroke:"#FFFFFF","stroke-dasharray":"293","stroke-dashoffset":"-293","stroke-width":"4",transform:"rotate(-90)"}},{I:"polygon",V:"ytp-svg-autoplay-triangle",T:{fill:"#fff",points:"32,27 72,49 32,71"}}]}]},{I:"span",V:"ytp-upnext-bottom",P:[{I:"span",
V:"ytp-upnext-cancel"},{I:"span",V:"ytp-upnext-paused",P:[g.P("YTP_AUTOPLAY_PAUSED_2")]}]},{I:"span",V:"ytp-upnext-close"}]};g.R.call(this,c);var d=this.sa["ytp-upnext-cancel"],c=this.sa["ytp-upnext-close"],e=new g.R({I:"button",fa:["ytp-upnext-cancel-button","ytp-button"],T:{tabindex:0,"aria-label":g.P("YTP_AUTOPLAY_CANCEL")},P:[g.P("YTP_CANCEL")]});g.H(this,e);e.N("click",this.Xs,this);e.Da(d);d=new g.R({I:"button",fa:["ytp-upnext-close-button","ytp-button"]});g.H(this,d);d.N("click",this.Xs,this);
d.Da(c);this.b=a;this.G=this.sa["ytp-svg-autoplay-ring"];this.C=this.B=this.o=this.A=null;this.D=new g.fe(this.pj,5E3,this);g.H(this,this.D);this.F=0;this.S(this.sa["ytp-upnext-autoplay-icon"],"click",this.UF);this.Ws();this.S(a,"autonavvisibility",this.Ws);b&&this.S(this.sa["ytp-upnext-moving-thumbnail"],"load",this.eM)},pva=function(a,b){a.A=b;
B9(a,b,g.T(a.b),"hqdefault.jpg");g.ne(a.element,"ytp-moving-thumbnail-loaded");a.update({moving_thumbnail:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"});5E5<g.Tw(a.b.app.ia)&&(b=a.A.Aj())&&a.update({moving_thumbnail:b})},H9=function(a){a.o||(g.vl("a11y-announce",g.P("YTP_PLAYLIST_UP_NEXT")+" "+a.A.title),a.F=(0,g.lk)(),a.o=new g.fe(a.Cl,25,a),a.Cl());
g.ne(a.element,"ytp-upnext-autoplay-paused")},J9=function(a){I9(a);
a.F=(0,g.lk)();a.Cl();g.K(a.element,"ytp-upnext-autoplay-paused")},I9=function(a){a.o&&(a.o.dispose(),a.o=null)},K9=function(a,b){g.sE.call(this,{I:"div",
fa:["html5-endscreen","ytp-player-content",b||"base-endscreen"]});this.b=a;this.J=!1},L9=function(a){a=g.T(a);
return a.Zd&&!a.la},M9=function(a,b){K9.call(this,a,"videowall-endscreen");
this.ba=a;this.$=b;this.F=0;this.o=[];this.G=this.C=this.B=null;this.H=this.U=!1;this.D=new g.Fq(this);g.H(this,this.D);this.K=new g.fe(g.ra(g.K,this.element,"ytp-show-tiles"),0);g.H(this,this.K);b=new g.R({I:"button",fa:["ytp-button","ytp-endscreen-previous"],T:{"aria-label":g.P("YTP_PREVIOUS")},P:[{I:"svg",T:{height:"100%",version:"1.1",viewBox:"0 0 32 32",width:"100%"},P:[{I:"path",T:{d:"M 19.41,20.09 14.83,15.5 19.41,10.91 18,9.5 l -6,6 6,6 z",fill:"#fff"}}]}]});g.H(this,b);b.Da(this.element);
b.N("click",this.nE,this);this.L=new g.Fk({I:"div",V:"ytp-endscreen-content"});g.H(this,this.L);this.L.Da(this.element);b=new g.R({I:"button",fa:["ytp-button","ytp-endscreen-next"],T:{"aria-label":g.P("YTP_NEXT")},P:[{I:"svg",T:{height:"100%",version:"1.1",viewBox:"0 0 32 32",width:"100%"},P:[{I:"path",T:{d:"m 12.59,20.34 4.58,-4.59 -4.58,-4.59 1.41,-1.41 6,6 -6,6 z",fill:"#fff"}}]}]});g.H(this,b);b.Da(this.element);b.N("click",this.xK,this);this.A=new G9(a);g.H(this,this.A);g.Hp(this.b,this.A.element,
4);this.ua()},N9=function(a){return(0,g.S)(a.H,function(a){return g.tE(a)})},O9=function(a,b,c){return 0==b&&a.B.length&&(b=c/M9.b,2<=c/M9.b&&2<=b&&g.T(a.b).experiments.Z("video_wall_emphasize_first"))?2*M9.b:M9.b},P9=function(a){var b=a.$.To();
b!=a.U&&(a.U=b,a.b.Za("autonavvisibility"))},Q9=function(a){K9.call(this,a,"subscribecard-endscreen");
this.o=new E9(a);g.H(this,this.o);g.Hp(this.b,this.o.element,4);this.A=new F9;g.H(this,this.A);this.ua()},R9=function(a){g.rE.call(this,a);
g.ui({});this.g=null;this.isAvailable=!0;this.o=new g.Fq(this);g.H(this,this.o);this.A=g.T(a);L9(a)?this.g=new M9(this.b,this):this.A.la?this.g=new Q9(this.b):this.g=new K9(this.b);g.H(this,this.g);g.Hp(this.b,this.g.element,4);this.ou();this.o.S(a,"videodatachange",this.ou,this);this.o.S(a,"crn_endscreen",this.nK,this);this.o.S(a,"crx_endscreen",this.oK,this)};
g.z(C9,g.R);g.f=C9.prototype;g.f.mf=function(){var a=this.o.Gb().videoId;g.e8(this.b.app,a,this.o.Dc,this.o.ag(),void 0,void 0)};
g.f.zK=function(a){g.CD(this.b,this);g.Nl(a,this.b,!this.b.isFullscreen()&&this.B,this.o.Dc)&&this.mf()};
g.f.BK=function(){this.ya(this.A);this.A=null;D9(this)};
g.f.AK=function(a){switch(a.keyCode){case 13:case 32:g.xj(a)||(this.mf(),g.wj(a))}};
g.f.CK=function(a){120<g.sj(a).naturalWidth&&g.K(this.element,"ytp-videowall-moving-thumbnail-loaded")};
g.z(E9,g.uE);E9.prototype.rb=function(a){a?this.A.show():g.dp(this.A)};
g.z(F9,g.R);g.z(G9,g.R);g.f=G9.prototype;g.f.pj=function(){this.B&&(this.D.stop(),this.ya(this.C),this.C=null,this.B.close(),this.B=null)};
g.f.Ws=function(){this.rb(g.jD(this.b))};
g.f.LF=function(){window.focus();this.pj()};
g.f.Cl=function(){var a=g.T(this.b).experiments.b("autoplay_time")||1E4,b=Math.min((0,g.lk)()-this.F,a),a=Math.min(b/a,1);this.G.setAttribute("stroke-dashoffset",-293*(a+1));1<=a?this.select(!0):this.o&&this.o.start()};
g.f.select=function(a){var b=g.T(this.b);if(b.experiments.Z("autonav_notifications")&&a&&window.Notification&&window.document.hasFocus){var c=window.Notification.permission;g.Yo(this.b,"xwebnotifications",{permission:c});"default"==c?window.Notification.requestPermission():"granted"!=c||window.document.hasFocus()||(c=this.A.Gb(),this.pj(),this.B=new window.Notification(g.P("YTP_PLAYLIST_UP_NEXT"),{body:c.title,icon:c.Pc(b)}),this.C=this.S(this.B,"click",this.LF),this.D.start())}I9(this);b=this.A.Gb().videoId;
g.e8(this.b.app,b,a?this.A.Zu:this.A.Dc,this.A.ag(),void 0,void 0)};
g.f.UF=function(a){!g.xj(a)&&g.Ok(a)&&(this.select(),g.wj(a))};
g.f.Xs=function(a){g.wj(a);g.tD(this.b,"autonavcancel");g.lD(this.b,!0)};
g.f.eM=function(a){120<g.sj(a).naturalWidth&&g.K(this.element,"ytp-moving-thumbnail-loaded")};
g.f.R=function(){I9(this);this.pj();G9.M.R.call(this)};
g.z(K9,g.sE);K9.prototype.create=function(){this.J=!0};
K9.prototype.destroy=function(){this.J=!1};
K9.prototype.Il=function(){return!1};
g.z(M9,K9);M9.b=2;g.f=M9.prototype;g.f.create=function(){M9.M.create.call(this);var a=this.b.getVideoData();a&&(this.B=N9(a),this.C=a);this.zf();this.D.S(this.b,"appresize",this.zf);this.D.S(this.b,"videodatachange",this.yK);this.D.S(this.b,"autonavchange",this.jw);this.D.S(this.b,"autonavcancel",this.wK);this.D.S(this.element,"transitionend",this.XG)};
g.f.destroy=function(){g.Hq(this.D);g.Pb(this.o);this.o=[];this.B=null;M9.M.destroy.call(this);g.ne(this.element,"ytp-show-tiles");this.K.stop()};
g.f.Il=function(){return 1!=this.C.autonavState};
g.f.ni=function(){return g.BD(this.b)&&this.Il()&&!this.G};
g.f.show=function(){M9.M.show.call(this);g.ne(this.element,"ytp-show-tiles");g.T(this.b).isMobile?g.ge(this.K):this.K.start();(this.H||this.G&&this.G!=this.C.clientPlaybackNonce)&&g.lD(this.b,!1);var a=this.ni();g.BD(this.b)&&g.T(this.b).experiments.Z("ui_logging")&&this.$.log({cancelButtonShow:a?"1":"0",state:this.Il()?"enabled":"disabled"});a?(P9(this),2==this.C.autonavState?g.T(this.b).experiments.Z("fast_autonav_in_background")&&3==this.b.Tv()?this.A.select(!0):H9(this.A):3==this.C.autonavState&&
J9(this.A)):(g.lD(this.b,!0),P9(this))};
g.f.ua=function(){M9.M.ua.call(this);J9(this.A);P9(this)};
g.f.XG=function(a){g.sj(a)==this.element&&this.zf()};
g.f.zf=function(){if(this.B&&this.B.length){var a=g.T(this.b).experiments.Z("video_wall_moving_thumbnails_hover");g.K(this.element,"ytp-endscreen-paginate");for(var b=g.gn(this.element),c=b.width/b.height,d=96/54,e=M9.b,h=M9.b,k=Math.max(b.width/96,2),m=Math.max(b.height/54,2),l=this.B.length,p=Math.pow(M9.b,2),t=l*p,u=O9(this,0,m),y=O9(this,1,m),t=t+(Math.pow(u,2)-p),t=t+(Math.pow(y,2)-p),t=t-p;0<t&&(e<k||h<m);){var I=e/M9.b,E=h/M9.b,M=e<=k-M9.b&&t>=E*p,ma=h<=m-M9.b&&t>=I*p;if((I+1)/E*d/c>c/(I/(E+
1)*d)&&ma)t-=I*p,h+=M9.b;else if(M)t-=E*p,e+=M9.b;else if(ma)t-=I*p,h+=M9.b;else break}d=!1;k=M9.b+u;t>=3*p&&6>=l*p-t&&(h>=k||e>=k)&&y<=M9.b&&(d=!0);t=96*e;p=54*h;c=t/p<c?b.height/p:b.width/t;c=Math.min(c,2);t*=c;p*=c;t*=g.df(b.width/t||1,1,1.21);p*=g.df(b.height/p||1,1,1.21);t=Math.floor(Math.min(b.width,t));p=Math.floor(Math.min(b.height,p));b=this.L.element;g.fn(b,t,p);g.Qm(b,{marginLeft:t/-2+"px",marginTop:p/-2+"px"});pva(this.A,this.B[0]);g.pe(this.element,"ytp-endscreen-takeover",this.ni());
P9(this);c=t+4;t=p+4;p=0;k=!this.ni();m=!1;for(I=0;I<e;I++)for(E=0;E<h;E++)if(M=y>M9.b&&1<=p&&!m?p+1:p,ma=0,d&&I>=e-M9.b&&E>=h-M9.b?ma=1:0==E%M9.b&&0==I%M9.b&&(E<u&&I<u?0==E&&0==I&&(ma=u):y>M9.b&&E>=h-y&&I>=e-y?E==h-y&&I==e-y&&(m=!0,M=1,ma=y):ma=M9.b),M=(M+this.F)%l,M=0>M*l?M+l:M,0!=ma){var wa=this.o[p];wa||(wa=new C9(this.b),this.o[p]=wa,b.appendChild(wa.element));var Ja=Math.floor(t*E/h),$a=Math.floor(c*I/e),je=Math.floor(t*(E+ma)/h)-Ja-4,td=Math.floor(c*(I+ma)/e)-$a-4;g.Wm(wa.element,$a,Ja);g.fn(wa.element,
td,je);g.Qm(wa.element,"transitionDelay",(E+I)/20+"s");g.pe(wa.element,"ytp-videowall-still-mini",1==ma);g.pe(wa.element,"ytp-videowall-still-large",2<ma);ma=wa;M=this.B[M];wa=k&&!a;ma.o=M;Ja=g.T(ma.b);B9(ma,M,Ja,g.ke(ma.element,"ytp-videowall-still-large")?"hqdefault.jpg":"mqdefault.jpg");g.ne(ma.element,"ytp-videowall-moving-thumbnail-loaded");ma.update({moving_thumbnail:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"});wa?(g.K(ma.element,"ytp-videowall-active"),
D9(ma)):Ja.experiments.Z("video_wall_moving_thumbnails_hover")&&!ma.A&&(ma.A=ma.N("mouseover",ma.BK));Ja=M.Dc;wa=ma.b;M=ma;Ja=Ja&&Ja.itct;g.T(wa).experiments.Z("player_interaction_logging")&&(ma=wa.app.ca,wa=Ja,M=M.element.getAttribute("data-visual-id"),g.DD(ma,"onLogServerVeCreated",{id:M,tracking_params:wa}));p++}g.pe(this.element,"ytp-endscreen-paginate",p<l);for(a=this.o.length-1;a>=p;a--)wa=this.o[a],g.Lf(wa.element),g.Ob(wa);this.o.length=p}};
M9.o=2;M9.g=1.21;g.f=M9.prototype;g.f.yK=function(){var a=this.b.getVideoData();this.C!=a&&(this.F=0,this.B=N9(a),this.C=a,this.zf())};
g.f.xK=function(){this.F+=this.o.length;this.zf()};
g.f.nE=function(){this.F-=this.o.length;this.zf()};
g.f.OC=function(){return!!this.A.o};
g.f.jw=function(a){1==a?(this.H=!1,this.G=this.C.clientPlaybackNonce,I9(this.A),this.g&&this.zf()):(this.H=!0,this.g&&this.ni()&&(2==a?H9(this.A):3==a&&J9(this.A)))};
g.f.wK=function(a){if(a){for(a=0;a<this.o.length;a++)g.ED(this.ba,this.o[a],!0);this.jw(1)}else this.G=null,this.H=!1;this.zf()};
g.z(Q9,K9);Q9.prototype.create=function(){Q9.M.create.call(this);g.Jf(this.element);this.A.Da(this.element);var a=this.b.getVideoData().videoId;a&&(a=g.zu(g.T(this.b),a,!0),g.Ak(a,{method:"GET",xb:this.B,context:this,$z:!0}))};
Q9.prototype.B=function(a,b){if(this.J){a=b.user_info;b=a.channel_banner_url;g.yu.test(b)||(b="");var c=a.channel_logo_url||a.image_url;g.yu.test(c)||(c="");this.o.za("background",b?"background-image: url("+b+")":"");this.A.za("image",c);this.A.za("author",a.channel_title||a.username);a=a.subscription_button_html;b=this.A.sa["html5-subscribe-button-container"];a?b.innerHTML=g.Se(a):g.Jf(b)}};
Q9.prototype.show=function(){Q9.M.show.call(this);this.o.rb(!0)};
Q9.prototype.ua=function(){Q9.M.ua.call(this);this.o.rb(!1)};
g.z(R9,g.rE);g.f=R9.prototype;g.f.ew=function(){var a=this.b.getVideoData(),b=!L9(this.b)||!(!a.H||!a.H.length),a=g.Gm(a,"ypc_module"),c=g.O4(this.b.app);return(b||!1)&&!a&&!c};
g.f.To=function(){return(this.g instanceof M9||!1)&&this.g.g&&this.g.ni()};
g.f.MC=function(){return this.To()?this.g.OC():!1};
g.f.R=function(){var a=this.b;g.$i(a.app,"endscreen",a.playerType);R9.M.R.call(this)};
g.f.load=function(){R9.M.load.call(this);this.g.show();g.T(this.b).la&&.01>Math.random()&&this.log({trailerEndscreenShow:1})};
g.f.log=function(a){g.Yo(this.b,"end",a)};
g.f.unload=function(){R9.M.unload.call(this);this.g.ua();this.g.destroy();this.isAvailable=!1};
g.f.nK=function(a){this.ew()&&(this.g.J||this.g.create(),"load"==a.getId()&&this.load())};
g.f.oK=function(a){"load"==a.getId()&&this.loaded&&this.unload()};
g.f.ou=function(){var a=this.b;g.$i(a.app,"endscreen",a.playerType);var a=Math.max(1E3*(this.b.getVideoData().lengthSeconds-10),0),a=new g.Wi(a,0x8000000000000,{id:"preload",namespace:"endscreen"}),b=new g.Wi(0x8000000000000,0x8000000000000,{id:"load",priority:6,namespace:"endscreen"});this.b.tb([a,b])};
window._exportCheck==g.ua&&g.ba("ytmod.player.endscreen",R9,void 0);})(_yt_player);


}
/*
     FILE ARCHIVED ON 01:42:32 Oct 28, 2016 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 13:46:20 Dec 01, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.452
  exclusion.robots: 0.017
  exclusion.robots.policy: 0.007
  esindex: 0.01
  cdx.remote: 6.371
  LoadShardBlock: 77.665 (3)
  PetaboxLoader3.datanode: 76.972 (4)
  load_resource: 125.019
  PetaboxLoader3.resolve: 81.858
*/