/*
	Types/Window.ts

	Copyright (c) 2014-2022 dangered wolf, et al
	Released under the MIT License
*/

import ModuleRaid from 'moduleraid';
import NFTActionQueue from '../NFTActionQueue';
import { ModernDeckSettingsTab } from './ModernDeckSettings';

declare global {
    interface DesktopConfig {
        [key: string]: boolean | string,
        updatePolicy?: string,
        disableCustomCSS?: boolean,
        disableOOBE?: boolean,
        autoUpdatePolicy?: string,
        customLoginImage?: string,
    }

    interface Window {
        lastError: Error;
        useSentry: boolean;
        mtdNumberFormat: Intl.NumberFormat;
        mtdNeedsResetNumberFormatting: boolean;
        ModernDeck: {
            version: number;
            versionString: string;
            versionFriendlyString: string; // remove trailing .0, if present
            platformName: string;
            productName: string;
            systemName: string;
            buildNumber: number;
            settingsData?: any;
            store?: any;
        };
        deck: {
			osname:() => string;
			getWrapperVersion:() => string;
			inApp:() => boolean;
			tearDown:() => void;
			doGrowl:(title: string, text: string, icon: string, tweet: string, column: string) => void;
			setTheme:(theme: string) => void;
			authenticateOn:() => {hide:() => void, deleteLater:() => void};
			closeLoadingScreen:() => void;
		};
        store: any; // This is any only because Electron-Store does not exist on browser;
        mR: ModuleRaid;
        html: JQuery;
        body: JQuery;
        useNativeContextMenus: boolean;
        desktopConfig: DesktopConfig;
        mtdPrepareWindows: () => void;
        renderTab (tab: string): void;
        mtdBaseURL: string;
        mtdTimeHandler: string;
        mtdAbbrevNumbers: boolean;
        useSafeMode: boolean;
        settingsData: {[key: string]: ModernDeckSettingsTab};
        nftAvatarAction: NFTActionQueue;
        isInWelcome: boolean;
        mtd_welcome_dark: HTMLElement;
        mtd_welcome_light: HTMLElement;
        mtd_welcome_darker: HTMLElement;
        mtd_welcome_paper: HTMLElement;
        mtd_welcome_amoled: HTMLElement;
        mtd_welcome_simplified: HTMLElement;
        mtd_welcome_classic: HTMLElement;
        injectedFonts: boolean;
        mtdHasNotifiedUpdate: boolean;
        updateNotifyID: number;
        originalAlert: () => void;
        mtd_nd_header_image: HTMLElement;
        mtd_nd_header_photo: HTMLElement;
        mtd_nd_header_atname: HTMLElement;
        mtd_nd_header_username: HTMLElement;
        mtd_nav_drawer_background: HTMLElement;
        mtd_nav_drawer: HTMLElement;
        languageData: {};
    }
}

export default undefined;