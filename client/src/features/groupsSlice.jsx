import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const fetchGroups = createAsyncThunk('groups/fetchGroups', () => {
  return fetch('/groups')
  .then(r => r.json())
})

export const groupShow = createAsyncThunk('groups/show', (id) => {
  return fetch(`/groups/${id}`)
  .then(r => r.json())
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