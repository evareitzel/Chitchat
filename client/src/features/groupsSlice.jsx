import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const fetchGroups = createAsyncThunk('groups/fetchGroups', () => {
  return fetch('/groups') // remove return?
  .then(r => r.json())
  .then(groups => groups)
})

const groupsSlice = createSlice({
  name: "groups",
  initialState: {
    entities: [], // groups arr
    status: 'idle', // loading state
  },
  reducers: {},
  extraReducers: {
    [fetchGroups.pending](state) {
      state.status = 'loading'
    },
    [fetchGroups.fulfilled](state, action) {
      state.entities = action.payload
      state.status = 'idle'
    },
  },
})

export default groupsSlice.reducer


  // fetch('/groups').then(r => (r.ok ? r.json() : []))

  // {
  // return fetch('/groups') // return needed?
  // .then(r => r.json())
  // .then(groups => groups)
// }