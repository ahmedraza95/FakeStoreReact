import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import Login from '../pages/Login'
import Signup from '../pages/signup'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <div className='links'>
          <Link className='href' to={'/login'}>Login</Link>
          <Link className='href' to={'/signup'}>SignUp</Link>
        </div>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App
