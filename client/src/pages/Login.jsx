import { useState } from "react"
import LoginForm from '../components/LoginForm'
import SignupForm from '../components/SignupForm'

function Login() {

  const [loginSignup, setLoginSignup] = useState(true)

  return (
    <div className="App">
      <h3>🗪 chitchat</h3>
      {loginSignup 
        ? <LoginForm setLoginSignup={setLoginSignup} />
        : <SignupForm setLoginSignup={setLoginSignup} />
      }
    </div>
  )
}

export default Login