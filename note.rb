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
