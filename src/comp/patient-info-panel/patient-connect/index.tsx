import { FC, memo } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { IConConf, IState } from '../../../interfaces';
import { PatientConnect, ISortConnectConf } from './PatientConnect';


const Index: FC = memo(() => {
    const connectConf = useSelector<IState, IConConf[]>(state => state.connectConf, shallowEqual);

    const sortConnectConf = connectConf.reduce((a: ISortConnectConf, e) => {
        if (!!!a[e.clientApp]) return { ...a, [e.clientApp]: { ...e } }
        const now = new Date(e.collectTime).getTime();
        const last = new Date(a[e.clientApp].collectTime).getTime();
        if (now > last) return { ...a, [e.clientApp]: { ...e } };
        return a;

    }, {});
    return < PatientConnect {...sortConnectConf} />
});

export default Index;