import { useState } from "react"

export default function Login({ onLogin }) { // Our onLogin callback function would handle saving the logged in user's details in state
  const [username, setUsername] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    fetch("/login", {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username }),
    })
    .then(r => r.json())
    .then(user => onLogin(user))
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  )
}
