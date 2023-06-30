import { useState } from "react"
import { useSelector } from "react-redux"
import { selectUser } from '../features/userSlice'
import LoginForm from '../components/LoginForm'
import SignupForm from '../components/SignupForm'
import Home from './Home'

function Login() {
  const user = useSelector(selectUser)

  const [loginSignup, setLoginSignup] = useState(true)

  if (user) return <Home />

  return(
    <div className="App">
      {loginSignup 
        ? <LoginForm setLoginSignup={setLoginSignup} />
        : <SignupForm setLoginSignup={setLoginSignup} />
      }
    </div>
  )
}

export default Login