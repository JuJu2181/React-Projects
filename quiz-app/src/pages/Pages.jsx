import React from 'react'
import { Routes, Route} from "react-router-dom";
import Home from './Home';
import Questions from './Questions';

function Pages() {
  return (
    <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/questions' element={<Questions/>}/>
    </Routes>
  )
}

export default Pages
