import React from 'react'
import Navbar from './components/navbar/Navbar'
import Sidebar from './components/sidebar/Sidebar'
import { Route,Routes } from 'react-router-dom'
import List from './pages/list/List'
import Order from './pages/Order/Order'
import Add from './pages/add/Add'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {

  const url = "https://food18-app-backend.onrender.com"
  return (
    <div>
      <ToastContainer/>
      <Navbar/>
      <hr />
      <div className="app-content">
        <Sidebar/>
        <Routes>
          <Route path='/add' element={<Add url={url}/>} />
          <Route path='/list' element={<List url={url}/>} />
          <Route path='/order' element={<Order url={url}/>} />

        </Routes>
      </div>


    </div>
  )
}

export default App
