import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
  loading: false,
  entities: [],
  errors: [],
}

export const fetchMessages = createAsyncThunk('messages/fetchMessages', () => {
  return fetch('/messages')
    .then(r => r.json())
})

export const messageCreate =
  createAsyncThunk('messages/create', async (message) => {
    const res = await fetch('/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(message),
    })
    return res // resp comes after createMessage pending & fulfilled run - FIX!!!!!!!!!!

    // const data = await res.data
    // return data
  })

export const messageUpdate = createAsyncThunk('messages/update', async (updatedMessage) => {
  const res = await fetch(`/messages/${updatedMessage.id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      text: updatedMessage.text,
      // time: updatedMessage.text, // not wkg
    })
  })
  console.log('res: ')
  console.log(res) // promise

  // add logic for builders if needed
  // res.text ? messageUpdate.fulfilled(res) : messageUpdate.loading(res) // messageUpdate.rejected

  // return res // res.data // sends a promise to messageUpdate.fulfilled (not undefined)
})

// DELETE fetch
export const messageDestroy = createAsyncThunk('messages/destroy', (id) => { // async (id) => 
  // console.log(id)
  fetch(`/messages/${id}`, {
    method: 'DELETE',
    // headers: {
    //   'Content-Type': 'application/json',
    // },
  }) // return id for fulfilled builders
  .then(r => r.json())
  // .then(r => console.log(r))
})

const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // GET MESSAGES
      .addCase(fetchMessages.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchMessages.fulfilled, (state, action) => {
        state.loading = false
        state.entities = action.payload // fetch res - undefined
        // state.errors = []
      })
      // POST MESSAGE
      .addCase(messageCreate.pending, (state) => {
        state.loading = true
      })
      .addCase(messageCreate.fulfilled, (state, action) => { // Not working correctly - FIX
        // console.log('messageCreate.fulfilled - action.payload: ')
        // console.log(action)
        state.loading = false // fetch res // state.entities = [...state.entities, action.payload]
        state.entities = state.entities.push(action.payload)
        state.errors = []
      })
      .addCase(messageCreate.rejected, (state, action) => {
        console.log('messageCreate.rejected hit!')
        state.loading = false
        state.errors = action.payload
      })
      // PATCH MESSAGE/:id
      .addCase(messageUpdate.pending, (state) => {
        state.loading = true
      })
      .addCase(messageUpdate.fulfilled, (state, action) => {
        state.loading = false
        state.entities = state.entities.push(action.payload) // fetch res // state.entities = [...state.entities, action.payload]
        console.log('messageUpdate.fulfilled - action.payload: ')
        console.log(action.payload) // undefined
      })
      .addCase(messageUpdate.rejected, (state, action) => { // not triggering with empty str input
        state.loading = false
        state.errors = action.payload
      })
      // DELETE MESSAGE/:id
      .addCase(messageDestroy.fulfilled, (state, action) => {
        console.log(action.payload) // returns a promise, not json obj
        state.loading = false
        state.entities = state.entities.filter(message => message.id !== action.payload.id)
        // state.errors = []
      })
  },
})

// NOT CONFIRMED TO WORK
export const selectErrors = state => {
  const messages = state.messages.entities
  return messages && messages.errors ? messages.errors : [] // return messages && !messages.errors ? messages : null
}

export default messagesSlice.reducer