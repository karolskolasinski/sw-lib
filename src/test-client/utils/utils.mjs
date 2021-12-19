import moment from 'moment';
import 'moment/locale/pl';

function formatDate(timestamp) {
    return moment(timestamp).format('L');
}

export default formatDate;
