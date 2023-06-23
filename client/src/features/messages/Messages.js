import Message from "./Message"

function Messages({ messages }) {
  return(
    <ul>
      {messages.map(m => (
        <Message key={m.id} message={m} />
      ))}
    </ul>
  )
}

export default Messages