import React from "react"
import { NavLink } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { selectUser, userLogout } from "../features/userSlice"
import Login from '../pages/Login'

function NavBar() {
  const user = useSelector(selectUser)

  const dispatch = useDispatch()

  function handleLogoutClick() {
    dispatch(userLogout())
    // dispatch(deleteUser())
    return <Login />
  }

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
            <button onClick={handleLogoutClick} className="Ghost-button">
              Logout
            </button>
          </nav>
        )
      }
    </navbar>
  )
}

export default NavBar