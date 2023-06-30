import React, { useEffect, useState } from "react" // useState
import { useDispatch, useSelector } from "react-redux"
// import { selectUser } from "../features/userSlice"
import { fetchGroups } from "../features/groupsSlice"

function Groups() {
  const dispatch = useDispatch()

  // const user = useSelector(selectUser)

  const allGroups = useSelector(state => state.groups.entities)

  console.log('allGroups from Groups component: ')
  console.log(allGroups)

  console.log('state: ')  
  console.log(useSelector(state => state))
    
  useEffect(() => {
    dispatch(fetchGroups())
  }, [dispatch])

  // const handleJoinGroupsClick = () => {console.log('JOIN A GROUP!!!!')}

  return (
    <>
      <h1>Groups</h1>
      {allGroups.map(g => (
        <div>
        <h3 key={g.id}>{g.name}</h3>
        {/* <p>{":)" * g.users.length} members</p> */}
        <p>Members: {g.users.map(u => u.username).join(', ')}</p> 
        {/* join() wkg? */}
        </div>
      ))}
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