import * as React from 'react';

//
export interface MyDebuggerProps {}

//
function MyDebugger({}: MyDebuggerProps) {
    //
    React.useEffect(() => {
        console.log('useEffect');
    }, []);

    //
    React.useLayoutEffect(() => {
        console.log('useLayoutEffect');

        // debugger
    }, []);

    //
    return (
        <div>
            <div>
                <div>My Debugger</div>
            </div>
        </div>
    );
}

export default MyDebugger;
