import { useState } from "react"
import LoginForm from '../components/LoginForm'
import SignupForm from '../components/SignupForm'

function Login() {
  const [loginSignup, setLoginSignup] = useState(true)

  return(
    <>
      {loginSignup 
        ? <LoginForm setLoginSignup={setLoginSignup} />
        : <SignupForm setLoginSignup={setLoginSignup} />
      }
    </>
  )
}

export default Login