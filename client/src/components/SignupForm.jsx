import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { selectErrors, userSignup } from "../features/userSlice"

function SignupForm({ setLoginSignup }) {
  
  const dispatch = useDispatch()
  const errors = useSelector(selectErrors)


  const [userInput, setUserInput] = useState({
    username: '',
    password: '',
    password_confirmation: ''
  })

  const inputOnChange = (e => {
    const name = e.target.name
    const value = e.target.value

    setUserInput({ ...userInput, [name]: value })
  })

  function handleSubmit(e) {
    e.preventDefault()
    dispatch(userSignup(userInput))
  }
  
  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <h1>Sign Up</h1>
      <p>Create your chitchat account</p>
      <div>
        <label>Username</label>
        <input
          type="text"
          name="username"
          onChange={inputOnChange}
        />
      </div>
      <div>
        <label>Password
          <input
            type="password"
            name="password"
            onChange={inputOnChange}
          />
        </label>
      </div>
      <div>
        <label>Confirm password
          <input
            type="password"
            name="password_confirmation"
            onChange={inputOnChange}
          />
        </label>
      </div>
      <button type="submit">Submit</button>
      
      <br />
      <br />

      {errors.map(err => <div key={err} >x {err}</div>)}

      <br />
      <br />
      <br />

      <div>
        Have an account already?
        <button onClick={() => setLoginSignup(true)}>Log in</button>
      </div>

    </form>
  )
}

export default SignupForm