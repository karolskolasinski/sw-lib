import cssFile from './sw-modal.style.css';
import { render } from 'preact';
import sanitizeHtml from 'sanitize-html';

let counter = 0;

function manageStyle() {
    const style = document.querySelector('#style-modal');
    if (!style) {
        const style = document.createElement('style');
        style.innerHTML = cssFile;
        style.id = 'style-modal';
        document.head.appendChild(style);
        return;
    }

    const modalContainer = document.querySelector('.modal-container');
    if (!modalContainer) document.head.removeChild(style);
}

function managePrevent() {
    const modals = document.querySelectorAll('.modal-wrapper');
    modals?.forEach(modal => {
        if (modal.id === `modal-${counter - 1}`) modal.classList.remove('modal-prevent');
        else modal.classList.add('modal-prevent');
    });
}

function manageModalContainer() {
    const modalContainer = document.querySelector('.modal-container');

    if (!modalContainer) {
        const modalContainer = document.createElement('div');
        modalContainer.classList.add('modal-container');
        document.body.appendChild(modalContainer);
        managePrevent();
        return;
    }

    if (counter === 0) modalContainer.remove();
    managePrevent();
    manageStyle();
}

const close = function(id) {
    if (typeof id === 'number' && id >= 0) {
        const modals = document.querySelectorAll("[id^='modal-']");

        modals.forEach(modal => {
            const parsedId = Number.parseInt(modal.id.substring(6, modal.id.length));

            if (parsedId >= id) {
                const modalContent = modal.querySelector('.modal-content');
                modalContent.classList.add('slide-out-top');

                setTimeout(() => {
                    modal.remove();
                    counter--;
                    manageModalContainer();
                }, 100);
            }
        });
    } else {
        throw new Error('The id is not a number.');
    }
};

function convertToElement(toConvert, modal, id, selector) {
    let item;
    if (typeof toConvert === 'string') {
        item = toConvert;
    } else if (typeof toConvert === 'function') {
        item = toConvert({ close, id });
    }

    const element = modal.querySelector(`.${selector}-content`);

    if (typeof item === 'string') {
        element.innerHTML = sanitizeHtml(item);
        item = element;
    }

    render(item ? item : toConvert, element);
}

/**
 * @typedef {function(flag:boolean):void} Close
 *
 * @param {string | function({ close:Close }):string | function({ close:Close }):JSX | JSX} header
 * @param {string | function({ close:Close }):string | function({ close:Close }):JSX | JSX} body
 * @param {string | function({ close:Close }):string | function({ close:Close }):JSX | JSX} footer
 * @param {boolean} large
 * @throws {Error} when there is no modal parameters specified
 * @return {Promise<>}
 */
export function modal({ header, body, footer, large }) {
    if (!header && !body && !footer && !large) throw new Error('Missing modal parameters');
    manageStyle();

    const id = counter++;
    const modalSize = large ? 'modal-large' : 'modal-small';
    const item = document.createElement('div');

    item.innerHTML = `<div id="modal-${id}" class="modal-wrapper modal-prevent">
                          <div class="modal-content ${modalSize} swing-in-top-fwd">
                              <div class="modal-header">
                                  <div class="modal-header-content"></div>
                                  <div class="modal-header-icon">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="" viewBox="0 0 16 16">
                                          <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z" />
                                      </svg>                                                          
                                  </div>
                              </div>
                                  
                              <div class="modal-body">
                                  <div class="modal-body-content"></div>
                              </div>
                                  
                              <div class="modal-footer">
                                  <div class="modal-footer-content"></div>
                              </div>
                          </div>
                      </div>`;

    const modal = item.firstChild;

    if (header) convertToElement(header, modal, id, 'modal-header');
    if (body) convertToElement(body, modal, id, 'modal-body');
    if (footer) convertToElement(footer, modal, id, 'modal-footer');

    modal.style.top = `${id * 2 + 12}%`;

    const icon = modal.querySelector('.modal-header-icon');
    icon.addEventListener('click', () => { close(id); });

    document.body.appendChild(modal);
    manageModalContainer();
}
