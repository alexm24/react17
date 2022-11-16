import { FC, memo } from "react";
import { useSelector, shallowEqual } from 'react-redux';
import { HeaderMenu } from "./HeaderMenu";
import { getShotUserName } from "./func/";
import { IState, IUserAD } from "../../interfaces";
const index: FC = memo(() => {
    const userInfo = useSelector<IState, IUserAD>(state => state.userInfo, shallowEqual);
    const name = getShotUserName(userInfo);
    return <HeaderMenu name={name} />
});
export default index;