import React, { useEffect } from "react" // , useState
import { useDispatch, useSelector } from "react-redux" 
import { fetchGroups, selectGroups } from "../features/groupsSlice"
import Group from "./Group"

function Groups() {
  const dispatch = useDispatch()

  const groups = useSelector(selectGroups)
  
  useEffect(() => { // grabs initial groups arr
    dispatch(fetchGroups())
  }, [dispatch])

  return (
    <>
      <h1>Groups</h1>
      {groups.map(group => (
        <Group group={group} id={group.id} />
      ))}
    </>
  )
}

export default Groups