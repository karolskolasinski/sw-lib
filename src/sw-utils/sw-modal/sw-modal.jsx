import cssFile from './sw-modal.style.css';

let counter = 0;

function manageStyle() {
    const style = document.querySelector('#modal-style');
    if (!style) {
        const style = document.createElement('style');
        style.innerHTML = cssFile;
        style.id = 'modal-style';
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

const closeModal = function(modal) {
    modal.remove();
    counter--;
    manageModalContainer();
};

export function modal({ header, body, footer, large }) {
    if (!header && !body && !footer && !large) {
        throw new Error('Missing modal parameters');
    }
    manageStyle();

    const item = document.createElement('div');
    const id = counter++;
    const modalSize = large ? 'modal-large' : 'modal-small';

    // div.innerHTML = `<div>.....<div class="modal-header"></div>...</div>`
    //
    // const content = div.firstChild;
    // let headerElement = typeof header === 'string' ? header : header({ close: closeModal });
    //
    // if (typeof headerElement === 'string') {
    //     const element = new HTMLElement();
    //     element.innerHTML = stripJS(headerElement);
    //     headerElement = element;
    // }
    //
    // if (isJsx(headerElement)) {
    //     const element = new HTMLElement();
    //     render(headerElement, element);
    //     headerElement = element;
    // }
    //
    // if (headerElement extends HTMLElement) {
    //     content.querySelector('.modal-header').appendChild(headerElement);
    // }


    item.innerHTML = `<div id="modal-${id}" class="modal-wrapper modal-prevent">
                              <div class="modal-content ${modalSize} swing-in-top-fwd">
                                  <div class="modal-header">
                                      <div class="modal-header-content">${header(closeModal)}</div>
                                      <div class="modal-header-icon">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="" viewBox="0 0 16 16">
                                              <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z" />
                                          </svg>                                                          
                                      </div>
                                  </div>
                                  <div class="modal-body">${'BODY'}</div>
                                  <div class="modal-footer"><sw-button>Button</sw-button></div>
                              </div>
                          </div>`;

    const modal = item.firstChild;
    modal.style.top = `${id * 2 + 12}%`;

    const icon = modal.querySelector('.modal-header-icon');
    icon.addEventListener('click', () => {
        closeModal(modal);
    });

    document.body.appendChild(modal);
    manageModalContainer();
}
