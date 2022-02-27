import moment from 'moment';

export function formatDate(timestamp: number) {
    return moment(timestamp).format('DD.MM.YYYY');
}

export function formatDateTime(timestamp: number) {
    return moment(timestamp).format('D MMMM YYYY, hh:mm:ss');
}
