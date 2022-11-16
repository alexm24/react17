import store from '../../../../../store/store';
import { delPatientIdAsync } from '../../../../../store/action/async/'
const { dispatch } = store;
export const delPatientId = (el: { id: number, sip: string }) => {
    dispatch(delPatientIdAsync(el));
};