import cssFile from './sw-modal.style.css';

let isStyleFileAdded = false;
let counter = 0;

function addStyleFile() {
    const style = document.createElement('style');
    style.innerHTML = cssFile;
    document.head.appendChild(style);
    isStyleFileAdded = true;
}

function managePrevent() {
    const modals = document.querySelectorAll('.modal-wrapper');
    modals.forEach(modal => {
        if (modal.id === `modal${counter - 1}`) modal.classList.remove('prevent');
        else modal.classList.add('prevent');
    });
}

function manageModalContainer() {
    const modalContainer = document.querySelector('.modal-container');

    if (!modalContainer) {
        const modalContainer = document.createElement('div');
        modalContainer.classList.add('modal-container');
        document.body.appendChild(modalContainer);
        return;
    }

    if (counter === 0) modalContainer.remove();
    managePrevent();
}

export function modal({ header, body, footer, size }) {
    if (!header && !body && !footer && !size) {
        throw new Error('Missing modal parameters');
    }
    if (!isStyleFileAdded) addStyleFile();

    const item = document.createElement('div');
    let modalSize;
    const id = counter++;

    size === 'large' ? modalSize = 'modal-large' : modalSize = 'modal-small';
    if (size === 'xlarge') modalSize = 'modal-xlarge';

    item.innerHTML = `<div id="modal${id}" class="modal-wrapper prevent">
                              <div class="modal-content ${modalSize}">
                                  <div class="modal-header">
                                      <div class="modal-header-content">${header}</div>
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
    const icon = modal.querySelector('.modal-header-icon');
    icon.addEventListener('click', () => {
        modal.remove();
        counter--;
        manageModalContainer();
    });

    document.body.appendChild(modal);
    manageModalContainer();
}
