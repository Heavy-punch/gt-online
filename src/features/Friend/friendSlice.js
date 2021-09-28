import friendApi from "api/friendApi";
import { SEARCH_RESULT } from "constants/global";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const getUserList = createAsyncThunk(
  "friend/getUesrList",
  async (params, thunkAPI) => {
    // thunkAPI.dispatch(...)
    const userList = await friendApi.getUserList(params);
    return userList;
  }
);
export const friendCreateRequest = createAsyncThunk(
  "friend/createRequest",
  async (params, thunkAPI) => {
    // console.log("friend Slice : ", params);
    // thunkAPI.dispatch(...)
    const friendRequest = await friendApi.friendCreateRequest(params);
    // console.log(friendRequest);
    return friendRequest;
  }
);

export const friendAcceptRequest = createAsyncThunk(
  "friend/acceptRequest",
  async (path, thunkAPI) => {
    // thunkAPI.dispatch(...)
    const friendAccept = await friendApi.friendAcceptRequest(path);
    return friendAccept;
  }
);

export const friendListRequest = createAsyncThunk(
  "friend/listRequest",
  async (thunkAPI) => {
    // thunkAPI.dispatch(...)
    const friendListRequest = await friendApi.friendListRequest();
    return friendListRequest;
  }
);

export const friendList = createAsyncThunk("friend/list", async (thunkAPI) => {
  // thunkAPI.dispatch(...)
  const friendList = await friendApi.friendList();
  return friendList;
});

const initialState = {
  loading: "idle",
  userList: undefined,
  requestList: undefined,
  error: undefined,
};

const friendSlice = createSlice({
  name: "friend",
  initialState,
  reducers: {
    friendReset: (state, action) => {
      return initialState;
    },
  },
  extraReducers: {
    //get user list
    [getUserList.pending]: (state, action) => {
      state.loading = "pending";
    },
    [getUserList.fulfilled]: (state, action) => {
      state.loading = "idle";
      state.userList = action.payload.Users;
    },
    [getUserList.rejected]: (state, action) => {
      state.loading = "idle";
      state.error = action.error.message;
    },

    //create friend request
    [friendCreateRequest.pending]: (state, action) => {
      state.loading = "pending";
    },
    [friendCreateRequest.fulfilled]: (state, action) => {
      state.loading = "idle";
      //state.userList = action.data; // consider later
    },
    [friendCreateRequest.rejected]: (state, action) => {
      state.loading = "idle";
      state.error = action.error.message;
    },

    //accept friend request
    [friendAcceptRequest.pending]: (state, action) => {
      state.loading = "pending";
    },
    [friendAcceptRequest.fulfilled]: (state, action) => {
      state.loading = "idle";
      //state.userList = []; // consider later
    },
    [friendAcceptRequest.rejected]: (state, action) => {
      state.loading = "idle";
      state.error = action.error.message;
    },

    // list friend request
    [friendListRequest.pending]: (state, action) => {
      state.loading = "pending";
    },
    [friendListRequest.fulfilled]: (state, action) => {
      state.loading = "idle";
      state.requestList = action.payload; // consider later
    },
    [friendListRequest.rejected]: (state, action) => {
      state.loading = "idle";
      state.error = action.error.message;
    },

    // list friend
    [friendList.pending]: (state, action) => {
      state.loading = "pending";
    },
    [friendList.fulfilled]: (state, action) => {
      state.loading = "idle";
      state.userList = action.payload.friends; // consider later
    },
    [friendList.rejected]: (state, action) => {
      state.loading = "idle";
      state.error = action.error.message;
    },
  },
});
const { reducer: friendReducer, actions } = friendSlice;
export const { friendReset } = actions;
export default friendReducer;
