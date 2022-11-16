import { FC, memo, Dispatch } from 'react';
import { getPatientDto, addPatient } from './func';
import { IUserAD, IPatientDto } from '../../../../interfaces';
import './PatientSearchAD.scss';
interface IPatientSearchAD {
    patients: IUserAD[];
    setText: Dispatch<React.SetStateAction<string>>;
}
export const PatientSearchAD: FC<IPatientSearchAD> = memo(({ patients, setText }) => {
    const sendPatientToAd = (el: IUserAD) => {
        const patient: IPatientDto = getPatientDto(el);
        addPatient(patient);
        setText('');
    };
    return (
        <div className="patient-search-ad">
            {
                patients.map((el, i) => {
                    return (
                        <div
                            key={i}
                            className="patient-search-ad-item"
                            onClick={() => sendPatientToAd(el)}
                        >
                            {el.fullName}
                        </div>
                    )
                })
            }
        </div>
    )
})