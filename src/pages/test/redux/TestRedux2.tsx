import * as React from "react";

import { useReduxSelector } from "../../../redux/hooks";

//
export interface TestRedux2Props {}

//
function TestRedux2({}: TestRedux2Props) {
    //
    const { count } = useReduxSelector((state) => state.count_obj);

    //
    return (
        <div>
            <div>
                TestRedux2 Count:{" "}
                <span data-testid="TestRedux2_count">{count}</span>
            </div>
        </div>
    );
}

export default TestRedux2;
