export function formatDate(timestamp) {
    return moment(timestamp).format('L');
}

export function formatDateTime(timestamp) {
    return moment(timestamp).format('D MMMM YYYY, hh:mm:ss');
}
