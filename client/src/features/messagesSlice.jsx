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
  // console.log('messageUpdate input obj: ')
  // console.log(updatedMessage)
  return fetch(`/messages/${updatedMessage.id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      text: updatedMessage.text,
      // time: updatedMessage.text, // not wkg
    })
  })
  .then(r => r.json())
  .then(r => console.log(r))

  // console.log('res: ')
  // console.log(res.json()) // promise
  // return res

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
  // .catch(err => console.log(err)) 
})

const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    // messageAdded(state, action) {
    //   state.entities = [...state.entities, action.payload]
    // },
    // messageUpdated(state, action) {
    //   const index = state.messages.findIndex(message => message.id === action.payload.id) // could use filter
    //   state.activities[index] = action.payload
    // },
    messageDeleted(state, action) {
      state.messages = state.messages.filter(message => message.id !== action.payload) // input must be an id
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMessages.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchMessages.fulfilled, (state, action) => {
        // console.log(action.payload)
        state.loading = false
        state.entities = action.payload // fetch res - undefined
      })
      .addCase(messageCreate.pending, (state) => {
        state.loading = true
      })
      .addCase(messageCreate.fulfilled, (state, action) => {
        state.loading = false
        state.entities = [...state.entities, action.payload]
      })
      .addCase(messageCreate.rejected, (state, action) => {
        console.log('messageCreate.rejected hit!') //
        state.loading = false
        state.errors = action.payload
      })
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
      .addCase(messageDestroy.fulfilled, (state, action) => {
        console.log(action.payload) // returns a promise, not json obj
        
        state.entities = state.entities.filter(message => message.id !== action.payload.id)
        state.loading = false
      })
  },
})

// NOT CONFIRMED TO WORK 
export const selectErrors = (state) => {
  const messages = state.messages.entities
  return messages && !messages.errors ? messages : null // breaking because getting undefined resp
  // return messages && messages.errors ? messages.errors : [] 

}

// export const selectUser = (state) => {
//   const user = state.user.value
//   return user && !user.errors ? user : null
// }

// export const selectErrors = (state) => {
//   const user = state.user.value
//   return user && user.errors ? user.errors : []
// }01.

export const { messageRemoved } = messagesSlice.actions // messageAdded, messageUpdated, 

export default messagesSlice.reducer










////////// DRAFT 2.0
// import { createAsyncThunk, createSlice, createAction, createReducer } from "@reduxjs/toolkit"

// const initialState = {
//   loading: false,
//   entities: [],
//   errors: [],
// }
// const resetAction = createAction('reset-last-tracked-loading-state')

// function isPendingAction(action) {
//   return action.type.endsWith('/pending')
// }

// export const fetchMessages = createAsyncThunk('messages/fetchMessages', () => (
//   fetch('/messages')
//   .then(r => r.json())
// ))

// export const messageCreate =
//   createAsyncThunk('messages/create', async (message) => {
//     console.log('messageCreate input obj: ')
//     console.log(message)
//     const res = await fetch('/messages', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(message),
//     })
//     console.log(res.json())
//     // console.log(res.json()[[PromiseResult]])
//     return res // res.json()
    
//     // resp comes after createMessage pending & fulfilled run - FIX!!!!!!!!!!

//     // const data = await res.data
//     // return data
//   })

// export const messageUpdate = createAsyncThunk('messages/update', async (updatedMessage) => {
//   console.log('messageUpdate input obj: ')
//   console.log(updatedMessage)

//   const res = await fetch(`/messages/${updatedMessage.id}`, {
//     method: 'PATCH',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//       text: updatedMessage.text,
//       // time: updatedMessage.text, // not wkg
//     })
//   })
//   console.log('res: ')
//   console.log(res.json()) // promise
//   return res

//   // add logic for builders if needed
//   // res.text ? messageUpdate.fulfilled(res) : messageUpdate.loading(res) // messageUpdate.rejected

//   // return res // res.data // sends a promise to messageUpdate.fulfilled (not undefined)
// })

// // DELETE fetch
// export const messageDestroy = createAsyncThunk('messages/destroy', (id) => { // async (id) => 
//   // console.log(id)
//   fetch(`/messages/${id}`, {
//     method: 'DELETE',
//     // headers: {
//     //   'Content-Type': 'application/json',
//     // },
//   }) // return id for fulfilled builders
//   .then(r => r.json())
//   // .then(r => console.log(r))
//   // .catch(err => console.log(err)) 
// })

// export const messagesReducer = createReducer(initialState, (builder) => {
//   builder
//     .addCase(resetAction, () => initialState)
//     .addMatcher(isPendingAction, (state, action) => {
//       state[action.meta.requestId] = 'pending'
//     })
//     .addMatcher(
//       action => action.type.endsWith('/rejected'),
//       (state, action) => {
//         state[action.meta.requestId] = 'rejected'
//       }
//     )
//     .addMatcher(
//       (action) => action.type.endsWith('/fulfilled'),
//       (state, action) => {
//         state[action.meta.requestId] = 'fulfilled'
//       }
//     )
    
//     // .addMatcher(isPendingAction, (state, action) => {
//     //   state[action.meta.requestId] = 'pending'
//     // })
//     // .addMatcher(
//     //   action => action.type.endsWith('/rejected'),
//     //   (state, action) => {
//     //     state[action.meta.requestId] = 'rejected'
//     //   }
//     // )
//     // .addMatcher(
//     //   (action) => action.type.endsWith('/fulfilled'),
//     //   (state, action) => {
//     //     state[action.meta.requestId] = 'fulfilled'
//     //   }
//     // )

// })


// const messagesSlice = createSlice({
//   name: 'messages',
//   initialState,
//   reducers: {},
//   extraReducers: {},
//   // (builder) => {
//   //   builder
//   //     .addCase(fetchMessages.pending, (state) => {
//   //       state.loading = true
//   //     })
//   //     .addCase(fetchMessages.fulfilled, (state, action) => {
//   //       state.loading = false
//   //       state.entities = action.payload // fetch res - undefined
//   //     })
//   //     .addCase(messageCreate.pending, (state) => {
//   //       state.loading = true
//   //     })
//   //     .addCase(messageCreate.fulfilled, (state, action) => { // FIX - not working correctly
//   //       state.loading = false
//   //       state.entities = state.entities.push(action.payload) // fetch res
//   //       state.errors = []
//   //     })
//   //     .addCase(messageCreate.rejected, (state, action) => {
//   //       console.log('messageCreate.rejected hit!') //
//   //       state.loading = false
//   //       state.errors = action.payload
//   //     })
//   //     .addCase(messageUpdate.pending, (state) => {
//   //       state.loading = true
//   //     })
//   //     .addCase(messageUpdate.fulfilled, (state, action) => {
//   //       state.loading = false
//   //       state.entities = state.entities.push(action.payload) // fetch res // state.entities = [...state.entities, action.payload]
//   //       // console.log('messageUpdate.fulfilled - action.payload: ')
//   //       // console.log(action.payload) // undefined
//   //     })
//   //     .addCase(messageUpdate.rejected, (state, action) => { // not triggering with empty str input
//   //       state.loading = false
//   //       state.errors = action.payload
//   //     })
//   //     .addCase(messageDestroy.fulfilled, (state, action) => {
//   //       console.log(action.payload) // returns a promise, not json obj
//   //       state.loading = false
//   //       state.entities = state.entities.filter(message => message.id !== action.payload.id)
//   //     })
//   // },
// })

// // NOT CONFIRMED TO WORK 
// export const selectErrors = (state) => {
//   const messages = state.messages.entities
//   return messages && !messages.errors ? messages : null // breaking because getting undefined resp
//   // return messages && messages.errors ? messages.errors : [] 

// }

// // export const selectUser = (state) => {
// //   const user = state.user.value
// //   return user && !user.errors ? user : null
// // }

// // export const selectErrors = (state) => {
// //   const user = state.user.value
// //   return user && user.errors ? user.errors : []
// // }

// // export default messagesSlice.reducer
// export default messagesSlice
