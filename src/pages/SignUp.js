import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "../styles/Signup.css"


function SignUp() {
  const initialValues = {
    "id":"",
    "name": "",
    "email": "",
    "phone": "",
    "location": "",
    "password": "",
    "title": "",
    "industry": "",
    "salary": "",
    "skills": "",
    "intrest": "",
};
const [values, setValues] = useState(initialValues);
const navigate=useNavigate();

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

    axios.post('http://localhost:3001/', values).then(
        res=>{
            alert("SIGNUP SUCCESFUL LOG IN TO CONTINUE")
            navigate('/login')  
        } ).catch(err=>{
        console.log(err)
    })
  }



  return (
    <form onSubmit={handleSubmit}>
      <label>
        id:
        <input name='id'  type="text"  onChange={(e)=>handleInputChange(e)} />
      </label>
      <label>
        Name:
        <input name='name' type="text" onChange={(e)=>handleInputChange(e)} />
      </label>
      <label>
        Email:
        <input name='email' type="email" onChange={(e)=>handleInputChange(e)} />
      </label>
      <label>
        Phone:
        <input name='phone' type="tel" onChange={(e)=>handleInputChange(e)} />
      </label>
      <label>
        Location:
       <input  name='location' type="text" onChange={(e)=>handleInputChange(e)} /> 
      </label>
      <label>
        Password:
        <input name='password' type="text" onChange={(e)=>handleInputChange(e)} />
      </label>
      <label>
        Desired Job Title:
        <input name='title' type="text"onChange={(e)=>handleInputChange(e)} />
      </label>
      <label>
        Desired Industry:
        <input name='industry' type="text"onChange={(e)=>handleInputChange(e)} />
      </label>
      <label>
        Salary Expectations:
        <input name='salary' type="text"onChange={(e)=>handleInputChange(e)} />
      </label>
      <label>
        Interests:
        <textarea name='intrest' onChange={(e)=>handleInputChange(e)} />
      </label>
      <label>
        Skills:
        <textarea name='skills' onChange={(e)=>handleInputChange(e)} />
      </label>
      <label>
        Upload Cover Letter:
        <input type="file" accept=".pdf,.doc,.docx"  />
      </label>
      <label>
        Upload Resume:
        <input type="file" accept=".pdf,.doc,.docx"  />
      </label>
      <label className='checkbox-label'>
        <input type="checkbox" onChange={(e)=>handleInputChange(e)} />
        I have read and agree to the Privacy Policy.
      </label>
      <button type="submit" onClick={(e)=>{handleSubmit(e)}}>Submit</button>
    </form>
  );
}

export default SignUp
