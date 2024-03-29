import authApi from "api/authApi";
const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");


export const register = createAsyncThunk('auth/register', async (params, thunkAPI) => {
    // thunkAPI.dispatch(...)
    const user = await authApi.register(params);
    // console.log(user);
    return user;
});
export const login = createAsyncThunk('auth/login', async (params, thunkAPI) => {
    // thunkAPI.dispatch(...)
    const user = await authApi.login(params);
    // console.log(user);
    return user;
});
export const ping = createAsyncThunk('ping', async (params, thunkAPI) => {
    // thunkAPI.dispatch(...)
    const ping = await authApi.ping();
    console.log(thunkAPI);
    return ping;
});

const initialState = {
    loading: 'idle',
    userInfo: undefined,
    error: undefined,
}

const authSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logOut: (state, action) => {
            // state.loading = 'idle'
            // state.userInfo = undefined;
            // state.error = undefined;
            localStorage.removeItem("userInfo")
            return initialState;
        },
    },
    extraReducers: {
        [register.pending]: (state, action) => {
            state.loading = 'pending';
        },
        [register.fulfilled]: (state, action) => {
            state.loading = 'idle'
            state.userInfo = action.payload
            localStorage.setItem('userInfo', JSON.stringify(action.payload))
        },
        [register.rejected]: (state, action) => {
            console.log(action);
            state.loading = 'idle'
            state.error = action.error.message
        },

        [login.pending]: (state, action) => {
            state.loading = 'pending';
        },
        [login.fulfilled]: (state, action) => {
            state.loading = 'idle'
            state.userInfo = action.payload
            localStorage.setItem('userInfo', JSON.stringify(action.payload))
        },
        [login.rejected]: (state, action) => {
            state.loading = 'idle'
            state.error = action.error.message
        },

        [ping.fulfilled]: (state, action) => {
            state.success = true
        },
    }
});
const { reducer: authReducer, actions } = authSlice;
export const { logOut } = actions;
export default authReducer;