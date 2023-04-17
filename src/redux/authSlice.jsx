import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
    email: null,
    password: null
  },
  reducers: {
    login(state, action) {
      state.token = action.payload.token;
      state.email = action.payload.email;
      state.password = action.payload.password
    },
    logout(state) {
      state.token = null;
      state.email = null
      state.password = null
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
