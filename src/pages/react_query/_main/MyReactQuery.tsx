import * as React from "react";
import { useQuery } from "react-query";

import { API_HerokuCity_L } from "../../../_api/city/list";

//
export interface MyReactQueryProps {}

//
function MyReactQuery({}: MyReactQueryProps) {
    //
    const { data } = useQuery("MyReactQuery", API_HerokuCity_L, {
        refetchOnWindowFocus: false,
    });

    console.log(data);

    //
    return (
        <div>
            <div>
                <div></div>
            </div>
        </div>
    );
}

export default MyReactQuery;
