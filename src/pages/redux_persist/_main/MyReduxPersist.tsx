import * as React from "react";

import { useReduxDispatch, useReduxSelector } from "../../../redux/hooks";
import { changeCity } from "../../../redux/my_persist/slice";

//
export interface MyReduxPersistProps {}

//
function MyReduxPersist({}: MyReduxPersistProps) {
    //
    const { city } = useReduxSelector((state) => state.my_persist);
    const dispatch = useReduxDispatch();

    //
    return (
        <div>
            <div>{city}</div>

            <div>
                <button
                    type="button"
                    onClick={() => {
                        dispatch(changeCity(city === "HCM" ? "HN" : "HCM"));
                    }}
                >
                    Change city
                </button>
            </div>
        </div>
    );
}

export default MyReduxPersist;
