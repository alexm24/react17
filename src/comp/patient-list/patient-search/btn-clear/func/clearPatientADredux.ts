import store from '../../../../../store/store';
import { patientSearchClear } from '../../../../../store/action/sync';
export const clearPatientADredux = () => {
    store.dispatch(patientSearchClear());
}