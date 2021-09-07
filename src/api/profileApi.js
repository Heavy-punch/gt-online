import axiosClient from "./axiosClient";

const profileApi = {
    getProfile: () => {
        const url = '/users/profile';
        return axiosClient.get(url);
    },
    updateProfile: (params) => {
        const url = '/users/profile';
        return axiosClient.put(url, params);
    },
}

export default profileApi;