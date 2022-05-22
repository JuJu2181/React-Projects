import React from 'react'
import { Routes, Route, } from "react-router-dom";
import Home from './Home';
import Questions from './Questions';
import TopBlob from "../components/TopBlob";
import BottomBlob from "../components/BottomBlob";
import Navbar from '../components/Navbar';
import Results from './Results';

function Pages() {
  return (
    <div className="main">
      <TopBlob />
      <Navbar />
      <Routes>
          <Route path='/' element={<Home />} />
        <Route path='/questions' element={<Questions />} />
        <Route path='/results' element={<Results/>}/>
    </Routes>
    <BottomBlob />
    </div>
  )
}

export default Pages
