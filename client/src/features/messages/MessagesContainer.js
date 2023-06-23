import { useSelector } from "react-redux"
import MessageInput from "./MessageInput"
import Messages from "./Messages"

function MessagesContainer({ groupId }) {
  const messages = useSelector(state => state.messages.entities.filter(m  => m.groupId === groupId))
  
  return(
   <div>
      <MessageInput groupId={groupId} />
      <Messages messages={messages} />
    </div> 
  )
}

export default MessagesContainer