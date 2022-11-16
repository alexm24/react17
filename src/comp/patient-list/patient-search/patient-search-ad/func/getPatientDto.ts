import { IUserAD, IPatientDto } from './../../../../../interfaces/';
export const getPatientDto = (el: IUserAD): IPatientDto => {
    const fullName = el.fullName;
    const sip = el.sip.length > 4 ? el.sip.slice(4) : ''
    return { sip, fullName };
}