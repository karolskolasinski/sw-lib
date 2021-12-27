declare module 'to-no-case' {
  export default function (str: string): string;
}

declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}
