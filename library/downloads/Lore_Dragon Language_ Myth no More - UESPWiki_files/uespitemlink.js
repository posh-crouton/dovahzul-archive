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

var EsoItemLinkPopup = null;
var EsoItemLinkPopup_LastElement = null;
var EsoItemLinkPopup_Visible = false;
var EsoItemLinkPopup_CacheId = "";
var EsoItemLinkPopup_Cache = { };


function CreateEsoItemLinkPopup()
{
	EsoItemLinkPopup = $('<div />').addClass('eso_item_link_popup').hide();
	$('body').append(EsoItemLinkPopup);
}


function ShowEsoItemLinkPopup(parent, itemId, level, quality, showSummary, intLevel, intType, itemLink, setCount, questId, collectId, enchantId, enchantIntLevel, enchantIntType, enchantFactor)
{
	EsoItemLinkPopup_LastElement = parent;
	
	var linkSrc = "https://web.archive.org/web/20161027223116/http://esoitem.uesp.net/itemLink.php?&embed";
	var dataOk = false;
	
	if (questId) { linkSrc += "&questid=" + questId; dataOk = true; }
	if (collectId) { linkSrc += "&collectid=" + collectId; dataOk = true; }
	if (itemId) { linkSrc += "&itemid=" + itemId; dataOk = true; }
	if (itemLink) { linkSrc += "&link=\'" + encodeURIComponent(itemLink) + "\'"; dataOk = true; }
	if (intLevel) linkSrc += "&intlevel=" + intLevel;
	if (intType) linkSrc += "&inttype=" + intType;
	if (level) linkSrc += "&level=" + level;
	if (quality) linkSrc += "&quality=" + quality;
	if (enchantId) linkSrc += "&enchantid=" + enchantId;
	if (enchantIntLevel) linkSrc += "&enchantintlevel=" + enchantIntLevel;
	if (enchantIntType) linkSrc += "&enchantinttype=" + enchantIntType;
	if (enchantFactor) linkSrc += "&enchantfactor=" + enchantFactor;
	if (showSummary) linkSrc += "&summary";
	if (setCount != null && setCount >= 0) linkSrc += "&setcount=" + setCount;
	
	if (!dataOk) return false;
	
	if (EsoItemLinkPopup == null) CreateEsoItemLinkPopup();
	
	var position = $(parent).offset();
	var width = $(parent).width();
	EsoItemLinkPopup.css({ top: position.top-50, left: position.left + width });
	EsoItemLinkPopup_Visible = true;
	
	var cacheId = "";
	
	if (itemLink)
	{
		cacheId = itemLink.toString();
	}
	else if (intLevel && intType)
	{
		cacheId = itemId.toString() + "_INT_" + intLevel.toString() + "_" + intType.toString();		
	}
	else if (itemId) 
	{
		cacheId = itemId.toString();
	}
	else if (questId) 
	{
		cacheId = "Q-" + questId.toString();
	}
	else if (collectId) 
	{
		cacheId = "C-" + collectId.toString();
	}
	
	if (level) cacheId += "-L" + level.toString();
	if (quality) cacheId += "-Q" + quality.toString();
	if (showSummary) cacheId += "-S";
	if (setCount) cacheId += "-SC" + setCount.toString();
	if (enchantFactor) cacheId += "-EF" + enchantFactor.toString();
	
	if (enchantId)
	{
		cacheId += "-E" + enchantId.toString() + "-" + enchantIntLevel.toString() + "-" + enchantIntType.toString();
	}
	
	EsoItemLinkPopup_CacheId = cacheId;
	
	if (cacheId != "" && EsoItemLinkPopup_Cache[cacheId] != null)
	{
		EsoItemLinkPopup.html(EsoItemLinkPopup_Cache[cacheId]);
		EsoItemLinkPopup.show();
		AdjustEsoItemLinkTooltipPosition(EsoItemLinkPopup, $(parent));
	}
	else
	{
		$.get(linkSrc, function(data) {
			if (EsoItemLinkPopup_LastElement == null) return;
			if (EsoItemLinkPopup_LastElement !== parent) return;
			EsoItemLinkPopup.html(data);
			if (EsoItemLinkPopup_Visible) EsoItemLinkPopup.show();
			if (cacheId != "" && cacheId == EsoItemLinkPopup_CacheId) EsoItemLinkPopup_Cache[cacheId] = data;
			AdjustEsoItemLinkTooltipPosition(EsoItemLinkPopup, $(parent));
		});
	}
}


function AdjustEsoItemLinkTooltipPosition(tooltip, parent)
{
     var windowWidth = $(window).width();
     var windowHeight = $(window).height();
     var toolTipWidth = tooltip.width();
     var toolTipHeight = tooltip.height();
     var elementHeight = parent.height();
     var elementWidth = parent.width();
     
     var top = parent.offset().top - 150;
     var left = parent.offset().left + parent.outerWidth() + 3;
     
     tooltip.offset({ top: top, left: left });
     
     var viewportTooltip = tooltip[0].getBoundingClientRect();
     
     if (viewportTooltip.bottom > windowHeight) 
     {
    	 var deltaHeight = viewportTooltip.bottom - windowHeight + 10;
         top = top - deltaHeight
     }
     else if (viewportTooltip.top < 0)
     {
    	 var deltaHeight = viewportTooltip.top - 10;
         top = top - deltaHeight
     }
         
     if (viewportTooltip.right > windowWidth) 
     {
         left = left - toolTipWidth - parent.width() - 28;
     }
     
     tooltip.offset({ top: top, left: left });
     viewportTooltip = tooltip[0].getBoundingClientRect();
     
     if (viewportTooltip.left < 0 )
     {
    	 var el = $('<i/>').css('display','inline').insertBefore(parent[0]);
         var realOffset = el.offset();
         el.remove();
         
         left = realOffset.left - toolTipWidth - 3;
         tooltip.offset({ top: top, left: left });
     }
     
}


function HideEsoItemLinkPopup()
{
	EsoItemLinkPopup_Visible = false;
	if (EsoItemLinkPopup == null) return;
	EsoItemLinkPopup.hide();
}


function OnEsoItemLinkEnter()
{
	var $this = $(this);
	EsoItemLinkPopup_LastElement = $this;
	
	ShowEsoItemLinkPopup(EsoItemLinkPopup_LastElement, $this.attr('itemid'), $this.attr('level'), $this.attr('quality'), 
			$this.attr('summary'), $this.attr('intlevel'), $this.attr('inttype'), $this.attr('itemlink'), $this.attr('setcount'),
			$this.attr('questid'), $this.attr('collectid'), $this.attr('enchantid'), $this.attr('enchantintlevel'),
			$this.attr('enchantinttype'), $this.attr('enchantfactor'));
}


function OnEsoItemLinkLeave()
{
	EsoItemLinkPopup_LastElement = null;
	HideEsoItemLinkPopup();
}


$( document ).ready(function() {
	$('.eso_item_link').hover(OnEsoItemLinkEnter, OnEsoItemLinkLeave);
});

}
/*
     FILE ARCHIVED ON 22:31:16 Oct 27, 2016 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 13:45:29 Dec 01, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.69
  exclusion.robots: 0.022
  exclusion.robots.policy: 0.01
  esindex: 0.012
  cdx.remote: 81.635
  LoadShardBlock: 496.144 (3)
  PetaboxLoader3.datanode: 207.61 (6)
  PetaboxLoader3.resolve: 330.172 (3)
  load_resource: 75.596
*/