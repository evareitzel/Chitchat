import LoginForm from '../components/LoginForm'
import SignupForm from '../components/SignupForm'

export default function Login({ onLogin }) {

  return(
    <>
      <LoginForm onLogin={onLogin} />
      <SignupForm onLogin={onLogin} />
    </>
  )
}