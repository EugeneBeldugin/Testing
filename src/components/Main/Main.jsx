import React from 'react'
import Home from '../Home/Home'
import { Routes, Route } from 'react-router-dom'
import AboutUs from '../AboutUs/AboutUs'

const Main = () => {
   return (
      <main>
         <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/about' element={<AboutUs />}/>
         </Routes>
      </main>
   )
}

export default Main
