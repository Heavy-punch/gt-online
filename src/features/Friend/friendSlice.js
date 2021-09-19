import friendApi from "api/friendApi";
const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const getUserList = createAsyncThunk("friend/getUesrList", async (params, thunkAPI) => {
    // thunkAPI.dispatch(...)
    const userList = await friendApi.getUserList(params);
    return userList;
}
);

const initialState = {
    loading: "idle",
    userList: undefined,
    error: undefined,
};

const friendSlice = createSlice({
    name: "friend",
    initialState,
    reducers: {},
    extraReducers: {
        [getUserList.pending]: (state, action) => {
            state.loading = "pending";
        },
        [getUserList.fulfilled]: (state, action) => {
            state.loading = "idle";
            state.userList = action.payload;
        },
        [getUserList.rejected]: (state, action) => {
            state.loading = "idle";
            state.error = action.error.message;
        },
    },
});
const { reducer: friendReducer } = friendSlice;
export default friendReducer;
