import { FC, memo } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { IConfSession, IState } from '../../../interfaces';
import { ConfSession } from './ConfSession';

const Index: FC = memo(() => {
    const confSession = useSelector<IState, IConfSession[]>(state => state.confSession, shallowEqual);

    return < ConfSession confSession={confSession} />
});
export default Index;