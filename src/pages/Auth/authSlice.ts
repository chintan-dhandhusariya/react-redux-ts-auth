import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';

export interface AuthState {
  isUserLoggedIn: boolean;
  user: any;
}

const initialState: AuthState = {
	isUserLoggedIn: false,
	user: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state) => {
      state.isUserLoggedIn = true;
    }
  },
});

export const { login } = authSlice.actions;

export default authSlice.reducer;
