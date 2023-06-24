import React from "react"
import { useDispatch } from "react-redux"
import { userLogout } from "../features/user/userSlice"

function LogoutButton({user}) {

  const dispatch = useDispatch()

  function handleLogoutClick() {
    dispatch(userLogout())
  }

  return (
    <>
    <p>Welcome, {user.username}!</p>
      <button onClick={handleLogoutClick}>
        Logout
      </button>
    </>
  )
}

export default LogoutButton