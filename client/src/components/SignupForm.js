import { useState } from "react"

export default function SignupForm({ onLogin }){
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirmation, setPasswordConfirmation] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        password_confirmation: passwordConfirmation,
      }),
    })
    .then(r => r.json())
    // .then(r => console.log(r))
    .then(user => onLogin(user)) // ? // user => onLogin(user)
  }

  return (
      <form onSubmit={handleSubmit} autoComplete="off">
        <h1>Sign Up</h1>
        <p>Create your chitchat account</p>
        <div>
          <label>Username</label>
          <input 
            type="text"
            id="username"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password
            <input 
              type="password"
              id="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>Confirm password
            <input 
              type="password"
              id="password_confirmation"
              value={passwordConfirmation}
              onChange={e => setPasswordConfirmation(e.target.value)}
            />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
  )
}