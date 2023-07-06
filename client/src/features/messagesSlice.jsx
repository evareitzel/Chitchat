import { createAsyncThunk, createSlice } from "@reduxjs/toolkit" //, createReducer }

export const fetchMessages = createAsyncThunk('/messages/fetchMessages', () => {
  return fetch('/messages')
  .then(r => r.json())
  .then(messages => messages)
})

export const fetchMessage = createAsyncThunk('/messages/fetchMessage', (id) => {
  return fetch(`/messages/${id}`)
  .then(r => r.json())
  .then(message => console.log(message))
})

export const messageDelete = createAsyncThunk("message/delete", (id) =>
  fetch(`/messages/${id}`, {
    method: "DELETE"
  })
)

  // // FROM REDUX TOOLKIT DOCS
  // export const messagesReducer = createReducer([], builder => {
  //   builder
  //   .addCase('ADD_MESSAGE', (state, action) => {
  //     state.push(action.payload)
  //   })
  //   .addCase('REMOVE_MESSAGE', (state, action) => {
  //     return state.filter((message, i) => i !== action.payload.index)
  //   })
  //   // .addCase('', (state, action) => {})
  //   // .addCase('', (state, action) => {})
  //   // .addCase('', (state, action) => {})
  // })
  
  // // END REDUX TOOLKIT DOCS
  

const messagesSlice = createSlice({
    name: "messages",
    initialState: {
      entities: [], // array of messages
      status: "idle", // loading state
      error: null,
    },
    reducers: {},
    extraReducers: {
      // handle async actions: pending, fulfilled, rejected (for errors)
      [fetchMessages.fulfilled](state, action) {
        state.entities = action.payload;
      },    
    },
})

export const selectErrors = state => {
  const messages = state.messages.entities
  return messages && !messages.errors ? messages : null
}

// export const selectErrors = state => {
//   const groups = state.groups.entities
//   return groups && groups.errors ? groups.errors : []
// }


export const { ADD_MESSAGE, REMOVE_MESSAGE } = messagesSlice.actions

export default messagesSlice.reducer



