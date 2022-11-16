import { FC, memo } from 'react';
import { IConfSession } from '../../../interfaces';
import './ConfSession.scss';

export interface IConfSessionProps {
    confSession: IConfSession[];
}
export const ConfSession: FC<IConfSessionProps> = memo(({ confSession }) => {

    return (
        <div className="conf-session">
            <div className="conf-session-header">
                <span className="conf-session-item--sessionIdTime">sessionIdTime</span>
                <span className="conf-session-item--sessionIdSeq" title="sessionIdSeq">IdSeq</span>
                <span className="conf-session-item--conferenceUri">conferenceUri</span>
                <span className="conf-session-item--conferenceClientCategory" title='conferenceClientCategory'>clientCategory</span>
                <span className="conf-session-item--frontEnd">frontEnd</span>
                <span className="conf-session-item--responseCode">responseCode</span>
                <span className="conf-session-item--diagnosticId">diagnosticId</span>
                <span className="conf-session-item--userClientCategory" title="userClientCategory">clientCategory</span>
                <span className="conf-session-item--edgeServer">edgeServer</span>
                <span className="conf-session-item--gateway">gateway</span>
                <span className="conf-session-item--mediationServer">mediationServer</span>
                <span className="conf-session-item--referredByUri">referredByUri</span>
            </div>
            <div className="conf-session-main">
                {
                    confSession.map((e, i) => {
                        return (
                            <div key={i} className="conf-log-main-item">
                                <span className="conf-session-item--sessionIdTime">{new Date(e.sessionIdTime).toLocaleString()}</span>
                                <span className="conf-session-item--sessionIdSeq" >{e.sessionIdSeq}</span>
                                <span className="conf-session-item--conferenceUri" title={e.conferenceUri}>{e.conferenceUri}</span>
                                <span className="conf-session-item--conferenceClientCategory">{e.conferenceClientCategory}</span>
                                <span className="conf-session-item--frontEnd">{e.frontEnd}</span>
                                <span className="conf-session-item--responseCode">{e.responseCode}</span>
                                <span className="conf-session-item--diagnosticId">{e.diagnosticId}</span>
                                <span className="conf-session-item--userClientCategory">{e.userClientCategory}</span>
                                <span className="conf-session-item--edgeServer">{e.edgeServer}</span>
                                <span className="conf-session-item--gateway">{e.gateway}</span>
                                <span className="conf-session-item--mediationServer">{e.mediationServer}</span>
                                <span className="conf-session-item--referredByUri">{e.referredByUri}</span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
});