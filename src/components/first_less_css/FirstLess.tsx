import * as React from 'react';
import { useRecoilValue } from 'recoil';
//
// import { useScrollSticky, ScrollSticky } from 'react-scroll-sticky';
import { charCountState } from '../../recoil/input/MyRecoilState';
//
import './FirstLess.less';

import {} from 'multi-modals'
//
export interface FirstLessProps {}

//
function FirstLess({}: FirstLessProps) {
    // ----
    const ip_recoil_length = useRecoilValue(charCountState);

    //
    function handleClick() {
        console.log(1);
        
        alert(`Length of input text: ${ip_recoil_length}`);
    }

    //
    return (
        <div className="FirstLess">
            <div className="FirstLess_row">
                <div>Left</div>

                <div>Center</div>

                <button
                    className="FirstLess_btn"
                    type="button"
                    onClick={handleClick}
                >
                    Click me!
                </button>
            </div>
        </div>
    );
}

export default FirstLess;
