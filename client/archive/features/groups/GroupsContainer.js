import { useDispatch, useSelector } from "react-redux" 
import { fetchGroups } from "../../actions/groups"
import Groups from "./Groups"
import React, { useEffect } from "react"

function GroupsContainer() {
  const groups = useSelector(state => state.groups)
  const dispatch = useDispatch()

  useEffect(() => dispatch(fetchGroups()), [])

  return(
    <div>
      <p>src/features/groups/Groups</p>
      {groups.list.length === 0 ? 'Loading...' : <Groups groups={groups} />}
    </div>
  )
}

export default GroupsContainer
