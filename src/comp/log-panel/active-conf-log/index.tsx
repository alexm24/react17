import { FC, memo } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { IActiveConfLog, IState } from '../../../interfaces';
import { LogActiveConf } from './LogActiveConf';
const Index: FC = memo(() => {
    const activeConfLog = useSelector<IState, IActiveConfLog[]>(state => state.activeConfLog, shallowEqual);
    return < LogActiveConf activeConfLog={activeConfLog} />
});

export default Index;