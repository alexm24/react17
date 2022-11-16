import { FC, memo } from 'react';
import { IConConf } from '../../../interfaces';
import './ConConf.scss';
interface IConConfComp {
    conConf: IConConf[];
};
export const ConConf: FC<IConConfComp> = memo(({ conConf }) => {
    return (
        <div className="con-conf">
            <div className="conf-log-header">
                <span className="conf-log-main-item--server">server</span>
                <span className="conf-log-main-item--time">collectTime</span>
                <span className="conf-log-main-item--user">userAtHost</span>
                <span className="conf-log-main-item--client">clientApp</span>
            </div>
            <div className="conf-log-main">
                {
                    conConf.map((e, i) => {
                        return (
                            <div key={i} className="conf-log-main-item">
                                <span className="conf-log-main-item--server">{e.server}</span>
                                <span className="conf-log-main-item--time">{new Date(e.collectTime).toLocaleString()}</span>
                                <span className="conf-log-main-item--user">{e.userAtHost}</span>
                                <span className="conf-log-main-item--client">{e.clientApp}</span>
                            </div>
                        )
                    })
                }
            </div>

        </div>

    )
});