import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    token: null,
    connected: null,
    email: null,
    firstName: null,
    lastName: null,
    userName: null,
  },
  reducers: {
    setToken: (state, { payload }) => {
      state.token = payload;
      state.connected = true;
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
  },
});

export const { setToken, setUser } = userSlice.actions;
export default userSlice.reducer;
