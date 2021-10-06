import { createSlice } from "@reduxjs/toolkit"

export const chatSlice = createSlice({
  name: "chat",
  initialState: {
    listmessage: ["start"],
  },
  reducers: {
    addmessage: (state, action) => {
        var { message } = action.payload;
        console.log(message)
        if (message == null) {
          message = "pas def"
        }
          console.log(message)
        state.listmessage = [...state.listmessage, message]
        console.log(state.listmessage)
    },
    deletemessage: (state, action) => {
        state.listmessage = [...state.listmessage]
        for (let i = 0; i < 20; i++)
            state.listmessage.splice(i)
            console.log(state.listmessage)
    }
  },
})

export const addmessage = chatSlice.actions.addmessage
export const deletemessage = chatSlice.actions.deletemessage

export default chatSlice.reducer