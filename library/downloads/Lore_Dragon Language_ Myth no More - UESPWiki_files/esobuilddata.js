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

var ecdLastTooltip = null;


function onTooltipHoverShow()
{
	ecdLastTooltip = $(this).find('.ecdTooltip');
	
	if (ecdLastTooltip) 
	{
		ecdLastTooltip.css('display', 'inline-block');
		adjustSkillTooltipPosition(ecdLastTooltip, $(this));
	}
}


function adjustSkillTooltipPosition(tooltip, parent)
{
	if (tooltip == null || tooltip[0] == null) return;
	
     var windowWidth = $(window).width();
     var windowHeight = $(window).height();
     var toolTipWidth = tooltip.width();
     var toolTipHeight = tooltip.height();
     var elementHeight = parent.height();
     var elementWidth = parent.width();
     
     var top = parent.offset().top - 50;
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
}


function onTooltipHoverHide()
{
	if (ecdLastTooltip) ecdLastTooltip.hide();
}


function onTooltipMouseMove(e)
{
	if (ecdLastTooltip == null) return;
	
    var mousex = e.pageX + 20;
    var mousey = e.pageY + 20 
    
    var tipWidth  = ecdLastTooltip.width();
    var tipHeight = ecdLastTooltip.height();

    var tipVisX = $(window).width() - (mousex + tipWidth);
    var tipVisY = $(window).height() - (mousey + tipHeight);

    if ( tipVisX < 20 ) {
        mousex = e.pageX - tipWidth - 20;
    } if ( tipVisY < 20 ) {
        mousey = e.pageY - tipHeight - 20;
    }
    
    ecdLastTooltip.css({  top: mousey, left: mousex });
}


var EsoSkillTree_LastOpenTree = null;
var EsoSkillTree_LastOpenTreeName = null;
var EsoSkillTree_LastSkillContentName = null;
var EsoSkillTree_LastSkillContent = null;


function OnEsoSkillTreeName1Click(e)
{
	EsoSkillTree_LastOpenTreeName = $('.ecdSkillTreeName1.ecdSkillTreeNameHighlight').first();
	EsoSkillTree_LastOpenTree = EsoSkillTree_LastOpenTreeName.next(".ecdSkillTreeContent1");
	
	if (EsoSkillTree_LastOpenTree.is($(this).next(".ecdSkillTreeContent1"))) return;
	EsoSkillTree_LastOpenTree.slideUp();
	EsoSkillTree_LastOpenTreeName.removeClass('ecdSkillTreeNameHighlight');
		
	EsoSkillTree_LastSkillContentName = $('.ecdSkillTreeNameHighlight2').first();
	EsoSkillTree_LastSkillContent = $('.ecdSkillData:visible').first();
	EsoSkillTree_LastSkillContentName.removeClass('ecdSkillTreeNameHighlight2');
	EsoSkillTree_LastSkillContent.hide();
		
	EsoSkillTree_LastOpenTreeName = $(this);
	EsoSkillTree_LastOpenTree = EsoSkillTree_LastOpenTreeName.next(".ecdSkillTreeContent1");
	
	EsoSkillTree_LastOpenTreeName.addClass('ecdSkillTreeNameHighlight');
	EsoSkillTree_LastOpenTree.slideDown();

	SelectEsoSkillTreeContents(EsoSkillTree_LastOpenTree.children(".ecdSkillTreeName2").first());
}


function OnEsoSkillTreeName2Click(e)
{
	SelectEsoSkillTreeContents($(this));
}


