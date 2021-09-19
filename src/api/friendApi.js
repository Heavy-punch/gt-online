import axiosClient from "./axiosClient";

const friendApi = {
  getUserList: (params) => {
    const url = "/users";
    return axiosClient.get(url, { params });
  },
};

export default friendApi;
