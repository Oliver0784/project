import React from 'react';
import '../styles/Nav.css'
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div className='container'>

    <div className='Logo'>
      <h3>LOGO</h3>
</div>
      <div/>

    <div className='nav'>
       <ul>
        <li><Link to={`/`}>Home</Link></li>
        <li><Link to={`/`}>About</Link></li>
        <li><Link to={`/`}>Contact</Link></li>
        <li><Link to={`/login`}>Login</Link></li>
        <li><Link to={`/register`}>SignUp</Link></li>
      </ul>
    </div>

    </div>
  );
}

export default Nav;
