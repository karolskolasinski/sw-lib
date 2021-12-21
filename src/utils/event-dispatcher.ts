export type Listener = (event: Event) => void;

export interface EventDispatcher {
    addEventListener(eventType: string, listener: (event: Event) => void): void;
    removeEventListener(eventType: string, listenr: (event: Event) => void): void;
    dispatchEvent(event: Event): void;

    on(eventType: string, listener: (event: Event) => void): void;
    off(eventType: string, listenr: (event: Event) => void): void;
    trigger(event: Event): void;
}

export function addEventDispatcherTrait<T>(target: T): T & EventDispatcher {
    const eventListeners: Record<string, Listener[]> = {};

    function addEventListener(eventType: string, listener: Listener) {
        eventListeners[eventType] = eventListeners[eventType] ?? [];
        eventListeners[eventType].push(listener);
    }

    function removeEventListener(eventType: string, listener: Listener) {
        eventListeners[eventType] = eventListeners[eventType] ?? [];
        eventListeners[eventType] = (eventListeners[eventType] ?? []).filter(l => l !== listener);
    }

    function dispatchEvent(event: Event) {
        (eventListeners[event.type] ?? []).forEach(listener => listener(event));
    }

    return Object.assign(target, {
        addEventListener,
        removeEventListener,
        dispatchEvent,
        on: addEventListener,
        off: removeEventListener,
        trigger: dispatchEvent
    });
}
