// @ts-ignore
import clean from 'to-no-case';

export function prefixForConstSize(text: string, size: number, prefixChar: stirng) {
    if (text.length >= size) {
        return text;
    }

    while (text.length < size) {
        text = prefixChar + text;
    }

    return text;
}

export function toSpaceCase(str: string): string {
    return clean(str).replace(/[\W_]+(.|$)/g, function(_matches: any, match: any) {
        return match ? ' ' + match : '';
    }).trim();
}

export function toKebabCase(str: string): string {
    return toSpaceCase(str).replace(/\s/g, '-');
}

export function toCamelCase(str: string): string {
    return lowercaseFirstLetter(toSpaceCase(str).split(/\s/).map(capitalizeFirstLetter).join(''));
}

export function lowercaseFirstLetter(str: string): string {
    return str.charAt(0).toLowerCase() + str.slice(1);
}

export function capitalizeFirstLetter(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export function truncateToWord(countChars: number, text: string) {
    if (!text) {
        return '';
    }
    if (text.length < countChars) {
        return text;
    }

    const words = text.split(/\s/);
    let truncated = '';

    for (const word of words) {
        if (truncated.length + word.length > countChars) {
            break;
        }
        truncated += ' ' + word;
    }

    return truncated.length > 0
        ? truncated + '...'
        : '';
}
