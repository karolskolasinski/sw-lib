// @ts-ignore
import style from './flash-message.css';

export type FlashMessageLevel = 'info' | 'success' | 'warning' | 'error';

const icons = {
    info: `<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" fill="var(--flash-info-color)" /><path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" fill="var(--flash-info-color)" />`,
    success: `<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" fill="var(--flash-success-color)" /><path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" fill="var(--flash-success-color)" />`,
    warning: `<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" fill="var(--flash-warning-color)" /><path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z" fill="var(--flash-warning-color)" />`,
    error: `<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" fill="var(--flash-warning-color)" /><path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" fill="var(--flash-warning-color)" />`
}

let isStyleFileAdded = false;

function addStyleFile() {
    const styleElement = document.createElement('style');
    styleElement.innerHTML = style;
    document.head.appendChild(styleElement);
    isStyleFileAdded = true;
}

function manageMessageContainer(withAction?: any) {
    if (!document.querySelector('.flash-message-container') && !withAction) {
        const messageContainer = document.createElement('div');
        messageContainer.classList.add('flash-message-container');
        document.body.appendChild(messageContainer);
        return;
    }

    const messageContainer = document.querySelector('.flash-message-container');
    if (messageContainer && !messageContainer.hasChildNodes()) {
        messageContainer.remove();
    }
}

function displayFlashMessage(flashMessage: any) {
    manageMessageContainer();

    const messageContainer = document.querySelector('.flash-message-container') as any;
    messageContainer?.appendChild(flashMessage);
}

export function flashMessage(message: string, level: FlashMessageLevel) {
    if (typeof message !== 'string' || level && typeof level !== 'string') {
        throw new Error('The passed parameters are not strings');
    }

    if (!isStyleFileAdded && (window as any).flashMessage?.defaultStyles !== false) {
        addStyleFile();
    }

    const item = document.createElement('div');

    const levelIcon = (window as any).flashMessage?.levelIcon === false
        ? ''
        : `  <div class="icon ${level}-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width = "1.5rem" height="1.5rem" viewBox="0 0 16 16">
                    ${(icons as any)[level]}
                </svg>
            </div>`

    item.innerHTML = `<div class= "flash-message flash-message-show ${level}-message">
        ${levelIcon}
        <div class="content">${message}</div>
    </div>`;

    const flashMessage = item.firstChild as any;

    flashMessage.onclick = () => {
        flashMessage.classList.add('flash-message-hide');
        setTimeout(() => {
            flashMessage.remove();
            manageMessageContainer(true);
        }, 300);
    };

    setTimeout(() => {
        flashMessage.classList.add('flash-message-hide');
        setTimeout(() => {
            flashMessage.remove();
            manageMessageContainer(true);
        }, 300);
    }, 10000);

    displayFlashMessage(flashMessage);
}

export namespace flashMessage {

    export function info(message: string) {
        return flashMessage(message, 'info');
    }

    export function success(message: string) {
        return flashMessage(message, 'success');
    }

    export function warning(message: string) {
        return flashMessage(message, 'warning');
    }

    export function error(message: string) {
        return flashMessage(message, 'error');
    }

    export function disableDefaultStyles() {
        (window as any).flashMessage = {
            ...((window as any).flashMessage || {}),
            defaultStyles: false
        }
    }

    export function disableLevelIcon() {
        (window as any).flashMessage = {
            ...((window as any).flashMessage || {}),
            levelIcon: false
        }
    }
}
