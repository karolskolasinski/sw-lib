// @ts-ignore
import style from './flash-message.css';

let isStyleFileAdded = false;

function addStyleFile() {
    const styleElement = document.createElement('style');
    styleElement.innerHTML = style;
    document.head.appendChild(styleElement);
    isStyleFileAdded = true;
}

function manageMessageContainer(withAction?: any) {
    if (!document.querySelector('.message-container') && !withAction) {
        const messageContainer = document.createElement('div');
        messageContainer.classList.add('message-container');
        document.body.appendChild(messageContainer);
        return;
    }

    const messageContainer = document.querySelector('.message-container');
    if (messageContainer && !messageContainer.hasChildNodes()) {
        messageContainer.remove();
    }
}

function displayFlashMessage(flashMessage: any) {
    manageMessageContainer();

    const messageContainer = document.querySelector('.message-container') as any;
    messageContainer?.appendChild(flashMessage);
}

export function flashMessage(message: string, level: string) {
    if (typeof message !== 'string' || level && typeof level !== 'string') {
        throw new Error('The passed parameters are not strings');
    }
    if (!isStyleFileAdded) addStyleFile();

    const item = document.createElement('div');

    switch (level) {
        default:
        case 'info': {
            item.innerHTML = `<div class="flash-message bounce-right info-border">
                                  <div class="icon info">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 16 16">
                                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" fill="var(--flash-info-color)" />
                                          <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" fill="var(--flash-info-color)" />
                                      </svg>
                                  </div>
                                  <div class="content">${message}</div>
                              </div>`;
            break;
        }
        case 'success': {
            item.innerHTML = `<div class="flash-message bounce-right success-border">
                                  <div class="icon success">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 16 16">
                                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" fill="var(--flash-success-color)" />
                                          <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" fill="var(--flash-success-color)" />
                                      </svg>
                                  </div>
                                  <div class="content">${message}</div>
                              </div>`;
            break;
        }
        case 'warning': {
            item.innerHTML = `<div class="flash-message bounce-right warning-border">
                                  <div class="icon warning">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 16 16">
                                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" fill="var(--flash-warning-color)" />
                                          <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z" fill="var(--flash-warning-color)" />
                                      </svg>
                                  </div>
                                  <div class="content">${message}</div>
                              </div>`;
            break;
        }
        case 'error': {
            item.innerHTML = `<div class="flash-message bounce-right error-border">
                                  <div class="icon error">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 16 16">
                                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" fill="var(--flash-warning-color)" />
                                          <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" fill="var(--flash-warning-color)" />
                                      </svg>
                                  </div>
                                  <div class="content">${message}</div>
                              </div>`;
            break;
        }
    }

    const flashMessage = item.firstChild as any;

    flashMessage.onclick = () => {
        flashMessage.classList.add('slide-out-blurred-right');
        setTimeout(() => {
            flashMessage.remove();
            manageMessageContainer(true);
        }, 500);
    };

    setTimeout(() => {
        flashMessage.classList.add('slide-out-blurred-right');
        setTimeout(() => {
            flashMessage.remove();
            manageMessageContainer(true);
        }, 500);
    }, 10000);

    displayFlashMessage(flashMessage);
}
