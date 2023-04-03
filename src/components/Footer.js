import React from 'react';
import '../styles/footer.css'
import {AiFillInstagram} from 'react-icons/ai'
import {BsFacebook,BsTwitter} from 'react-icons/bs'


function Footer() {
  return (
    <footer>
      <div className='Footer'>
        <div className='Logoo'>
        <img src="/images/logo.png" alt="Logo" />
          <h3>Vision: To help our users to secure <br/>
           job opppotunities worldwide</h3>
        </div>
        <div className='Address'>
          <h3>Address</h3>
          <p>Dedan Kimathi University</p>
          <p> P.O.BOX 3256478</p>
          <p> NYERi, KENYA</p>
        </div>
        <div className='Contact'>
          <h3> Our Contact</h3>
          <p>oliveradede08@gmail.com</p>
          <p>098768390</p>
          <p>070128397</p>
        </div>
        <div className='SocialMedia'>
        <a href="#"><BsFacebook/></a>
        <a href="#"><BsTwitter/></a>
          <a href="#"><AiFillInstagram/></a>
        </div>
       
      </div>
      <hr/>
      <p>&copy; {new Date().getFullYear()} OliverAdede_08</p>
    </footer>
  );
}

export default Footer;
