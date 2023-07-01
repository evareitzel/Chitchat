import React from 'react'
import { useDispatch } from "react-redux"
import { userLogout } from "../features/userSlice"


function LogoutButton() {
  const dispatch = useDispatch()

  function handleLogoutClick() {
    dispatch(userLogout())
  }
  
  return (
    <button onClick={handleLogoutClick} className="Ghost-button">
      Logout
    </button>
  )
}

export default LogoutButton