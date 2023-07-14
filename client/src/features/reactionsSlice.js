import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
  loading: false,
  entities: [],
  errors: [],
}


export const fetchReactions = createAsyncThunk('reactions/fetchReactions', () => {
  return fetch('/reactions')
    .then(r => r.json())
})

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
      // GET REACTIONS
      .addCase(fetchReactions.pending, (state) => {
        state.loading = true
      })
      // .addCase(fetchReactions.fulfilled,  (state, action)

      // POST REACTION
      .addCase(reactionCreate.fulfilled, (state, action) => {
        state.loading = false
        state.entities = [...state.entities, action.payload]
      })
  }
})

export default reactionsSlice.reducer