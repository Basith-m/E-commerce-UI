import { Route, Routes } from 'react-router-dom'
import './App.css'
import Register from './pages/auth/Register'
import Login from './pages/auth/Login'
import Home from './pages/home/Home'
// import Login from './pages/auth/Login'

function App() {

  return (
    <>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  )
}

export default App
