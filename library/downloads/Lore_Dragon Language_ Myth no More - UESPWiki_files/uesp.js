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


var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];
(function() {
var gads = document.createElement('script');
gads.async = true;
gads.type = 'text/javascript';
var useSSL = 'https:' == document.location.protocol;
gads.src = (useSSL ? 'https:' : 'http:') + 
'//web.archive.org/web/20161027223118/http://www.googletagservices.com/tag/js/gpt.js';
var node = document.getElementsByTagName('script')[0];
node.parentNode.insertBefore(gads, node);
})();

googletag.cmd.push(function() {
googletag.defineSlot('/9709870/Wiki_Bottom_Rectangle', [300, 250], 'div-gpt-ad-1344720487368-0').addService(googletag.pubads());
googletag.defineSlot('/9709870/WikiBottomAnonymous', [300, 250], 'div-gpt-ad-1344720487368-1').addService(googletag.pubads());
googletag.defineSlot('/9709870/WikiLeaderboardTop', [728, 90], 'div-gpt-ad-1344720487368-2').addService(googletag.pubads());
googletag.defineSlot('/9709870/WikiMiddleWideSkyscraper', [160, 600], 'div-gpt-ad-1344720487368-3').addService(googletag.pubads());
googletag.pubads().enableSingleRequest();
googletag.enableServices();
});

var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-1386039-1']);
_gaq.push(['_setDomainName', 'uesp.net']);
_gaq.push(['_trackPageview']);

(function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'stats.g.doubleclick.net/dc.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();


	//Uesp report ad helper functions
function findIFrameHtml (OuterDivID)
{
        if (OuterDivID == null) return;

        OuterDiv = document.getElementById(OuterDivID);
        if (OuterDiv == null) return;

        IFrames = OuterDiv.getElementsByTagName("iframe");
        if (IFrames == null) return;

        if (IFrames[0].contentDocument) return IFrames[0].contentDocument.body.innerHTML;
        return IFrames[0].contentWindow.document.body.innerHTML;
}

function submitReportAdForm(AdId, FormName)
{
        AdHtml = findIFrameHtml(AdId);

        Form = document.forms[FormName];
        if (Form == null) return;

        UespAdContent = Form.elements["UespAdContent"];
        if (AdHtml) UespAdContent.value = AdHtml;

        Form.submit();
}


}
/*
     FILE ARCHIVED ON 22:31:18 Oct 27, 2016 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 13:45:28 Dec 01, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.454
  exclusion.robots: 0.015
  exclusion.robots.policy: 0.007
  esindex: 0.009
  cdx.remote: 5.947
  LoadShardBlock: 204.99 (3)
  PetaboxLoader3.datanode: 183.724 (6)
  PetaboxLoader3.resolve: 125.495 (2)
  load_resource: 135.428
*/