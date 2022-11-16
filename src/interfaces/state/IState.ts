import { IPatientReduce, IActiveConfLog, IUserAD, IConConf, IConfSession } from '..';

export interface IState {
    patientSel: string;
    userInfo: IUserAD;
    patients: IPatientReduce;
    activeConfLog: Array<IActiveConfLog>;
    patientAD: IUserAD;
    patientSearchAD: IUserAD[];
    connectConf: IConConf[];
    confSession: IConfSession[];
}