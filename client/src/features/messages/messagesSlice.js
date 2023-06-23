import { createSlice } from "@reduxjs/toolkit"
import { v4 as uuid } from "uuid"

const messagesSlice =
  createSlice({
    name: "messages",
    initialState: {
      entities: [],
    },
    reducers: {
      messageAdded(state, action) {
        state.entities.push({ id: uuid(), ...action.payload })
      },
      messageRemoved(state, action) {
        const index = state.entities.findIndex(m => m.id === action.payload) // confirm m (not g)
        state.entities.splice(index, 1)
      },
    },
  })

  export const { messageAdded, messageRemoved } = messagesSlice.actions

  export default messagesSlice.reducer