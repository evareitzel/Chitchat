import { useState } from "react"
import { useDispatch } from "react-redux" // useSelector
import { userLogin } from '../features/user/userSlice' // selectErrors

function LoginForm({ setLoginSignup }) {

  const dispatch = useDispatch()
  // const errors = useSelector(selectErrors)

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
    <form onSubmit={handleLoginSubmit} autoComplete="off">
      <h1>Log In</h1>
      <p>Log in to your chitchat account</p>
      <div>
        <label >Username
          <input 
            type="text"
            name="username"
            onChange={loginOnChange}
          />
        </label>
      </div>
      <div>
        <label>Password
          <input 
            type="password"
            name="password"
            onChange={loginOnChange}
          />
        </label>
      </div>
      <button type="submit">Login</button>

      {/* {errors.map(err => <span>{err}</span>)} */}

      <br />
      <br />
      <br />

      <div>
        Don't have an account yet? 
        <button onClick={() => setLoginSignup(false)}>Sign up</button>
      </div>
    </form>
  )
}

export default LoginForm