import { FC, memo } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { IConConf, IState } from '../../../interfaces';
import { ConConf } from './ConConf';
const Index: FC = memo(() => {
    const conConf = useSelector<IState, IConConf[]>(state => state.connectConf, shallowEqual);
    return < ConConf conConf = {conConf} />
});

export default Index;