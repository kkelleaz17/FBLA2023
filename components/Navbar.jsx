import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Nav.css'
import Tolleson from '../assets/Tolleson1.png'

export default function Navbar() {
  return (
    <nav className='Navbar'>
      <div className='Logo'>
        <img src={Tolleson} />
      </div>

      <div className='Links'>
        <Link>Home</Link>
        <Link>Benifits</Link>
        <Link>Job Positions</Link>
        <Link>Add</Link>
      </div>
      
    </nav>
  );
}
