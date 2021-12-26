import * as React from 'react';

//
export interface SlickItemProps {
    num: number;
}

//
function SlickItem({ num }: SlickItemProps) {
    //
    return (
        <div className="SlickItem">
            <div className="flex justify-center items-center h-40 bg-blue-500 text-white font-semibold font-lg">
                {num}
            </div>
        </div>
    );
}

export default SlickItem;
