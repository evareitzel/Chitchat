import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
// import Main from './components/Main'
import Login from './pages/Login'

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    // auto-login
    fetch("/me").then(res => {
      if (res.ok) {
        res.json().then(user => setUser(user))
      }
    })
  }, [])

  if (user) {
    return (
      <>
        <Header 
          user={user} 
          onLogout={() => setUser(null)} 
        />
        {/* <Main user={user} /> */}
      </>
      )  
  } else {
    return (
      <>
        <Login onLogin={user => setUser(user)} />
      </>
    )
  }
}

export default App