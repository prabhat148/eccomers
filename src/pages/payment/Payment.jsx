
import React from 'react'
import {BrowserRouter as Router, Routes, Route  } from 'react-router-dom'
import Pay from './Pay'
import Success from './success'

function Payment() {
  return (
   <Router> 
    <Routes>
        <Route path="/pay"  element={<Pay/>}>
            
        </Route>
        <Route path='/success' element={<Success/>}>
            
        </Route>
    </Routes>
   </Router>
  )
}

export default Payment
