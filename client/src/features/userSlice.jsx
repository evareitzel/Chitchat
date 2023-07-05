import { createAsyncThunk, createSlice, createReducer } from "@reduxjs/toolkit"

export const fetchUser = createAsyncThunk('user/fetchUser', () =>
  fetch('/me').then(r => (r.ok ? r.json() : null))
)

export const userLogout = createAsyncThunk('user/logout', () =>
  fetch('/logout', { method: 'DELETE' })
)

export const userLogin = createAsyncThunk('user/login', (user) =>
  fetch('/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  }).then(r => r.json())
)

export const userSignup = createAsyncThunk('user/signup', (userInput) => 
    fetch('/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userInput),
    })
    .then(r => r.json())
    .then(newUser => newUser)
  )

export const deleteUser = createAsyncThunk('user/delete', () =>
  fetch('/me', {
    method: 'DELETE',
  })
)

// FROM REDUX TOOLKIT DOCS
export const messagesReducer = createReducer([], builder => {
  builder
  .addCase('ADD_MESSAGE', (state, action) => {
    state.push(action.payload)
  })
  // .addCase('UPDATE_MESSAGE', (state, action) => {})
  .addCase('REMOVE_MESSAGE', (state, action) => {
    console.log(state, action)
    // console.log('REMOVE_MESSAGE in userSlice!') // not logging
    // debugger // never gets hit
    return state.filter((id, i) => 
    i.id !== action.payload.id)

    // return state.filter((message, i) => i !== action.payload.index)
  })
  // .addCase('', (state, action) => {})
  // .addCase('', (state, action) => {})
})

// END REDUX TOOLKIT DOCS

const userSlice = createSlice({
  name: "user",
  initialState: {
    value: null, // obj of @current_user
  },
  reducers: {
    // addMessage(state, action) {
    //   return {
    //     ...state,
    //     value: {...state.value, messages: [...state.value.messages, action.payload]},
    //   }
    // },

  // addGroup(state, action) {},
  //   deleteMessage(state, action){
  //     return {
  //       ...state,
  //       value: {...state.value, messages: state.value.messages.filter(m => m.id !== action.payload)},
  //     }
  //   },
  },

  // use the 'builder callback' notation
  extraReducers: { 
    [fetchUser.fulfilled](state, action) {
      state.value = action.payload
    },
    [userLogin.fulfilled](state, action) {
      state.value = action.payload
    },
    [userLogout.fulfilled](state, action) { // axn not used?
      state.value = null
    },
    [userSignup.fulfilled](state, action) {
      state.value = action.payload
    },
    [deleteUser.fulfilled](state) {
      state.value = null
    }
  },
})

export const selectUser = state => {
  const user = state.user.value
  return user && !user.errors ? user : null
}

export const selectErrors = state => {
  const user = state.user.value
  return user && user.errors ? user.errors : []
}

export const { ADD_MESSAGE, REMOVE_MESSAGE } = userSlice.actions

export default userSlice.reducer
