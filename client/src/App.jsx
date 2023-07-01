import './App.css'
import React from "react" // , { useEffect }
import { Routes, Route } from "react-router-dom"
// import { useSelector } from "react-redux"
// import { selectUser } from "./features/userSlice"
import NavBar from './components/NavBar'
import Dashboard from './pages/Dashboard'
import Groups from './pages/Groups'
// import SignupForm from './components/SignupForm'
import Login from './pages/Login'
// import Group from "./pages/Group"

function App() {
  // const user = useSelector(selectUser) // NEW
  // const dispatch = useDispatch() // NEW

  // useEffect(() => {
  //   dispatch(fetchUser())
  // }, [])

  // if (!user) return <Login /> // NEW

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/groups" element={<Groups />} />
        {/* <Route path='/login' element={<SignupForm />} /> */}
        <Route path='/login' element={<Login />} />
        {/* <Route path="/group" element={<Group />} /> */}
      </Routes>
      <NavBar />
      <Dashboard /> {/* NEW */}


      {/* <Dashboard /> NEW */}
    </div>
  )
}

export default App