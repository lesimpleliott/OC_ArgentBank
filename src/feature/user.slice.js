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
      state.email = payload[0];
      state.firstName = payload[1];
      state.lastName = payload[2];
      state.userName = payload[3];
    },
  },
});

export const { setToken, setUser } = userSlice.actions;
export default userSlice.reducer;
