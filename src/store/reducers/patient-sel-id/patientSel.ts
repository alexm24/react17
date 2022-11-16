import { IAction, IPatient } from "../../../interfaces";
import { ACTION_ASYNC_APP } from "../../action/const/async";
import { ACTION_APP } from "../../action/const/sync";

const initState: string = '';

export const patientSel = (state = initState, { type, payload }: IAction<Array<IPatient> | string>): string => {
    switch (type) {
        case ACTION_ASYNC_APP.INIT_PATIENT_ALL:
            const patient = payload as Array<IPatient>;
            let patientSel = ''
            if (patient.length > 0) {
                patientSel = patient[0].sip;
            }


            return patientSel;

        case ACTION_APP.SET_PATIENT_SEL_ID:
            const pId = payload as string;
            return pId;
        default:
            return state;
    };
};