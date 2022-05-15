import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import API from "../../app/api";

export interface AuthState {
  isUserLoggedIn: boolean;
  user: any;
  error: any;
}

const initialState: AuthState = {
	isUserLoggedIn: false,
	user: null,
  error: null
};

export const loginAsync = createAsyncThunk(
	"auth/login",
	async (reqBody: any, AppThunk) => {
    try {
      const response = await API.login(reqBody);
      if(response.status !== 200){
        return AppThunk.rejectWithValue(response.data);
      }
      return response.data;
    } catch (error: any) {
      return AppThunk.rejectWithValue(error.data);
    }
	}
);

export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		login: (state) => {
			state.isUserLoggedIn = true;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(loginAsync.fulfilled, (state, action) => {
			state.isUserLoggedIn = true;
			state.user = action.payload;
		});
		builder.addCase(loginAsync.rejected, (state, action) => {
			state.error = action.payload;
		});
	},
});

export default authSlice.reducer;
