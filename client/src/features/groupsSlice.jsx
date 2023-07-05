import { createAsyncThunk, createSlice } from "@reduxjs/toolkit" // , createReducer

export const fetchGroups = createAsyncThunk('groups/fetchGroups', () => {
  return fetch('/groups')
  .then(r => r.json())
  .then(groups => groups)
})


const groupsSlice = createSlice({
  name: "groups",
  initialState: {
    entities: [], // groups arr
    status: 'idle', // loading state
  },
  reducers: {
    deleteMessage(state, action){
      return {
        ...state,
        value: {...state.value, messages: state.value.messages.filter(msg => msg.id !== action.payload)},
      }
    },
  },
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

export const selectGroups = state => {
  const groups = state.groups.entities
  return groups && !groups.errors ? groups : null
}

// export const selectGroup = state => {
//   const group = state.groups.entities.filter(g => {
//     g.id === action.payload
//   })
//   return group && !group.errors ? group : null
// }

export const selectErrors = state => {
  const groups = state.groups.entities
  return groups && groups.errors ? groups.errors : []
}

export const { deleteMessage } = groupsSlice.actions

export default groupsSlice.reducer