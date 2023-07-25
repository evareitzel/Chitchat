import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { userLogin, selectErrors } from '../features/userSlice'

function LoginForm({ setLoginSignup }) {
  const dispatch = useDispatch()
  const errors = useSelector(selectErrors)

  const [user, setUser] = useState({
    username: '',
    password: ''
  })

  function loginOnChange(e) {
    const name = e.target.name
    const value = e.target.value

    setUser({
      ...user,
      [name]: value
    })
  }

  const handleLoginSubmit = (e) => {
    e.preventDefault()
    dispatch(userLogin(user))
  }

  return (
    <form onSubmit={handleLoginSubmit} autoComplete="off" className="Form">
      <h1>Log In</h1>
      <p>Log in to your chitchat account</p>
      <div>
        <label >
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={loginOnChange}
            className="Input"
          />
        </label>
        <label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={loginOnChange}
            className="Input"
          />
        </label>
      </div>

      {errors.map(err => <div key={err} >x {err}</div>)}

      <button type="submit" className='Button'>Login</button>

      <div className='Login-signup-blurb'>
        Don't have an account yet?
        <br />
        <button onClick={() => setLoginSignup(false)} className="Ghost-button">Sign up</button>
      </div>
    </form>
  )
}

export default LoginForm