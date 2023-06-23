import { useSelector } from "react-redux"
import Groups from "./Groups"

function GroupsContainer() {
  const  groups = useSelector(state => state.groups)//.entities)
  return(
    <Groups groups={groups} />
  )
}

export default GroupsContainer