// (2 - Reviews) import and use reviewsSlice reducer in ./src/store.js

import { configureStore } from "@reduxjs/toolkit";

import messagesReducer from "./features/messages/messagesSlice"

const store = configureStore({
  reducer: {
    messages: messagesReducer,
  },
});

export default store;