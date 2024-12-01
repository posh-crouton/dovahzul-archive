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

function addsectionbottom(){var caplus;if(!(caplus=document.getElementById("ca-addsection")))return;var content;if(!(content=document.getElementById("bodyContent")))return;if(document.URL.indexOf('?')>=0)return;var addsection=document.createElement("div");addsection.innerHTML="<span class=\"mw-editsection\">[ <a "+"href=\""+caplus.childNodes[0].getAttribute("href")+"\" title=\""+caplus.childNodes[0].getAttribute("title")+"\" accesskey=\""+caplus.childNodes[0].getAttribute("accesskey")+"\" ><span>Add new section</span></a> ]</span>"
addsection.id="addsectionbottom";var catlinks=document.getElementById("catlinks");if(catlinks==null){content.appendChild(addsection);}else{content.insertBefore(addsection,catlinks);}}$(addsectionbottom);window.autoCollapse=2;window.collapseCaption='hide';window.expandCaption='show';window.collapseTable=function(tableIndex){var Button=document.getElementById('collapseButton'+tableIndex);var Table=document.getElementById('collapsibleTable'+tableIndex);if(!Table||!Button){return false;}var Rows=Table.rows;if(Button.firstChild.data==window.collapseCaption){for(var i=1;i<Rows.length;i++){Rows[i].style.display='none';}Button.firstChild.data=window.expandCaption;}else{for(var i=1;i<Rows.length;i++){Rows[i].style.display=Rows[0].style.display;}Button.firstChild.data=window.collapseCaption;}}
$(function(){var prot=document.getElementById('protected-icon');if(document.getElementById('featured-star')&&prot)prot.style.marginRight='25px';});window.hasClass=(function(){var reCache={};return function(element,className){return(reCache[className]?reCache[className]:(reCache[className]=new RegExp("(?:\\s|^)"+className+"(?:\\s|$)"))).test(element.className);};})();window.createCollapseButtons=function(){var tableIndex=0;var NavigationBoxes=new Object();var Tables=document.getElementsByTagName('table');for(var i=0;i<Tables.length;i++){if(window.hasClass(Tables[i],'collapsible')){var HeaderRow=Tables[i].getElementsByTagName('tr')[0];if(!HeaderRow){continue;}var Header=HeaderRow.getElementsByTagName('th')[0];if(!Header){continue;}NavigationBoxes[tableIndex]=Tables[i];Tables[i].setAttribute('id','collapsibleTable'+tableIndex);var Button=document.createElement('span');var ButtonLink=document.createElement('a');var ButtonText=document.createTextNode(window.collapseCaption);Button.className
='collapseButton';ButtonLink.style.color=Header.style.color;ButtonLink.setAttribute('id','collapseButton'+tableIndex);ButtonLink.setAttribute('href',"javascript:collapseTable("+tableIndex+");");ButtonLink.appendChild(ButtonText);Button.appendChild(document.createTextNode('['));Button.appendChild(ButtonLink);Button.appendChild(document.createTextNode(']'));Header.insertBefore(Button,Header.childNodes[0]);tableIndex++;}}for(var i=0;i<tableIndex;i++){if(window.hasClass(NavigationBoxes[i],'collapsed')||(tableIndex>=window.autoCollapse&&hasClass(NavigationBoxes[i],'autocollapse'))){collapseTable(i);}else if(window.hasClass(NavigationBoxes[i],'innercollapse')){var element=NavigationBoxes[i];while(element=element.parentNode){if(window.hasClass(element,'outercollapse')){collapseTable(i);break;}}}}}
$(createCollapseButtons);window.ts_alternate_row_colors=true;window.NavigationBarHide='[ Hide ]';window.NavigationBarShow='[ Show ]';window.NavigationBarShowDefault=0;window.toggleNavigationBar=function(indexNavigationBar){var NavToggle=document.getElementById("NavToggle"+indexNavigationBar);var NavFrame=document.getElementById("NavFrame"+indexNavigationBar);if(!NavFrame||!NavToggle){return false;}if(NavToggle.firstChild.data==window.NavigationBarHide){for(var NavChild=NavFrame.firstChild;NavChild!=null;NavChild=NavChild.nextSibling){if(NavChild.className=='NavPic'){NavChild.style.display='none';}if(NavChild.className=='NavContent'){NavChild.style.display='none';}}NavToggle.firstChild.data=window.NavigationBarShow;}else if(NavToggle.firstChild.data==window.NavigationBarShow){for(var NavChild=NavFrame.firstChild;NavChild!=null;NavChild=NavChild.nextSibling){if(NavChild.className=='NavPic'){NavChild.style.display='block';}if(NavChild.className=='NavContent'){NavChild.style.display=
'block';}}NavToggle.firstChild.data=window.NavigationBarHide;}}
window.createNavigationBarToggleButton=function(){var indexNavigationBar=0;for(var i=0;NavFrame=document.getElementsByTagName("div")[i];i++){if(NavFrame.className=="NavFrame"){indexNavigationBar++;var NavToggle=document.createElement("a");NavToggle.className='NavToggle';NavToggle.setAttribute('id','NavToggle'+indexNavigationBar);NavToggle.setAttribute('href','javascript:toggleNavigationBar('+indexNavigationBar+');');var NavToggleText=document.createTextNode(window.NavigationBarHide);NavToggle.appendChild(NavToggleText);for(var j=0;j<NavFrame.childNodes.length;j++){if(NavFrame.childNodes[j].className=="NavHead"){NavFrame.childNodes[j].appendChild(NavToggle);}}NavFrame.setAttribute('id','NavFrame'+indexNavigationBar);}}if(window.NavigationBarShowDefault<indexNavigationBar){for(var i=1;i<=indexNavigationBar;i++){toggleNavigationBar(i);}}}
$(createNavigationBarToggleButton);;mw.loader.state({"site":"ready"});
/* cache key: uesp_net_wiki5:resourceloader:filter:minify-js:7:ce864bfb6735f3bf2dd9ab7047672eac */

}
/*
     FILE ARCHIVED ON 22:09:47 Oct 27, 2016 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 13:45:31 Dec 01, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.85
  exclusion.robots: 0.026
  exclusion.robots.policy: 0.011
  esindex: 0.014
  cdx.remote: 8.432
  LoadShardBlock: 133.414 (3)
  PetaboxLoader3.datanode: 112.031 (4)
  load_resource: 160.14
  PetaboxLoader3.resolve: 135.03
*/