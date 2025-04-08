import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserLayout from './components/Layout/UserLayout'

const App = () => {
  return (
    <BrowserRouter>
    {/*
      www.sdsj.com/home
      www.sdsj.com/products 
      www.sdsj.com/cart

     */}
    <Routes>
      <Route path='/' element={<UserLayout/>}>
      {/* User Layout */}
      
      </Route>
      <Route>{/* Admin Layout */}</Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App