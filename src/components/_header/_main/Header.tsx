import * as React from 'react';
//
import HeaderLeft from '../left/_main/HeaderLeft';
import HeaderRight from '../right/_main/HeaderRight';

//
export interface HeaderProps {}

//
function Header({}: HeaderProps) {
    //
    const [count, setCount] = React.useState(1);

    // ----

    //
    function countUp() {
        setCount((count) => count + 1);
    }

    //
    return (
        <div className="Header p-2">
            <div className="flex flex-row justify-between items-center">
                <div className='Header_left'>
                    <HeaderLeft count={count} handleClick={countUp} />
                </div>

                <div className='Header_right' >
                    <HeaderRight count={count} />
                </div>
            </div>
        </div>
    );
}
export default Header;
