import { useEffect, useState } from "react" // useEffect
import { useSelector, useDispatch } from "react-redux"
import { fetchUser, selectUser } from '../features/userSlice'
import LoginForm from '../components/LoginForm'
import SignupForm from '../components/SignupForm'
import Dashboard from './Dashboard'

function Login() {
  // const user = useSelector(selectUser)

  const [loginSignup, setLoginSignup] = useState(true)

  // if (user) return <Dashboard />

  ///////////
  const user = useSelector(selectUser) // NEW
  const dispatch = useDispatch() // NEW

  useEffect(() => {
    dispatch(fetchUser())
  }, [dispatch])

  // if (!user) return <Login /> // NEW
  if (user) return <Dashboard /> // NEW
  ///////////

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