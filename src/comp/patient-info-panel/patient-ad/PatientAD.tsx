import { FC, memo } from 'react';
import { IUserAD } from '../../../interfaces';
import './PatientAD.scss';

export const PatientAD: FC<IUserAD> = memo(({ employee, iP_Phone, mobile, place, email }) => {
    return (
        <div className="patient-ad">
            <div className="patient-ad-field">
                <span>Должность:</span>
                <span>{employee}</span>
            </div>
            <div className="patient-ad-field">
                <span>IP Телефон:</span>
                <span>{iP_Phone}</span>
            </div>
            <div className="patient-ad-field">
                <span>Моб. Тел.:</span>
                <span>{mobile}</span>
            </div>
            <div className="patient-ad-field">
                <span>Место :</span>
                <span>{place}</span>
            </div>
            <div className="patient-ad-field">
                <span>Почта :</span>
                <span>{email}</span>
            </div>
        </div>
    )
});