import { FC, memo } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { IState, IUserAD } from '../../../interfaces';
import { PatientAD } from './PatientAD';


const Index: FC = memo(() => {
    const patientAd = useSelector<IState, IUserAD>(state => state.patientAD, shallowEqual);

    return < PatientAD {...patientAd} />
});

export default Index;