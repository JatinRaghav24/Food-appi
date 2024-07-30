import { useState } from 'react'
import './App.css'
import { Navbar } from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import Order from './pages/PlaceOrder/Order'
import Footer from './components/footer/Footer'
import Login from './components/login/Login'
import Verify from './pages/verify/Verify'
import Myorders from './pages/myOrders/Myorders'


function App() {
const [login,setLogin] = useState(false)


  return (
    <>
    {login?<Login setLogin={setLogin}/>:<></>}
    <div className="app">

      <Navbar setLogin={setLogin}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={<Order/>}/>
        <Route path='/verify' element={<Verify/>}/>
        <Route path='/myorders' element={<Myorders/>}/>


      </Routes>
    </div>
    <Footer/>
      
    </>
  )
}

export default App
