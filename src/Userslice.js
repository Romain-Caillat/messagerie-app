import { createSlice } from "@reduxjs/toolkit"

export const userSlice = createSlice({
  name: "user",
  initialState: {
    username: "",
    password: "",
  },
  reducers: {
    login: (state, inputuser, inputpassword) => {
        state.username = inputuser
        state.password = inputpassword
    },
  },
})
export const login = userSlice.actions

export default userSlice.reducer