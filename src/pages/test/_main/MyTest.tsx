import * as React from "react";
import { useMounted } from "react-commons-ts";

import { API_City_L } from "../../../_api/city/list";

//
export interface MyTestProps {}

//
function MyTest({}: MyTestProps) {
    //
    const mounted = useMounted();

    //
    const [city_arr, setCityArr] = React.useState<{ city: string }[]>([]);

    //
    React.useEffect(() => {
        getData();
    }, []);

    // -----

    //
    const getData = async () => {
        const { data } = await API_City_L(0);
        mounted && setCityArr(data);
    };

    //
    const handleClick = () => {};

    //
    return (
        <div>
            <div>
                <button onClick={handleClick}>Click me!</button>
            </div>

            {city_arr.length && (
                <div data-testid="MyTest_list">
                    {city_arr.map((item, ix) => (
                        <div key={ix}>{item.city}</div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default MyTest;
