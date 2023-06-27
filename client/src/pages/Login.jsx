import {useEffect, useState} from "react"
import LoginForm from '../components/LoginForm'
import SignupForm from '../components/SignupForm'

function Login() {
  const [loginSignup, setLoginSignup] = useState(true)
  // const [keys, setKeys] = useState(null)

  // const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(fetchUser())    
  // }, [dispatch]);  

  return(
    <>
      {loginSignup 
        ? <LoginForm setLoginSignup={setLoginSignup} />
        : <SignupForm setLoginSignup={setLoginSignup} /> // {keys}
      }
    </>
  )
}

export default Login