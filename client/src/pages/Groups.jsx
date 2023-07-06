import React, { useEffect } from "react" // , useState
import { useDispatch, useSelector } from "react-redux" 
import { fetchGroups, selectGroups, REMOVE_MESSAGE } from "../features/groupsSlice"
import Group from "./Group"

function Groups() {
  const dispatch = useDispatch()
  let groups = useSelector(selectGroups)
  
  console.log(`groups from Groups component: `)
  console.log(groups)
  
  useEffect(() => { // grabs initial groups arr
    dispatch(fetchGroups())
  }, [dispatch]) // i thought this made a side effect fetch when dispatch runs (now IN THIS COMPONENT - WHY IS THIS NOT REFRESHING AUTOMATICALLY?)

  // function handleDeleteMessage(id) {
  //   dispatch(REMOVE_MESSAGE(id))
  // }

  return (
    <>
      <h1>Groups</h1>
      {groups.map(group => (
        <Group group={group} /> // onDeleteMessage={handleDeleteMessage} id={group.id}
      ))}
    </>
  )
}

export default Groups