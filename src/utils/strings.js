import clean from 'to-no-case';

export function toSpaceCase(str) {
    return clean(str).replace(/[\W_]+(.|$)/g, function(_matches, match) {
        return match ? ' ' + match : '';
    }).trim();
}

export function toKebabCase(str) {
    return toSpaceCase(str).replace(/\s/g, '-');
}

export function toCamelCase(str) {
    return lowercaseFirstLetter(toSpaceCase(str).split(/\s/).map(capitalizeFirstLetter).join(''));
}

export function lowercaseFirstLetter(str) {
    return str.charAt(0).toLowerCase() + str.slice(1);
}

export function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

