import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const fetchUser = createAsyncThunk('user/fetchUser', () =>
  fetch('/me').then(r => (r.ok ? r.json() : []))
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

export const userSignup = createAsyncThunk('user/signup', userInput => 
    fetch('/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userInput)
    })
    .then(r => r.json())
  )

//// export const userUpdate
export const deleteUser = createAsyncThunk('user/delete', () =>
  fetch('/me', {
    method: 'DELETE',
  })
)

const userSlice = createSlice({
  name: "user",
  initialState: {
    value: null, // obj of @current_user
  },
  reducers: {},
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
    // [userUpdate.fulfilled](state, action) {},
    [deleteUser.fulfilled](state) {
      state.value = null
    }
  },
})

export const selectUser = state => {
  const user = state.user.value
  return user && !user.errors ? user : null
  // return user ? user : null
}

export const selectErrors = state => {
  const user = state.user.value
  return user && user.errors ? user.errors : []
}

// export const {} = userSlice.actions

export default userSlice.reducer



  // extraReducers:  (builder => {
    // builder
    // [fetchUser.fulfilled](state, action) {
    //   .fetchUser.fulfilled,(state, action) {

    //   state.value = action.payload
    // },
    // [userLogin.fulfilled](state, action) {
    //   state.value = action.payload
    // },

  // },
