import React, { useEffect } from "react" // , useState
import { useDispatch, useSelector } from "react-redux" 
import { fetchGroups, selectGroups, REMOVE_MESSAGE } from "../features/groupsSlice"
import Group from "./Group"

function Groups() {
  const dispatch = useDispatch()

  let groups = useSelector(selectGroups)
  
  useEffect(() => { // grabs initial groups arr
    dispatch(fetchGroups())
  }, [dispatch]) // i thought this made a side effect fetch when dispatch runs (now IN THIS COMPONENT - WHY IS THIS NOT REFRESHING AUTOMATICALLY?)

  function handleDeleteMessage(id) {
    dispatch(REMOVE_MESSAGE(id))
    // dispatch(fetchGroups())

    // console.log(useSelector(state => state))
  }

  // const handleDeleteMessage = (id) => {
  //   dispatch(REMOVE_MESSAGE(id))
  //   groups = dispatch(fetchGroups())
  //   // console.log(groups)
  // }

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