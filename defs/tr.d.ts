import { EventDispatcher } from './event-dispatcher';
interface Translate extends EventDispatcher {
    (phrase: string | Record<string, string>, langOrParams?: string | Record<string, string | number> | (string | number)[], lang?: string): string;
    getBrowserLang(): string;
    getBrowserLocale(): string;
    setLang(lang: string): void;
    getLang(): string;
    /**
     * tip: for 'en_US' the locale is 'US'
     */
    setLocale(locale: string): void;
    getLocale(): string;
    addTranslation(phrase: string, translation: Record<string, string>): void;
}
export declare var tr: Translate;
export {};
