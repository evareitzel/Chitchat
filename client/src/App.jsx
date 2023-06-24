import './App.css'
import React from "react"
import NavBar from './components/NavBar'
import Main from './components/Main'

function App() {

  return (
    <div className="App">
      <NavBar />
      <Main />
    </div>
  )
}

export default App


// import { useSelector } from "react-redux"
// import { selectUser } from "./userSlice"

  // const user = useSelector(selectUser)


  // const [user, setUser] = useState(null) // REMOVE STATE
  // const [user, setUser] = useState({ "id": 1, "username": "Momo" })

  // useEffect(() => {
  //   // auto-login
  //   fetch("/me").then(res => {
  //     if (res.ok) {
  //       res.json().then(user => setUser(user))
  //     }
  //   })
  // }, [])

  // console.log(user)

  // if (user) {
    // return (
    //   <div className="App">
    //     <Header user={user} onLogout={() => setUser(null)} className="App-header" />
    //     <Main user={user} />
    //   </div>
    // )  
  // } else {
    // return <Login onLogin={user => setUser(user)} />
  // }