function SelectEsoSkillTreeContents(object)
{
	EsoSkillTree_LastSkillContentName = $('.ecdSkillTreeNameHighlight2').first();
	EsoSkillTree_LastSkillContent = $('.ecdSkillData:visible').first();
	
	EsoSkillTree_LastSkillContentName.removeClass('ecdSkillTreeNameHighlight2');
	EsoSkillTree_LastSkillContent.hide();
	
	EsoSkillTree_LastSkillContentName = object;
	object.addClass('ecdSkillTreeNameHighlight2');
	
	var objText = object.contents().filter(function(){ return this.nodeType == 3;})[0].nodeValue;
	var idName = 'ecdSkill_' + objText.replace(/ /g, "").replace(/'/g, "");
	
	EsoSkillTree_LastSkillContent = $('#'+idName); 
	EsoSkillTree_LastSkillContent.show(); 
}


function OnEsoRightTitleClick(name)
{
	$('.ecdRightTitleButtonEnabled').addClass("ecdRightTitleButtonDisabled").removeClass("ecdRightTitleButtonEnabled");
	
	var idName = "#ecd" + name;
	var idButtonName = "#ecd" + name + "Button";
	$(idButtonName).removeClass("ecdRightTitleButtonDisabled").addClass("ecdRightTitleButtonEnabled");
	
	$("#ecdSkills").hide();
	$("#ecdInventory").hide();
	$("#ecdBank").hide();
	$("#ecdCraft").hide();
	$("#ecdAccountInv").hide();
	
	$(idName).show();
}


function OnItemFilter(name)
{
	$('.ecdItemFilterContainer').removeClass("selected");
	
	var idName = ".ecdItemFilter" + name;
	$(idName).addClass("selected");
	
	var displayName = name.toUpperCase();
	
	if (displayName == "ARMOR")
		displayName = "APPAREL";
	else if (displayName == "MATERIAL")
		displayName = "MATERIALS";	
	else if (displayName == "MISC")
		displayName = "MISC";
	
	$(".ecdItemFilterTextLabel").text(displayName);
	
	DoItemFilter();
}


function ItemFilter_All(item)
{
	return true;
}


function ItemFilter_Armor(item)
{
	return item.type == 2 || (item.type == 1 && item.weaponType == 14);
}


function ItemFilter_Weapon(item)
{
	return item.type == 1 && item.weaponType != 14;
}


function ItemFilter_Consumable(item)
{
	return item.consumable != 0 && (
		item.type ==  7 || item.type ==  4 || item.type ==  9 || item.type == 12 || item.type == 29 || item.type == 55 || 
		item.type == 57 || item.type == 30 || item.type == 18 || item.type ==  5 || item.type == 47 || item.type ==  6 ||
		item.type == 18 || item.type ==  8 || item.type == 54 || item.type == 58);
}


function ItemFilter_Material(item)
{
	return item.type == 10 || item.type == 44 || item.type == 53 || item.type == 45 || item.type == 33 || item.type == 31 || 
           item.type == 39 || item.type == 37 || item.type == 35 || item.type == 38 || item.type == 40 || item.type == 52 ||
           item.type == 36 || item.type == 51 || item.type == 17 || item.type == 42 || item.type == 46 || item.type == 41 ||
           item.type == 17 || item.type == 43;
}


function ItemFilter_Misc(item)
{
	return item.type == 56 || item.type == 48 || item.type == 19 || item.type == 9 || item.type == 29 || item.type == 55 || 
           item.type == 57 || item.type == 30 || item.type == 18 || item.type == 5 || item.type == 47 || item.type ==  6 ||
           item.type == 26 || item.type == 21 || item.type == 20;
}


function ItemFilter_Quest(item)
{
	//TODO
	return false;
}


function ItemFilter_Junk(item)
{
	return item.junk != 0;
}


var ITEM_FILTER_FUNCTIONS = {
		"ALL" 			: ItemFilter_All,
		"WEAPON" 		: ItemFilter_Weapon,
		"ARMOR" 		: ItemFilter_Armor,
		"CONSUMABLE" 	: ItemFilter_Consumable,
		"MATERIAL" 		: ItemFilter_Material,
		"MISC" 			: ItemFilter_Misc,
		"QUEST" 		: ItemFilter_Quest,
		"JUNK" 			: ItemFilter_Junk,
}


function MatchFilterString(filterText, item)
{
	if (filterText == "") return true;
	
	if (item.nameLC.indexOf(filterText) != -1) return true;
	if (item.setNameLC.indexOf(filterText) != -1) return true;
	
	return false;	
}


function DoItemFilter()
{
	var filterName = $(".ecdItemFilterContainer.selected").attr('itemfilter').toUpperCase();
	var filterText = $(".ecdItemFilterTextInput").val().toLowerCase();
	var filterFunc = ITEM_FILTER_FUNCTIONS[filterName];
	
	if (filterFunc == null) filterFunc = ItemFilter_All;
	
	$(".ecdScrollContent tr").each(function() {
			var localId = $(this).attr('localid');
			var item = ecdAllInventory[localId];
			
			if (item == null)
			{
				$(this).show();
				return;
			}
			
			if (!filterFunc(item)) {
				$(this).hide();
				return;
			}
			
			if (!MatchFilterString(filterText, item))
			{
				$(this).hide();
				return;
			}
				
			$(this).show();
		});	
	
}


function copyToClipboard(self)
{
	var textToCopy = $(self).text();
	copyTextToClipboard(textToCopy);
}


function OnBuildTableAnchorClick(e)
{
	e.stopPropagation();
}


function OnBuildTableRowClick(e)
{
	var anchor = $(this).parent().find(".ecdBuildLink");
	if (anchor.length == 0) return;
	
	window.location.href = anchor.attr("href");
}


function copyTextToClipboard(textToCopy)
{
	$("body")
		.append($('<input type="text" name="fname" class="textToCopyInput" style="opacity: 0; position: absolute;" />' )
				.val(textToCopy))
		.find(".textToCopyInput")
		.select();
	
	try 
	{
		var successful = document.execCommand('copy');
		var msg = successful ? 'successful' : 'unsuccessful';
    }
	catch (err) 
    {
    	window.prompt("To copy the text to clipboard: Ctrl+C, Enter", textToCopy);
    }
	
	$(".textToCopyInput").remove();
}


function ActivateBuildActionBar(barIndex)
{
	
	if (barIndex >= 1 && barIndex <= 3)
	{
		$("#ecdActionBar .ecdActiveAbilityBar").removeClass("ecdActiveAbilityBar");
		$(".ecdActionBar" + barIndex).addClass("ecdActiveAbilityBar");
		
		$(".ecdStatBar").hide();
		$(".ecdStatBar1").hide();
		$(".ecdStatBar2").hide();
		$(".ecdStatBar3").hide();
		
		$(".ecdStatBar" + barIndex).show();
	}
	
	if (barIndex >= 1 && barIndex <= 2)
	{
		$("#ecdEquipSlots .ecdActiveAbilityBar").removeClass("ecdActiveAbilityBar");
		$("#ecdWeaponBar" + barIndex).addClass("ecdActiveAbilityBar");
	}
	
}


function OnBuildWeaponBar1Click(e)
{
	ActivateBuildActionBar(1);
}


function OnBuildWeaponBar2Click(e)
{
	ActivateBuildActionBar(2);
}


function OnBuildActionBar1Click(e)
{
	ActivateBuildActionBar(1);
}


function OnBuildActionBar2Click(e)
{
	ActivateBuildActionBar(2);
}


function OnBuildActionBar3Click(e)
{
	ActivateBuildActionBar(3);
}


var ecdItemOwnerWindow = null;


function CreateItemOwnerWindow()
{
	if (ecdItemOwnerWindow != null) return;
	
	ecdItemOwnerWindow = $("<div/>")
							.addClass("ecdItemOwnerWindow")
							.attr('id', 'ecdItemOwnerWindow')
							.hide()
							.appendTo("body");
	
	ecdItemOwnerWindow.html("<div class='ecdItemOwnerTitle'>Characters With Item</div><hr><div id='ecdItemOwnerData' class='ecdItemOwnerData'></div>");
}


function CreateItemOwnerHtml(itemData)
{
	var output = "";
	var summaryData = {};
	
	for (var i = 0; i < itemData.characterIds.length; ++i)
	{
		var qnt = itemData.characterQnts[i];
		var charId = itemData.characterIds[i];
		
		if (summaryData[charId] == null)
			summaryData[charId] = qnt;
		else
			summaryData[charId] += qnt;
	}
	
	for (var charId in summaryData) 
	{
		var qnt = summaryData[charId];
		
		var name = ecdCharacterNames[charId];
		if (name == null) name = "" + charId;
		
		output += "<div class='ecdItemDataQnt'>" + qnt + "</div>";
		output += "<div class='ecdItemDataName'>" + name + "</div>";
		output += "<br/>\n";
	}
	
	return output;
}


function ShowItemOwnerWindow(element, itemData)
{
	CreateItemOwnerWindow();
	
	ecdItemOwnerWindow.find('#ecdItemOwnerData').html(CreateItemOwnerHtml(itemData));
	ecdItemOwnerWindow.show();
	
	var top = element.offset().top + 30;
    var left = element.offset().left + 100;
    
    ecdItemOwnerWindow.offset({ top: top, left: left });
}


function OnItemRowClick(e)
{
	
	var localId = $(this).attr("localid");
	if (localId == null) return;
	
	var itemData = ecdAllInventory[localId];
	if (itemData == null) return;
	
	ShowItemOwnerWindow($(this), itemData);
}


function OnItemRowLeave(e)
{
	if (ecdItemOwnerWindow) ecdItemOwnerWindow.hide();
}


function DoesEsoItemLinkHaveEvent()
{
	if (ShowEsoItemLinkPopup != null) return true; 
	
	//var events = $._data($(".eso_item_link").get(0), 'events');
	//if (events['mouseover'] != null || events['mouseout'] != null) return true;
	
	return false;
}


function onDocReady() 
{  
	$(".ecdTooltipTrigger").hover(onTooltipHoverShow, onTooltipHoverHide, onTooltipMouseMove);
	$(".ecdTooltip").hover(onTooltipHoverHide, onTooltipHoverHide, onTooltipHoverHide);
	
	$('.ecdSkillTreeName1').click(OnEsoSkillTreeName1Click);
	$('.ecdSkillTreeName2').click(OnEsoSkillTreeName2Click);
	
	EsoSkillTree_LastOpenTreeName = $('.ecdSkillTreeName1:visible').first();
	EsoSkillTree_LastOpenTree = EsoSkillTree_LastOpenTreeName.next(".ecdSkillTreeContent1");
	
	EsoSkillTree_LastSkillContentName = $('.ecdSkillTreeNameHighlight2').first();
	EsoSkillTree_LastSkillContent = $('.ecdSkillData:visible').first();
	
	var tables = $(".tablesorter");
	
	if (tables.tablesorter)
	{
		$("#ecdRoot .tablesorter").tablesorter({
			sortList: [[2,0]] 
		});
		
		//$("#ecdBuildTable").tablesorter();
	}
	
	$(".ecdItemFilterTextInput").keyup(function() {
			$(".ecdItemFilterTextInput").val(this.value);
			DoItemFilter();
		});
	
	$(".ecdItemFilterTextInput").blur(function() {
			$(".ecdItemFilterTextInput").val(this.value);
		});
	
	$('.ecdClickToCopy').click(function() {
    		copyToClipboard(this);
		});
	
	$('.ecdClickToCopyTooltip').click(function() {
			var text = $(this).attr('tooltip');
			copyTextToClipboard(text);
		});
	
	
	$("#ecdBuildTable a").click(OnBuildTableAnchorClick);
	$(".ecdBuildRowHover td").not(".ecdBuildTableButtons").click(OnBuildTableRowClick);
	
	$("#ecdWeaponBar1").click(OnBuildWeaponBar1Click);
	$("#ecdWeaponBar2").click(OnBuildWeaponBar2Click);
	
	$(".ecdActionBar1").click(OnBuildActionBar1Click);
	$(".ecdActionBar2").click(OnBuildActionBar2Click);
	$(".ecdActionBar3").click(OnBuildActionBar3Click);
	
	$(".ecdScrollContent tr").click(OnItemRowClick);
	
	$(".ecdScrollContent tr").mouseleave(OnItemRowLeave);
	
	if (!DoesEsoItemLinkHaveEvent()) $('.eso_item_link').hover(OnEsoItemLinkEnter, OnEsoItemLinkLeave);
}


$(document).ready(onDocReady);




}
/*
     FILE ARCHIVED ON 22:09:53 Oct 27, 2016 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 13:45:29 Dec 01, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.699
  exclusion.robots: 0.047
  exclusion.robots.policy: 0.034
  esindex: 0.014
  cdx.remote: 23.006
  LoadShardBlock: 433.204 (3)
  PetaboxLoader3.datanode: 292.008 (6)
  PetaboxLoader3.resolve: 1208.763 (3)
  load_resource: 1083.187
*/