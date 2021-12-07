import _ from 'lodash';
import { toSpaceCase } from './strings';

export default function tr(phrase, lang = tr.getLang()) {
    if (phrase instanceof Object) {
        return phrase[lang] ?? phrase[tr.getDefaultLang()];
    }

    return _.get(window, ['tr', 'translations', phrase, lang],
        _.get(window, ['tr', 'translations', phrase, tr.getDefaultLang()],
            toSpaceCase(phrase)));
}

tr.getLang = function() {
    const userLang = navigator.language || navigator.userLanguage;
    return userLang.split('-')[0].split('_')[0] ?? tr.getDefaultLang();
};

tr.setDefaultLang = function(lang) {
    _.set(window, ['tr', 'defaultLang'], lang);
};

tr.getDefaultLang = function() {
    return _.get(window, ['tr', 'defaultLang'], 'en');
};

tr.addTranslation = function(phrase, translation) {
    _.set(window, ['tr', 'translations', phrase], {
        ..._.get(window, ['tr', 'translations', phrase], {}),
        ...translation
    });
};
