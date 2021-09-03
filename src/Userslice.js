import { createSlice } from "@reduxjs/toolkit"

export const userSlice = createSlice({
  name: "user",
  initialState: {
    username: "",
    password: "",
  },
  reducers: {
    login: (state, action) => {
      const { username, password } = action.payload;
      state.username = username
      state.password = password
      console.log(state.username)
    },
  },
})
export const login = userSlice.actions.login

export default userSlice.reducer