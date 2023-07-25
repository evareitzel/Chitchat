import { useState } from "react"
import LoginForm from '../components/LoginForm'
import SignupForm from '../components/SignupForm'

function Login() {

  const [loginSignup, setLoginSignup] = useState(true)

  return (
    <div className="App">
      <div className="Wrapper">
        <h3>🗪 chitchat</h3>
        {loginSignup 
          ? <LoginForm setLoginSignup={setLoginSignup} />
          : <SignupForm setLoginSignup={setLoginSignup} />
        }
      </div>
    </div>
  )
}

export default Login