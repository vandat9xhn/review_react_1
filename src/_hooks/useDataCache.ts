import 'regenerator-runtime/runtime';
//
import { useState } from 'react';
//
import { data_api_cache, data_api_cache_l } from '../_api/_common/data';

//
interface DataResponse<T> {
    data: T;
}

//
export function useCacheDataList<T = any>({
    handle_get_API,
    key,
}: {
    handle_get_API: () => Promise<DataResponse<T[]>>;
    key: string;
}) {
    //
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<Error>(null);
    const [data, setData] = useState<T[]>([]);

    // -----

    //
    async function getDataAPI() {
        try {
            const cache_data = data_api_cache_l[key];
            console.log(cache_data);

            setIsLoading(true);

            if (!data_api_cache_l[key]) {
                const { data: new_data } = await handle_get_API();
                data_api_cache_l[key] = new_data;
                setData(new_data);
            } else {
                setData(cache_data);
            }
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    }

    //
    async function getMoreDataAPI() {
        try {
            setIsLoading(true);

            const { data: new_data } = await handle_get_API();
            data_api_cache_l[key].push(...new_data);
            setData([...data, ...new_data]);
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    }

    // ----

    return {
        isLoading,
        error,
        data,

        getDataAPI,
        getMoreDataAPI,
    };
}

// ---

//
export function useCacheDataNotList<T = any>({
    handle_get_API,
    key,
}: {
    handle_get_API: () => Promise<DataResponse<T>>;
    key: string;
}) {
    //
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<Error>(null);
    const [data, setData] = useState<T>();

    // -----

    //
    async function getDataAPI() {
        const cache_data = data_api_cache[key];

        setIsLoading(true);

        try {
            if (!data_api_cache[key]) {
                const { data: new_data } = await handle_get_API();
                setData(new_data);
            } else {
                setData(cache_data);
            }
        } catch (error) {
            setError(error);
        }
    }

    // ----

    return {
        isLoading,
        error,
        data,

        getDataAPI,
    };
}
