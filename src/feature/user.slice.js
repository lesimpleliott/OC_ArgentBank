import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    token: null,
    isConnected: null,
    email: null,
    firstName: null,
    lastName: null,
    userName: null,
  },
  reducers: {
    setToken: (state, { payload }) => {
      state.token = payload;
      state.isConnected = true;
    },
    setUser: (state, { payload }) => {
      state.email = payload.email;
      state.firstName = payload.firstName;
      state.lastName = payload.lastName;
      state.userName = payload.userName;
      state.id = payload.id;
    },
    editUsername: (state, { payload }) => {
      state.userName = payload;
    },
    logout: (state) => {
      state.token = null;
      state.isConnected = false;
      state.email = null;
      state.firstName = null;
      state.lastName = null;
      state.userName = null;
      state.id = null;
    },
  },
});

export const { setToken, setUser, editUsername, logout } = userSlice.actions;
export default userSlice.reducer;
