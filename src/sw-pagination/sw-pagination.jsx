import { Component } from 'preact';
import style from './sw-pagination.style.css';

export default class SwPagination extends Component {
    pageChange(page) {
        this.ref.getRootNode().host.dispatchEvent(new CustomEvent('pageChange', {
            detail: { page },
            bubbles: true
        }));
    }

    render({ currentPage, numberOfPages }) {
        currentPage = Number.parseInt(currentPage);
        numberOfPages = Number.parseInt(numberOfPages);

        return <>
            <style>{style}</style>

            <div ref={node => this.ref = node} className="wrapper">
                {currentPage > 1 ?
                    <span className="previous"
                        onClick={() => this.pageChange(currentPage - 1)}>&lt; Previous page</span> : ''}


                {numberOfPages > 1 && currentPage !== 1 ?
                    <span onClick={() => this.pageChange(1)}>1</span> : ''}


                {(numberOfPages > 7 && currentPage > 4) || (numberOfPages === 7 && currentPage > 5) ?
                    <span className="caption">...</span> : ''}


                {currentPage - 4 > 0 && currentPage + 1 > numberOfPages && currentPage !== 5 ?
                    <span onClick={() => this.pageChange(currentPage - 4)}>{currentPage - 4}</span> : ''}
                {currentPage - 3 > 0 && currentPage + 2 > numberOfPages && currentPage !== 4 ?
                    <span onClick={() => this.pageChange(currentPage - 3)}>{currentPage - 3}</span> : ''}
                {currentPage - 2 > 0 && currentPage !== 3 ?
                    <span onClick={() => this.pageChange(currentPage - 2)}>{currentPage - 2}</span> : ''}
                {currentPage - 1 > 0 && currentPage !== 2 ?
                    <span onClick={() => this.pageChange(currentPage - 1)}>{currentPage - 1}</span> : ''}


                <span className="currentPage">{currentPage}</span>


                {currentPage + 1 <= numberOfPages ?
                    <span onClick={() => this.pageChange(currentPage + 1)}>{currentPage + 1}</span> : ''}
                {currentPage + 2 <= numberOfPages ?
                    <span onClick={() => this.pageChange(currentPage + 2)}>{currentPage + 2}</span> : ''}
                {currentPage + 3 <= numberOfPages && currentPage - 4 < 4 && currentPage < 4 ?
                    <span onClick={() => this.pageChange(currentPage + 3)}>{currentPage + 3}</span> : ''}
                {currentPage + 4 <= numberOfPages && currentPage - 4 < 4 && currentPage < 3 ?
                    <span onClick={() => this.pageChange(currentPage + 4)}>{currentPage + 4}</span> : ''}


                <span className="caption">of</span>
                <span className="caption">{numberOfPages}</span>


                {numberOfPages > 1 && numberOfPages - currentPage !== 0 ?
                    <span className="next" onClick={() => this.pageChange(currentPage + 1)}>Next page &gt;</span>
                    : ''}
            </div>
        </>;
    }
}
