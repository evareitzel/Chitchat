import { useEffect, useState } from 'react'
import './App.css'
// import Nav from './components/Nav'
import Header from './components/Header'
import Main from './components/Main'
// import Login from './pages/Login'
// import configureStore from '../configureStore'
// const store = configureStore()

function App() {
  // const [user, setUser] = useState(null)

  // [-- DEV testing
  const [user, setUser] = useState({ "id": 1, "username": "Momo" })
  // const [groups, setGroups] = useState([])

  useEffect(() => {
    fetch('/user')
    .then(r => r.json())
    .then(r => console.log(`Users: ${r}`))
  }, [])

  // fetch('/groups')
  // .then(r => r.json())
  // // .then(r => json.parse(json.stringify(r)))
  // // .then(r => console.log(r))
  // .then(r => setGroups(r))


  // console.log('hi from App.js!')
  // console.log(user) // logs hardcoded data
  // console.log(`Groups: `)
  // console.log(groups)
  // console.log(window.json)
  // console.log(getElementById(1))

  // end DEV testing --]


  // useEffect(() => {
  //   // auto-login
  //   fetch("/me").then(res => {
  //     if (res.ok) {
  //       res.json().then(user => setUser(user))
  //     }
  //   })
  // }, [])

  // if (user) {
    return (
      <div className="App">
        <Header user={user} onLogout={() => setUser(null)} className="App-header" />
        <Main user={user} />
      </div>
    )  
  // } else {
    // return <Login onLogin={user => setUser(user)} />
  // }
}

export default App