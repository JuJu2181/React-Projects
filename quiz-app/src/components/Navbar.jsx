import React from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <Link to='/' className='btn-link'>
      <p className='logo'>Quizzy</p>
    </Link>
  )
}

export default Navbar
