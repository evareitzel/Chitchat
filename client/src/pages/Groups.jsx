import React, { useEffect } from "react" // , useState
import { useDispatch, useSelector } from "react-redux" 
import { fetchGroups } from "../features/groupsSlice"
import Group from "./Group"

function Groups() {
  const dispatch = useDispatch()
  const groups = useSelector(state =>  state.groups.entities)

  useEffect(() => {
    dispatch(fetchGroups())
  }, [dispatch]) // i thought this made a side effect fetch when dispatch runs (now IN THIS COMPONENT - WHY IS THIS NOT REFRESHING AUTOMATICALLY?)

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