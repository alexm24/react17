export const consoleLogMiddleware = (nfunc: string, payload: any = null, isGroup: boolean = false) => {
    if (isGroup) {
        console.groupCollapsed(`%c loggingMiddleware type: %c ${nfunc}`, 'color: #cccccc;', 'font-size: 1.1em; color: #b1b1b1;');
        console.log('Payload: ', payload);
        console.groupEnd();
    } else {
        console.log(`%c loggingMiddleware type: %c ${nfunc}`, 'color: #cccccc;', 'font-size: 1.1em; color: #b1b1b1;');
    }
};