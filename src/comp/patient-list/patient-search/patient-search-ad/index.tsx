import { FC, memo, Dispatch } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { IUserAD, IState } from '../../../../interfaces';
import { PatientSearchAD } from './PatientSearchAD';

interface IIndex {
    setText: Dispatch<React.SetStateAction<string>>;
}

const Index: FC<IIndex> = memo(({setText}) => {
    const patientsSeachAD = useSelector<IState, IUserAD[]>(state => state.patientSearchAD, shallowEqual);
    const isPatientsSeachAD = patientsSeachAD.length > 0 ? true : false;
    return isPatientsSeachAD
        ? < PatientSearchAD patients={patientsSeachAD} setText={setText} />
        : null
});

export default Index;