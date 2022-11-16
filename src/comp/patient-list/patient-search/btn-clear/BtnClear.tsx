import { FC, memo, Dispatch } from 'react';
import { Clear } from '../../../../pic/svg';
import { clearPatientADredux } from './func/clearPatientADredux';
import './BtnClear.scss';
interface IBtnClear {
    setText: Dispatch<React.SetStateAction<string>>;
}
export const BtnClear: FC<IBtnClear> = memo(({ setText }) => {
    const closePatientWindow = () => {
        setText("");
        clearPatientADredux();
    }
    return (
        <div className="patient-input-btn-clear" onClick={() => closePatientWindow()} >
            <Clear />
        </div>
    )
});