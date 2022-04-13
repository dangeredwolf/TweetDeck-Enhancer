/*
	LanguageFunctionPatcher.ts

	Copyright (c) 2014-2022 dangered wolf, et al
	Released under the MIT License
*/

import { TweetDeckObject } from "./Types/TweetDeck";
import { getPref } from "./StoragePreferences";
declare let TD: TweetDeckObject;

export const LanguageFunctionPatcher = (): void => {
	if (typeof TD !== "undefined" && typeof TD.languages !== "undefined") {
		TD.languages.getSystemLanguageCode = (e): string => {
            var t = getPref("mtd_lang").replace("_","-").substr(0,2);
            return e && (t = t.replace(/-[a-z]+$/i, "")),
            t
        }
	} else {
		setTimeout(LanguageFunctionPatcher, 10);
	}
}