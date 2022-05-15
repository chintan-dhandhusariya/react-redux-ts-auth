import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import API from "../../app/api";

export interface AuthState {
  isUserLoggedIn: boolean;
  user: any;
  error: any;
	loading: boolean;
}

const initialState: AuthState = {
	isUserLoggedIn: false,
	user: null,
  error: null,
	loading: false,
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
			state.loading = false;
		});
		builder.addCase(loginAsync.pending, (state, action) => {
			state.loading = true;
		});
		builder.addCase(loginAsync.rejected, (state, action) => {
			state.loading = false;
			state.error = action.payload;
		});
	},
});

export default authSlice.reducer;
