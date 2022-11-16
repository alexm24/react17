import axios from 'axios';
import { Dispatch, Action, ActionCreator } from "redux"
import { IActiveConfLog } from '../../../interfaces';
import { ACTION_ASYNC_APP } from "../const/async/";
import { urlAPI, credential } from './func/';

const url = `${urlAPI}/api/activeconflog`;

export const activeConfLogAsync: ActionCreator<any> = (sip: string) => {
    return async (dispatch: Dispatch): Promise<Action> => {
        const { data } = await axios.get<IActiveConfLog>(`${url}/${sip}`, credential);
        return dispatch({ type: ACTION_ASYNC_APP.ACTIVE_CONF_LOG, payload: data });
    };
};