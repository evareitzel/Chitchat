import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
  loading: false,
  entities: [],
  errors: [],
}

export const fetchMessages = createAsyncThunk('messages/fetchMessages', () => (
  fetch('/messages')
    .then(r => r.json())
))

export const messageCreate =
  createAsyncThunk('messages/create', (message) => {
    return fetch('/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(message),
    })
      .then(r => r.json())
  })

export const messageUpdate = createAsyncThunk('messages/update', (updatedMessage) => {
  return fetch(`/messages/${updatedMessage.id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      text: updatedMessage.text,
    })
  })
    .then(r => r.json())
})

export const messageDestroy = createAsyncThunk('messages/destroy', async(id) => {
  const res = await fetch(`/messages/${id}`, {
    method: 'DELETE',
  })
  const message = await res.json()
  return message
})

const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMessages.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchMessages.fulfilled, (state, action) => {
        state.loading = false
        state.entities = action.payload // fetch resp
      })
      .addCase(messageCreate.pending, (state) => {
        state.loading = true
      })
      .addCase(messageCreate.fulfilled, (state, action) => {
        state.loading = false
        state.entities = [...state.entities, action.payload]
      })
      .addCase(messageCreate.rejected, (state, action) => { // breaks app
        console.log('messageCreate.rejected hit!') //
        state.loading = false
        state.errors = action.payload
      })
      .addCase(messageUpdate.pending, (state) => {
        state.loading = true
      })
      .addCase(messageUpdate.fulfilled, (state, action) => {
        state.loading = false
        const index = state.entities.findIndex(message => message.id === action.payload.id)
        state.entities[index] = action.payload
      })
      .addCase(messageUpdate.rejected, (state, action) => { // breaking app with empty str input
        state.loading = false
        state.errors = action.payload
      })
      .addCase(messageDestroy.pending, (state) => {
        state.loading = true
      })
      .addCase(messageDestroy.fulfilled, (state, action) => {
        state.loading = false
        state.entities = state.entities.filter(message => message.id !== action.payload.id)
      })
  },
})

// NOT CONFIRMED TO WORK 
export const selectErrors = (state) => {
  const messages = state.messages.entities
  return messages && !messages.errors ? messages : null
  // return messages && messages.errors ? messages.errors : [] 

}

// export const selectUser = (state) => {
//   const user = state.user.value
//   return user && !user.errors ? user : null
// }

// export const selectErrors = (state) => {
//   const user = state.user.value
//   return user && user.errors ? user.errors : []
// }

export default messagesSlice.reducer