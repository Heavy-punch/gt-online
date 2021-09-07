import appApi from "api/appApi";
const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const getSchool = createAsyncThunk('getSchool', async (params, thunkAPI) => {
    // thunkAPI.dispatch(...)
    const schoolList = await appApi.getSchool();
    return schoolList;
});
export const getEmployer = createAsyncThunk('getEmployer', async (params, thunkAPI) => {
    // thunkAPI.dispatch(...)
    const employerList = await appApi.getEmployer();
    return employerList;
});

const initialState = {
    loading: 'idle',
    schoolList: undefined,
    employerList: undefined,
    error: undefined,
}

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
    },
    extraReducers: {
        [getSchool.pending]: (state, action) => {
            state.loading = 'pending';
        },
        [getSchool.fulfilled]: (state, action) => {
            state.loading = 'idle'
            state.schoolList = action.payload.schools
        },
        [getSchool.rejected]: (state, action) => {
            state.loading = 'idle'
            state.error = action.error.message
        },

        [getEmployer.pending]: (state, action) => {
            state.loading = 'pending';
        },
        [getEmployer.fulfilled]: (state, action) => {
            state.loading = 'idle'
            state.employerList = action.payload.employers
        },
        [getEmployer.rejected]: (state, action) => {
            state.loading = 'idle'
            state.error = action.error.message
        },
    }
});
const { reducer: appReducer } = appSlice;
export default appReducer;