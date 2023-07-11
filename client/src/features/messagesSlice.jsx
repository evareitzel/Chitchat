import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
  loading: false,
  messages: [], // entities (make consistent throughout messagesSlice and in app)
  error: '', // errors: [],
}

export const fetchMessages = createAsyncThunk('messages/fetchMessages', () => {
  return fetch('/messages')
  .then(r => r.json())
  .then(messages => messages)
})

// POST fetch
// export const postMessage =
// createAsyncThunk('messages/add', (newMessage) => {
//   fetch('/messages', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: newMessage,
//   })
//   .then(r => r.json())
//   .then(newMessage => newMessage)
// })
// // }).then(r => {
// //   if (r.ok) {
// //     r.json()
// //     .then(newMessage => newMessage)
// //   } else {
// //     r.json().then(err => err.error)
// //   }
// // })

// DELETE fetch
// export const messageDelete = createAsyncThunk("message/delete", (id) =>
//   fetch(`/messages/${id}`, {
//     method: "DELETE"
//   })
// )

const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    addMessage: (state, action) =>  {
      state.messages.messages.push(action.payload)
    },
    deleteMessage: (state, action) => {
      state.messages = state.messages.filter(message => message.id !== action.payload)
      return {
        ...state,
      value: {...state.value, messages: state.value.messages.filter(message => message.id !== action.payload)},
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMessages.pending, (state) => {
      state.loading = true
    })
    builder.addCase(fetchMessages.fulfilled, (state, action) => {
      state.loading = false
      state.messages = action.payload // fetch res
      state.error = '' // state.errors = []
    })
    builder.addCase(fetchMessages.rejected, (state, action) => {
      state.loading = false
      state.messages = []
      state.error = action.error.message // state.errors = [ action.error.messages ] 
    })
  },
})

// NOT CONFIRMED TO WORK
export const selectErrors = state => {
  const messages = state.messages.messages
  return messages && messages.errors ? messages.errors : [] // return messages && !messages.errors ? messages : null
}

export const { ADD_MESSAGE, addMessage, deleteMessage } = messagesSlice.actions

export default messagesSlice.reducer