import { useState,  useEffect } from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Notfound from './pages/Notfound'
import  Login from './pages/Login'
import Home from './pages/Home'
import Signup from './pages/Signup'
import './App.css'
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home  Name={"Pravallika"}/>} />
      <Route path='/login' element={<Login />} />
       <Route path='/Signup' element={<Signup />} />
      <Route path='*' element={<Notfound />} />
     </Routes>
    </BrowserRouter>
  )
    

}

export default App
