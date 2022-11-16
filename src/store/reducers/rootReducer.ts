import { CombinedState, combineReducers, Reducer } from 'redux';
import { IAction, IState } from '../../interfaces';
import { userInfo } from './user-info/userInfo';
import { patients } from './patients/patients';
import { patientSel } from './patient-sel-id/patientSel';
import { activeConfLog } from './active-conf-log/activeConfLog';
import { patientSearchAD } from './patient-search-ad/patientSearchAD';
import { connectConf } from './con-conf/conConf';
import { patientAD } from './patient-ad/patientAD';
import { confSession } from './conf-session/confSession';

const reducer = { userInfo, patients, patientSel, activeConfLog, patientAD, patientSearchAD, connectConf, confSession };

export const rootReducer: Reducer<CombinedState<IState>, IAction<any>> = combineReducers(reducer);

