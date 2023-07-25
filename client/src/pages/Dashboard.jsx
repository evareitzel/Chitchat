import React from "react"
import { useSelector } from "react-redux"
import { selectUser } from '../features/userSlice'

function Dashboard() {
  const user = useSelector(selectUser)
  const myGroups = user.groups.map(g => g.name)
  const unique = [...new Set(myGroups)]

  return(
    <div>
      <h1>Welcome, {user.username} 😀</h1>

      { user.groups.length === 0
        ? (
          <h3>You're not in any groups yet 👻</h3>
        ) : (
          <>
            <h2>My Groups</h2>
            <ul>
              {unique.map (groupName => <li className="Li">{groupName}</li>)}
            </ul>
<br />
            <h3>{user.reactions.length === 1 ? '1 reaction' : `${user.reactions.length} reactions`}</h3>
            {/* <p>We see you showing up! 🙌🙌💯</p> */}
          </>
        )
      }
    </div>
  )
}

export default Dashboard