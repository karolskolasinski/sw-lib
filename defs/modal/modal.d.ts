export declare function modal({ header, body, footer, large }: Partial<modal.ModalOptions>): Promise<unknown>;
export declare namespace modal {
    type ModalPart = string | ((close: ModalClose, id: number) => string) | ((close: ModalClose, id: number) => preact.VNode<any>) | preact.VNode<any>;
    interface ModalConfirmOptions {
        title?: ModalPart;
        text: ModalPart;
        okLabel?: string;
        cancelLabel?: string;
    }
    interface ModalClose {
        (flag?: boolean): void;
    }
    interface ModalOptions {
        header: ModalPart;
        body: ModalPart;
        footer: ModalPart;
        large: boolean;
    }
    interface ModalAlertOptions {
        title?: ModalPart;
        text: ModalPart;
        buttonLabel?: string;
    }
    interface ModalPromptOptions {
        title?: ModalPart;
        text: ModalPart;
        placeholder: string;
        initialValue?: string;
    }
    function alert({ title, text, buttonLabel }: ModalAlertOptions): Promise<unknown>;
    function prompt({ title, text, placeholder, initialValue }: ModalPromptOptions): Promise<unknown>;
    function confirm({ title, text, okLabel, cancelLabel }: ModalConfirmOptions): Promise<unknown>;
    function disableDefaultStyles(): void;
}
