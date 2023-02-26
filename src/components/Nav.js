import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
       <ul>
        <li><Link to={`/`}>Home</Link></li>
        <li><Link to={`/`}>About</Link></li>
        <li><Link to={`/`}>Contact</Link></li>
        <li><Link to={`/login`}>Login</Link></li>
        <li><Link to={`/register`}>Register</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;
