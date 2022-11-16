import { IAction, IConConf } from "../../../interfaces";
import { ACTION_ASYNC_APP } from "../../action/const/async";

const initState: Array<IConConf> = [];

export const connectConf = (state = initState, { type, payload }: IAction<Array<IConConf>>): Array<IConConf> => {
    switch (type) {
        case ACTION_ASYNC_APP.CON_CONF: return payload;
        default: return state;
    }
}