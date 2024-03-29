import axiosClient from "../_common/create/axiosClient";

//
export const API_City_L = (c_count: number) =>
    new Promise<{ data: any[] }>((res) => {
        setTimeout(() => {
            res({ data: [{ city: "a" }] });
        }, 500);
    });
// axiosClient.get<any[]>('city', {
//     params: { c_count: c_count, page: 1, size: 20 },
// });

//
export const API_HerokuCity_L = () =>
    axiosClient({
        method: "GET",
        url: "https://react-django-heroku.herokuapp.com/api/city/city-no-token-l/",
    });
