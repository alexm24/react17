import { FC, memo } from 'react';
import HeaderMenu from '../comp/header-menu/';
import { PatientList } from "../comp/patient-list/PatientList";
import { LogPanel } from '../comp/log-panel/LogPanel';
import ConnectConf from "../comp/patient-info-panel/patient-connect";
import PatientAD from "../comp/patient-info-panel/patient-ad";

import './App.scss';
export const App: FC = memo(() => {
    return (
        <div className="app">
            <HeaderMenu />
            <div className="patients-b">
                <div className="patients-b-list">
                    <PatientList />
                </div>
                <div className="patients-b-info">
                    <PatientAD />
                    <ConnectConf />
                </div>
            </div>
            <LogPanel />

        </div>
    )
});