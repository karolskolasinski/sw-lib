// @ts-ignore
import cssFile from './modal.style.css';
import { render } from 'preact';
import escape from 'lodash/escape';
import { tr } from '../tr';

let counter = 0;

export function modal({ header, body, footer, large }: Partial<modal.ModalOptions>) {
    return new Promise((resolve, reject) => {
        if (!header && !body && !footer && !large) {
            const message = 'Missing modal parameters';
            reject(message);
            throw new Error(message);
        }

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

        const modal = item.firstChild as HTMLElement;

        function close(result?: any) {
            const modals = document.querySelectorAll("[id^='modal-']");

            modals.forEach(modal => {
                const parsedId = Number.parseInt(modal.id.substring(6, modal.id.length));

                if (parsedId >= id) {
                    const modalContent = modal.querySelector('.modal-content');
                    modalContent?.classList.add('slide-out-top');

                    setTimeout(() => {
                        modal.remove();
                        counter--;
                        manageModalContainer();
                        resolve(result);
                    }, 100);
                }
            });
        }

        if (header) convertToElement(header, modal, close, 'modal-header');
        if (body) convertToElement(body, modal, close, 'modal-body');
        if (footer) convertToElement(footer, modal, close, 'modal-footer');

        modal.style.top = `${id * 2 + 12}%`;

        const icon = modal.querySelector('.modal-header-icon') as HTMLElement;
        icon.addEventListener('click', () => { close(); });

        document.body.appendChild(modal);
        manageStyle();
        manageModalContainer();
    });
}

export namespace modal {

    export type ModalPart
        = string
        | ((close: ModalClose, id: number) => string)
        | ((close: ModalClose, id: number) => preact.VNode<any>)
        | preact.VNode<any>;

    export interface ModalConfirmOptions {
        title?: ModalPart;
        text: ModalPart;
        okLabel?: string;
        cancelLabel?: string;
    }

    export interface ModalClose {
        (flag?: boolean): void;
    }

    export interface ModalOptions {
        header: ModalPart;
        body: ModalPart;
        footer: ModalPart;
        large: boolean;
    }

    export interface ModalAlertOptions {
        title?: ModalPart;
        text: ModalPart;
        buttonLabel?: string;
    }

    export interface ModalPromptOptions {
        title?: ModalPart;
        text: ModalPart;
        placeholder: string;
        initialValue?: string;
    }

    export function alert({ title, text, buttonLabel }: ModalAlertOptions) {
        return modal({
            header: title,
            body: text,
            footer: close => <button class="button button-primary" onClick={() => close(true)}>
                {buttonLabel || tr('general.ok')}
            </button>,
            large: false
        });
    }

    export function prompt({ title, text, placeholder, initialValue }: ModalPromptOptions) {
        let content: any;
        return modal({
            header: title,
            body: () => <>
                <p>{text}</p>
                <input type="text"
                    required
                    value={initialValue}
                    placeholder={placeholder}
                    onInput={(event: any) => content = event.target.value}
                />
            </>,
            footer: close => <button class="button button-primary" onClick={() => close(content)}>
                {tr('general.submit')}
            </button>,
            large: false
        });
    }

    export function confirm({ title, text, okLabel, cancelLabel }: ModalConfirmOptions) {
        return modal({
            header: title,
            body: text,
            footer: close => <>
                <button class="button button-tertiary" onClick={() => close(false)}>{cancelLabel || tr('general.cancel')}</button>
                <button class="button button-primary" onClick={() => close(true)}>{okLabel || tr('general.ok')}</button>
            </>,
            large: false
        });
    }

    export function disableDefaultStyles() {
        (window as any).modal = {
            defaultStyles: false
        };
    }
}

function manageStyle() {
    if ((window as any).modal?.defaultStyles === false) {
        return;
    }
    const style = document.querySelector('#style-modal');
    if (!style) {
        const style = document.createElement('style');
        style.innerHTML = cssFile;
        style.id = 'style-modal';
        document.head.appendChild(style);
        return;
    }

    const modalContainer = document.querySelector('.modal-backdrop');
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
    const modalContainer = document.querySelector('.modal-backdrop');

    if (!modalContainer) {
        const modalContainer = document.createElement('div');
        modalContainer.classList.add('modal-backdrop');
        document.body.appendChild(modalContainer);
        managePrevent();
        return;
    }

    if (counter === 0) modalContainer.remove();
    managePrevent();
    manageStyle();
}

function convertToElement(
    toConvert: modal.ModalPart,
    modal: HTMLElement,
    close: modal.ModalClose,
    selector: string
) {
    let item;
    if (typeof toConvert === 'string') {
        item = toConvert;
    } else if (typeof toConvert === 'function') {
        item = toConvert(close, 0);
    }

    const element = modal.querySelector(`.${selector}-content`);

    if (!element) {
        return null;
    }

    if (typeof item === 'string') {
        element.innerHTML = escape(item);
        return null;
    }

    if (item instanceof HTMLElement) {
        element.appendChild(item);
        return null;
    }

    render(item ? item : toConvert, element);
}
