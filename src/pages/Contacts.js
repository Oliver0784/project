import React, { useState } from "react";
import '../styles/JobList.css'
import '../styles/Contacts.css'
import axios from "axios";
import{FiPhoneCall} from 'react-icons/fi'

function Contacts() {
 const initialValues ={
      "name":"",
      "email":"",
      "subject":"",
      "message":""
 }
 const [values, setValues] = useState(initialValues);
  
 const handleInputChange = (e) => {
  console.log("val",e.target.value, "name", e.target.name)

  const { name, value } = e.target;
  setValues({
    ...values,
    [name]: value,
  });
} 

const handleSubmit=(e)=>{
  e.preventDefault();
  console.log('submitting',values)

  axios.post('http://localhost:3001/contact', values).then(
      res=>{
          alert("message sent kindly wait as our agent contacts you")
          
      } ).catch(err=>{
      console.log(err)
  })
}


  return (
    <div>
      <div className='jobBoard'>
      <div className='jobMenu'>
        <h1>Contact Us</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
      </div>
      <div className='job-img'>
      <img src="/images/front2.jpg" alt="front" />
      </div>
    </div>
    <div className='contacts'>
        <div className='c-speech'>
            <h4>Get in touch</h4>
            <h2>Dont Hesitate To Ask a Question</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
        <div className='contact'>
            <div className='contact-one'>
                <FiPhoneCall/>
                <div><h3>Phone Number</h3><p>070128397</p></div>
            </div>
            <div className='contact-one'>
            <FiPhoneCall/>
                <div><h3>Phone Number</h3><p>070128397</p></div>
            </div>
            <div className='contact-one'>
            <FiPhoneCall/>
                <div><h3>Phone Number</h3><p>070128397</p></div>
            </div>
            <div className='contact-one'>
            <FiPhoneCall/>
                <div><h3>Phone Number</h3><p>070128397</p></div>
            </div>
        </div>
        </div>
        <form onSubmit={handleSubmit}>
        <input type="text"  name='name' placeholder='Your name here' onChange={(e)=>handleInputChange(e)}/>
        <input type="text"  name='email' placeholder='Your email here' onChange={(e)=>handleInputChange(e)}/>
        <input type="text"  name='subject' placeholder='Your Subject here' onChange={(e)=>handleInputChange(e)}/>
        <textarea   name='message' placeholder='Your message here' onChange={(e)=>handleInputChange(e)}/> 
          <button onClick={handleSubmit}>Submit</button>
          
      </form>
    </div>
  </div>
  )
}

export default Contacts