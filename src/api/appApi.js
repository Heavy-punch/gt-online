import axiosClient from "./axiosClient";

const appApi = {
    getSchool: () => {
        const url = '/schools';
        return axiosClient.get(url);
    },
    getEmployer: () => {
        const url = '/employers';
        return axiosClient.get(url);
    },
}

export default appApi;