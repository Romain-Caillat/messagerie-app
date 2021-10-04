import { createSlice } from "@reduxjs/toolkit"

export const chatSlice = createSlice({
  name: "chat",
  initialState: {
    listmessage: ["start"],
  },
  reducers: {
    addmessage: (state, action) => {
        var { newmessage } = action.payload;
        console.log(newmessage)
        if (newmessage == null) {
          newmessage = "pas def"
        }
          console.log(newmessage)
        state.listmessage = [...state.listmessage, newmessage]
        console.log(state.listmessage)
    },
  },
})

export const addmessage = chatSlice.actions.addmessage

export default chatSlice.reducer