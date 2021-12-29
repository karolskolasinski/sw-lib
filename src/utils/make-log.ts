export default function makeLog(ns: string, forceDebugMode = false) {
    return function(msg: string, ...args: any[]) {
        if ((window as any).debug || forceDebugMode) {
            console.log(ns + ': ' + msg, ...args);
        }
    }
}
