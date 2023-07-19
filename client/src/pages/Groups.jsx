import React, { useEffect } from "react"
import { Routes, Route } from "react-router-dom"

// import { Link } from 'react-router-dom'

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
      
      {/* Make Group names links, then load chatrooms */}
      {groups.map(group => (
        // <Link to=`group/${group.id}`>{group.name}</Link>
        <Group group={group} key={group.id} />
      ))}

      <Routes>
        <Route path=':id' element={<Group />} />
      </Routes>

    </>
  )
}

export default Groups