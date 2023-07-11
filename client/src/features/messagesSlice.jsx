import { createAsyncThunk, createSlice } from "@reduxjs/toolkit" // createReducer

const initialState = {
  loading: false,
  messages: [], // entities?
  error: '',
}

// generates pending, fulfilled, and rejected action types
  // arg 1 - action type
  // arg 2 - async function (returns a promise)
  // createAsyncThunk dispatches the life cycle methods of a promise as actions
export const fetchMessages = createAsyncThunk('messages/fetchMessages', () => {
  return fetch('/messages')
  .then(r => r.json())
  .then(messages => messages) // .data.map(msg => msg.id)
})

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
      state.messages.messages.push(action.payload) // edit - use fetch res obj // id: Date.now(),
    },
    deleteMessage: (state, action) => {
      state.messages = state.messages.filter(message => message.id !== action.payload) // make sure an id gets passed in here
      // return {
      //   ...state,
      // value: {...state.value, messages: state.value.messages.filter(msg => msg.id !== action.payload)},
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMessages.pending, (state) => {
      state.loading = true
    })
    builder.addCase(fetchMessages.fulfilled, (state, action) => {
      state.loading = false
      state.messages = action.payload // res
      state.error = ''
      // state.entities.push(action.payload)
      // state.value = action.payload
    })
    builder.addCase(fetchMessages.rejected, (state, action) => {
      state.loading = false
      state.messages = []
      state.error = action.error.message    
    })
  },


  ////
  // export const messagesReducer = createReducer([], builder => {
  //   builder
  //   .addCase('ADD_MESSAGE', (state, action) => {
  //     debugger
  //     state.messages.entities.push(action.payload)
  //   })
  //   .addCase('REMOVE_MESSAGE', (state, action) => {
  //     return state.filter((message, i) => i !== action.payload.index)
  //   })
  //   // .addCase('', (state, action) => {})
  //   // .addCase('', (state, action) => {})
  //   // .addCase('', (state, action) => {})
  // })

  ////

  // extraReducers: {
  //   [fetchMessages.pending](state) {
  //     state.status = 'loading'
  //   },
  //   [fetchMessages.fulfilled](state, action) {
  //     state.entities = action.payload
  //     state.status = 'idle'
  //   },
  // builder.addCase(fetchMessages.rejected, (state, action) => {
  // },
})


// export const selectMessages = state => {
//   const messages = state.messages.entities
//   return messages && !messages.errors ? messages : null
// }

// // add POST fetch
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
  
  // END REDUX TOOLKIT DOCS

// NOT CONFIRMED TO BE WKG
export const selectErrors = state => {
  const messages = state.messages.entities
  return messages && !messages.errors ? messages : null
  // return messages && messages.errors ? messages.errors : []
}

export const { ADD_MESSAGE, addMessage, deleteMessage } = messagesSlice.actions

export default messagesSlice.reducer



//////////

  // extraReducers: {
  //   // handle async actions: pending, fulfilled, rejected (for errors)
  //   [fetchMessages.fulfilled](state, action) {
  //     state.entities = action.payload;
    // },    
  // },

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
  

// export const { ADD_MESSAGE, REMOVE_MESSAGE } = messagesSlice.actions




////////////////////////////////////////

// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit" //, createReducer }

// export const fetchMessages = createAsyncThunk('/messages/fetchMessages', () => {
//   return fetch('/messages')
//   .then(r => r.json())
//   .then(messages => messages)
// })

// export const fetchMessage = createAsyncThunk('/messages/fetchMessage', (id) => {
//   return fetch(`/messages/${id}`)
//   .then(r => r.json())
//   .then(message => console.log(message))
// })

// export const messageDelete = createAsyncThunk("message/delete", (id) =>
//   fetch(`/messages/${id}`, {
//     method: "DELETE"
//   })
// )

//   // // FROM REDUX TOOLKIT DOCS
//   // export const messagesReducer = createReducer([], builder => {
//   //   builder
//   //   .addCase('ADD_MESSAGE', (state, action) => {
//   //     state.push(action.payload)
//   //   })
//   //   .addCase('REMOVE_MESSAGE', (state, action) => {
//   //     return state.filter((message, i) => i !== action.payload.index)
//   //   })
//   //   // .addCase('', (state, action) => {})
//   //   // .addCase('', (state, action) => {})
//   //   // .addCase('', (state, action) => {})
//   // })
  
//   // // END REDUX TOOLKIT DOCS
  

// const messagesSlice = createSlice({
//     name: "messages",
//     initialState: {
//       entities: [], // array of messages
//       status: "idle", // loading state
//       error: null,
//     },
//     reducers: {},
//     extraReducers: {
//       // handle async actions: pending, fulfilled, rejected (for errors)
//       [fetchMessages.fulfilled](state, action) {
//         state.entities = action.payload;
//       },    
//     },
// })

// export const selectErrors = state => {
//   const messages = state.messages.entities
//   return messages && !messages.errors ? messages : null
// }

// // export const selectErrors = state => {
// //   const groups = state.groups.entities
// //   return groups && groups.errors ? groups.errors : []
// // }


// export const { ADD_MESSAGE, REMOVE_MESSAGE } = messagesSlice.actions

// export default messagesSlice.reducer


/////////////////////////////////////////////////////
// GET fetch
// export const fetchMessages = (() => {
//   return fetch('/messages')
//   .then(r => r.json())
//   .then(messages => messages)
// })

// const initialState = {
//   messages: [],
// }



/////////////////////////////////////////////////////////
  // initialState: {
  //   messages: [], // entities?
  //   status: 'idle,' // loading state (sample app)
  // },
    // status: "idle", // loading state
    // error: null,