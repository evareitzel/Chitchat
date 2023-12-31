import React from "react"
import { NavLink } from "react-router-dom"
import { useSelector } from "react-redux"
import { selectUser } from "../features/userSlice"
// import Navbar from 'react-bootstrap/Navbar'
import LogoutButton from './LogoutButton'

function NavBar() {
  const user = useSelector(selectUser)

  return (
    <nav className="App-header">

      <h1>🗪 chitchat</h1>
      <p>A place to collaborate</p>

      {user ? (
        <nav>
          <NavLink to="/" className="App-link">
            Dashboard
          </NavLink>
          <NavLink to="/groups" className="App-link">
            Groups
          </NavLink>
          <LogoutButton />
        </nav>
      ) : ''}
    </nav>
  )
}

export default NavBar