import { createSlice } from "@reduxjs/toolkit"

export const userSlice = createSlice({
  name: "list",
  initialState: {
    listuser: [],
  },
  reducers: {
    adduser: (state, action) => {
      const { username } = action.payload;
      state.listuser.push(username)
      console.log(state.listuser)
    },
  },
})

export const adduser = userSlice.actions.login

export const listofuser = state => state.list.listuser;

export default userSlice.reducer