import React from "react"
import { useSelector } from "react-redux"
import { selectUser } from '../features/user/userSlice'
import Login from "./Login"


function Home() {
  const user = useSelector(selectUser)

  if (!user) return <Login />

  return(
    <div>
      <h1>😀 {user.username}</h1>

      <h3>Your Groups</h3>
      <ul>
        {user.groups.map (g => <li>{g.name}</li>)}
      </ul>
    </div>
  )
}

export default Home