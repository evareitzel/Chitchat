import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux" 
import { fetchGroups } from "../features/groupsSlice"
import Group from "./Group"

function Groups() {
  const dispatch = useDispatch()
  const groups = useSelector(state =>  state.groups.entities)

  useEffect(() => {
    dispatch(fetchGroups())
  }, [dispatch])

  return (
    <>
      <h1>Groups</h1>
      {groups.map(group => (
        <Group group={group} key={group.id} />
      ))}
    </>
  )
}

export default Groups