import axios from 'axios';
import { Dispatch, Action, ActionCreator } from "redux";
import { IUserAD } from "../../../interfaces";
import { ACTION_ASYNC_APP, ACTION_ASYNC_AD } from '../const/async';
import { urlAPI, credential } from './func/';

const url = `${urlAPI}/api/activedirectory`;


export const getPatientADAsync: ActionCreator<any> = (user: string) => {
    return async (dispatch: Dispatch): Promise<Action> => {
        const { data } = await axios.get<IUserAD[]>(`${url}/${user}`, credential);
        return dispatch({ type: ACTION_ASYNC_AD.SEARCH_PATIENT, payload: data });
    };
};

export const initUserInfoAsync: ActionCreator<any> = () => {
    return async (dispatch: Dispatch): Promise<Action> => {
        const { data } = await axios.get<IUserAD>(url, credential);
        return dispatch({ type: ACTION_ASYNC_APP.INIT_USER_INFO, payload: data });
    };
};

export const getPatientADSipAsync: ActionCreator<any> = (sip: string) => {
    return async (dispatch: Dispatch): Promise<Action> => {
        const { data } = await axios.get<IUserAD[]>(`${url}/sip:${sip}`, credential);
        // TODOO сделать обработку ошибки
        return dispatch({ type: ACTION_ASYNC_AD.SEARCH_AD_BY_SIP , payload: data[0] });
    };
};