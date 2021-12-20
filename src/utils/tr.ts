import _ from 'lodash';
import { toSpaceCase } from './strings';

/**
 * translates given phrase
 *
 * @example
 * tr.addTranslation('abc', { en: 'Hello ${name}' });
 * tr('abc', { name: 'World' })
 * => 'Hello World'
 * // you can also use an array:
 * tr('abc', ['World'])
 * => 'Hello World'
 */
export default function tr(
    phrase: string | Record<string, string>,
    arg2?: string | Record<string, string | number> | (string | number)[],
    arg3?: string
) {
    let locals;
    let lang;
    if (arg3) {
        lang = arg3;
        locals = arg2 || {};
    } else if (arg2 && typeof arg2 === 'string') {
        lang = arg2;
        locals = {};
    } else if (arg2 && (arg2 instanceof Object || Array.isArray(arg2))) {
        lang = tr.getLang();
        locals = arg2;
    } else {
        lang = tr.getLang();
        locals = {};
    }

    if (phrase instanceof Object) {
        return phrase[lang] ?? phrase['en'];
    }

    return parse(
        _.get(window, ['tr', 'translations', phrase, lang],
            _.get(window, ['tr', 'translations', phrase, 'en'],
                toSpaceCase(phrase))),
        locals as any
    );
}

function parse(text: string, locals: Record<string, string | number>) {
    if (Array.isArray(locals)) {
        return text.split(/\$\{[a-zA-Z0-9]+\}/).map((item: string, index: number) => item + (locals[index] ?? '')).join('');
    }
    return Object.keys(locals).reduce((text, varName) => {
        return text.replaceAll('${' + varName + '}', (locals as any)[varName]);
    }, text);
}

tr.getBrowserLang = function getBrowserLang() {
    const userLang = navigator.language || (navigator as any).userLanguage;
    return userLang.split(/[\-_]/)[0] ?? 'en';
}

tr.getBrowserLocale = function getBrowserLocale() {
    const userLang = navigator.language || (navigator as any).userLanguage;
    return userLang.split(/[\-_]/)[1] ?? 'US';
}

tr.setLang = function setLang(lang: string) {
    localStorage.setItem('tr.lang', lang);
}

tr.getLang = function getLang() {
    return localStorage.getItem('tr.lang') ?? tr.getBrowserLang();
}

/**
 * tip: for 'en_US' the locale is 'US'
 */
tr.setLocale = function setLocale(locale: string) {
    localStorage.setItem('tr.locale', locale);
}

tr.getLocale = function getLocale() {
    return localStorage.getItem('tr.locale') ?? tr.getBrowserLang();
}
tr.addTranslation = function(phrase: string, translation: Record<string, string>) {
    _.set(window, ['tr', 'translations', phrase], {
        ..._.get(window, ['tr', 'translations', phrase], {}),
        ...translation
    });
};
