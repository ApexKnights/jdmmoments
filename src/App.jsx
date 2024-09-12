import React from 'react'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Diamond from './pages/Diamond'
import SingleProduct from './pages/SingleProduct'
import PVK from './pages/PVK'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/diamond" element={<Diamond />} />
        <Route path="/pvk" element={<PVK />} />
        <Route path="/polki/:title" element={<SingleProduct />} />
        <Route path="/victorian/:title" element={<SingleProduct />} />
        <Route path="/kundan/:title" element={<SingleProduct />} />
        <Route path="/diamond/:title" element={<SingleProduct />} />
        <Route path='*' element={<Home />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
