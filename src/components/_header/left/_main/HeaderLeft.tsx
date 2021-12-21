import * as React from 'react';
//
import { BtnBlue } from '../../../btn/_main/Btn';
//
import './HeaderLeft.scss';

//
export interface HeaderLeftProps {
    count: number;
    handleClick: () => void
}

//
function HeaderLeft({ count, handleClick }: HeaderLeftProps) {
    //
    return (
        <div className="HeaderLeft">
            <div className="flex flex-row">
                <BtnBlue className="shadow-md text-purple-200" onClick={handleClick}>
                    Btn styled {count}
                </BtnBlue>
            </div>
        </div>
    );
}

export default HeaderLeft;
