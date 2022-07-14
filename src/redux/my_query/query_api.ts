import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface CityObj {
    id: number;
    user: {
        id: number;
        first_name: string;
        last_name: string;
        picture: string;
        is_online: boolean;
        created_time: string;
    };
    city: string;
    street: string;
    bg_color: string;
    quote: string;
    image: string;
    created_time: string;
    updated_time: string;
    profile_model: number;
}

//
export const myQueryApi = createApi({
    reducerPath: "city",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://react-django-heroku.herokuapp.com/",
    }),
    endpoints: (builder) => ({
        requestGetCities: builder.mutation<CityObj[], string>({
            query: () => "api/city/city-no-token-l/",
        }),
        getCities: builder.query<CityObj[], string>({
            query: () => `api/city/city-no-token-l/`,
        }),
    }),
});

export const { useGetCitiesQuery, useRequestGetCitiesMutation } = myQueryApi;
