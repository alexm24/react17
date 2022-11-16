import store from '../../../../../store/store';
import { setPatientSel } from '../../../../../store/action/sync'
const { dispatch } = store;
export const setPatientSelect = (sip: string) => {
    dispatch(setPatientSel(sip));
};
