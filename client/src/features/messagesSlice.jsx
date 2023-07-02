// import { createAsyncThunk, createSlice, createReducer } from "@reduxjs/toolkit"

// export const fetchMessages = createAsyncThunk('/messages/fetchMessages', () => {
//   return fetch('/messages')
//   .then(r => r.json())
//   .then(messages => messages)
// })

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

// export const { ADD_MESSAGE, REMOVE_MESSAGE } = userSlice.actions

// export default messagesSlice