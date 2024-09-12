import React, { useEffect, useState } from 'react'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Diamond from './pages/Diamond'
import SingleProduct from './pages/SingleProduct'
import PVK from './pages/PVK'
import Loader from './components/Loader'

const App = () => {
  const [loader, setLoader] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoader(false)
    }, 2500)
  }, [])
  return (
    <>
      {loader ? <Loader /> : <div>
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
      </div>}

    </>
  )
}

export default App
