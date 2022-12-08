declare module '@7willows/sw-lib/dates' {
  export function formatDate(timestamp: number): string;
  export function formatDateTime(timestamp: number): string;

}
declare module '@7willows/sw-lib/event-dispatcher' {
  export type Listener = (event: Event) => void;
  export interface EventDispatcher {
      addEventListener(eventType: string, listener: (event: Event) => void): void;
      removeEventListener(eventType: string, listenr: (event: Event) => void): void;
      dispatchEvent(event: Event): void;
      on(eventType: string, listener: (event: Event) => void): void;
      off(eventType: string, listenr: (event: Event) => void): void;
      trigger(event: Event): void;
  }
  export function addEventDispatcherTrait<T extends object>(target: T): T & EventDispatcher;

}
declare module '@7willows/sw-lib/flash-message/flash-message' {
  export type FlashMessageLevel = 'info' | 'success' | 'warning' | 'error';
  export function flashMessage(message: string, level: FlashMessageLevel): void;
  export namespace flashMessage {
      function info(message: string): void;
      function success(message: string): void;
      function warning(message: string): void;
      function error(message: string): void;
      function disableDefaultStyles(): void;
      function disableLevelIcon(): void;
  }

}
declare module '@7willows/sw-lib/index' {
  export * from '@7willows/sw-lib/router';
  export * from '@7willows/sw-lib/tr';
  export * from '@7willows/sw-lib/flash-message/flash-message';
  export * from '@7willows/sw-lib/modal/modal';
  export * as stm from '@7willows/sw-lib/state-mgr/state-mgr';
  export * as dates from '@7willows/sw-lib/dates';
  export * as strings from '@7willows/sw-lib/strings';

}
declare module '@7willows/sw-lib/make-log' {
  export default function makeLog(ns: string, forceDebugMode?: boolean): (msg: string, ...args: any[]) => void;

}
declare module '@7willows/sw-lib/modal/modal' {
  export function modal({ header, body, footer, large }: Partial<modal.ModalOptions>): Promise<unknown>;
  export namespace modal {
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

}
declare module '@7willows/sw-lib/router' {
  import { EventDispatcher } from '@7willows/sw-lib/event-dispatcher';
  export interface Router extends EventDispatcher {
      findDefaultRoute(): router.Route;
      findRouteByName(routeName: string): router.Route;
      findRouteByUrl(url: string): router.Route;
      getCurrentRoute(): router.Route;
      getRouteUrl(routeName: string, params?: router.RouteParams): string;
      getRoutePath(routeName: string, params?: router.RouteParams): string;
      navigate(routeName: string, params?: router.RouteParams): void;
      addRoute(initRoute: {
          name: string;
          path: string;
          isDefault?: string;
          defaultParams?: Record<string, string | number>;
      }): void;
  }
  export var router: Router;
  export namespace router {
      export interface Route {
          name: string;
          params: Record<string, string>;
          isDefault: boolean;
          [param: string]: unknown;
          parts: RoutePart[];
      }
      export type RouteParams = Record<string, string | number | boolean>;
      interface RoutePart {
          paramsObjectFromUrlPart(urlPart: string): Record<string, string>;
          paramsObjectToUrlPart(obj: RouteParams): string;
      }
      export interface RouteDefinition {
          name: string;
          path: string;
          isDefault?: boolean;
          defaultParams?: RouteParams;
      }
      export {};
  }

}
declare module '@7willows/sw-lib/state-mgr/initialization-state' {
  export class InitializationState {
      private values;
      private props;
      constructor(props: string[]);
      isInitialized(): this is Required<InitializationState>;
      setValue(propName: string, propValue: any): void;
      getValue(propName: string): any;
      getValues(): {
          [x: string]: any;
      };
  }

}
declare module '@7willows/sw-lib/state-mgr/state-mgr' {
  import { VNode } from 'preact';
  export * from '@7willows/sw-lib/state-mgr/initialization-state';
  export type Cmd<Msg> = Promise<Msg> | Msg | null | Event | [type: 'Focus', selector: string] | CombinedCmds<Msg>;
  export type Props = Record<string, unknown>;
  export type Handler<Msg> = Msg | ((event: CustomEvent | Event) => Msg);
  export interface Options<Msg> {
      [on: `on${string}`]: Handler<Msg>;
      [attr: string]: unknown;
  }
  export type Dispatch<Msg> = (msg: Msg) => void;
  export type View<Msg> = [string, Options<Msg>, View<Msg>[] | string] | [string, View<Msg>[] | Options<Msg> | string] | [string] | false | string | VNode<Options<Msg>>;
  type BasicTypeConstructor = (new () => String) | (new () => Number) | (new () => Object) | (new () => Array<any>) | (new () => Boolean);
  export function focus(selector: string): [type: 'Focus', selector: string];
  type OnRefChangeFunc = (ref: HTMLElement, oldRef?: HTMLElement) => void;
  export function component<State, Msg>({ init, update, view, attributeChangeFactory, debug, tagName, propTypes, shadow, willMount, willUnmount }: {
      init: (dispatch: Dispatch<Msg>, func: (onRefChange: OnRefChangeFunc) => void) => [State, Cmd<Msg>];
      update: (state: State, msg: Msg, cmp: any, dispatch: Dispatch<Msg>) => [State, Cmd<Msg>];
      view: (state: State, children?: any) => View<Msg>;
      attributeChangeFactory?: (name: string, value: string) => Msg;
      debug?: boolean;
      tagName: string;
      propTypes?: Record<string, BasicTypeConstructor>;
      shadow?: boolean;
      willMount?: (cmp: any, dispatch: Dispatch<Msg>) => void;
      willUnmount?: (cmp: any, dispatch: Dispatch<Msg>) => void;
  }): void;
  export class CombinedCmds<Msg> {
      cmds: Cmd<Msg>[];
      constructor(cmds: Cmd<Msg>[]);
  }

}
declare module '@7willows/sw-lib/strings' {
  export function prefixForConstSize(text: string, size: number, prefixChar: string): string;
  export function toSpaceCase(str: string): string;
  export function toKebabCase(str: string): string;
  export function toCamelCase(str: string): string;
  export function lowercaseFirstLetter(str: string): string;
  export function capitalizeFirstLetter(str: string): string;
  export function truncateToWord(countChars: number, text: string): string;

}
declare module '@7willows/sw-lib/tr' {
  import { EventDispatcher } from '@7willows/sw-lib/event-dispatcher';
  export interface Translate extends EventDispatcher {
      (phrase: string | Record<string, string>, langOrParams?: string | Record<string, string | number> | (string | number)[], lang?: string): string;
      getBrowserLang(): string;
      getBrowserLocale(): string;
      setLang(lang: string): void;
      getLang(): string;
      /**
       * tip: for 'en_US' the locale is 'US'
       */
      setLocale(locale: string): void;
      getLocale(): string;
      addTranslation(phrase: string, translation: Record<string, string>): void;
  }
  export var tr: Translate;

}
declare module '@7willows/sw-lib' {
  import main = require('@7willows/sw-lib/index');
  export = main;
}