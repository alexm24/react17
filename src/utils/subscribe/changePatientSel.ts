import store from '../../store/store';
import { conConfAsync, getPatientADSipAsync, activeConfLogAsync, confSession } from '../../store/action/async';

let pSel = '';
export const changePatientSel = () => {
    const patientSel = store.getState().patientSel;
    if (pSel !== patientSel) {
        pSel = patientSel;
        store.dispatch(conConfAsync(patientSel));
        store.dispatch(getPatientADSipAsync(patientSel));
        store.dispatch(activeConfLogAsync(patientSel));
        store.dispatch(confSession(patientSel));
    };
}