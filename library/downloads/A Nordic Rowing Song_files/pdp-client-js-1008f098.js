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

import"./confirm-over-18-afcc1aff.js";import{d as t,_ as e,s as a,G as s,x as i,K as c,a as o,D as r,q as l,u as n,U as d}from"./shell-eccd4d31.js";import"./faceplate-modal-a08cf70f.js";import"./open-interstitial-modal-5c265c22.js";import"./reddit-page-data-0f190076.js";import"./shreddit-comments-page-ad-1dacc519.js";import"./shreddit-tweet-embed-9673cb44.js";import"./icon-caret-left-bda81255.js";import"./icon-caret-right-d5564538.js";import"./faceplate-tabgroup-30b76c56.js";import"./faceplate-tabpanel-0ca4c6d5.js";import"./comment-body-header-4f8bab71.js";import"./faceplate-dropdown-menu-add4e359.js";import"./faceplate-menu-4b3efc23.js";import"./shreddit-join-link-2070ef50.js";import"./faceplate-tablist-b6fe26e8.js";import"./pageable-832f4cce.js";import"./icon-controversial-0df2fb52.js";import"./icon-new-b05e9cad.js";import"./makeEventDispatcher-3f2c4bf0.js";var p;const b=["global/view/discovery_unit","right_rail/click/panel_tab","right_rail/view/panel_tab","post/view/post","post/consume/post","post/click/post","post/click/subreddit","post/click/comments"];let m=p=class extends a{constructor(){super(),this.tabPanelsRef=s(),this.tabSelectCallback=t=>{for(const e of t)if("attributes"===e.type&&"faceplate-tab-selected"===e.attributeName&&e.target.nodeType===Node.ELEMENT_NODE){e.target.hasAttribute("faceplate-tab-selected")&&this.handleTabSelect(e.target)}},this.handlePDPRightRailTelemetry=t=>{const e=t.detail.details||t.detail;if(a=e,!b.includes(r(a)))return;var a;let s;try{const e=t?.target,a=e?.closest("span[event-data]")?.getAttribute("event-data")??e?.closest("reddit-pdp-right-rail-post")?.getAttribute("event-data");s=a?JSON.parse(decodeURIComponent(a)):{}}catch{s={}}e.action_info={...e.action_info,...s.action_info,type:"right_rail"},"post"===e.source&&(e.post=s.post||{},e.subreddit=s.subreddit||{})},this.handleTabSelect=t=>{const e=t.slot;e&&this.querySelector(`[slot="tab-panel"] [slot="${e}"] faceplate-partial[loading="programmatic"]`)?.load()},this.handleButtonClick=t=>{t.preventDefault()},this.addEventListener("faceplate-track",this.handlePDPRightRailTelemetry),this.addEventListener("track-event",this.handlePDPRightRailTelemetry)}firstUpdated(){this.querySelector('[slot="tabs"]')?.addEventListener("click",this.handleButtonClick)}connectedCallback(){super.connectedCallback(),this.tabSelectObserver=new MutationObserver(this.tabSelectCallback),this.tabSelectObserver.observe(this,p.tabSelectObserverOptions)}disconnectedCallback(){super.disconnectedCallback(),this.tabSelectObserver.disconnect()}render(){return i`\n <div>\n <slot name="tabs" class="block sticky z-10 top-0 bg-neutral-background"></slot>\n <div ${c(this.tabPanelsRef)} class="pt-sm pb-lg">\n <slot name="tab-panel"></slot>\n </div>\n </div>\n `}};m.styles=[t],m.tabSelectObserverOptions={childList:!0,subtree:!0,attributes:!0,attributeFilter:["faceplate-tab-selected"]},m=p=e([o("pdp-right-rail")],m);const u=l(n(a));let h=class extends u{constructor(){super(...arguments),this.consumeTimeoutId=null}connectedCallback(){super.connectedCallback(),this.enableObserver()}disconnectedCallback(){super.disconnectedCallback(),this.disableObserver(),this.clearConsumeTimeout()}clearConsumeTimeout(){this.consumeTimeoutId&&(clearTimeout(this.consumeTimeoutId),this.consumeTimeoutId=null)}observerIsIntersectingCallback(){this.consumeTimeoutId=setTimeout((()=>{this.trackEvent(d({source:"post",action:"consume",noun:"post"}))}),2e3)}observerIsNotIntersectingCallback(){this.clearConsumeTimeout()}createRenderRoot(){return this}};h=e([o("reddit-pdp-right-rail-post")],h),import("./faceplate-hovercard-3e49a5a9.js"),import("./faceplate-progress-be9918d3.js"),import("./faceplate-tooltip-21c751bc.js");
//# sourceMappingURL=pdp-client-js-1008f098.js.map


}
/*
     FILE ARCHIVED ON 02:29:05 Jun 10, 2023 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 13:45:19 Dec 01, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.472
  exclusion.robots: 0.016
  exclusion.robots.policy: 0.007
  esindex: 0.01
  cdx.remote: 7.978
  LoadShardBlock: 49.195 (3)
  PetaboxLoader3.datanode: 89.664 (4)
  load_resource: 194.093
  PetaboxLoader3.resolve: 143.143
*/