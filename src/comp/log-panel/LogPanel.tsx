import { FC, memo, useState } from "react";
import classNames from 'classnames';
import { Panel } from './func';
import LogConf from "./active-conf-log";
import ConConf from './con-conf';
import ConfSession from './conf-session';
import './LogPanel.scss';

export const LogPanel: FC = memo(() => {
    const [indexPanel, setIndexPamel] = useState(Panel.LOG_CONF);
    const isPanelLogConf = (indexPanel === Panel.LOG_CONF);
    const isPanelConConf = (indexPanel === Panel.CON_CONF);
    const isPanelConfSession = (indexPanel === Panel.CONF_SESSION);


    return (
        <div className="log-panel">
            <header>
                <button
                    className={classNames({ "log-panel-btn--sel": isPanelLogConf })}
                    onClick={() => setIndexPamel(Panel.LOG_CONF)
                    }>
                    <span>Конференции</span>
                </button>
                <button
                    className={classNames({ "log-panel-btn--sel": isPanelConConf })}
                    onClick={() => setIndexPamel(Panel.CON_CONF)}
                >
                    <span>Подключение</span>
                </button>
                <button
                    className={classNames({ "log-panel-btn--sel": isPanelConfSession })}
                    onClick={() => setIndexPamel(Panel.CONF_SESSION)}
                >
                    <span>Ссесии конференции</span>
                </button>
                <span className="log-panel--line" />
            </header>
            { isPanelLogConf && <LogConf /> }
            { isPanelConConf && <ConConf /> }
            { isPanelConfSession && <ConfSession /> }
        </div>
    )
});