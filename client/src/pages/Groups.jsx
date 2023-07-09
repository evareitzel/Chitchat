import React, { useEffect } from "react" // , useState
import { useDispatch, useSelector } from "react-redux" 
import { fetchGroups, ADD_MESSAGE } from "../features/groupsSlice" // , selectGroups
import Group from "./Group"

function Groups() {
  const dispatch = useDispatch()
  // let groups = useSelector(selectGroups)
  const groups = useSelector(state =>  state.groups.entities)
  console.log('groups: ')
  console.log(groups)

  useEffect(() => { // grabs initial groups arr
    dispatch(fetchGroups())
  }, [dispatch]) // i thought this made a side effect fetch when dispatch runs (now IN THIS COMPONENT - WHY IS THIS NOT REFRESHING AUTOMATICALLY?)

  // function handleDeleteMessage(id) {
  //   dispatch(REMOVE_MESSAGE(id))
  // }

  function handleAddMessage(message){
    dispatch(ADD_MESSAGE(message))
  }

  return (
    <>
      <h1>Groups</h1>
      {groups.map(group => (
        <Group group={group} onAddMessage={handleAddMessage} /> // onDeleteMessage={handleDeleteMessage} id={group.id}
      ))}
    </>
  )
}

export default Groups