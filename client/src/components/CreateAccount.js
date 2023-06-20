import { useState } from "react"

export default function CreateAccouont({ onLogin }){
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirmation, setPasswordConfirmation] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    // fetch
  }

  return (
      <form>
        <label></label>
        <input />
        <label></label>
        <input />
        <label></label>
        <input />
        <button type="submit">Submit</button>
      </form>
  )
}