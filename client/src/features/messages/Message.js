import { useDispatch } from "react-redux"
import { messageRemoved } from "./messagesSlice"

function Message({ message }) {
  const dispatch = useDispatch()

  function handleDeleteClick() {
    dispatch(messageRemoved(message.id))
  }

  return(
    <div>
      <li>{message.comment}</li>
      <button onClick={handleDeleteClick}>Delete</button>
    </div>
  )
}

export default Message