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

      { user.groups.length === 0
        ? (
          <h3>You're not in any groups yet 👻</h3>
        ) : (
          <>
            <h2>Your Groups</h2>
            <ul>
              {user.groups.map (g => <li>{g.name}</li>)}
            </ul>
          </>
        )
      }
    </div>
  )
}

export default Home