import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from './pages/Home/Home'
import Login from './components/Login/Login'
import CartPage from './pages/cart/CartPage'

function App() {
  

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/cart" element={<CartPage/>}/>
        </Routes>
      </Router>
        
    </>
  )
}

export default App
