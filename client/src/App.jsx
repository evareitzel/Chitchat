import './App.css'
import React, { useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { selectUser, fetchUser } from "./features/userSlice"
import NavBar from './components/NavBar'
import Dashboard from './pages/Dashboard'
import Groups from './pages/Groups'
import Login from './pages/Login'

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUser())
  }, [dispatch])

  // console.log(useSelector(state => state))

  if (!user || user.length === 0) return <Login /> // FIX to follow URL route path '/login'

  return (
    <div className="App">
      <NavBar />
      <Routes>      
        <Route path="/" element={<Dashboard />} /> {/* render dashboard onLogin */}
        <Route path="/groups/*" element={<Groups />} />
        <Route path='/login' element={<Login />} />
        {/* <Route path='/groups/:id' element={<Group />} /> */}
        {/* <Route /> */} {/* 5 client side routes */}
      </Routes>
    </div>
  )
}

export default App