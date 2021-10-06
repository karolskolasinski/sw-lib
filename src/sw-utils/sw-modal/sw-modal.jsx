import cssFile from './sw-modal.style.css';

let isStyleFileAdded = false;

function addStyleFile() {
    const style = document.createElement('style');
    style.innerHTML = cssFile;
    document.head.appendChild(style);
    isStyleFileAdded = true;
}

function manageModalContainer() {
    if (!document.querySelector('.modal-container')) {
        const modalContainer = document.createElement('div');
        modalContainer.classList.add('modal-container');
        document.body.appendChild(modalContainer);
        return;
    }

    const modalContainer = document.querySelector('.modal-container');
    if (modalContainer && !modalContainer.hasChildNodes()) {
        modalContainer.remove();
    }
}

function displayModal(modal) {
    // manageModalContainer();

    // const messageContainer = document.querySelector('.modal-container');
}

export function modal({ header, body, footer, size }) {
    if (!header && !body && !footer && !size) {
        throw new Error('Missing modal parameters');
    }
    if (!isStyleFileAdded) addStyleFile();

    const item = document.createElement('div');
    let modalSize;

    size === 'large' ? modalSize = 'modal-large' : modalSize = 'modal-small';

    item.innerHTML = `<div class="modal-wrapper">
                          <div class="modal-container">
                              <div class="modal-content ${modalSize}">
                                  <div class="modal-header">
                                      <div class="modal-header-content">HEADER</div>
                                      <div class="modal-header-icon">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="" viewBox="0 0 16 16">
  <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z"/>
                                          </svg>                                                          
                                      </div>
                                  </div>
                                  <div class="modal-body">${'BODY'}</div>
                                  <div class="modal-footer"><sw-button>BUTTON</sw-button></div>
                              </div>
                          </div>
                      </div>`;

    const modal = item.firstChild;
    document.body.appendChild(modal);
}
