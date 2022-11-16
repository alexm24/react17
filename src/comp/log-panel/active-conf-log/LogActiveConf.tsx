import { FC, memo } from 'react';
import { IActiveConfLog } from '../../../interfaces';
import './LogActiveConf.scss';
interface ILogActiveConfComp {
    activeConfLog: IActiveConfLog[];
};

export const LogActiveConf: FC<ILogActiveConfComp> = memo(({ activeConfLog }) => {
    return (
        <div className="log-conf">
            <div className="active-conf-log-header">
                <span className="id">ID</span>
                <span className="collect-time">CollectTime</span>
                <span className="join-time">joinTime</span>
                <span className="server">Server</span>
                <span className="conf-id">confId</span>
                <span className="part-id">partId</span>
                <span className="organizer-id">organizerId</span>
                <span className="enterprise-id">enterpriseId</span>
                <span className="media-type">mediaType</span>
                <span className="organizer-sip">organizerSip</span>
                <span className="user-at-host">userAtHost</span>
                <span className="my-property">extConfId</span>
                <span className="mcu-url">mcuUrl</span>
            </div>
            <div className="active-conf-log">
                {
                    activeConfLog.map((e, i) => {
                        return (
                            <div key={i} className="conf-log">
                                <span className="id">{e.id}</span>
                                <span className="collect-time">{new Date(e.collectTime).toLocaleString()}</span>
                                <span className="join-time">{new Date(e.joinTime).toLocaleString()}</span>
                                <span className="server">{e.server}</span>
                                <span className="conf-id">{e.confId}</span>
                                <span className="part-id">{e.partId}</span>
                                <span className="organizer-id">{e.organizerId}</span>
                                <span className="enterprise-id">{e.enterpriseId}</span>
                                <span className="media-type">{e.mediaType}</span>
                                <span className="organizer-sip" title={e.organizerSip}>{e.organizerSip}</span>
                                <span className="user-at-host" title={e.userAtHost}>{e.userAtHost}</span>
                                <span className="my-property">{e.externalConfId}</span>
                                <span className="mcu-url" title={e.mcuUrl}>{e.mcuUrl}</span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
});