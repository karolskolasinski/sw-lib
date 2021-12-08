import { Component } from 'preact';
import style from './sw-pagination.style.css';
import * as router from '../../utils/router/router';
import * as stateMgr from '../../utils/state-mgr/state-mgr';

export default class SwPagination extends Component {
    pageChange(page) {
        this.ref.getRootNode().host.dispatchEvent(new CustomEvent('pageChange', {
            detail: { page },
            bubbles: true,
        }));
    }

    generateTheATag(page, innerText, className) {
        return <a href={router.getRouteUrl(this.routeName, { page })}
            className={className && className}
            onClick={() => this.pageChange(page)}>{innerText}
        </a>;
    }

    render({ currentPage: currentPage, numberOfPages, href }) {
        let numberOfPagesValue = Number.parseInt(numberOfPages);
        numberOfPagesValue = isNaN(numberOfPagesValue) ? 1 : numberOfPagesValue;
        const currentPageValue = Number.parseInt(currentPage);
        if (href) this.href = href;

        return <>
            <style>{style}</style>

            <div ref={node => this.ref = node} className="wrapper">
                {currentPageValue > 1 && this.generateTheATag(currentPageValue - 1, '< Previous page', 'previous')}


                {numberOfPagesValue > 1 && currentPageValue !== 1 && this.generateTheATag(1, '1')}


                {(numberOfPagesValue > 7 && currentPageValue > 4) || (numberOfPagesValue === 7 && currentPageValue > 5) &&
                    <span className="caption">...</span>}


                {currentPageValue - 4 > 0 && currentPageValue + 1 > numberOfPagesValue && currentPageValue !== 5 &&
                    this.generateTheATag(currentPageValue - 4, currentPageValue - 4)}

                {currentPageValue - 3 > 0 && currentPageValue + 2 > numberOfPagesValue && currentPageValue !== 4 &&
                    this.generateTheATag(currentPageValue - 3, currentPageValue - 3)}

                {currentPageValue - 2 > 0 && currentPageValue !== 3 &&
                    this.generateTheATag(currentPageValue - 2, currentPageValue - 2)}

                {currentPageValue - 1 > 0 && currentPageValue !== 2 &&
                    this.generateTheATag(currentPageValue - 1, currentPageValue - 1)}


                <span className="currentPage">{currentPageValue}</span>


                {currentPageValue + 1 <= numberOfPagesValue &&
                    this.generateTheATag(currentPageValue + 1, currentPageValue + 1)}

                {currentPageValue + 2 <= numberOfPagesValue &&
                    this.generateTheATag(currentPageValue + 2, currentPageValue + 2)}

                {currentPageValue + 3 <= numberOfPagesValue && currentPageValue - 4 < 4 && currentPageValue < 4 &&
                    this.generateTheATag(currentPageValue + 3, currentPageValue + 3)}

                {currentPageValue + 4 <= numberOfPagesValue && currentPageValue - 4 < 4 && currentPageValue < 3 &&
                    this.generateTheATag(currentPageValue + 4, currentPageValue + 4)}


                <span className="caption">of</span>
                <span className="caption">{numberOfPagesValue}</span>


                {numberOfPagesValue > 1 && numberOfPagesValue - currentPageValue !== 0 &&
                    this.generateTheATag(currentPageValue + 1, 'Next page >', 'next')}
            </div>
        </>;
    }
}
