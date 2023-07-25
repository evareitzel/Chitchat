import { useState } from "react"
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
    <form onSubmit={handleSubmit} autoComplete="off" className="Form">
      <h1>Sign Up</h1>
      <p>Create your chitchat account</p>
      
      <div>
        <label>
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={inputOnChange}
            className="Input"
          />
        </label>
        <label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={inputOnChange}
            className="Input"
          />
        </label>
        <label>
          <input
            type="password"
            name="password_confirmation"
            placeholder="Confirm Password"
            onChange={inputOnChange}
            className="Input"
          />
        </label>
      </div>

      {errors.map(err => <div key={err} >x {err}</div>)}

      <button type="submit" className="Button">Submit</button>

      <div className="Login-signup-blurb">
        Have an account already?
        <br />
        <button onClick={() => setLoginSignup(true)} className="Ghost-button">Log in</button>

      </div>

    </form>
  )
}

export default SignupForm