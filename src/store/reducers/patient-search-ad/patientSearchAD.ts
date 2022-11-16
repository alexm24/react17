import { ACTION_PATIENT } from './../../action/const/sync';
import { IAction, IUserAD } from "../../../interfaces";
import { ACTION_ASYNC_AD } from "../../action/const/async";

const initState: IUserAD[] = [];

export const patientSearchAD = (state = initState, { type, payload }: IAction<IUserAD[]>): IUserAD[] => {
    switch (type) {
        case ACTION_ASYNC_AD.SEARCH_PATIENT: return payload;
        case ACTION_PATIENT.SEARCH_CLEAR: return [];

        default:
            return state;
    };
};