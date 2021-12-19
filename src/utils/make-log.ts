export default function makeLog(ns:string) {
    return function (msg:string, ...args:any[]) {
        if ((window as any).debug) {
            console.log(ns + ': ' + msg, ...args);
        }
    }
}
