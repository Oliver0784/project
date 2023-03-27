import React from 'react'
import '../styles/landingPage.css'



function HomePage() {
 
  return (
    <div className='Body'>
    <div className='container2'>
       <div className='invite'>
       <img src="/images/front2.jpg" alt="front" />
       </div>
       <div className='motivate'>
        <h2>LET US CONNECT YOU TO YOUR DREAM JOB TODAY!</h2>
        <p>Welcome to our job seeking website!<br/>
         We are dedicated to helping you find your dream job.<br/>
         Our platform provides a user-friendly experience <br/>
         for job seekers to search and apply for open positions.<br/>
          </p>
          <button>EXPLORE NOW </button>
       </div>
    </div>
    <div className='filter'>
      <div className='category'>
        All category
      </div>
      <div className='Location'>
        Location
      </div>
      <div className='Search'> Search</div>
      <button>Find Job</button>
    </div>
    <div className='blog'>
      <div className='latest'>
        <h5>Internship oppotunity at KPLC</h5>
        <p>you'll see a simple web page with an input field,<br/>
         a button, and an output field.<br/> 
         When you type something into the input field<br/>
          and click the button</p>
        <a href='https://www.kplc.co.ke'>Apply Now</a>
      </div>
      <div className='new'>
        <h5>Internship oppotunity at KPLC</h5>
        <p>you'll see a simple web page with an input field,<br/>
         a button, and an output field.<br/> 
         When you type something into the input field<br/>
          and click the button</p>
        <a href='https://www.kplc.co.ke'>Apply Now</a>
      </div>
      <div className='training'>
        <h5>Internship oppotunity at KPLC</h5>
        <p>you'll see a simple web page with an input field,<br/>
         a button, and an output field.<br/> 
         When you type something into the input field<br/>
          and click the button</p>
        <a href='https://www.kplc.co.ke'>Apply Now</a>
      </div>
    </div>
    </div>
  )
}

export default HomePage