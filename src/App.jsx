 
import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './component/Login'
import Singup from './component/Singup'
import Home from './component/Home'
import { Header } from './component/Header'
 

const App = () => {
  return (
   <BrowserRouter>
    <Header/>
    <Routes>
        <Route path='/login' element={<Login/>}/>   
        <Route path='/signup' element={<Singup/>}/>   
        <Route path='/' element={<Home/>}/>   
    </Routes>
   </BrowserRouter>
  )
}

export default App