export declare type FlashMessageLevel = 'info' | 'success' | 'warning' | 'error';
export declare function flashMessage(message: string, level: FlashMessageLevel): void;
export declare namespace flashMessage {
    function info(message: string): void;
    function success(message: string): void;
    function warning(message: string): void;
    function error(message: string): void;
    function disableDefaultStyles(): void;
    function disableLevelIcon(): void;
}
