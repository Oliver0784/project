import React, { useState } from 'react';
import axios from 'axios';
import { Link,useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate=useNavigate();
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleIdChange = (event) => {
    setId(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log('submitting',)
    axios.post('http://localhost:3001/login').then(
        res=>{
            alert("YOU ARE LOGGED IN!")
            navigate('/')  
        } ).catch(err=>{
        console.log(err)
    })
  }

  return (
    <div>
      <h2>Login</h2>
      <form >
      <label>
          id:
          <input name='id' type="text" value={id} onChange={handleIdChange} />
        </label>
        <label>
          Name:
          <input name='name'type="text" value={name} onChange={handleNameChange} />
        </label>
        <br />
        <label>
          Password:
          <input name='password' type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <br />
        <button type="submit" onSubmit={handleSubmit}>Log in</button>
        <h4>Don't have an account? <Link to={`/register`}>click to register</Link></h4>
      </form>
    </div>
  );
};

export default Login;
