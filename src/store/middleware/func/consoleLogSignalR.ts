export const consoleLogSignalR = (nfunc: string, payload: any) => {
    console.groupCollapsed(`%c signalRMiddleware backend function: %c ${nfunc}`, 'color: #000040;', 'font-weight: bold; font-size: 1.2em; color: #000040;');
    console.log('Payload', payload);
    console.groupEnd();
}