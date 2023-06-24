import React from "react"
import { NavLink } from "react-router-dom"
import { useSelector } from "react-redux"
import { selectUser } from "../features/user/userSlice"
import LogoutButton from "./LogoutButton"

function NavBar () {
  const user = useSelector(selectUser)
  console.log(user)

  return (
    <navbar>
      <h1>🗪 chitchat</h1>
      <p>A place to collaborate 🤔😉</p>

      <nav className="App-header">
        <NavLink to="/" className="App-link">
          🗪 chitchat
        </NavLink>
        <NavLink to="/groups" className="App-link">
          Groups
        </NavLink>
        {user ? <LogoutButton /> : "" }
      </nav>
    </navbar>
  )
}

export default NavBar


// <button className="Ghost-button">Logout</button>
// {user ? <LogoutButton user={user}/> : "" }

// import Login from './pages/Login'


// <Link to="/group">Logout</Link>
// <Route path="/group" element={<Group />} />

// function handleLogout() {
//   fetch("/logout", {
//     method: "DELETE",
//   // }).then(() => onLogout())
//   }).then(r => console.log(r))
// }

// if (user) {
//   return (
//     <div className="App">
//       <Header user={user} onLogout={() => setUser(null)} className="App-header" />
//       <Main user={user} />
//     </div>
//   )  
// } else {
//   return <Login onLogin={user => setUser(user)} />
// }