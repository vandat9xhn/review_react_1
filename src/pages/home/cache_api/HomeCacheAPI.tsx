import * as React from 'react';
//
import { API_City_L } from '../../../_api/city/list';
import { useCacheDataList } from '../../../_hooks/useDataCache';

//
export interface HomeCacheAPIProps {}

//
function HomeCacheAPI({}: HomeCacheAPIProps) {
    //
    const { data, getDataAPI } = useCacheDataList({
        handle_get_API: getData_API_City,
        key: 'home_cache',
    });

    //
    React.useEffect(() => {
        getDataAPI();
    }, []);

    // ----

    //
    function getData_API_City() {
        return API_City_L(0);
    }

    //
    return <div></div>;
}

export default HomeCacheAPI;
