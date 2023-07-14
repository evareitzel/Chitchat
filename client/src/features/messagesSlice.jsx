import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
// import { messageAPI } from ''./...' // ???

const initialState = {
  loading: false,
  entities: [],
  errors: [],
}

//////////////////////////////
export const fetchMessages = createAsyncThunk('messages/fetchMessages', () => {
  return fetch('/messages')
  .then(r => r.json())
})

// POST fetch
// export const messageCreate =
// createAsyncThunk('messages/create', (message) => {
//   fetch('/messages', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(message),
//   })
//   .then(r => r.json())
//   // .then(m => console.log(m)) // resp comes after createMessage pending & fulfilled run - FIX!!!!!!!!!!
// })


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
  console.log(res)

  return res // sends a promise to messageUpdate.fulfilled (not undefined)
})


  // export const messageUpdate = createAsyncThunk('messages/update', (updatedMessage) => {  
  //   fetch(`/messages/${updatedMessage.id}`, {
  //     method: 'PATCH',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       text: updatedMessage.text // ,
  //       // time: updatedMessage.time // FIX so message stays in place (keep original time)
  //     })
  //   })
  //   .then(r => r.json())
  //   // returning after updateMessage.fulfilled gets hit (HOW??)
  //   })  

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
      .addCase(messageCreate.fulfilled, (state, action) => {
        // console.log('from messageCreate fulfilled: ')
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

      // PATCH MESSAGE
      .addCase(messageUpdate.pending, (state) => { // WORKS
        state.loading = true
        // console.log('messageUpdate.loading hit!')
      })
      .addCase(messageUpdate.fulfilled, (state, action) => {
        state.loading = false // fetch res // state.entities = [...state.entities, action.payload]
        console.log('from messageUpdate.fulfilled: ')
        console.log(action.payload) // undefined
      })
      .addCase(messageUpdate.rejected, (state, action) => {
        console.log('messageUpdate.rejected hit!') // not triggering (empty str input)
        state.loading = false
        state.errors = action.payload
      })
  },
})

// NOT CONFIRMED TO WORK
export const selectErrors = state => {
  const messages = state.messages.entities
  return messages && messages.errors ? messages.errors : [] // return messages && !messages.errors ? messages : null
}

export default messagesSlice.reducer