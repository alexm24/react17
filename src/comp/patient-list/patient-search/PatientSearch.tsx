import { ChangeEvent, FC, memo, useRef, useState } from 'react';
import { Search } from '../../../pic/svg';
import { debounce } from '../../../utils';
import { getPatientAD } from './func/';
import PatientSearchAD from './patient-search-ad/';
import { BtnClear } from './btn-clear/BtnClear';
import './PatientSearch.scss';


const sendQuery = (query: string) => getPatientAD(query);


export const PatientSearch: FC = memo(() => {
    const delayedQuery = useRef(debounce((q: string) => sendQuery(q), 500)).current;
    const [text, setText] = useState("");

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target
        setText(value);
        delayedQuery(value);
    };
    const isBtnClear = (text.trim()).length > 0;
    return (
        <div className="patients-search">
            <div className="patient-input">
                <div className="patient-input-svg">
                    <Search />
                </div>
                <div className="patient-input-field">
                    <input type="text" onChange={onChange} value={text} />
                    <PatientSearchAD setText={setText} />
                    {isBtnClear && <BtnClear setText={setText} />}
                </div>
            </div>
        </div>
    )
});