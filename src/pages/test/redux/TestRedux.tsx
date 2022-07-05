import * as React from "react";

import { useReduxDispatch, useReduxSelector } from "../../../redux/hooks";
import { countUp } from "../../../redux/count/slice";

//
export interface TestReduxProps {}

//
function TestRedux({}: TestReduxProps) {
    //
    const { count } = useReduxSelector((state) => state.count_obj);
    const dispatch = useReduxDispatch();

    //
    return (
        <div>
            <div>
                Redux Count: <span data-testid="TestRedux_count">{count}</span>
            </div>

            <div>
                <button
                    data-testid="TestRedux_btn"
                    type="button"
                    onClick={() => {
                        dispatch(countUp());
                    }}
                >
                    Count up
                </button>
            </div>
        </div>
    );
}

export default TestRedux;
