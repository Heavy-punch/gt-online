import axiosClient from "./axiosClient";

const friendApi = {
  getUserList: (params) => {
    const url = "/users";
    return axiosClient.get(url, { params });
  },
  friendList: () => {
    const url = "/friends";
    return axiosClient.get(url);
  },
  friendListRequest: () => {
    const url = "/friends/requests";
    return axiosClient.get(url);
  },
  friendCreateRequest: (params) => {
    const url = `/friends/requests/${params.path}`;
    // console.log("friend api create request :", params.body);
    return axiosClient.put(url, params.body);
  },
  friendAcceptRequest: (path) => {
    const url = `/friends/${path}`;
    return axiosClient.put(url);
  },
};

export default friendApi;
