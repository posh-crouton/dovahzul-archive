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

var prima = {}; //Create namespace

prima.mypurchases_cached;

/*
Setup callbacks and ajax fetching for My Purchases link
*/
function initMyPurchases(){
  var purchasesDiv = $('#purchasehover');
  $("#mypurchase").mouseover(function() {
    var hovered = $(this);
    hovered.addClass('hovered');
    var hovPos= $(this).position();
    var leftOffset = hovPos.left;
    var topOffset = hovPos.top + hovered.outerHeight(true);
    purchasesDiv.css({
        position: "absolute",
        left: leftOffset + "px",
        top: topOffset + "px"
      });
    purchasesDiv.show();
    if (!prima.mypurchases_cached){
      $('#recent_items').load('/accounts/recent_guides', function(){
          $('#recent_loading').hide();
          prima.mypurchases_cached = true;          
      }); 
    }
    setTimeout(function(){purchasesDiv.fadeOut()}, 8000);
    setTimeout(function(){$("#mypurchase").removeClass('hovered')}, 8000);
  });
  $('#purchasehover').mouseleave(function(){
    purchasesDiv.hide();
    $("#mypurchase").removeClass('hovered');
  });
}

var dropdowns = Array();
$(function(){	
	if($$('.dropdown').length > 0){
		$$('.dropdown').each(function(dd){
			dropdowns.push(new elSelect({container : dd.get("id")}));
		});
	}
});


}
/*
     FILE ARCHIVED ON 21:03:00 Nov 05, 2015 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 17:29:02 Dec 14, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.44
  exclusion.robots: 0.016
  exclusion.robots.policy: 0.006
  esindex: 0.008
  cdx.remote: 18.832
  LoadShardBlock: 181.187 (3)
  PetaboxLoader3.datanode: 142.035 (4)
  PetaboxLoader3.resolve: 232.12 (2)
  load_resource: 198.957
*/