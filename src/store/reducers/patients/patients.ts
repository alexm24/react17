import { IAction, IPatientReduce, IPatient } from "../../../interfaces";
import { ACTION_ASYNC_APP } from "../../action/const/async";
import { ACTION_PATIENT } from './../../action/const/sync/';

const initState: IPatientReduce = {};
type ActionPatient = Array<IPatient> | string | IPatient;

export const patients = (state = initState, { type, payload }: IAction<ActionPatient>): IPatientReduce => {
    switch (type) {
        case ACTION_ASYNC_APP.INIT_PATIENT_ALL:
            const patients = payload as IPatient[];
            const users = patients.reduce((a, e) => ({ ...a, [e.sip]: { ...e } }), state);
            return users;

        case ACTION_PATIENT.DEL:
            const sip = payload as string;
            const delPatientState = { ...state };
            delete delPatientState[sip];
            return delPatientState;

        case ACTION_PATIENT.ADD:
            const p = payload as IPatient;
            const addPatientState = { [p.sip]: { ...p }, ...state };
            return addPatientState;

        default:
            return state;
    }
}