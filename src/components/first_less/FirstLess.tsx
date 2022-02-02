import * as React from 'react';
// 
import './FirstLess.less';

//
export interface FirstLessProps {

}

//
function FirstLess({}: FirstLessProps ) {
    // 
    function handleClick() {
        alert('Hello World')
    }

    //
    return (
        <div className='FirstLess'>
            <div className='FirstLess_row'>
                <div>Left</div>

                <div>Center</div>

                <button className='FirstLess_btn' type='button' onClick={handleClick}>
                    Click me!
                </button>
            </div>
        </div>
    );
}

export default FirstLess;