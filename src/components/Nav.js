import React, {useState} from 'react';
import '../styles/Nav.css'
import { Link } from 'react-router-dom';

function Nav() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };
  return (
    <div className='container'>

    <div className='Logo'>
      <h3>LOGO</h3>
    </div>
      
    <div className={`menu ${open ? "open" : ""}`}>
       <ul>
        <li><Link to={`/`}>Home</Link></li>
        <li><Link to={`/`}>About</Link></li>
        <li><Link to={`/`}>Contact</Link></li>
        <li><Link to={`/login`}>Login</Link></li>
        <li><Link to={`/register`}>SignUp</Link></li>
      </ul>
    </div>
    <div className="menu-toggle" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>


    </div>
  );
}

export default Nav;
