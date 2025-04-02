import React from 'react'
import Navbar from './components/navbar/Navbar'
import Sidebar from './components/sidebar/Sidebar'
import {Route, Routes} from 'react-router-dom'
import List from './pages/List/List'
import Order from './pages/Orders/Order'
import Add from './pages/Add/Add'

const App = () => {
  return (
    <div>
      <Navbar/>
      <hr/>
      <div className="app-content">
        <Sidebar/>
        <Routes>
          <Route path='/add' element={<Add/>}/>
          <Route path='/list' element={<List/>}/>
          <Route path='/orders' element={<Order/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App