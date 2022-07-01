import * as React from "react";
import { observer } from "mobx-react-lite";

import { storeMobxCity } from "../../../mobx";

//
export interface MobxGetCityProps {}

//
function MobxGetCity({}: MobxGetCityProps) {
    //
    return (
        <div>
            <div>This get city_name from storeMobxCity</div>

            <div>{storeMobxCity.city_name}</div>
        </div>
    );
}

export default observer(MobxGetCity);
