import axios from 'axios';
import { Dispatch, Action, ActionCreator } from "redux"
import { IConConf } from '../../../interfaces';
import { ACTION_ASYNC_APP } from "../const/async/";
import { urlAPI, credential } from './func/';

const url = `${urlAPI}/api/userconnlog`;

export const conConfAsync: ActionCreator<any> = (sip: string) => {
    return async (dispatch: Dispatch): Promise<Action> => {
        const { data } = await axios.get<IConConf[]>(`${url}/${sip}`, credential);
        return dispatch({ type: ACTION_ASYNC_APP.CON_CONF, payload: data });
    };
};