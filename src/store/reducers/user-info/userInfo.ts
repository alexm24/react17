import { IAction } from "../../../interfaces";
import { ACTION_ASYNC_APP } from "../../action/const/async";
import { IUserAD } from "../../../interfaces";
const initState: IUserAD = {
    department:'',
    email:'',
    employee:'',
    fullName:'',
    iP_Phone:'',
    mobile:'',
    photo:'',
    place:'',
    sam:'',
    sip:'',
}
export const userInfo = (state: IUserAD = initState, { type, payload }: IAction<IUserAD>): IUserAD => {
    switch (type) {
        case ACTION_ASYNC_APP.INIT_USER_INFO:
            return payload;

        default:
            return state;
    }
}