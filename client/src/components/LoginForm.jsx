import { useState } from "react"

export default function LoginForm({ onLogin }) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    fetch("/login", {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ 
        username, 
        password 
      }),
    })
    .then(r => r.json())
    // .then(r => console.log(r))
    .then(user => onLogin(user))
  }

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <h1>Log In</h1>
      <p>Log in to your chitchat account</p>
      <div>
        <label >Username
          <input 
            type="text"
            id="login_username"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>Password
          <input 
            type="password"
            id="login_password"
            value={password}            
            onChange={e => setPassword(e.target.value)}
          />
        </label>
      </div>
      <button type="submit">Login</button>
    </form>
  )
}
