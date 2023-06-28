
import { useSelector } from "react-redux"
import { selectUser } from "../features/user/userSlice"

function Groups() {
  const user = useSelector(selectUser)

  const handleJoinGroupsClick = () => {console.log('JOIN A GROUP!!!!')}

  return (
    <>
      <h2>Your Groups</h2>
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