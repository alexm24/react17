import axios from 'axios';
import { Dispatch, Action, ActionCreator } from "redux"
import { IConfSession } from '../../../interfaces';
import { ACTION_ASYNC_APP } from "../const/async/";
import { urlAPI, credential } from './func/';

const url = `${urlAPI}/api/confsess`;

export const confSession: ActionCreator<any> = (sip: string) => {
    return async (dispatch: Dispatch): Promise<Action> => {
        const { data } = await axios.get<IConfSession>(`${url}?sip=${sip}`, credential);
        return dispatch({ type: ACTION_ASYNC_APP.CONF_SESSION, payload: data });
    };
};