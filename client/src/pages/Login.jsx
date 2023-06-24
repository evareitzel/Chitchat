import LoginForm from '../components/LoginForm'
import SignupForm from '../components/SignupForm'

function Login({ onLogin }) {

  return(
    <>
      <LoginForm onLogin={onLogin} />
      <SignupForm onLogin={onLogin} />
    </>
  )
}

export default Login