import 'regenerator-runtime/runtime';
import axios from 'axios';

//
const csrftoken = () =>
    document.cookie &&
    document.cookie
        .split(';')
        .filter((str) => str.startsWith('csrftoken='))[0]
        .slice(10);

//
const baseURL = '';
axios.defaults.baseURL = baseURL;

//
const axiosClient = axios.create({
    headers: {
        Accept: '*/*',
        // 'content-type': 'application/json',
        'Content-Type':
            'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW',
        'X-CSRFToken': csrftoken(),
    },
});

//
axios.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {}
);

//
axios.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {}
);

export default axiosClient;
