import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
  loading: false,
  entities: [],
  errors: [], // error: '', 
}

export const fetchMessages = createAsyncThunk('messages/fetchMessages', () => {
  return fetch('/messages')
  .then(r => r.json())
})

// POST fetch
export const messageCreate =
createAsyncThunk('messages/create', (message) => {
  fetch('/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(message)
  })
  .then(r => r.json())
  .then(m => console.log(m)) // resp comes after createMessage pending & fulfilled run - FIX!!!!!!!!!!
})

const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    MESSAGE_ADDED: (state, action) => {
      return {
        ...state,
        entities: [...state.entities, action.payload]
      }
    },
    deleteMessage: (state, action) => {
      state.entities = state.entities.filter(message => message.id !== action.payload)
      return {
        ...state,
      value: {...state.value, entities: state.value.entities.filter(message => message.id !== action.payload)},
      }
    },
  },
  extraReducers: (builder) => {
    builder
        .addCase(fetchMessages.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchMessages.fulfilled, (state, action) => {
        state.loading = false
        state.entities = action.payload // fetch res
        state.error = '' // state.errors = []
      })
      .addCase(fetchMessages.rejected, (state, action) => {
        state.loading = false
        state.entities = []
        state.error = action.error.message // state.errors = [ action.error.messages ] // action.errors
      })
      .addCase(messageCreate.pending, (state) => {
        state.loading = true
      })
      .addCase(messageCreate.fulfilled, (state, action) => {
        console.log('from messageCreate fulfilled: ')
        console.log(action)
        
        state.entities = [...state.entities, action.payload] // fetch resp
        state.errors = [] // state.error = ''
      })
  },
})

// NOT CONFIRMED TO WORK
export const selectErrors = state => {
  const messages = state.messages.entities
  return messages && messages.errors ? messages.errors : [] // return messages && !messages.errors ? messages : null
}

export const { deleteMessage, MESSAGE_ADDED } = messagesSlice.actions

export default messagesSlice.reducer



// const MESSAGE_ADDED = 'MESSAGE_ADDED'
// function addNewMessage(newMessage) {


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

// const reducer = (state = initialState, action) => {
//   switch(action.type) {
//     case MESSAGE_ADDED:
//       return {
//         ...state,
//         state.messages: ...state.messages.push(action.payload)
//       }
//   }
// }




    // addMessage(state, action) {
    //   return {
    //     ...state, messages: [state.messages.messages.push(action.payload)]
    //     // messages: [...state.messages.messages, action.payload]
    //   }
    // },

    // addMessage: (state, action) =>  {
    //   state.messages.messages.push(action.payload)
    // },
    // MESSAGE_ADDED: (state, action) => {
    //   state.messages.push(action.payload)
    // },




// use action type to make axn creator
// function addNewMessage() {
  // export const addNewMessage = () => {
  //   return {
  //     type: MESSAGE_ADDED,
  //     // payload: newMessage,
  //   }
  // }
  
  // addMessage = (newMessage) => {
  //   fetch('/messages', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(newMessage),
  //   }).then(r => {
  //     if (r.ok) {
  //       r.json()
  //         .then((message) => message)
  //     } else {
  //       r.json().then(err => setErrors(err.error))
  //     }
  //   })
  // }
  