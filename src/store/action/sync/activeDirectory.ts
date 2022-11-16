import { IAction } from "../../../interfaces";
import { ACTION_PATIENT } from "../const/sync";

export const patientSearchClear = (payload: string = ''): IAction<string> => ({ type: ACTION_PATIENT.SEARCH_CLEAR, payload });
