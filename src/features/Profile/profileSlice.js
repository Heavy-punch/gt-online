import profileApi from "api/profileApi";
const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const getProfile = createAsyncThunk(
  "profile/getProfile",
  async (thunkAPI) => {
    // thunkAPI.dispatch(...)
    const profile = await profileApi.getProfile();
    return profile;
  }
);
export const updateProfile = createAsyncThunk(
  "profile/updateProfile",
  async (params, thunkAPI) => {
    // thunkAPI.dispatch(...)
    const updatedProfile = await profileApi.updateProfile(params);
    return updatedProfile;
  }
);

const initialState = {
  loading: "idle",
  profile: undefined,
  error: undefined,
};

const profileSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    profileReset: (state, action) => {
      return initialState;
    },
  },
  extraReducers: {
    [getProfile.pending]: (state, action) => {
      state.loading = "pending";
    },
    [getProfile.fulfilled]: (state, action) => {
      state.loading = "idle";
      state.profile = action.payload;
    },
    [getProfile.rejected]: (state, action) => {
      state.loading = "idle";
      state.error = action.error.message;
    },

    [updateProfile.pending]: (state, action) => {
      state.loading = "pending";
    },
    [updateProfile.fulfilled]: (state, action) => {
      state.loading = "idle";
      state.profile = action.payload;
    },
    [updateProfile.rejected]: (state, action) => {
      state.loading = "idle";
      state.error = action.error.message;
    },
  },
});
const { reducer: profileReducer, actions } = profileSlice;
export const { profileReset } = actions;
export default profileReducer;
