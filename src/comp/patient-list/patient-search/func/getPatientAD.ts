import store from '../../../../store/store';
import { getPatientADAsync } from '../../../../store/action/async';

export const getPatientAD = (user: string) => store.dispatch(getPatientADAsync(user));