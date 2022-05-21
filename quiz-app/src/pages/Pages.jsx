import React from 'react'
import { Routes, Route, Link} from "react-router-dom";
import Home from './Home';
import Questions from './Questions';
import TopBlob from "../components/TopBlob";
import BottomBlob from "../components/BottomBlob";
import Navbar from '../components/Navbar';

function Pages() {
  return (
    <div className="main">
      <TopBlob />
      <Link to='/' className='btn-link'>
        <Navbar />
      </Link> 
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/questions' element={<Questions/>}/>
    </Routes>
    <BottomBlob />
    </div>
  )
}

export default Pages
