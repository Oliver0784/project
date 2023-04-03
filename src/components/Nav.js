import React ,{useState , useEffect}from 'react';
import '../styles/Nav.css'
import { Link, useNavigate } from 'react-router-dom';

function Nav() {
 
  const navigate=useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState("");

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    if (user) {
      setCurrentUser(user.response.data.name);
      setLoggedIn(true);
    }
  }, []);

 
  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    setCurrentUser("");
    setLoggedIn(false);
    navigate('/');
    window.location.reload();
  };


  return (
    <div className='container'>

    <div className='Logo'>
    <img src="/images/logo.png" alt="Logo" />
    </div>
      
    <div className="menu">
       <ul>
        <li><Link to={`/`}>Home</Link></li>
        <li><Link to={`/`}>About</Link></li>
        <li><Link to={`/contact`}>Contact</Link></li>
        {loggedIn ? (
          <>
          
          <li><Link to="/jobs">Job-List</Link></li>
            <li><Link to="/account">welcome, {currentUser}</Link></li>
            <li><button onClick={handleLogout}>Log out</button></li>
          </>
        ) : (
          <>
            <li><Link to="/login">Log in</Link></li>
            <li><Link to="/register">Sign up</Link></li>
          </>
        )}
      </ul>
     
    </div>
  


    </div>
  );
}

export default Nav;
