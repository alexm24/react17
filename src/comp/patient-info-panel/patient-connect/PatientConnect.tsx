import { FC, memo } from 'react';
import { IConConf } from '../../../interfaces';
import './PatientConnect.scss';

export interface ISortConnectConf {
    [key: string]: IConConf;
}
export const PatientConnect: FC<ISortConnectConf> = memo((connectConf) => {
    const keyConnectConf = Object.keys(connectConf);
    return (
        <div className="patient-connect">
            <div className="patient-connect-item">
                <div className="item--server">Сервер</div>
                <div className="item--time">Дата</div>
                <div className="item--device">Устройство</div>
            </div>
            {
                keyConnectConf.map((e, i) => {
                    return (
                        <div className="patient-connect-item" key={i}>
                            <div className="item--server">{connectConf[e].server}</div>
                            <div className="item--time">{new Date(connectConf[e].collectTime).toLocaleString()}</div>
                            <div className="item--device">{e}</div>
                        </div>
                    )
                })
            }
        </div>
    )
});