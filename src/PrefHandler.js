/*
	PrefHandler.js

	Copyright (c) 2014-2022 dangered wolf, et al
	Released under the MIT License
*/

import { settingsData } from "./DataSettings";
import { exists, getIpc } from "./Utils";
import { ModernDeckPrefMigration } from "./ModernDeckPrefMigration";
import { disableStylesheetExtension, enableStylesheetExtension } from "./StylesheetExtensions";
import { getPref, setPref, hasPref, debugStorageSys } from "./StoragePreferences";
/*
	function loadPreferences()

	Loads preferences from storage and activates them
*/

export function loadPreferences() {
	window.settingsData = settingsData;

	ModernDeckPrefMigration.migrate();

	for (let key in settingsData) {

		if (!settingsData[key].enum) {
			for (let i in settingsData[key].options) {
				let prefKey = settingsData[key].options[i].settingsKey;
				let pref = settingsData[key].options[i];

				if (exists(prefKey)) {
					let setting;
					if (!hasPref(prefKey)) {
						if (debugStorageSys)
							console.log(`loadPreferences is setting default of ${prefKey} to ${pref.default}`);
						if (typeof pref.default === "function") {
							let def = pref.default();
							setPref(prefKey, def);
							setting = def;
						} else {
							setPref(prefKey, pref.default);
							setting = pref.default;
						}

					} else {
						setting = getPref(prefKey);
					}

					if (window.desktopConfig && window.desktopConfig[key] && window.desktopConfig[key][i]) {
						console.log(window.desktopConfig[key]);
						console.log(window.desktopConfig[key][i]);
						setting = window.desktopConfig[key][i];
					}

					switch(pref.type) {
						case "checkbox":
							if (setting === true) {
								console.log("activate " + prefKey);
								parseActions(pref.activate, undefined, true);
							} else {
								console.log("deactivate " + prefKey);
								parseActions(pref.deactivate, undefined, true);
							}
							break;
						case "dropdown":
						case "textbox":
						case "textarea":
						case "array":
						case "slider":
							parseActions(pref.activate, setting, true);
							break;
						/* button/link controls we can skip, they don't do anything other than in the settings menu */
						case "button":
						case "link":
							break;
					}
				}
			}
		}
	}
}

export function loadPreferencesWindows() {
	loadPreferences();
}

/*
	This is used by the preference management system to activate preferences

	This allows for many simple preferences to be done completely in object notation with no extra JS
*/

export function parseActions(a,opt,load) {
	for (let key in a) {
		switch(key) {
			case "enableStylesheet":
				enableStylesheetExtension(a[key]);
				break;
			case "disableStylesheet":
				disableStylesheetExtension(a[key]);
				break;
			case "htmlAddClass":
				if (!html.hasClass(a[key]))
					html.addClass(a[key]);
				break;
			case "htmlRemoveClass":
				html.removeClass(a[key]);
				break;
			case "func":
				if (typeof a[key] === "function") {
					try {
						a[key](opt, load);
					} catch (e) {
						console.error("Error occurred processing action function.");
						console.error(e);
						window.lastError = e;
						console.error("Dump of naughty function attached below");
						console.log(a[key])
					}
				} else {
					throw "There's a func action, but it isn't a function? :thinking:";
				}
				break;
		}
	}
}
