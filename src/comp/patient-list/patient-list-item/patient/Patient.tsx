import { FC, memo } from "react";
import classNames from 'classnames';
import { PermIdentity, Delete } from "../../../../pic/svg";
import { IPatient } from '../../../../interfaces';
import { setPatientSelect, delPatientId } from './func/';
import "./Patient.scss";
interface IPatientComp extends IPatient {
    isPatientSel: boolean;

};

export const Patient: FC<IPatientComp> = memo(({ fullname, sip, isPatientSel, id }) => {
    return (
        <div className={classNames('patient-item', { 'patient-item--sel': isPatientSel })} onClick={() => setPatientSelect(sip)}>
            <div className="patient-avatar">
                <PermIdentity />
            </div>
            <div className="patient-fullname">
                <span>{fullname}</span>
            </div>
            <div className="patient-ctrl" onClick={e => { e.stopPropagation(); delPatientId({ id, sip }) }}>
                <button>
                    <Delete />
                </button>
            </div>
        </div>
    )
});