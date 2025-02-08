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

function startLogin(providerbutton) {
  var provider = providerbutton.replace('_button','');
  var oidbase = '';
  var getoidpart = 'false';
  var extra = '';
  var action = '';
  switch (provider) {
    case 'aol':
      action = 'https://'+realm+'/openid/start';
      oidbase = 'https://web.archive.org/web/20151105210301/https://openid.aol.com/{screenname}';
      getoidpart = 'true';
      break;
    case 'blogger':
      action = 'https://'+realm+'/openid/start';
      oidbase = '{blogger domain}';
      getoidpart = 'true';
      break;
    case 'facebook':
      action = 'https://'+realm+'/facebook/connect_start';
      extra = '<input type="hidden" name="ext_perm" value="publish_stream,email" /><input type="hidden" name="redirect_to" value="https://web.archive.org/web/20151105210301/http://prima.mediaclash.co.uk/games/" />';
      break;
    case 'flickr':
      action = 'https://'+realm+'/openid/start';
      oidbase = 'https://web.archive.org/web/20151105210301/http://me.yahoo.com/';
      break;
    case 'foursquare':
      action = 'https://'+realm+'/foursquare/start';
      break;
    case 'google':
      action = 'https://'+realm+'/openid/start';
      oidbase = 'https://web.archive.org/web/20151105210301/https://www.google.com/accounts/o8/id';
      break;
    case 'hyves':
      action = 'https://'+realm+'/openid/start';
      oidbase = 'https://web.archive.org/web/20151105210301/http://hyves.nl/';
      break;
    case 'linkedin':
      action = 'https://'+realm+'/linkedin/start';
      break;
    case 'livejournal':
      action = 'https://'+realm+'/openid/start';
      oidbase = 'http://{username}.livejournal.com/';
      getoidpart = 'true';
      break;
    case 'myopenid':
      action = 'https://'+realm+'/openid/start';
      oidbase = 'https://web.archive.org/web/20151105210301/http://myopenid.com/';
      break;
    case 'myspace':
      action = 'https://'+realm+'/myspace/start';
      break;
    case 'netlog':
      action = 'https://'+realm+'/openid/start';
      oidbase = 'https://web.archive.org/web/20151105210301/http://netlog.com/{nickname}';
      getoidpart = 'true';
      break;
    case 'openid':
      action = 'https://'+realm+'/openid/start';
      oidbase = '{openid url}';
      getoidpart = 'true';
      break;
    case 'orkut':
      action = 'https://'+realm+'/orkut/start';
      break;
    case 'paypal':
      action = 'https://'+realm+'/openid/start';
      oidbase = 'https://web.archive.org/web/20151105210301/https://openid.paypal-ids.com/';
      break;
    case 'salesforce':
      action = 'https://'+realm+'/salesforce/start';
      break;
    case 'twitter':
      action = 'https://'+realm+'/twitter/start';
      oidbase = 'https://web.archive.org/web/20151105210301/https://openid.aol.com/{screenname}';
      break;
    case 'symantec':
      action = 'https://'+realm+'/openid/start';
      oidbase = 'https://web.archive.org/web/20151105210301/http://pip.verisignlabs.com/';
      break;
    case 'vzn':
      action = 'https://'+realm+'/vzn/start';
      break;
    case 'windowslive':
      action = 'https://'+realm+'/liveid/start';
      break;
    case 'wordpress':
      action = 'https://'+realm+'/openid/start';
      oidbase = 'http://{username}.wordpress.com/';
      getoidpart = 'true';
      break;
    case 'yahoo':
      action = 'https://'+realm+'/openid/start';
      oidbase = 'https://web.archive.org/web/20151105210301/http://me.yahoo.com/';
      break;
  }
  loginpop = window.open('','name','height=470,width=630');
  if (window.focus) {loginpop.focus()}
  var popupDoc = '';
  popupDoc += '<!DOCTYPE HTML>'+"\n";
  popupDoc += '<html><head><title>Login</title>'+"\n";
  popupDoc += '<scr'+'ipt type="text/javascript" src="/media/js/janrain.js"></scr'+'ipt>'+"\n";
  popupDoc += '</head>'+"\n";
  popupDoc += '<body onload="launchLogin(\''+provider+'\','+getoidpart+')">'+"\n";
  popupDoc += '<form id="'+provider+'" name="'+provider+'" action="'+action+'" method="GET">'+"\n";
  if (oidbase != null && oidbase != '') {
    popupDoc += '<input type="hidden" name="openid_identifier" value="'+oidbase+'" />'+"\n";
  }
  popupDoc += '<input type="hidden" name="token_url" value="'+tokenurl+'" />'+"\n";
  if (extra != null && extra != '') {
    popupDoc += extra+"\n";
  }
  popupDoc += '</form>'+"\n";
  popupDoc += '<scr'+'ipt type="text/javascript">launchLogin("'+provider+'",'+getoidpart+');</scr'+'ipt>'+"\n";
  popupDoc += '</body></html>';
  loginpop.document.write(popupDoc);
  loginpop.document.close();
}
function launchLogin(provider, getoidpart) {
  if ( getoidpart == true ) {
    var theform = document.getElementById(provider);
    var lefty = theform.openid_identifier.value.indexOf('{');
    var righty = theform.openid_identifier.value.indexOf('}');
    var length = righty - lefty;
    var special = theform.openid_identifier.value.substr(lefty, length+1); 
    var oidpart = getCookie("engageOidPart");
    if (oidpart==null || oidpart=="") {
      var prefill = special;
    } else {
      var prefill = oidpart;
    }
    var trimspecial = theform.openid_identifier.value.substring(lefty+1, righty);    
    var theprompt = "What is your "+provider+" "+trimspecial+"?";
    var oidpart = prompt(theprompt, prefill);
    if (oidpart!=null && oidpart!="" && oidpart != special) {
      setCookie("engageOidPart", oidpart, 364);
      var rawoid = theform.openid_identifier.value;
      var oid = rawoid.replace(special,oidpart);
      theform.openid_identifier.value = oid;
    } else {
      self.close();
    }
  }
  setCookie('engageProvider',provider,364);
  document.getElementById(provider).submit();
}
function setCookie(c_name,value,exdays) {
  var exdate=new Date();
  exdate.setDate(exdate.getDate() + exdays);
  var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
  document.cookie=c_name + "=" + c_value;
}
function getCookie(c_name) {
  var i,x,y,ARRcookies=document.cookie.split(";");
  for (i=0;i<ARRcookies.length;i++) {
    x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
    y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
    x=x.replace(/^\s+|\s+$/g,"");
    if (x==c_name) {
      return unescape(y);
    }
  }
}
function checkProviderCookie() {
  var provider=getCookie("engageProvider");
  if (provider!=null && provider!="") {
   thebutton = document.getElementById(provider + "_button");
   thebutton.className += " return_exp";
  }
}



}
/*
     FILE ARCHIVED ON 21:03:01 Nov 05, 2015 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 17:29:04 Dec 14, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.545
  exclusion.robots: 0.026
  exclusion.robots.policy: 0.01
  esindex: 0.011
  cdx.remote: 33.191
  LoadShardBlock: 188.458 (3)
  PetaboxLoader3.datanode: 193.003 (4)
  load_resource: 7.823
*/