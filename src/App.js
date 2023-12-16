import React from 'react'
import Sorting from './Components/Sorting'
import {Route, Routes} from 'react-router-dom';
import Home from './Components/Home';

// import Learn from './Components/Learn';

export default function App() {
  return (
   
      <Routes>
        <Route path="/" element={<Home />} />
       
        <Route path="/sorting/selection" element={<Sorting name = "selection" />} />
        <Route path="/sorting/insertion" element={<Sorting name = "insertion" />}/>
        <Route path="/sorting/bubble" element={<Sorting  name="bubble"/>} />

      </Routes>
  
  )
}
