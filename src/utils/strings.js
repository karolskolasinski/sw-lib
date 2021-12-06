import clean from 'to-no-case';

export function toSpaceCase(str) {
    return clean(str).replace(/[\W_]+(.|$)/g, function(_matches, match) {
        return match ? ' ' + match : '';
    }).trim();
}

export function toKebabCase(str) {
    return toSpaceCase(str).replace(/\s/, '-');
}

export function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
