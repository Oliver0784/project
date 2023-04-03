import React from 'react'
import '../styles/Homepage.css'



function HomePage() {
 
  return (
    <div className='Body'>
    <div className='container2'>
      <div className='motivate'>
        <h1>FIND YOUR DREAM JOB TODAY!</h1>
        <p>Welcome to our job seeking website!<br/>
         We are dedicated to helping you find your dream job.<br/>
         Our platform provides a user-friendly experience <br/>
         for job seekers to search and apply for open positions.<br/>
          </p>
          <button>FIND JOB NOW</button>
       </div>
       <div className='invite'>
       <img src="/images/front2.jpg" alt="front" />
       </div>
       
    </div>
    <div className='Values'>
      <div className='Expert-Agent'>
       <h3>Expert Agent</h3>
       <p>Lorem ipsum dolor sit amet,<br/> 
       consectetur adipiscing elit.</p>
      </div>
      <div className='Quality'>
       <h3>Quality Standards</h3>
       <p>Lorem ipsum dolor sit amet,<br/> 
       consectetur adipiscing elit.</p>
      </div>
      <div className='Certified'>
      <h3>Certified</h3>
      <p>Lorem ipsum dolor sit amet,<br/> 
       consectetur adipiscing elit.</p>
      </div>
    
    </div>
    <div className='Welcome'>
      <div>
        <img className='wel-image' src="/images/welcome.jpg" alt="front" />
     </div>
      <div className='Welcome-Speech'>
        <h4>Wellcome To SLES</h4>
        <h3>WE HELP YOU GROW YOUR CAREER</h3>
        <p>Curabitur pharetra luctus vulputate. Proin finibus odio vel ipsum scelerisque, luctus bibendum purus pellentesque. Integer porta dolor at consequat maximus. Cras orci nisi, malesuada sed nisl quis, tempus tempus eros. </p>
        <p>you'll see a simple web page with an input field, a button, and an output field.<br/> 
         When you type something into the input field and click the button</p> 
      </div>
    </div>
    <div className='serve'>
      <div className='serve-speech'>
        <h4>What We Serve</h4>
        <h2>We help You To Find The Right Choice</h2>
        <p>Quisque eu diam a mi vulputate lacinia. Aliquam eros neque, luctus ut ligula in, faucibus fermentum sem.Nulla varius auctor varius. Mauris erat nisl, aliquet sed libero et, ultrices venenatis nunc.</p>
      </div>
      <div className='serve-div'>
      <div className='one'>
        <h3>Develop& Training</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
       <div className='1'>
       <h3>Develop& Training</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
       </div>
        <div className='1'>
        <h3>Develop& Training</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
         <div className='1'>
         <h3>Develop& Training</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
         </div>
      </div>
    </div>
    <div className='how-we-work'>
      <div className='h-speech'>
        <h3>How We Work</h3>
        <h2>We Dont Stop After Hiring</h2>
        <ol className='h-list'>
    <li><h3>This is the first item</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod tortor ac lacus tempor, id cursus mi rutrum.</p>
    </li>
    <li>
        <h3>This is the second item</h3>
        <p>Suspendisse bibendum massa sed ante eleifend rhoncus. Fusce consectetur, velit eget suscipit gravida, libero felis commodo tortor, vel fringilla risus justo non lorem.</p>
    </li>
    <li>
        <h3>This is the third item</h3>
        <p>Praesent interdum libero vitae purus hendrerit venenatis. Etiam mattis eros vel mi bibendum vehicula. Ut eu magna in metus sodales vehicula id sed mi.</p>
    </li>
      </ol>
      </div>
      <div className='h-img'>
      <img className='wel-image' src="/images/front2.jpg" alt="front" />
      <img className='wel-image' src="/images/front2.jpg" alt="front" />
      </div>
  
    </div>
    </div>
 
  )
}

export default HomePage