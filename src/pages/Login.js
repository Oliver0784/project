import React, { useState } from 'react';
import axios from 'axios';
import { Link,useNavigate } from 'react-router-dom';

function Login() {
  const initialValues = {
    "id":"",
    "name": "",
    "password": ""
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

    axios.post('http://localhost:3001/login', values).then(
        res=>{
          navigate('/jobs');
            // alert("SUCCESFUL LOG IN")
           
        } ).catch(err=>{
        console.log(err)
    })
  }



  return (
    <form onSubmit={handleSubmit}>
      <label>
        id/passport number:
        <input name='id'  type="text"  onChange={(e)=>handleInputChange(e)} />
      </label>
      <label>
        Name:
        <input name='name' type="text" onChange={(e)=>handleInputChange(e)} />
      </label>
      <label>
        Password:
        <input name='password' type="password" onChange={(e)=>handleInputChange(e)} />
      </label>
        <button type="submit" onChange={(e)=>handleSubmit(e)}>Log in</button>
        <h4>Don't have an account? <Link to={`/register`}>click to register</Link></h4>
      </form>
    
  );
};

export default Login;
