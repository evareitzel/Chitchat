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

  const loading = useSelector(state => state.messages.loading)

  return (
    <>
      <h1>Groups</h1>
      { loading ? <h3>Loading...</h3> : '' }
      
      {groups.map(group => (
        <Group group={group} key={group.id} />
      ))}
    </>
  )
}

export default Groups