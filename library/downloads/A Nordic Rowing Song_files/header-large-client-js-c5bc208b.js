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

import"./icon-search-fa7468e9.js";import{u as e,_ as t,s,e as i,a as r,S as n,au as a,av as l,ap as o,ar as h,ao as u,d as c,x as d}from"./shell-eccd4d31.js";const g=e(s),p=e=>{e.preventDefault()};let D=class extends g{constructor(){super(...arguments),this.isHamburgerMenuIncluded=!1,this.showAccountManagerModal=!1,this.hamburgerMenuButton=null,this.menuDialog=null,this.loginButton=void 0,this.shredditInteractableElement=null,this.getAppBtn=null,this.closeDialogBtn=null,this.getAppDialog=null,this.search=null,this.userDrawerButton=null,this.userDrawerMenu=null,this.userDrawerContent=null,this.userDrawerLoginButton=null,this.scrollBlocker=new n(this),this.handleOpenUserDrawer=e=>{e.stopPropagation(),this._closeDialog(),this.userDrawerContent?.classList.remove("pointer-events-none"),this.trackEvent(a())},this.handleCloseUserDrawer=e=>{e?.stopPropagation(),this.userDrawerContent?.classList.add("pointer-events-none"),this.trackEvent(l())},this.setupUserDrawer=async()=>{this.userDrawerButton=this.querySelector("#expand-user-drawer-button"),this.userDrawerMenu=this.userDrawerButton?.closest("faceplate-dropdown-menu")??null,this.userDrawerContent=this.querySelector("#user-drawer-content")??null},this.focusSearchInput=()=>{this.search?.shadowRoot?.querySelector("input[type=search]")?.focus()},this.togglePointerEvents=()=>{document.querySelector("header")?.classList.toggle("pointer-events-auto")},this.handleCloseDialog=()=>{this.getAppDialog?.close()},this.handleGetAppClick=()=>{this.getAppDialog&&(this.togglePointerEvents(),this.getAppDialog?.showModal())},this.handleClickHamburgerMenu=async()=>{await this.initializeHamburgerMenuSlottedElements(),this.menuDialog&&(this.menuDialog.open?this._closeDialog():(this._closeUserDrawer(),this.menuDialog.show(),this.trackEvent(o()),this.scrollBlocker.blockPageScrolling()),this.trackEvent(h()))},this.handleSearchDropdownOpen=()=>{this._closeUserDrawer(),this._closeDialog()},this.unblockPageScrolling=()=>{this.scrollBlocker.unblockPageScrolling()}}_closeDialog(){this.menuDialog?.open&&(this.menuDialog.close(),this.reset(),this.trackEvent(u()))}_closeUserDrawer(){this.userDrawerMenu?.hidden||this.userDrawerMenu?.close()}addEventListenersToSlottedElements(){window.addEventListener("deviceorientation",(()=>this._closeDialog())),this.getAppBtn?.addEventListener("click",this.handleGetAppClick),this.closeDialogBtn?.addEventListener("click",this.handleCloseDialog),this.getAppDialog?.addEventListener("faceplate-close",this.togglePointerEvents),this.userDrawerMenu?.addEventListener("faceplate-dropdown-menu:open",this.handleOpenUserDrawer),this.userDrawerMenu?.addEventListener("faceplate-dropdown-menu:close",this.handleCloseUserDrawer)}async initializeHamburgerMenuSlottedElements(){this.isHamburgerMenuIncluded&&(this.menuDialog||(this.menuDialog=this.shadowRoot?.querySelector("slot[name=reddit-header-hamburger-menu]")?.assignedElements({flatten:!0})?.find((e=>e.matches("faceplate-dialog#menu")))??null),this.menuDialog&&(this.shredditInteractableElement||(this.shredditInteractableElement=this.menuDialog?.querySelector("shreddit-interactable-element"),this.shredditInteractableElement?.addEventListener("interactionEvent",(()=>this._closeDialog())))))}initializeSlottedElements(){!this.loginButton&&this.showAccountManagerModal&&(this.loginButton=this.querySelector("a#login-button"),this.loginButton?.addEventListener("click",p)),!this.userDrawerLoginButton&&this.showAccountManagerModal&&(this.userDrawerLoginButton=this.querySelector("#login-list-item"),this.userDrawerLoginButton?.addEventListener("click",(e=>{e.preventDefault(),this._closeUserDrawer()}))),this.getAppBtn||(this.getAppBtn=this.querySelector("#get-app")),this.getAppDialog||(this.getAppDialog=this.querySelector("#get-app-dialog")),this.closeDialogBtn||(this.closeDialogBtn=this.querySelector("#close-dialog")),this.search||(this.search=this.querySelector("reddit-search-large"),this.search?.addEventListener("reddit-search:open",this.handleSearchDropdownOpen)),this.userDrawerButton||this.setupUserDrawer()}reset(){this.unblockPageScrolling(),this.menuDialog?.scrollTo(0,0)}static get styles(){return[c]}firstUpdated(){this.initialize()}async initialize(){this.hamburgerMenuButton||(this.hamburgerMenuButton=this.querySelector("#navbar-menu-button"),this.hamburgerMenuButton?.addEventListener("click",this.handleClickHamburgerMenu)),this.initializeSlottedElements(),this.addEventListenersToSlottedElements()}render(){return d`\n <shreddit-async-loader bundleName="reddit_search_large"></shreddit-async-loader>\n ${this.isHamburgerMenuIncluded?d`<slot class="v2" name="reddit-header-hamburger-menu"></slot>`:""}\n <slot class="v2" name="reddit-search-dialog"></slot>\n <slot></slot>\n `}};t([i({type:Boolean,attribute:"is-hamburger-menu-included"})],D.prototype,"isHamburgerMenuIncluded",void 0),t([i({type:Boolean,attribute:"show-accountmanager-modal"})],D.prototype,"showAccountManagerModal",void 0),D=t([r("reddit-header-large")],D);
//# sourceMappingURL=header-large-client-js-c5bc208b.js.map


}
/*
     FILE ARCHIVED ON 02:29:05 Jun 10, 2023 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 13:45:20 Dec 01, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.988
  exclusion.robots: 0.04
  exclusion.robots.policy: 0.025
  esindex: 0.016
  cdx.remote: 261.199
  LoadShardBlock: 1296.368 (3)
  PetaboxLoader3.resolve: 581.343 (3)
  PetaboxLoader3.datanode: 582.174 (4)
  load_resource: 247.167
*/