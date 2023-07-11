// import { createSlice } from "@reduxjs/toolkit" // DELETED createAsyncThunk, createReducer, 

// const initialState = {
//   groups: [],
// }

// const groupsSlice = createSlice({
//   name: "groups",
//   initialState: {
//     entities: [], // groups arr // groups: 
//     status: 'idle', // loading state
//   },
//   reducers: {
//     deleteMessage(state, action){ // state = initialState, 
//       return {
//         ...state,
//         // groups: [...state.groups, action.payload]
//         value: {...state.value, messages: state.value.messages.filter(msg => msg.id !== action.payload)},
//       }
//     },
//   },
//   // extraReducers: {
//   //   [fetchGroups.pending](state) {
//   //     state.status = 'loading'
//   //   },
//   //   [fetchGroups.fulfilled](state, action) {
//   //     state.entities = action.payload
//   //     state.status = 'idle'
//   //   },
//   // },
// })







// export const fetchGroups = createAsyncThunk('groups/fetchGroups', () => {
//   return fetch('/groups')
//   .then(r => r.json())
//   .then(groups => groups)
// })


// // FROM REDUX TOOLKIT DOCS
// export const messagesReducer = createReducer([], builder => {
//   builder
//   // .addCase('ADD_MESSAGE', (state, action) => {
//   //   state.push(action.payload)
//   // })
//   // .addCase('UPDATE_MESSAGE', (state, action) => {})
//   .addCase('REMOVE_MESSAGE', (state, action) => {
//     // debugger // never gets hit
//     // console.log(state)

//     // debugger
//     return state.filter((m) => 
//     // debugger
//     m.id !== action.payload)
//   })
//   // .addCase('', (state, action) => {})
//   // .addCase('', (state, action) => {})
// })

// // END REDUX TOOLKIT DOCS



// export const selectGroups = state => {
//   const groups = state.groups.entities
//   return groups && !groups.errors ? groups : null
// }

// // export const selectGroup = state => {
// //   const group = state.groups.entities.filter(g => {
// //     g.id === action.payload
// //   })
// //   return group && !group.errors ? group : null
// // }

// export const selectErrors = state => {
//   const groups = state.groups.entities
//   return groups && groups.errors ? groups.errors : []
// }

// export const { deleteMessage, REMOVE_MESSAGE } = groupsSlice.actions

// export default groupsSlice.reducer


////////////////////////////////////////
import { createAsyncThunk, createReducer, createSlice } from "@reduxjs/toolkit" // , createReducer

export const fetchGroups = createAsyncThunk('groups/fetchGroups', () => {
  return fetch('/groups')
  .then(r => r.json())
  .then(groups => groups)
})


// FROM REDUX TOOLKIT DOCS
export const messagesReducer = createReducer([], builder => {
  builder
  .addCase('ADD_MESSAGE', (state, action) => {
    state.messages.entities.push(action.payload)
  })
  // .addCase('UPDATE_MESSAGE', (state, action) => {})
  .addCase('REMOVE_MESSAGE', (state, action) => {
    // debugger // never gets hit
    // console.log(state)

    // debugger
    return state.filter((m) => 
    // debugger
    m.id !== action.payload)
  })
  // .addCase('', (state, action) => {})
  // .addCase('', (state, action) => {})
})

// END REDUX TOOLKIT DOCS


const groupsSlice = createSlice({
  name: 'groups',
  initialState: {
    entities: [], // groups arr // groups: 
    status: 'idle', // loading state
  },
  reducers: {
    deleteMessage(state, action){ // state = initialState, 
      return {
        ...state,
        // groups: [...state.groups, action.payload]
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

// export const selectGroups = state => {
//   const groups = state.groups.entities
//   return groups && !groups.errors ? groups : null
// }

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

export const { ADD_MESSAGE, deleteMessage, REMOVE_MESSAGE } = groupsSlice.actions

export default groupsSlice.reducer