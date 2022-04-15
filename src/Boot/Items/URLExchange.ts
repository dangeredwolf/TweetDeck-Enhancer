/*
	Boot/Items/URLExchange.ts

	Copyright (c) 2014-2022 dangered wolf, et al
	Released under the MIT License
*/

export const urlExchange = () => {
    if (typeof window.MTDURLExchange === "object" && typeof window.MTDURLExchange.getAttribute === "function") {
        window.mtdBaseURL = window.MTDURLExchange.getAttribute("type");
        console.info("MTDURLExchange completed with URL " + window.mtdBaseURL);
    }
}