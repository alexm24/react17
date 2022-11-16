import { FC, memo } from "react";
import { IPatientReduce } from "../../../interfaces";
import { Patient } from "./patient/Patient";
import "./PatientListItem.scss";

export interface IPatientListItem {
    patients: IPatientReduce;
    patientSelSip: string;
};

export const PatientListItem: FC<IPatientListItem> = memo(({ patients, patientSelSip }) => {
    const patientsId = Object.keys(patients);
    return (
        <div className="patients-list-item">
            {
                patientsId.map(sip => {

                    const isPatientSelId = patientSelSip === sip;

                    return (
                        <Patient
                            key={sip}
                            {...patients[sip]}
                            isPatientSel={isPatientSelId}
                        />)
                })
            }
        </div>
    )
});