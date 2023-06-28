import React from "react"
import { useSelector } from "react-redux"
import { selectUser } from "../features/userSlice"
import { fetchGroups } from "../features/groupSlice"

function Groups() {
  const user = useSelector(selectUser)
  const groups = useSelector(fetchGroups)

  console.log('Groups from Groups: ')
  console.log(groups)

  const handleJoinGroupsClick = () => {console.log('JOIN A GROUP!!!!')}

  return (
    <>
      <h2>Groups</h2>
      <h3>Render all Groups</h3>
      { user.groups.length > 0
        ? (
          user.groups.map(g => <h2 key={g.id}>{g.name}</h2>)
        ) : (
          <button onClick={handleJoinGroupsClick}>
            Join a group
          </button>
        )
      }
    </>
  )
}

export default Groups