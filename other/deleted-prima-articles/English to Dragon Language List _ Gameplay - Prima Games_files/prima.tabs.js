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

$(document).ready(function() {
	// Hide all tabbed sections
	$(".tabbed_section").hide();
	$(".tabbed_nav_container").each(function() {
		// Loop through each tabbed container, and show the first tab of each
		$(this).find(".tabbed_section:first").show();
	});
	$(".tabbed_nav_container .tabbed_nav a").click(function() {
		toShow = $(this).attr("href");
		$(this).parents(".tabbed_nav").find(".current").removeClass("current");
		$(this).parents("li").addClass("current");
		$(this).parents(".tabbed_nav_container").find(".tabbed_section:visible").fadeOut(250, function() {
			$(toShow).fadeIn(250);
		});
		return false;
	});


	$(".blankdefault").each(function() {
		$(this).attr("rel", $(this).val());
		$(this).focus(function() {
			if ($(this).val() == $(this).attr("rel"))
			{
				$(this).val("");
			}
		});
		$(this).blur(function() {
			if ($(this).val() == "")
			{
				$(this).val($(this).attr("rel"));
			}
		});
	});

});

}
/*
     FILE ARCHIVED ON 21:03:00 Nov 05, 2015 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 17:29:03 Dec 14, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.501
  exclusion.robots: 0.018
  exclusion.robots.policy: 0.008
  esindex: 0.013
  cdx.remote: 99.524
  LoadShardBlock: 377.112 (3)
  PetaboxLoader3.datanode: 206.705 (4)
  PetaboxLoader3.resolve: 231.33 (2)
  load_resource: 114.91
*/