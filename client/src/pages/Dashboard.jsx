import React from "react"
import { useSelector } from "react-redux"
import { selectUser } from '../features/userSlice'

function Dashboard() {
  const user = useSelector(selectUser)

  return(
    <div>
      <h1>😀 {user.username}</h1>

      { user.groups.length === 0
        ? (
          <h3>You're not in any groups yet 👻</h3>
        ) : (
          <>
            <h2>My Groups</h2>
            <ul>
              {user.groups.map (g => <li className="li">{g.name}</li>)}
            </ul>
          </>
        )
      }
    </div>
  )
}

export default Dashboard