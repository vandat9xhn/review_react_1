import * as React from "react";

import CircleControlIn from "../in/CircleControlIn";

import './CircleControl.scss';

//
export interface CircleControlProps {}

//
function CircleControl({}: CircleControlProps) {
    //
    const [is_left, setIsLeft] = React.useState(true);

    //
    return (
        <div className="CircleControl">
            <div
                className="CircleControl_in"
                onClick={() => {
                    setIsLeft((is_left) => !is_left);
                }}
            >
                <CircleControlIn is_left={is_left} />
            </div>
        </div>
    );
}

export default CircleControl;
