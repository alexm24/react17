import axios from 'axios';
import { Dispatch, Action, ActionCreator } from "redux";
import { IPatientDto, IPatient } from '../../../interfaces';
import { ACTION_ASYNC_APP } from './../const/async/';
import { ACTION_PATIENT, ACTION_ERR } from './../const/sync';

import { urlAPI, credential } from './func/';

const url = `${urlAPI}/api/patient`;

export const initPatientAllAsync: ActionCreator<any> = () => {
    return async (dispatch: Dispatch): Promise<Action> => {
        const { data } = await axios.get<any>(url, credential);
        return dispatch({ type: ACTION_ASYNC_APP.INIT_PATIENT_ALL, payload: data });
    };
};

export const addPatientAsync: ActionCreator<any> = (p: IPatientDto) => {
    return async (dispatch: Dispatch): Promise<Action> => {
        const body = new FormData();
        body.append('sip', p.sip);
        body.append('fullName', p.fullName);
        const { data } = await axios.post<IPatient>(url, body, credential);
        return dispatch({ type: ACTION_PATIENT.ADD, payload: data });
    };
};

export const delPatientIdAsync: ActionCreator<any> = ({ id, sip }: { id: number, sip: string }) => {
    return async (dispatch: Dispatch): Promise<Action> => {
        const { status } = await axios.delete(`${url}/${id}`, credential);
        if (status >= 200 && status < 300)
            return dispatch({ type: ACTION_PATIENT.DEL, payload: sip })
        else
            return dispatch({ type: ACTION_ERR.PATIENT_DEL, payload: sip });
    };
};