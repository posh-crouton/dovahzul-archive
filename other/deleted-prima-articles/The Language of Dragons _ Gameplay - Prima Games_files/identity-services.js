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

/*
 * Copyright 2011 Janrain, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

Backplane.identityServices = {};

Backplane.identityServices.init = function(messages) {

    var replayObjects = {};
    for (var i = 0; i < messages.length; i++) {
        if (messages[i].message.sticky && messages[i].message.sticky == true) {
            if (typeof messages[i].message.payload.identities == "undefined") {
                console.info("not an identity message");
                continue;
            }
            var id = messages[i].message.payload.identities.entry.id;
            if (messages[i].message.type == 'identity/logout') {
                delete replayObjects["identity/login" + id];
            } else {
                replayObjects[messages[i].message.type + id] = messages[i];
            }
        }
    }
    var replay = [];
    for (var j in replayObjects) {
        replay.push(replayObjects[j]);
    }
    return replay;
}

}
/*
     FILE ARCHIVED ON 14:30:02 Feb 14, 2014 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 12:09:14 Dec 14, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.443
  exclusion.robots: 0.018
  exclusion.robots.policy: 0.008
  esindex: 0.009
  cdx.remote: 12.232
  LoadShardBlock: 116.907 (3)
  PetaboxLoader3.datanode: 127.352 (5)
  PetaboxLoader3.resolve: 219.25 (3)
  load_resource: 259.541 (2)
*/