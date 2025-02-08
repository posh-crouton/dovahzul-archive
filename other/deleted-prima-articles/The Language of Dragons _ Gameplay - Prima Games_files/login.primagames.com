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

(function() {
if (typeof window.janrain.engage !== "object") window.janrain.engage = {};
if (!janrain.settings.capture) janrain.settings.capture = {};
if (!janrain.settings.common) janrain.settings.common = {};
if (!janrain.settings.language) janrain.settings.language = 'en';
if (!janrain.settings.packages) {
    janrain.settings.packages = ['login'];
} else {
    if (janrain.settings.tokenUrl) janrain.settings.packages.push('login');
}
if (!janrain.settings.share) janrain.settings.share = {};
if (!janrain.loadedPackages) janrain.loadedPackages = [];
if (!janrain.settings.linkClass) janrain.settings.linkClass = 'janrainEngage';

if (typeof janrain.settings.common.appUrl === 'undefined')janrain.settings.common.appUrl = "https://web.archive.org/web/20140214193049/https://login.primagames.com";

if (typeof janrain.settings.showAttribution === 'undefined')janrain.settings.showAttribution = false;
if (typeof janrain.settings.type === 'undefined')janrain.settings.type = "embed";
if (typeof janrain.settings.format === 'undefined')janrain.settings.format = "two column";
if (typeof janrain.settings.width === 'undefined')janrain.settings.width = "300";
if (typeof janrain.settings.providersPerPage === 'undefined')janrain.settings.providersPerPage = "6";
if (!janrain.settings.actionText)janrain.settings.actionText = "Or use a shortcut";
if (typeof janrain.settings.fontColor === 'undefined')janrain.settings.fontColor = "#ffffff";
if (typeof janrain.settings.fontFamily === 'undefined')janrain.settings.fontFamily = "lucida grande, Helvetica, Verdana, sans-serif";
if (typeof janrain.settings.backgroundColor === 'undefined')janrain.settings.backgroundColor = "#1f1f1f";
if (typeof janrain.settings.buttonBorderColor === 'undefined')janrain.settings.buttonBorderColor = "#1f1f1f";
if (typeof janrain.settings.buttonBorderRadius === 'undefined')janrain.settings.buttonBorderRadius = "5";
if (typeof janrain.settings.buttonBackgroundStyle === 'undefined')janrain.settings.buttonBackgroundStyle = "gradient";
if (typeof janrain.settings.borderWidth === 'undefined')janrain.settings.borderWidth = "15";
if (typeof janrain.settings.borderColor === 'undefined')janrain.settings.borderColor = "#1f1f1f";
if (typeof janrain.settings.borderRadius === 'undefined')janrain.settings.borderRadius = "5";
if (typeof janrain.settings.appId === 'undefined')janrain.settings.appId = "hhnopllmlgbgiahhhkcm";
if (typeof janrain.settings.appUrl === 'undefined')janrain.settings.appUrl = "https://web.archive.org/web/20140214193049/https://login.primagames.com";
janrain.settings.permissions = ["customizable_auth_widget_hide_attribution","customizable_auth_widget_styling"];
if (typeof janrain.settings.providers === 'undefined')janrain.settings.providers = [
	'google',
	'facebook',
	'twitter',
	'yahoo',
	'aol',
	'live_id'];
if (typeof janrain.settings.noReturnExperience === 'undefined')janrain.settings.noReturnExperience = false;
if (typeof janrain.settings.facebookAppId === 'undefined')janrain.settings.facebookAppId = "173245829431129";
if (typeof janrain.settings.maxProviders === 'undefined')janrain.settings.maxProviders = "16";

if (typeof janrain.settings.share.attributionDisplay === 'undefined')janrain.settings.share.attributionDisplay = true;
if (typeof janrain.settings.share.elementColor === 'undefined')janrain.settings.share.elementColor = "#333333";
if (typeof janrain.settings.share.elementHoverBackgroundColor === 'undefined')janrain.settings.share.elementHoverBackgroundColor = "#eeeeee";
if (typeof janrain.settings.share.elementButtonBorderRadius === 'undefined')janrain.settings.share.elementButtonBorderRadius = "6";
if (typeof janrain.settings.share.elementBorderColor === 'undefined')janrain.settings.share.elementBorderColor = "#cccccc";
if (typeof janrain.settings.share.elementBackgroundColor === 'undefined')janrain.settings.share.elementBackgroundColor = "#f6f6f6";
if (typeof janrain.settings.share.elementLinkColor === 'undefined')janrain.settings.share.elementLinkColor = "#009DDC";
if (typeof janrain.settings.share.elementBorderRadius === 'undefined')janrain.settings.share.elementBorderRadius = "3";
if (typeof janrain.settings.share.elementButtonBoxShadow === 'undefined')janrain.settings.share.elementButtonBoxShadow = "3";
if (typeof janrain.settings.share.modalOpacity === 'undefined')janrain.settings.share.modalOpacity = "0.5";
if (typeof janrain.settings.share.modalBorderRadius === 'undefined')janrain.settings.share.modalBorderRadius = "5";
if (typeof janrain.settings.share.bodyColor === 'undefined')janrain.settings.share.bodyColor = "#333333";
if (typeof janrain.settings.share.bodyTabBackgroundColor === 'undefined')janrain.settings.share.bodyTabBackgroundColor = "#f8f8f8";
if (typeof janrain.settings.share.bodyTabColor === 'undefined')janrain.settings.share.bodyTabColor = "#000000";
if (typeof janrain.settings.share.bodyContentBackgroundColor === 'undefined')janrain.settings.share.bodyContentBackgroundColor = "#ffffff";
if (typeof janrain.settings.share.bodyBackgroundColorOverride === 'undefined')janrain.settings.share.bodyBackgroundColorOverride = false;
if (typeof janrain.settings.share.bodyFontFamily === 'undefined')janrain.settings.share.bodyFontFamily = "Helvetica";
if (typeof janrain.settings.share.bodyBackgroundColor === 'undefined')janrain.settings.share.bodyBackgroundColor = "#009DDC";
if (typeof janrain.settings.share.modalBackgroundColor === 'undefined')janrain.settings.share.modalBackgroundColor = "#000000";
if (typeof janrain.settings.share.appUrl === 'undefined')janrain.settings.share.appUrl = "https://web.archive.org/web/20140214193049/https://login.primagames.com";
janrain.settings.share.permissions = ["customizable_share_widget_hide_attribution","customizable_share_widget_styling","customizable_share_widget_contact_mode","customizable_share_widget_email_mode"];
if (typeof janrain.settings.share.providers === 'undefined')janrain.settings.share.providers = [];
if (typeof janrain.settings.share.providersEmail === 'undefined')janrain.settings.share.providersEmail = [];
if (typeof janrain.settings.share.modes === 'undefined')janrain.settings.share.modes = ["broadcast"];


/**
*  _scriptLoader
*
*  Loads script dynamically and allows for callbacks and a timeout.
*
*  @return {Object} Public methods for _loadDyanmicScript
*  @private
*/
function _scriptLoader(src, callback) {
    var _callback = callback,
        _timeout = 200,
        _useTimeout = false,
        _timeoutCallback,
        _pollCount = 0,
        _pollTimeout,
        _script = document.createElement('script'),
        _firstScript = document.getElementsByTagName('script')[0],
        _finished = false;

    _script.src = src;
    _script.setAttribute('type', 'text/javascript');

    _script.onload = _script.onerror = _script.onreadystatechange = function(event) {
        if (!_finished && (!this.readyState || this.readyState === "loaded" || this.readyState === "complete")) {
            _finish(event);
        }
    }

    function _load() {
        _firstScript.parentNode.insertBefore(_script, _firstScript);
        if (_useTimeout) _pollLoad();
    }

    function _finish(event) {
        _finished = true;
        if (typeof _pollTimeout !== 'undefined') {
            clearTimeout(_pollTimeout);
        }
        // event is a string when loading a script fails for any reason.
        if (typeof event === 'string') {
            if (typeof _timeoutCallback === 'function') _timeoutCallback(event);
            return true;
        }
        if (typeof event === 'object' || typeof event === 'undefined') {
            if (typeof event === 'object' && event.type === 'error') {
                if (typeof _timeoutCallback === 'function') _timeoutCallback(event);
            } else {
                if (typeof _callback === 'function') _callback();
            }
            return true;
        }
    }

    function _pollLoad() {
        _poll(function() {
            return _finished;
        })
        .setDelay(50)
        .setMaxAttempts(_timeout)
        .setFailCallback(function() {
            debug.warn('Polling for script loader failed. src: ' + src);
            _finish("Load Timeout Error");
        })
        .start();
    }

    return {
        setTimeoutCallback: function(callback) {
            _useTimeout = true;
            _timeoutCallback = callback;
            return this;
        },
        setCallback: function(callback) {
            _callback = callback;
            return this;
        },
        setTimeoutLimit: function(time) {
            _timeout = time;
            return this;
        },
        load: function() {
            _load();
        }
    }
}

function _loadDynamicScript(src, callback) {
    _scriptLoader(src, callback).load();
}

function getPackagePath(packages) {
    if (window.localStorage && localStorage.janrainLocalWidgetCodeEnabled === "true") {
        var rootPath = localStorage.janrainLocalWidgetCodeUrl || "https://web.archive.org/web/20140214193049/http://apps.janrain.com:4567/";
    } else {
        var rootPath = document.location.protocol === 'https:' ? "https://web.archive.org/web/20140214193049/https://d29usylhdk1xyu.cloudfront.net/" : "https://web.archive.org/web/20140214193049/http://widget-cdn.rpxnow.com/";
    }
    var path = rootPath + 'manifest/' + packages.join(':') + '?version=' + encodeURIComponent('2014.WID.1.99.1_widgets_358');
    return path;
}
function getTranslationPath(language, widget) {
    if (window.localStorage && localStorage.janrainLocalWidgetCodeEnabled === "true") {
        var rootPath = localStorage.janrainLocalWidgetCodeUrl || "https://web.archive.org/web/20140214193049/http://apps.janrain.com:4567/";
    } else {
        var rootPath = document.location.protocol === 'https:' ? "https://web.archive.org/web/20140214193049/https://d29usylhdk1xyu.cloudfront.net/" : "https://web.archive.org/web/20140214193049/http://widget-cdn.rpxnow.com/";
    }
    var path = rootPath + 'translations/' + widget + '/' + language;
    return path;
}
function loadPackages(loaded, packages) {
    if (packages.length === 0) return false;
    if (loaded === packages.length) {
        var widgetPath = getPackagePath(packages);
        _loadDynamicScript(widgetPath);
    } else {
        if (!inArray(janrain.loadedPackages, packages[loaded])) {
            janrain.loadedPackages.push(packages[loaded]);
            if ((packages[loaded] === "login"&& janrain.settings.language === "en")
                || packages[loaded] === "capture") {
                loadPackages(loaded + 1, packages);
            } else {
                _loadDynamicScript(getTranslationPath(janrain.settings.language, packages[loaded]), function() {
                    loadPackages(loaded + 1, packages);
                });
            }
        } else {
            deleteItemFromArray(packages, loaded);
            loadPackages(loaded, packages);
        }
    }
}
function arrayToObject(array) {
    var uniqueObject = {};
    for (var i = 0, l = array.length; i < l; i++) {
        uniqueObject[array[i]] = array[i];
    }
    return uniqueObject;
}
function deleteItemFromArray(array, from, to) {
    var rest = array.slice((to || from) + 1 || array.length);
    array.length = from < 0 ? array.length + from : from;
    return array.push.apply(array, rest);
}
function inArray(array, item) {
    var arrayObject = arrayToObject(array);
    return arrayObject.hasOwnProperty(item);
}
function unique(array){
    var uniqueObject = arrayToObject(array);
    var unique = [];
    for (var key in uniqueObject){
        if (uniqueObject.hasOwnProperty(key)) unique.push(key);
    }
    return unique;
}

janrain.settings.packages = unique(janrain.settings.packages);
janrain.settings.packages.sort();
loadPackages(0, janrain.settings.packages);
})();


}
/*
     FILE ARCHIVED ON 19:30:49 Feb 14, 2014 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 12:09:41 Dec 14, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.742
  exclusion.robots: 0.027
  exclusion.robots.policy: 0.012
  esindex: 0.012
  cdx.remote: 7.321
  LoadShardBlock: 49.827 (3)
  PetaboxLoader3.datanode: 93.188 (4)
  load_resource: 127.601
  PetaboxLoader3.resolve: 66.679
*/