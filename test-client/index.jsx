import { h, render, Component } from 'preact';
import '../src/index';

const source = [
    {
        id: '2f984f9a51903dd2af4c6cf3cd00141f',
        rev: '10-2fb3414188f50f26b50978f41f905e28',
        docType: 'genericArticle',
        label: 'Article 1',
        revCreatedBy: 'John',
        revCreatedAt: 1629795068605
    },
    {
        id: 'djl03f9a51903dd2af4c6cf3cdww993d',
        rev: '08-2d03414188f50f26b50978f41f90244d',
        docType: 'genericArticle',
        label: 'Article 2',
        revCreatedBy: 'Will',
        revCreatedAt: 1630145063766
    }
];

const fields = [
    {
        label: 'Tytuł',
        field: 'label',
        sortable: true
    },
    {
        label: 'Utworzył',
        field: 'revCreatedBy',
        sortable: true
    },
    {
        label: 'Data utworzenia',
        field: 'revCreatedAt',
        sortable: true
    },
    {
        label: 'Actions',
        component: item =>
            <>
                <sw-button sw-class="danger"
                           icon="fas fa-info-circle"
                           onclick={() => onDetailsItemClick(item)}
                           button-text="Szczegóły">Szczegóły
                </sw-button>

                <sw-button sw-class="primary"
                           icon="trash"
                           onclick={() => onRemoveItemClick(item)}
                           button-text="Usuń">Usuń
                </sw-button>
            </>
    }
];

class Main extends Component {
    constructor() {
        super();
        this.onPageChange();
    }

    async onPageChange(page) {
        this.setState({
            numberOfPages: 30,
            currentPage: page?.detail ? page.detail : 1
        });
    }


    render() {
        return (
            <>
                <sw-table source={source} fields={fields} />
                <sw-pagination number-of-pages={this.state.numberOfPages} current-page={this.state.currentPage}
                               onpageChange={page => this.onPageChange(page)} />
            </>
        );
    }
}

render(h(Main), document.body);
