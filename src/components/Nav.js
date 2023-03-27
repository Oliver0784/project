import React from 'react';
import '../styles/Nav.css'
import { Link } from 'react-router-dom';

function Nav() {
 
  return (
    <div className='container'>

    <div className='Logo'>
    <img src="/images/logo.png" alt="Logo" />
    </div>
      
    <div className="menu">
       <ul>
        <li><Link to={`/`}>Home</Link></li>
        <li><Link to={`/`}>About</Link></li>
        <li><Link to={`/`}>Contact</Link></li>
        <lu className="logSign">
        <li><Link to={`/login`}>Login</Link></li>
        <li><Link to={`/register`}>SignUp</Link></li>
        </lu>
      </ul>
    </div>
  


    </div>
  );
}

export default Nav;
