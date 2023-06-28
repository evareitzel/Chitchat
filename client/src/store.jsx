import { configureStore } from "@reduxjs/toolkit"

import userReducer from './features/userSlice'
import groupsReducer from './features/groupSlice'

const store = configureStore({
  reducer: {
    user: userReducer,
    groups: groupsReducer
  },
  middleware: (getDefaultMiddleware) => 
  getDefaultMiddleware({

  }),
})

export default store