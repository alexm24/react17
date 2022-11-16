import { IAction, IActiveConfLog } from "../../../interfaces";
import { ACTION_ASYNC_APP } from "../../action/const/async";

const initState: Array<IActiveConfLog> = [];

export const activeConfLog = (state = initState, { type, payload }: IAction<Array<IActiveConfLog>>): Array<IActiveConfLog> => {
    switch (type) {
        case ACTION_ASYNC_APP.ACTIVE_CONF_LOG: return payload;
        default: return state;
    }
}