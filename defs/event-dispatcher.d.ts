export declare type Listener = (event: Event) => void;
export interface EventDispatcher {
    addEventListener(eventType: string, listener: (event: Event) => void): void;
    removeEventListener(eventType: string, listenr: (event: Event) => void): void;
    dispatchEvent(event: Event): void;
    on(eventType: string, listener: (event: Event) => void): void;
    off(eventType: string, listenr: (event: Event) => void): void;
    trigger(event: Event): void;
}
export declare function addEventDispatcherTrait<T extends object>(target: T): T & EventDispatcher;
