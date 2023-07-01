import React, { useEffect } from "react" //  
// import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux" // useDispatch, 
import { fetchGroups } from "../features/groupsSlice" // , fetchGroup
import Group from "./Group"

function Groups() {
  const dispatch = useDispatch()
  // const navigate = useNavigate()

  const allGroups = useSelector(state => state.groups.entities)
    
  useEffect(() => {
    dispatch(fetchGroups())
  }, [dispatch])

  // useEffect(() => {
  //   dispatch(fetchGroup())
  // }, [dispatch])

  // const handleJoinGroupsClick = () => {console.log('JOIN A GROUP!!!!')}

  console.log(useSelector(state => state))

  return (
    <>
      <h1>Groups</h1>
      {allGroups.map(g => (
        <Group group={g} />
        // <p>{g.name}</p>
          // <button onClick={()=>{return <Group group={g} />}}>
          //   {g.name}
          // </button>
      ))}
    </>
  )
}

export default Groups

          // {/* <p>Members: {g.users.map(u => u.username).join(', ')}</p>  */}
          // {/* join() wkg? */}


      // {/* { user.groups.length > 0
      //   ? (
      //     user.groups.map(g => <h2 key={g.id}>{g.name}</h2>)
      //   ) : (
      //     <button onClick={handleJoinGroupsClick}>
      //       Join a group
      //     </button>
      //   ) */}
      // {/* } */}

      // <button onClick={()=>{
      //   navigate("/")
      // }}>{g.name}</button>
