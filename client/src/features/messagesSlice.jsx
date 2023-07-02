import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchMessages = createAsyncThunk('/messages/fetchMessages', () => {
  return fetch('/messages')
  .then(r => r.json())
  .then(messages => messages)
})

// export default 