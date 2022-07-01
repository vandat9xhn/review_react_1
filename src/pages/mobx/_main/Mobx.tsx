import * as React from "react";

import MobxCity from "../city/MobxCity";
import MobxGetCity from "../get_city/MobxGetCity";

//
export interface MobxProps {}

//
function Mobx({}: MobxProps) {
    //
    return (
        <div>
            <div>
                <h1 style={{ fontSize: "20px", fontWeight: 600 }}>Mobx</h1>
                <br />
            </div>

            <div>
                <MobxCity />
            </div>

            <div>
                <MobxGetCity />
            </div>
        </div>
    );
}

export default Mobx;
