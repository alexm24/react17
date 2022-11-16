import { FC, memo } from "react";
import { AccountCircle } from "../../pic/svg";
import './HeaderMenu.scss';

export const HeaderMenu: FC<{ name: string }> = memo(({ name }) => {
    return (
        <div className="header-menu">
            <span>Мониторинг</span>
            <div className="account-circle">
                <span>{name}</span>
                <AccountCircle />
            </div>
        </div>
    )
});