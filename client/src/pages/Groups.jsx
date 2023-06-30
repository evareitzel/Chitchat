import React, { useEffect } from "react" // useEffect
import { useDispatch, useSelector } from "react-redux"
import { selectUser } from "../features/userSlice"
import { fetchGroups } from "../features/groupsSlice"

function Groups() {
  const dispatch = useDispatch()

  const user = useSelector(selectUser)
  const groups = useSelector(fetchGroups)

  const allGroups = useSelector(state => state.groups.entities)

  console.log('allGroups from Groups component: ')
  console.log(allGroups) // 

  console.log('state: ')  
  console.log(useSelector(state => state))
    
  // useEffect(() => {
  //   dispatch(fetchGroups())
  // }, [dispatch]) // dispatch

  // const groups = () => dispatch(fetchGroups())
  console.log('Groups: ')
  console.log(groups)

  // console.log('state from Groups component: ')
  // console.log(useSelector(state => state))

  // const handleJoinGroupsClick = () => {console.log('JOIN A GROUP!!!!')}

  return (
    <>
      <h2>Groups</h2>
      <h3>Render all Groups</h3>
      {allGroups.map(g => <h2 key={g.id}>{g.name}</h2>)}
      {/* { user.groups.length > 0
        ? (
          user.groups.map(g => <h2 key={g.id}>{g.name}</h2>)
        ) : (
          <button onClick={handleJoinGroupsClick}>
            Join a group
          </button>
        ) */}
      {/* } */}
    </>
  )
}

export default Groups