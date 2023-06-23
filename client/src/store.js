// (2 - Reviews) import and use reviewsSlice reducer in ./src/store.js

import { createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
// import rootReducer from "./reducers"

const store = createStore(
    // rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
)


// import { configureStore } from "@reduxjs/toolkit";

// import messagesReducer from "./features/messages/messagesSlice"

// const store = configureStore({
//   reducer: {
//     messages: messagesReducer,
//   },
// });

export default store