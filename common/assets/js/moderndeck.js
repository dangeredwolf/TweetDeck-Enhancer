/*!
 * ModernDeck 10.0.0, built 2022-06-01T16:54:05.351Z
 *
 * (c) 2014-2022 dangered wolf, released under MIT license.
 *
 * Made with <3
 *
 */(()=>{"use strict";var __webpack_require__={};__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var scriptUrl;__webpack_require__.g.importScripts&&(scriptUrl=__webpack_require__.g.location+"");var document=__webpack_require__.g.document;if(!scriptUrl&&document&&(document.currentScript&&(scriptUrl=document.currentScript.src),!scriptUrl)){var scripts=document.getElementsByTagName("script");scripts.length&&(scriptUrl=scripts[scripts.length-1].src)}if(!scriptUrl)throw new Error("Automatic publicPath is not supported in this browser");scriptUrl=scriptUrl.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),__webpack_require__.p=scriptUrl})();const BuildProps_namespaceObject=JSON.parse('{"Yk":2000,"rh":"2022-06-01T16:54:05.035Z","Bm":"10.0.0"}');var SystemName,BrowserName,VersionStrings;!function(SystemName){SystemName.WINDOWS="Windows",SystemName.MAC="macOS",SystemName.LINUX="Linux",SystemName.IOS="iOS",SystemName.ANDROID="Android",SystemName.UNKNOWN="Unknown System"}(SystemName||(SystemName={})),function(BrowserName){BrowserName.CHROME="Chrome",BrowserName.FIREFOX="Firefox",BrowserName.SAFARI="Safari",BrowserName.OPERA="Opera",BrowserName.EDGE="Edge",BrowserName.UNKNOWN="Unknown Browser"}(BrowserName||(BrowserName={})),function(VersionStrings){VersionStrings.VERSION="Version",VersionStrings.BETA="Beta",VersionStrings.DEVELOPER_VERSION="Developer Version"}(VersionStrings||(VersionStrings={}));var versionString=VersionStrings.BETA,getSystemName=function(){return navigator.userAgent.indexOf("Windows NT")>0?SystemName.WINDOWS:navigator.userAgent.indexOf("Mac OS X")>0&&navigator.userAgent.indexOf("Mobile")>0?SystemName.IOS:navigator.userAgent.indexOf("Mac OS X")>0?SystemName.MAC:navigator.userAgent.indexOf("Android")>0?SystemName.ANDROID:navigator.userAgent.indexOf("Linux")>0?SystemName.LINUX:SystemName.UNKNOWN},getPlatformName=function(){var browserName=BrowserName.UNKNOWN;if(navigator.userAgent.indexOf("ModernDeck/")>0){var platformName=String(getSystemName());return platformName+=" (".concat("x64"===process.arch?"amd64":process.arch,")"),document.getElementsByTagName("html")[0].classList.contains("mtd-winstore")&&(platformName+=" Microsoft Store"),document.getElementsByTagName("html")[0].classList.contains("mtd-macappstore")&&(platformName+=" Mac App Store"),platformName}return navigator.userAgent.indexOf("Gecko/")>0?browserName=BrowserName.FIREFOX:navigator.userAgent.indexOf("Edg/")>0?browserName=BrowserName.EDGE:navigator.userAgent.indexOf("OPR/")>0?browserName=BrowserName.OPERA:navigator.userAgent.indexOf("Chrome/")>0?browserName=BrowserName.CHROME:navigator.userAgent.indexOf("Safari/")>0&&(browserName=BrowserName.SAFARI),"".concat(browserName," (").concat(getSystemName(),")")};var ModernDeck={version:10,versionString:BuildProps_namespaceObject.Bm,versionFriendlyString:BuildProps_namespaceObject.Bm.replace(/\.0$/,""),platformName:getPlatformName(),productName:"ModernDeck 10",systemName:getSystemName(),buildNumber:BuildProps_namespaceObject.Yk,buildDate:BuildProps_namespaceObject.rh};window.ModernDeck=ModernDeck;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
//# sourceMappingURL=moderndeck.js.map