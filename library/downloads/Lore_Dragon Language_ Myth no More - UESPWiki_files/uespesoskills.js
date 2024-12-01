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

var g_EsoSkillPopupTooltip = null;
var g_EsoSkillPopupIsVisible = false;


function CreateEsoSkillPopupTooltip()
{
	g_EsoSkillPopupTooltip = $('<div />').addClass('esoSkillPopupTooltip').hide();
	$('body').append(g_EsoSkillPopupTooltip);
}


function ShowEsoSkillPopupTooltip(parent, skillId, level, health, magicka, stamina, spellDamage, weaponDamage)
{
	var linkSrc = "https://web.archive.org/web/20161027223117/http://esolog.uesp.net/skillTooltip.php?embed";
	var dataOk = false;
	
	if (skillId) { linkSrc += "&id=" + skillId; dataOk = true; }
	if (level) linkSrc += "&level=" + level;
	if (health) linkSrc += "&health=" + health;
	if (magicka) linkSrc += "&magicka=" + magicka;
	if (stamina) linkSrc += "&stamina=" + stamina;
	if (spellDamage) linkSrc += "&spelldamage=" + spellDamage;
	if (weaponDamage) linkSrc += "&weapondamage=" + weaponDamage;
	
	if (!dataOk) return false;
	
	if (g_EsoSkillPopupTooltip == null) CreateEsoSkillPopupTooltip();
	
	var position = $(parent).offset();
	var width = $(parent).width();
	g_EsoSkillPopupTooltip.css({ top: position.top-50, left: position.left + width });
	
	g_EsoSkillPopupIsVisible = true;

	g_EsoSkillPopupTooltip.load(linkSrc, "", function() {
		
		if (g_EsoSkillPopupIsVisible)
		{
			g_EsoSkillPopupTooltip.show();
			AdjustEsoItemLinkTooltipPosition(g_EsoSkillPopupTooltip, $(parent));
		}
	});
}


function AdjustEsoSkillPopupTooltipPosition(tooltip, parent)
{
     var windowWidth = $(window).width();
     var windowHeight = $(window).height();
     var toolTipWidth = tooltip.width();
     var toolTipHeight = tooltip.height();
     var elementHeight = parent.height();
     var elementWidth = parent.width();
     
     var top = parent.offset().top - toolTipHeight/2 + elementHeight/2;
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


function HideEsoSkillPopupTooltip()
{
	g_EsoSkillPopupTooltip.hide();
	g_EsoSkillPopupIsVisible = false;
}


function OnEsoSkillLinkEnter()
{
	ShowEsoSkillPopupTooltip(this, $(this).attr('skillid'), $(this).attr('level'), $(this).attr('health'), $(this).attr('magicka'), $(this).attr('stamina'), $(this).attr('spelldamage'), $(this).attr('weapondamage'));
}


function OnEsoSkillLinkLeave()
{
	HideEsoSkillPopupTooltip();
}


$( document ).ready(function() {
	$('.esoSkillTooltipLink').hover(OnEsoSkillLinkEnter, OnEsoSkillLinkLeave);
});

}
/*
     FILE ARCHIVED ON 22:31:17 Oct 27, 2016 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 13:45:30 Dec 01, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 2.481
  exclusion.robots: 0.013
  exclusion.robots.policy: 0.006
  esindex: 0.011
  cdx.remote: 10.771
  LoadShardBlock: 432.818 (3)
  PetaboxLoader3.datanode: 292.118 (6)
  PetaboxLoader3.resolve: 145.936 (4)
  load_resource: 34.321
*/