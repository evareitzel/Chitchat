////////////////////////////////////////////////
package.json (v1)
{
  "name": "react-rails-api-project-template-client",
  "version": "0.1.0",
  "private": true,
  "proxy": "http://localhost:3000",
  "engines": {
    "node": "16.x"
  },
  "dependencies": {    
    "@reduxjs/toolkit": "^1.1.0",
    "react": "^17.0.2",
    "react-dom": "^17.0.2", 
    "react-redux": "^7.1.3",   
    "react-router-dom": "^6.10.0",
    "react-scripts": "4.0.3",
    "uuid": "^8.3.2"
  },
  "scripts": {
    "start": "PORT=4000 react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}


# /// physical therapy student ex

# store 
# configStore()
#  - slices
#   - dispatch routes loading fetch es
# dispatch - GET request

# - Get USER
# - ONE reducer


################################################## PKG JSON
# {
#   "name": "chitchat-react-client",
#   "version": "0.1.0",
#   "private": true,
#   "proxy": "http://localhost:3000",
#   "engines": {
#     "node": "16.x"
#   },
#   "dependencies": {
#     "@reduxjs/toolkit": "^1.9.3",
#     "axios": "^1.4.0",
#     "babel-jest": "^26.6.1",
#     "react": "^18.0.0",
#     "react-dom": "^18.0.0",
#     "react-redux": "^8.1.1",
#     "react-router-dom": "^6.10.0",
#     "react-scripts": "^5.0.1",
#     "redux": "^4.2.1",
#     "uuid": "^8.3.2"
#   },
#   "scripts": {
#     "start": "PORT=4000 react-scripts start",
#     "build": "react-scripts build",
#     "test": "react-scripts test",
#     "eject": "react-scripts eject"
#   },
#   "eslintConfig": {
#     "extends": [
#       "react-app",
#       "react-app/jest"
#     ]
#   },
#   "browserslist": {
#     "production": [
#       ">0.2%",
#       "not dead",
#       "not op_mini all"
#     ],
#     "development": [
#       "last 1 chrome version",
#       "last 1 firefox version",
#       "last 1 safari version"
#     ]
#   }
# }






## from App.jsx

# // import { useSelector } from "react-redux"
# // import { selectUser } from "./userSlice"

#   // const user = useSelector(selectUser)


#   // const [user, setUser] = useState(null) // REMOVE STATE
#   // const [user, setUser] = useState({ "id": 1, "username": "Momo" })

#   // useEffect(() => {
#   //   // auto-login
#   //   fetch("/me").then(res => {
#   //     if (res.ok) {
#   //       res.json().then(user => setUser(user))
#   //     }
#   //   })
#   // }, [])

#   // if (user) {
#     // return (
#     //   <div className="App">
#     //     <Header user={user} onLogout={() => setUser(null)} className="App-header" />
#     //     <Main user={user} />
#     //   </div>
#     // )  
#   // } else {
#     // return <Login onLogin={user => setUser(user)} />
#   // }










## from NavBar component

# // <button className="Ghost-button">Logout</button>
# // {user ? <LogoutButton user={user}/> : "" }

# // import Login from './pages/Login'


# // <Link to="/group">Logout</Link>
# // <Route path="/group" element={<Group />} />

# // function handleLogout() {
# //   fetch("/logout", {
# //     method: "DELETE",
# //   // }).then(() => onLogout())
# // }

# // if (user) {
# //   return (
# //     <div className="App">
# //       <Header user={user} onLogout={() => setUser(null)} className="App-header" />
# //       <Main user={user} />
# //     </div>
# //   )  
# // } else {
# //   return <Login onLogin={user => setUser(user)} />
# // }



# from Home component
# <p>
#   You're not in any groups yet!
#   <br />
#   <Link to="/groups" className="App-link">Join a group</Link>
#   </p>
  













# PREVIOUS PACKAGE-LOCK.JSON

# {
#   "name": "chitchat",
#   "description": "A project collaboration tool",
#   "proxy": "http://localhost:3000",
#   "engines": {
#     "node": "16.x"
#   },
#   "dependencies": {
#     "@reduxjs/toolkit": "^1.1.0",
#     "react": "^17.0.1",
#     "react-dom": "^17.0.1",
#     "react-redux": "^7.2.9",
#     "react-router-dom": "^6.13.0",
#     "react-scripts": "^5.0.1",
#     "uuid": "^8.3.2"
#   },
#   "scripts": {
#     "start": "react-scripts start",
#     "build": "npm install --prefix client && npm run build --prefix client && react-scripts build",
#     "clean": "rm -rf public",
#     "deploy": "cp -a client/build/. public/",
#     "heroku-postbuild": "npm run clean && npm run build && npm run deploy"
#   }
# }


# from NavBar component
# {/* ☺️  */}
#               {/* 🗪 chitchat */}
# 🤔😉

#       {/* <NavLink to="/" className="App-link">
#           Profile
#           </NavLink> */}
#       {/* <button onClick={handleLogoutClick} className="Ghost-button">
#         Logout
#       </button> */}
#       {/* {user ? <LogoutButton /> : '' } */}

#         const dispatch = useDispatch()

#   function handleLogoutClick() {
#     dispatch(userLogout())
#     dispatch(deleteUser())
#     return <Login />
#   }












# FROM Group.jsx

# // --> In groupsSlice
# // fetch('/messages', 'Content-Type': 'application/json',
# // head: 'PATCH',
# // body: {
#   // 'text': // e.target.value ?
# // })
# // .then(r => r.json())
# // .then()
# //   }


# // console.log(id) // get id from html path?
# // get state from store (dispatch/similar)
# //  const group = allGroups.filter(g => id === g.id)



# //   <form> 
# //   {/* onSubmit={handleSubmit} */}
# //    <input
# //    type="text"
# //    name="newMessage"
# //    onChange={e => e.target.value}
# //   //  onChange={e => setUserInput(e.target.value)}
# //    />
# //     <button type="submit">Send</button>
# //  </form>


# ////////// FROM CLEANUP 7/2

#   // {/* setShowNewMessage={setShowNewMessage} */}

#   // {/* <ul>
#   //   {messages.map(m => (
#   //     <li className="Li">
#   //       <div className="Message">
#   //         {m.text}
#   //       </div>
#   //       <p className="Sender">
#   //         {(m.user.id !== user.id) ? (`${m.user.username} | `) : ('')}  
#   //       {m.time}
#   //       </p>
#   //     </li>
#   //   ))}
#   // </ul> */}


# // console.log('testing gr: ') //
# // console.log(gr) //


# // const [userInput, setUserInput] = useState('')
# // console.log(userInput)

# // function handleSubmit(e) {
# //   e.preventDefault()
# // dispatch(messageCreate(messageInput)) // msg create? (made up)
# // }


# // console.log(user)

# // const { users, messages, name } = group

# // const [showNewMessage, setShowNewMessage] = useState(messages)
# // const setRefreshMessages = useSelector(state => state.groups.entities.filter(g => g.id === group.id))// useSelector(selectUser)



# // console.log(gr)
# // const gr = useSelector(state => state.groups.entities.filter(g => g.id === group.id))[0] //





# //   // messages = 
# //   useEffect(() => {
# //     if (newMessage) {
# //       dispatch(fetchGroups(), fetchGroups())
# //       // dispatch(fetchGroups())
# //     }
# // }, [dispatch, newMessage]) // newMessage // triggers after new msg

# //   // const [newMessage, setNewMessage] = useState([])

# // // useEffect(() => {
# // //   dispatch(fetchGroups())
# // // }, [dispatch])


# //   function handleAddMessage(newMessage) {
# //     setNewMessage(newMessage)
# //     // gr = dispatch(fetchGroups())
# //     // useSelector(state => state.groups.entities.filter(g => g.id === group.id))[0]
# //     // console.log(gr.shove(newMessage))

# // setNewMessage={setNewMessage} onAddMessage={handleAddMessage}




# // let gr = useSelector(state => state.groups.entities.filter(g => g.id === group.id))[0] //




# FROM groupsSlice.jsx

# fetch('/groups').then(r => (r.ok ? r.json() : []))

# {
# return fetch('/groups') // return needed?
# .then(r => r.json())
# .then(groups => groups)
# }


# Eva's attempted SHOW fetch

# attn - 'groups/...' is plural
# export const fetchGroup = createAsyncThunk('groups/fetchGroup', () => {
#   return fetch(`/groups/${id}`)
#   .then(r => r.json())
#   .then(group => group)
# })

# end Eva's attempted SHOW fetch

# 1/3 STATE

# 2/3 REDUCERS
#   3/3 ACTIONS 


# 👻






#### FROM GROUP COMPONENT
# const g2 = groups.filter(g => g.id === id)[0]

# , ADD_MESSAGE
# g2

# useEffect(() => { // grabs initial groups arr
#   dispatch(fetchGroups())
# }, [dispatch])

# fetch('/messages')
#   .then(r => r.json())
#   .then(messages =>   console.log(
#   messages)) // WKG!!!!






########## messagesSlice
# export const fetchMessages = createAsyncThunk(
  #   '/messages/fetchMessages', 
  #   async() => {
  #     const r = await fetch('/messages')
  #     return r.data
  #   }
  # )
  
  # const fetchMessages = () => {
  #   fetch('/messages')
  #   .then(r => r.json())
  #   .then(messages => messages)
  # }






  # from excellent tutorial
  # Redux Toolkit Tutorial - 30 - Fetching Data by Codevolution
  # https://www.youtube.com/watch?v=I2aM7YcOXDY

  # generates pending, fulfilled, and rejected action types
  # arg 1 - action type
  # arg 2 - async function (returns a promise)
  # createAsyncThunk dispatches the life cycle methods of a promise as actions







# ////////// from messagesSlice


# // createReducer

#   // format fetch res
#   // .data.map(msg => msg.id)

#   // export const selectMessages = state => {
# //   const messages = state.messages.entities
# //   return messages && !messages.errors ? messages : null
# // }

#       // state.entities.push(action.payload)
#       // state.value = action.payload

#   ////
#   // export const messagesReducer = createReducer([], builder => {
#   //   builder
#   //   .addCase('ADD_MESSAGE', (state, action) => {
#   //     debugger
#   //     state.messages.entities.push(action.payload)
#   //   })
#   //   .addCase('REMOVE_MESSAGE', (state, action) => {
#   //     return state.filter((message, i) => i !== action.payload.index)
#   //   })
#   //   // .addCase('', (state, action) => {})
#   //   // .addCase('', (state, action) => {})
#   //   // .addCase('', (state, action) => {})
#   // })

#   ////

#   // extraReducers: {
#   //   [fetchMessages.pending](state) {
#   //     state.status = 'loading'
#   //   },
#   //   [fetchMessages.fulfilled](state, action) {
#   //     state.entities = action.payload
#   //     state.status = 'idle'
#   //   },
#   // builder.addCase(fetchMessages.rejected, (state, action) => {
#   // },

#   // // FROM REDUX TOOLKIT DOCS
#   // export const messagesReducer = createReducer([], builder => {
#   //   builder
#   //   .addCase('ADD_MESSAGE', (state, action) => {
#   //     state.push(action.payload)
#   //   })
#   //   .addCase('REMOVE_MESSAGE', (state, action) => {
#   //     return state.filter((message, i) => i !== action.payload.index)
#   //   })
#   //   // .addCase('', (state, action) => {})
#   //   // .addCase('', (state, action) => {})
#   //   // .addCase('', (state, action) => {})
#   // })
  
#   // END REDUX TOOLKIT DOCS


# //////////

#   // extraReducers: {
#   //   // handle async actions: pending, fulfilled, rejected (for errors)
#   //   [fetchMessages.fulfilled](state, action) {
#   //     state.entities = action.payload;
#     // },    
#   // },

#   // // FROM REDUX TOOLKIT DOCS
#   // export const messagesReducer = createReducer([], builder => {
#   //   builder
#   //   .addCase('ADD_MESSAGE', (state, action) => {
#   //     state.push(action.payload)
#   //   })
#   //   .addCase('REMOVE_MESSAGE', (state, action) => {
#   //     return state.filter((message, i) => i !== action.payload.index)
#   //   })
#   //   // .addCase('', (state, action) => {})
#   //   // .addCase('', (state, action) => {})
#   //   // .addCase('', (state, action) => {})
#   // })
  
#   // // END REDUX TOOLKIT DOCS
  

# // export const { ADD_MESSAGE, REMOVE_MESSAGE } = messagesSlice.actions




# ////////////////////////////////////////

# // import { createAsyncThunk, createSlice } from "@reduxjs/toolkit" //, createReducer }

# // export const fetchMessages = createAsyncThunk('/messages/fetchMessages', () => {
# //   return fetch('/messages')
# //   .then(r => r.json())
# //   .then(messages => messages)
# // })

# // export const fetchMessage = createAsyncThunk('/messages/fetchMessage', (id) => {
# //   return fetch(`/messages/${id}`)
# //   .then(r => r.json())
# //   .then(message => console.log(message))
# // })

# // export const messageDelete = createAsyncThunk("message/delete", (id) =>
# //   fetch(`/messages/${id}`, {
# //     method: "DELETE"
# //   })
# // )

# //   // // FROM REDUX TOOLKIT DOCS
# //   // export const messagesReducer = createReducer([], builder => {
# //   //   builder
# //   //   .addCase('ADD_MESSAGE', (state, action) => {
# //   //     state.push(action.payload)
# //   //   })
# //   //   .addCase('REMOVE_MESSAGE', (state, action) => {
# //   //     return state.filter((message, i) => i !== action.payload.index)
# //   //   })
# //   //   // .addCase('', (state, action) => {})
# //   //   // .addCase('', (state, action) => {})
# //   //   // .addCase('', (state, action) => {})
# //   // })
  
# //   // // END REDUX TOOLKIT DOCS
  

# // const messagesSlice = createSlice({
# //     name: "messages",
# //     initialState: {
# //       entities: [], // array of messages
# //       status: "idle", // loading state
# //       error: null,
# //     },
# //     reducers: {},
# //     extraReducers: {
# //       // handle async actions: pending, fulfilled, rejected (for errors)
# //       [fetchMessages.fulfilled](state, action) {
# //         state.entities = action.payload;
# //       },    
# //     },
# // })

# // export const selectErrors = state => {
# //   const messages = state.messages.entities
# //   return messages && !messages.errors ? messages : null
# // }

# // // export const selectErrors = state => {
# // //   const groups = state.groups.entities
# // //   return groups && groups.errors ? groups.errors : []
# // // }


# // export const { ADD_MESSAGE, REMOVE_MESSAGE } = messagesSlice.actions

# // export default messagesSlice.reducer


# /////////////////////////////////////////////////////
# // GET fetch
# // export const fetchMessages = (() => {
# //   return fetch('/messages')
# //   .then(r => r.json())
# //   .then(messages => messages)
# // })

# // const initialState = {
# //   messages: [],
# // }



# /////////////////////////////////////////////////////////
#   // initialState: {
#   //   messages: [], // entities?
#   //   status: 'idle,' // loading state (sample app)
#   // },
#     // status: "idle", // loading state
#     // error: null,






########## from groupsSlice
# // , createReducer

# export const { ADD_MESSAGE, deleteMessage, REMOVE_MESSAGE } = groupsSlice.actions

# deleteMessage(state, action){ // state = initialState, 
#   return {
#     ...state,
#     // groups: [...state.groups, action.payload]
#     value: {...state.value, messages: state.value.messages.filter(msg => msg.id !== action.payload)},
#   }
# },

# // FROM REDUX TOOLKIT DOCS
# export const messagesReducer = createReducer([], builder => {
#   builder
#   .addCase('ADD_MESSAGE', (state, action) => {
#     state.messages.entities.push(action.payload)
#   })
#   // .addCase('UPDATE_MESSAGE', (state, action) => {})
#   .addCase('REMOVE_MESSAGE', (state, action) => {
#     // debugger // never gets hit
#     // console.log(state)

#     // debugger
#     return state.filter((m) => 
#     // debugger
#     m.id !== action.payload)
#   })
#   // .addCase('', (state, action) => {})
#   // .addCase('', (state, action) => {})
# })

# // END REDUX TOOLKIT DOCS


# // export const selectGroups = state => {
# //   const groups = state.groups.entities
# //   return groups && !groups.errors ? groups : null
# // }

# // export const selectGroup = state => {
# //   const group = state.groups.entities.filter(g => {
# //     g.id === action.payload
# //   })
# //   return group && !group.errors ? group : null
# // }


# // import { createSlice } from "@reduxjs/toolkit" // DELETED createAsyncThunk, createReducer, 

# // const initialState = {
# //   groups: [],
# // }

# // const groupsSlice = createSlice({
# //   name: "groups",
# //   initialState: {
# //     entities: [], // groups arr // groups: 
# //     status: 'idle', // loading state
# //   },
# //   reducers: {
# //     deleteMessage(state, action){ // state = initialState, 
# //       return {
# //         ...state,
# //         // groups: [...state.groups, action.payload]
# //         value: {...state.value, messages: state.value.messages.filter(msg => msg.id !== action.payload)},
# //       }
# //     },
# //   },
# //   // extraReducers: {
# //   //   [fetchGroups.pending](state) {
# //   //     state.status = 'loading'
# //   //   },
# //   //   [fetchGroups.fulfilled](state, action) {
# //   //     state.entities = action.payload
# //   //     state.status = 'idle'
# //   //   },
# //   // },
# // })







# // export const fetchGroups = createAsyncThunk('groups/fetchGroups', () => {
# //   return fetch('/groups')
# //   .then(r => r.json())
# //   .then(groups => groups)
# // })


# // // FROM REDUX TOOLKIT DOCS
# // export const messagesReducer = createReducer([], builder => {
# //   builder
# //   // .addCase('ADD_MESSAGE', (state, action) => {
# //   //   state.push(action.payload)
# //   // })
# //   // .addCase('UPDATE_MESSAGE', (state, action) => {})
# //   .addCase('REMOVE_MESSAGE', (state, action) => {
# //     // debugger // never gets hit
# //     // console.log(state)

# //     // debugger
# //     return state.filter((m) => 
# //     // debugger
# //     m.id !== action.payload)
# //   })
# //   // .addCase('', (state, action) => {})
# //   // .addCase('', (state, action) => {})
# // })

# // // END REDUX TOOLKIT DOCS



# // export const selectGroups = state => {
# //   const groups = state.groups.entities
# //   return groups && !groups.errors ? groups : null
# // }

# // // export const selectGroup = state => {
# // //   const group = state.groups.entities.filter(g => {
# // //     g.id === action.payload
# // //   })
# // //   return group && !group.errors ? group : null
# // // }

# // export const selectErrors = state => {
# //   const groups = state.groups.entities
# //   return groups && groups.errors ? groups.errors : []
# // }

# // export const { deleteMessage, REMOVE_MESSAGE } = groupsSlice.actions

# // export default groupsSlice.reducer







########### from userSlice 

# ////////////////////
# // FROM REDUX TOOLKIT DOCS
# export const messagesReducer = createReducer([], builder => {
#   builder
#   .addCase('ADD_MESSAGE', (state, action) => {
#     state.push(action.payload)
#   })
#   // .addCase('UPDATE_MESSAGE', (state, action) => {})
#   .addCase('REMOVE_MESSAGE', (state, action) => {
#     // debugger // never gets hit
#     // console.log(state)
#     return state.messages.entities.filter((m) => 

#     // return state.filter((m) => 
#     m.id !== action.payload)
#   })
#   // .addCase('', (state, action) => {})
#   // .addCase('', (state, action) => {})
# })

# // END REDUX TOOLKIT DOCS

#   // addGroup(state, action) {},
#   //   deleteMessage(state, action){
#   //     return {
#   //       ...state,
#   //       value: {...state.value, messages: state.value.messages.filter(m => m.id !== action.payload)},
#   //     }
#   //   },
#     // addMessage(state, action) {
#     //   return {
#     //     ...state,
#     //     value: {...state.value, messages: [...state.value.messages, action.payload]},
#     //   }
#     // },

#     deleteMessage(state, action){
#       return {
#         ...state,
#         value: {...state.value, messages: state.value.messages.filter(msg => msg.id !== action.payload)}, // .id
#       }
#     },

#     ////

# export const { ADD_MESSAGE, REMOVE_MESSAGE, deleteMessage } = userSlice.actions // , deleteMessage







########## from index.js

# // import React from "react"
# // import ReactDOM from "react-dom/client"
# // import App from "./App"
# // import "./index.css"

# // import store from "./store";
# // import { Provider } from "react-redux";
# // import { BrowserRouter as Router } from "react-router-dom"


# // ReactDOM.createRoot(document.getElementById("root")).render(
# //   <React.StrictMode>
# //     <Router>
# //       <Provider store={store}>
# //         <App />
# //       </Provider>
# //     </Router>
# //   </React.StrictMode>
# // );




########## from Message component

# // // import React, { useEffect } from "react"
# // import { useDispatch, useSelector } from "react-redux"
# // import { selectUser } from '../features/userSlice' // , deleteMessage
# // // import { selectErrors } from '../features/groupsSlice'
# // import { messageDelete } from '../features/messagesSlice'// fetchMessages, REMOVE_MESSAGE, 

#   // const errors = useSelector(selectErrors) // // NOT WORKING (from messagesSlice NOR groupsSlice)


#       // dispatch(deleteMessage(id)) // NOT UPDATING STATE CORRECTLY
#     // dispatch(REMOVE_MESSAGE(id)) // NOT UPDATING STATE CORRECTLY












################################################################################################################################################################
# https://redux.js.org/tutorials/essentials/part-5-async-logic

# import { createSlice, nanoid } from '@reduxjs/toolkit'

# const initialState = {
#   posts: [],
#   status: 'idle',
#   error: null
# }

# const postsSlice = createSlice({
#   name: 'posts',
#   initialState,
#   reducers: {
#     postAdded: {
#       reducer(state, action) {
#         state.posts.push(action.payload)
#       },
#       prepare(title, content, userId) {
#         // omit prepare logic
#       }
#     },
#     reactionAdded(state, action) {
#       const { postId, reaction } = action.payload
#       const existingPost = state.posts.find(post => post.id === postId)
#       if (existingPost) {
#         existingPost.reactions[reaction]++
#       }
#     },
#     postUpdated(state, action) {
#       const { id, title, content } = action.payload
#       const existingPost = state.posts.find(post => post.id === id)
#       if (existingPost) {
#         existingPost.title = title
#         existingPost.content = content
#       }
#     }
#   }
# })

# export const { postAdded, postUpdated, reactionAdded } = postsSlice.actions

# export default postsSlice.reducer

# export const selectAllPosts = state => state.posts.posts

# export const selectPostById = (state, postId) =>
#   state.posts.posts.find(post => post.id === postId)



















































# ////////////////////////////////// from messagesSlice

# // pending // requested
# // fulfilled // succeeded
# // rejected // failed





# // // Define a thunk that dispatches those action creators
# // export const messageUpdate = () => async (dispatch) => {
# //   dispatch(messageUpdate.pending)
# //   const response = await fetchUpdate()
# //   dispatch(messageUpdate.fulfilled(response.data))
# //  }

# // export const fetchUpdate = (updatedMessage) => {
# //   // createAsyncThunk('messages/update', async (updatedMessage) => {
# //   // const res = await 
# //   fetch(`/messages/${updatedMessage.id}`, {
# //     method: 'PATCH',
# //     headers: {
# //       'Content-Type': 'application/json'
# //     },
# //     body: JSON.stringify({
# //       text: updatedMessage.text,
# //       // time: updatedMessage.text, // not wkg
# //     })
# //   })
# //   .then(r => r.json())
# //   // console.log('res: ')
# //   // console.log(res)

# //   // return res // sends a promise to messageUpdate.fulfilled (not undefined)
# // } // )

# // // const { actions } = messagesSlice
# // export default messagesSlice.reducer

# // // Destructure and export the plain action creators
# // export const { updateMessage } = messagesSlice.actions








# // POST fetch
# // export const messageCreate =
# // createAsyncThunk('messages/create', (message) => {
# //   fetch('/messages', {
# //     method: 'POST',
# //     headers: {
# //       'Content-Type': 'application/json'
# //     },
# //     body: JSON.stringify(message),
# //   })
# //   .then(r => r.json())
# //   // .then((data) => data)
# //   // .then(m => console.log(m)) // resp comes after createMessage pending & fulfilled run - FIX!!!!!!!!!!
# // })




#   // .addCase(fetchMessages.rejected, (state, action) => {
#   //   state.loading = false
#   //   // state.entities = []
#   //   state.errors = action.errors // .messages // state.errors = [ action.error.messages ]
#   // })



#   // newMessage = state.entities.filter(message => {
#   //   message.id === 
#   // })
#   // state.entities = state.entities.push(action.payload)
#   // state.errors = []


# //////////////////////////////

# // const CREATE_MESSAGE_REQUESTED = 'CREATE_MESSAGE_REQUESTED' // pending
# // const CREATE_MESSAGE_SUCCEEDED = 'CREATE_MESSAGE_SUCCEEDED' // fulfilled
# // const CREATE_MESSAGE_FAILED = 'CREATE_MESSAGE_FAILED' // rejected

# // const createMessageRequest = () => {
# //   return {
# //     type: CREATE_MESSAGE_REQUESTED,
# //   }
# // }

# // const createMessageSuccess = () => {
# //   return {
# //     type: CREATE_MESSAGE_SUCCEEDED,
# //     payload: messages,
# //   }
# // }

# // const createMessageFailure = errors => {
# //   return {
# //     type: CREATE_MESSAGE_FAILED,
# //     payload: errors,
# //   }
# // } 

# // const reducer = (state = initialState, action) => {
# //   switch (action.type) {
# //     case CREATE_MESSAGE_REQUESTED:
# //       return {
# //         ...state,
# //         loading: true,
# //       }
# //     case CREATE_MESSAGE_SUCCEEDED:
# //       return {
# //         loading: false,
# //         messages: action.payload,
# //         errors: [],
# //       }
# //     case CREATE_MESSAGE_FAILED:
# //       return {
# //         loading: false,
# //         messages: [],
# //         errors: action.payload,
# //       }
# //   }
# // } 






# // reducers: {
#   // MESSAGE_ADDED: (state, action) => {
#   //   return {
#   //     ...state,
#   //     entities: [...state.entities, action.payload]
#   //   }
#   // },
#   // deleteMessage: (state, action) => {
#   //   state.entities = state.entities.filter(message => message.id !== action.payload)
#   //   return {
#   //     ...state,
#   //   value: {...state.value, entities: state.value.entities.filter(message => message.id !== action.payload)},
#   //   }
#   // },
# // },

# // export const { deleteMessage, MESSAGE_ADDED } = messagesSlice.actions








# // import messages from fetch('/messages') // ? --> './messages' OR fetch('/messages')
# // const messages = fetch('/messages')

# // export const fetchMessages = createAsyncThunk('messages/fetchAll', async () => {
# //   const res = await messages.fetchAll()
# //   return res
# //   // .then(r => r.json())
# // })


# // const MESSAGE_ADDED = 'MESSAGE_ADDED'
# // function addNewMessage(newMessage) {


# // // }).then(r => {
# // //   if (r.ok) {
# // //     r.json()
# // //     .then(newMessage => newMessage)
# // //   } else {
# // //     r.json().then(err => err.error)
# // //   }
# // // })

# // DELETE fetch
# // export const messageDelete = createAsyncThunk("message/delete", (id) =>r
# //   fetch(`/messages/${id}`, {
# //     method: "DELETE"
# //   })
# // )

# // const reducer = (state = initialState, action) => {
# //   switch(action.type) {
# //     case MESSAGE_ADDED:
# //       return {
# //         ...state,
# //         state.messages: ...state.messages.push(action.payload)
# //       }
# //   }
# // }




#     // addMessage(state, action) {
#     //   return {
#     //     ...state, messages: [state.messages.messages.push(action.payload)]
#     //     // messages: [...state.messages.messages, action.payload]
#     //   }
#     // },

#     // addMessage: (state, action) =>  {
#     //   state.messages.messages.push(action.payload)
#     // },
#     // MESSAGE_ADDED: (state, action) => {
#     //   state.messages.push(action.payload)
#     // },




# // use action type to make axn creator
# // function addNewMessage() {
#   // export const addNewMessage = () => {
#   //   return {
#   //     type: MESSAGE_ADDED,
#   //     // payload: newMessage,
#   //   }
#   // }
  
#   // addMessage = (newMessage) => {
#   //   fetch('/messages', {
#   //     method: 'POST',
#   //     headers: {
#   //       'Content-Type': 'application/json',
#   //     },
#   //     body: JSON.stringify(newMessage),
#   //   }).then(r => {
#   //     if (r.ok) {
#   //       r.json()
#   //         .then((message) => message)
#   //     } else {
#   //       r.json().then(err => setErrors(err.error))
#   //     }
#   //   })
#   // }
  