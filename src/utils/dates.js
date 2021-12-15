import moment from 'moment';

export function formatDate(timestamp) {
    return moment(timestamp).format('DD.MM.YYYY');
}

export function formatDateTime(timestamp) {
    return moment(timestamp).format('D MMMM YYYY, hh:mm:ss');
}
