import { useState } from "react"
import { useDispatch } from "react-redux"
import { messageAdded } from "./messagesSlice"

function MessageInput({ groupId }) { // userId
  const [comment, setComment] = useState("")
  const dispatch = useDispatch()

  function handleSubmit(e) {
    e.preventDefault()
    dispatch(messageAdded({ comment, groupId })) // userId
  }

  return(
    <form onSubmit={handleSubmit}>
      <label>
        Comment
        <input 
          name="comment"
          value={comment}
          onChange={e => setComment(e.target.value)}
        />
      </label>
      <button type="submit">Send</button>
    </form>
  )
}

export default MessageInput