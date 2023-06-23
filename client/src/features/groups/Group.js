// import { useDispatch } from "react-redux"
import MessagesContainer from "../messages/MessagesContainer";

function Group({ group }) {
  // const dispatch = useDispatch()
  return(
    <li>
      {group.name}
      <MessagesContainer groupId={group.id} />
    </li>
  )
}

export default Group