import { createAsyncThunk, createReducer, createSlice } from "@reduxjs/toolkit"

export const fetchGroups = createAsyncThunk('groups/fetchGroups', () => {
  return fetch('/groups')
  .then(r => r.json())
  .then(groups => groups)
})

const groupsSlice = createSlice({
  name: 'groups',
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

export const selectErrors = state => {
  const groups = state.groups.entities
  return groups && groups.errors ? groups.errors : []
}

export default groupsSlice.reducer