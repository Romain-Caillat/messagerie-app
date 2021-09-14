import { createSlice } from "@reduxjs/toolkit"

export const userSlice = createSlice({
  name: "list",
  initialState: {
    listuser: ["start"],
  },
  reducers: {
    adduser: (state, action) => {
      const { username } = action.payload;
      state.listuser = [...state.listuser, username]
      console.log(state.listuser)
    },
    deleteuser: (state, action) => {
      const { username } = action.payload;
      if (username != null) {
        console.log("username", username)
        state.listuser = [...state.listuser]
        for (let i = 0; state.listuser[i]; i++)
          if (state.listuser[i] == username) {
            state.listuser.splice(i)
            console.log(state.listuser)
          }
      }
    }
  },
})

export const adduser = userSlice.actions.adduser
export const deleteuser = userSlice.actions.deleteuser

export const listofuser = state => state.list.listuser = [...state.listuser];

export default userSlice.reducer