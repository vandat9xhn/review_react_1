import axios from "axios";

//
const csrftoken = () => {
    if (!document.cookie) {
        return "";
    }

    const csrf = document.cookie
        .split(";")
        .filter((str) => str.startsWith("csrftoken="))[0];

    if (csrf) {
        return csrf.slice(10);
    }

    return "";
};

//
const baseURL = "";
axios.defaults.baseURL = baseURL;

//
const axiosClient = axios.create({
    headers: {
        Accept: "*/*",
        // 'content-type': 'application/json',
        "Content-Type":
            "multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW",
        "X-CSRFToken": csrftoken(),
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
