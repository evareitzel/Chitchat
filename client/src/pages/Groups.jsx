import React, { useEffect } from "react" // , useState
import { useDispatch, useSelector } from "react-redux" 
import { fetchGroups, selectGroups, REMOVE_MESSAGE } from "../features/groupsSlice"
import Group from "./Group"

function Groups() {
  const dispatch = useDispatch()

  const groups = useSelector(selectGroups)
  
  useEffect(() => { // grabs initial groups arr
    dispatch(fetchGroups())
  }, [dispatch]) // i thought this made a side effect fetch whn dispatch runs (now IN THIS COMPONENT)

  // function handleDeleteMessage(id) {
  //   dispatch(REMOVE_MESSAGE(id))
  // }

  const handleDeleteMessage = (id) => {
    dispatch(REMOVE_MESSAGE(id))
    groups = dispatch(fetchGroups)
    console.log(groups)
  }

  return (
    <>
      <h1>Groups</h1>
      {groups.map(group => (
        <Group group={group} id={group.id} onDeleteMessage={handleDeleteMessage} />
      ))}
    </>
  )
}

export default Groups