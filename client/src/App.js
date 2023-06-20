import { useEffect, useState } from 'react'
import './App.css'
import Login from './components/Login'
import Navbar from './components/Navbar'

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch("/me").then(res => {
      if (res.ok) {
        res.json().then(user => setUser(user))
      }
    })
  }, [])

  if (user) {
    return (
      <>
        <Navbar />
        <h2>Welcome, {user.username}!</h2>
      </>
    )
  } else {
    return <Login onLogin={setUser} />
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>🗪 chitchat</h1> 
        {/* <a className="App-link"></a> */}
      </header>
      {/* <routes> */}
      {/* </routes> */}
      <Login />
    </div>
  );
}

export default App;
