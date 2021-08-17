import axiosClient from "./axiosClient";

const authApi = {
    register: (params) => {
        const url = '/auth/register';
        return axiosClient.post(url, params);
    },

    ping: () => {
        const url = '/ping';
        return axiosClient.get(url);
    },

    login: (params) => {
        const url = '/auth/login';
        return axiosClient.post(url, params);
    },
}

export default authApi;