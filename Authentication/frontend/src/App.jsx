import './App.css'
import Home from './Component/Home'
import Login from './Component/Login'
import Signup from './Component/Signup'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div>
     
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
