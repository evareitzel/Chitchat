import React from "react"
import { NavLink } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { selectUser, userLogout } from "../features/user/userSlice"
// import LogoutButton from "./LogoutButton"
import Login from "../pages/Login"

function NavBar() {
  const user = useSelector(selectUser)

  const dispatch = useDispatch()

  function handleLogoutClick() {
    dispatch(userLogout())
  }

  console.log(user)
  
  return (
    <navbar>
      <h1>🗪 chitchat</h1>
      <p>A place to collaborate 🤔😉</p>

      {!user
        ? ""
        : (
          <nav className="App-header">
            <NavLink to="/" className="App-link">
              🗪 chitchat
            </NavLink>
            <NavLink to="/groups" className="App-link">
              Groups
            </NavLink>
            <NavLink className="App-link" onClick ="handleLogoutClick">
              Logout
            </NavLink>
          </nav>
        )
      }
    </navbar>
  )
}

export default NavBar


// {/* <NavLink to="/login" className="App-link"> */}
//             {/* Login  
//           </NavLink> */}
//           {/* {user ? <LogoutButton /> : ""} */}