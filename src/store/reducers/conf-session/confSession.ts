import { IAction, IConfSession } from "../../../interfaces";
import { ACTION_ASYNC_APP } from "../../action/const/async";

const initState: Array<IConfSession> = [];

export const confSession = (state = initState, { type, payload }: IAction<Array<IConfSession>>): Array<IConfSession> => {
    switch (type) {
        case ACTION_ASYNC_APP.CONF_SESSION: return payload;
        default: return state;
    }
}