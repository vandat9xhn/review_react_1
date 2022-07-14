import * as React from "react";

import {
    useGetCitiesQuery,
    useRequestGetCitiesMutation,
} from "../../../redux/my_query/query_api";

//
export interface MyReduxQueryProps {}

//
function MyReduxQuery({}: MyReduxQueryProps) {
    //
    const { data, isLoading, isFetching } = useGetCitiesQuery("");
    const [getCities, { data: list }] = useRequestGetCitiesMutation();

    React.useEffect(() => {
        getList();
    }, []);

    const getList = async () => {
        const _list = await getCities("").unwrap();
        console.log(_list);
    };

    //
    return (
        <div>
            <div>
                {isLoading ? (
                    "Loading..."
                ) : (
                    <div>
                        <ul>
                            {data.map((item, ix) => (
                                <li key={item.id}>
                                    <div>{item.city}</div>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}

export default MyReduxQuery;
