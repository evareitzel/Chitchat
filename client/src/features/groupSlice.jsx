import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const fetchGroups = createAsyncThunk('groups/fetchGroups', () => {
  return fetch('/groups') // return needed?
  .then(r => r.json())
  .then(groups => groups)
})

const groupSlice = createSlice({
  name: "groups",
  initialState: {
    // value: [],
    entities: [],
    // status: 'idle',
    // error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchGroups.fulfilled](state, action) {
      // state.value = action.payload
      state.entities = action.payload
    },
  },
})

export default groupSlice.reducer