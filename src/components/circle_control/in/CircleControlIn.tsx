import * as React from "react";

import "./CircleControlIn.scss";

//
export interface CircleControlInProps {
    is_left: boolean;
}

//
function CircleControlIn({ is_left }: CircleControlInProps) {
    //
    return (
        <div
            className={`CircleControlIn ${
                is_left ? "CircleControlIn-left" : "CircleControlIn-right"
            }`}
        >
            <div className="CircleControlIn_part CircleControlIn_bd">
                {/* border */}
                <div className="CircleControlIn_part_contain CircleControlIn_bd_contain"></div>
            </div>

            <div className="CircleControlIn_part CircleControlIn_pd">
                {/* padding */}
                <div className="CircleControlIn_part_contain CircleControlIn_pd_contain"></div>
            </div>

            <div className="CircleControlIn_part CircleControlIn_ct">
                {/* moon */}
                <div className="CircleControlIn_part_contain CircleControlIn_ct_contain"></div>
                <div></div>
            </div>
        </div>
    );
}

export default CircleControlIn;
