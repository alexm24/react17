import { FC, memo } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { IPatientReduce, IState } from '../../../interfaces';
import { PatientListItem, IPatientListItem } from './PatientListItem';
const Index: FC = memo(() => {
    const patients = useSelector<IState, IPatientReduce>(state => state.patients, shallowEqual);
    const patientSelSip = useSelector<IState, string>(state => state.patientSel, shallowEqual);
    const PatientListItemProps: IPatientListItem = { patients, patientSelSip };
    return < PatientListItem {...PatientListItemProps} />
});

export default Index;