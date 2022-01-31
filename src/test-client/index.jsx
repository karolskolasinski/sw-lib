import { h, render, Component } from 'preact';
import '../index';
import { flashMessage, modal, modalAlert, modalPrompt, modalConfirm } from '../';

const users = [
    { id: '1', name: 'Jan Kowalski' },
    { id: '2', name: 'John Smith' },
];


async function searchForUsers(searchPhrase) {
    return users.filter(user => {
        return user.name.includes(searchPhrase);
    });
}

const article = {
    id: 'abc',
    title: 'aaa',
    userId: '1',
};

async function getUser(userId) {
    return users.find(usr => usr.id === userId);
}

function setUser(selectedUser) {
    article.userId = selectedUser.id;
}

class Main extends Component {
    async componentWillMount() {
        const user = await getUser(article.userId);
        this.setState({ initialUser: user });
    }

    render() {
        return (
            <>
                <h2>Switcher</h2>
                <sw-switcher name="test"
                    required={true}
                    checked={true}
                    label="Switch"
                    disabled={false}
                    showLabel={true}
                    data-label-on="ON"
                    data-label-off="OFF"
                    onupdate={(e) => console.log(e.detail)}
                />
            </>
        );
    }
}

render(h(Main), document.querySelector('.common-tests'));
