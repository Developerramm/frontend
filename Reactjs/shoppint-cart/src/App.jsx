import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import CartPage from './pages/CartPage'

const App = () => {
  return (
    <div>
     <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element = {<Home />} />
        <Route path ="/cart" element = {<CartPage />} />
      </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
