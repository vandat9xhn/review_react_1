import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import city_obj from "../../../default/city/city.json";

//
export const myQueryApi = createApi({
    reducerPath: "city",
    baseQuery: fetchBaseQuery({ baseUrl: city_obj }),
    endpoints: (builder) => ({
        getCity: builder.query<{ name: string }, string>({
            query: (id) => ``,
        }),
    }),
});

export const { useGetCityQuery } = myQueryApi;
