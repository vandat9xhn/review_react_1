import * as React from "react";
import { observer } from "mobx-react-lite";

import CityMobx from "../../../mobx/city";
import { storeMobxCity } from "../../../mobx";

//
export interface MobxCityProps {
    city_obj: CityMobx;
}

//
function MobxCity({ city_obj }: MobxCityProps) {
    //
    return (
        <div>
            <div>
                <h2>{city_obj.city_name}</h2>
            </div>

            <div>Change input bellow to change state from "mobx"</div>

            <div>
                <input
                    type="text"
                    value={city_obj.city_name}
                    disabled={!city_obj.has_fetched}
                    style={{ border: "1px solid" }}
                    onChange={(e) => {
                        city_obj.changeCityName(e.target.value);
                    }}
                />
            </div>
        </div>
    );
}

export default observer(({}) => MobxCity({ city_obj: storeMobxCity }));
