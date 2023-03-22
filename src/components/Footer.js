import React from 'react';
import '../styles/footer.css'

function Footer() {
  return (
    <footer>
      <div className='Footer'>
        <div className='Logoo'>
          <h3>LOGO</h3>
          <h5>Vision: To help our users to secure <br/>
           job opppotunities worldwide</h5>
        </div>
        <div className='Address'>
          <h4>Address</h4>
          <hr/>
          <p>Dedan Kimathi University</p>
          <p> P.O.BOX 3256478</p>
          <p> NYERi, KENYA</p>
        </div>
        <div className='Contact'>
          <h4>Contact</h4>
          <hr/>
          <p>oliveradede08@gmail.com</p>
          <p>098768390</p>
          <p>070128397</p>
        </div>
        <div className='SocialMedia'>
          icons
        </div>
        <div className='NewsLetter'>
          <h5>subscribe to our daily updates</h5>
          <div >enter email <button>Submit</button></div>
        </div>
      </div>
      <hr/>
      <p>&copy; {new Date().getFullYear()} OliverAdede_08</p>
    </footer>
  );
}

export default Footer;
