import { IAction, IUserAD } from "../../../interfaces";
import { ACTION_ASYNC_AD } from "../../action/const/async";



const initState: IUserAD = {
    fullName: '',
    department: '',
    email: '',
    employee: '',
    iP_Phone: '',
    mobile: '',
    photo: '',
    place: '',
    sam: '',
    sip: ''
};


export const patientAD = (state = initState, { type, payload }: IAction<IUserAD>): IUserAD => {
    switch (type) {
        case ACTION_ASYNC_AD.SEARCH_AD_BY_SIP:
            return payload;

        default:
            return state;
    }
}