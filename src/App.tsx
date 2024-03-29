import './App.css'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from './pages/Home/Home'
import Login from './components/Login/Login'
import Cart from "../src/components/cart/Cart"

function App() {
  

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/cart" element={<Cart/>}/>

        </Routes>
      </Router>
        
    </>
  )
}

export default App
