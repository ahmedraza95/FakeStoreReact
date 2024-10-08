import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import Login from '../pages/Login'
import Signup from '../pages/signup'
import Headerloginsignup from '../pages/Headerloginsignup'
// import HeaderUser from '../pages/headerUser'
import DashobardUser from '../pages/dashboard'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/dashboard' element={<DashobardUser />} />
        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App
