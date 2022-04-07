/*!
 * ModernDeck 9.5.0, built 2022-04-05T21:20:53.849Z
 *
 * (c) 2014-2022 dangered wolf, released under MIT license.
 *
 * Made with <3
 *
 */(()=>{"use strict";const package_namespaceObject={i8:"9.5.0"};window.ModernDeck={version:9.5};class AsciiArtController{static systemName(){return navigator.userAgent.indexOf("Windows NT")>0?"Windows":navigator.userAgent.indexOf("Mac OS X")>0&&navigator.userAgent.indexOf("Mobile")>0?"iOS":navigator.userAgent.indexOf("Mac OS X")>0?"macOS":navigator.userAgent.indexOf("Android")>0?"Android":navigator.userAgent.indexOf("Linux")>0?"Linux":void 0}static platformName(){let browserName="Unknown Browser";return navigator.userAgent.indexOf("ModernDeck/")>0?(browserName=AsciiArtController.systemName(),browserName+=` (${"x64"===process.arch?"amd64":process.arch})`,void 0!==process.windowsStore&&(browserName+=" Microsoft Store"),$("html").hasClass("mtd-macappstore")&&(browserName+=" Mac App Store"),browserName):(navigator.userAgent.indexOf("Gecko/")>0?browserName="Firefox":navigator.userAgent.indexOf("Edg/")>0?browserName="Edge":navigator.userAgent.indexOf("OPR/")>0?browserName="Opera":navigator.userAgent.indexOf("Chrome/")>0?browserName="Chrome":navigator.userAgent.indexOf("Safari/")>0&&(browserName="Safari"),`${browserName} (${AsciiArtController.systemName()})`)}static draw(){let text=`\n    █████████████████████████████████████████\n   ███████████████████████████████████████████\n  █████████████████████████████████████████████\n  █████████████     ████████      ▐████████████\n  ███████████▌     ███████         ▐███████████\n  ██████████      ███████     ██    ▐██████████\n  ████████▌     ████████     ████    ▐█████████ \tModernDeck ${SystemVersion}\n  ███████▌     ███████     ███████     ████████ \tBuild 1562\n  ████████     ██████     ███████     ▐████████ \t${AsciiArtController.platformName()}\n  █████████▌     ███     ███████     ▐█████████\n  ███████████           ███████     ███████████ \tMade with love\n  ████████████        ███████     ▐████████████ \tby dangered wolf\n  █████████████████████████████████████████████\n  ████████████████████████████████████████████▌\n   ██████████████████████████████████████████▌\n    ████████████████████████████████████████▌\n                 ██████████████▌\n                   ██████████▌\n                     ██████▌\n`;navigator.userAgent.indexOf("Chrome/")>0&&document.getElementsByTagName("html")[0].prepend(document.createComment(text)),console.log(text)}}
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