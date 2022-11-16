import store from '../../../../../store/store';
import { addPatientAsync } from '../../../../../store/action/async';
import { patientSearchClear } from '../../../../../store/action/sync';
import { IPatientDto } from './../../../../../interfaces/patient/IPatientDto';
export const addPatient = (p: IPatientDto) => {
    if (p.sip.length > 0) store.dispatch(addPatientAsync(p));
    store.dispatch(patientSearchClear());
};