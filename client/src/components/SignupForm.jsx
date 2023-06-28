import { useState } from "react"
import { useSelector, useDispatch } from "react-redux" // useDispatch
import { selectErrors, userSignup } from "../features/user/userSlice"

function SignupForm({ setLoginSignup }) {
  
  const dispatch = useDispatch()
  const errors = useSelector(selectErrors)
  // console.log(errors)

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



  // const [username, setUsername] = useState("")
  // const [password, setPassword] = useState("")
  // const [passwordConfirmation, setPasswordConfirmation] = useState("")

  // this should be handled thru REDUX (userSlice)
  function handleSubmit(e) {
    e.preventDefault()

    dispatch(userSignup(userInput))
    // dispatchEvent(userSignup(userInput))

  //   fetch("/signup", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       username,
  //       password,
  //       password_confirmation: passwordConfirmation,
  //     }),
  //   })
  //     .then(r => r.json())

    // .then(user => console.log(user))
    // .then(user => onLogin(user)) // ? // user => onLogin(user)
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
          // value={username}
          onChange={inputOnChange}
          // onChange={e => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label>Password
          <input
            type="password"
            name="password"
            // value={password}
            onChange={inputOnChange}
            // onChange={e => setPassword(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>Confirm password
          <input
            type="password"
            name="password_confirmation"
            // value={passwordConfirmation}
            onChange={inputOnChange}
            // onChange={e => setPasswordConfirmation(e.target.value)}
          />
        </label>
      </div>
      <button type="submit">Submit</button>

      {errors.map(err => <span key={err} >x {err}</span>)}

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