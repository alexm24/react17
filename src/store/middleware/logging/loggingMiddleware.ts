import { Middleware } from "redux";
import { IAction } from "../../../interfaces";
import { consoleLogMiddleware } from '../func';

export const loggingMiddleware: Middleware = store => next => (action: IAction<any>) => {

    if (!!action.type) {
        if (!!action.payload) {
            consoleLogMiddleware(action.type, action.payload, true);
        } else {
            consoleLogMiddleware(action.type);
        };
    };

    return next(action);
};