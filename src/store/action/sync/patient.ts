import { IAction } from "../../../interfaces";
import { ACTION_APP } from "../const/sync";

export const setPatientSel = (payload: string): IAction<string> => ({ type: ACTION_APP.SET_PATIENT_SEL_ID, payload });
