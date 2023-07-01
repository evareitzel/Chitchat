import React from "react"
import { NavLink } from "react-router-dom"
import { useSelector } from "react-redux"
import { selectUser } from "../features/userSlice"
import LogoutButton from './LogoutButton'

function NavBar() {
  const user = useSelector(selectUser)

  return (
    <navbar className="App-header">

      <h1>🗪 chitchat</h1>
      <p>A place to collaborate</p>

      {user ? (
        <nav>
          <NavLink to="/" className="App-link">
            Profile
          </NavLink>
          <NavLink to="/groups" className="App-link">
            Groups
          </NavLink>
          <LogoutButton />
        </nav>
      ) : ''}
    </navbar>
  )
}

export default NavBar