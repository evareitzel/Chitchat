import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

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
  // .then(u => console.log(u))
)

// export const userSignup
//// export const userUpdate
//// export const deleteUser

const userSlice = createSlice({
  name: "user",
  initialState: {
    value: null, // obj of @current_user
  },
  reducers: {
  },
  extraReducers: {
    [fetchUser.fulfilled](state, action) {
      state.value = action.payload
    },
    [userLogin.fulfilled](state, action) {
      state.value = action.payload
    },
    [userLogout.fulfilled](state, action) {
      state.value = null
    }
    // [userSignup.fulfilled](state, action) {},
    // [userUpdate.fulfilled](state, action) {},
    // [deleteUser.fulfilled](state) {}
  },
})

export const selectUser = state => {
  const user = state.user.value
  return user && !user.errors ? user : null
  // return user ? user : null
}

// export const selectErrors = state => {}

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