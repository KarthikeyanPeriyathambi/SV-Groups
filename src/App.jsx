import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/home/Home'
import { Footer } from './Components/footer/Footer'
import { HelmetProvider } from 'react-helmet-async'

export const App = () => {
  return (
    <HelmetProvider>
    <Routes>
    <Route path="/" element={<Home />} />
    </Routes> 
 <Footer/>
 </HelmetProvider>
  )
}


