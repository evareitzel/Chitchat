import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
  loading: false,
  entities: [],
  errors: [],
}

export const reactionIndex = createAsyncThunk('reactions/reactionIndex', () => (
  fetch('/reactions')
  .then(r => r.json())
))

export const reactionCreate =
  createAsyncThunk('reactions/create', async (reaction) => {
    const res = await fetch('/reactions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(reaction),
    })
    return res
  })

const reactionsSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(reactionIndex.fulfilled, (state, action) => {
      state.loading = false
      state.entities = action.payload // why isn't this populating in state reactions entities?
    })
    .addCase(reactionCreate.fulfilled, (state, action) => {
      state.loading = false
      state.entities = [...state.entities, action.payload]
    })
  }
})

export default reactionsSlice.reducer