import { FC, memo } from "react";
import { PatientSearch } from "./patient-search/PatientSearch";
import PatientsListItem from "./patient-list-item";
import "./PatientList.scss";
export const PatientList: FC = memo(() => {
    return (
        <div className="patient-list">
            <PatientsListItem />
            <PatientSearch />
        </div>
    )
});