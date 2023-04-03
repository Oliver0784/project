import React  from 'react';
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import '../styles/account.css'

function Account() {
  const userData = JSON.parse(localStorage.getItem('currentUser'));
  const userId = (userData.response.data.id)
  const navigate=useNavigate();
  

  
  const handleDelete = () => {
    const confirmed = window.confirm('Are you sure you want to delete your account? This action cannot be undone.');
  
    if (confirmed) {
      axios.delete(` http://localhost:3001/profile/${userId}`)
        .then((response) => {
          console.log(response.data);
          alert ('account deleted succesfully')
          localStorage.removeItem("currentUser");
          navigate('/');
          // handle success here if necessary
        })
        .catch((error) => {
          console.log(error);
          // handle error here if necessary
        });
    }
  };
  

  return (
    <div className='account'>
   <div className='profile-speech'>
    <div className='profile-speech-content'>
    <h1>{userData.response.data.name} Profile</h1>
      <p>"Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it." - Steve Jobs, entrepreneur</p>
     
    </div>
       <div className='profile-img'> <img src="/images/front2.jpg" alt="front" /></div>
      </div>
      <div>
      {userData && userData.response.data && (
       <div>
        <h4>here are the deatils you provided us with</h4>
      <p>ID: {userData.response.data.id}</p>
      <p>Name: {userData.response.data.name}</p>
      <p>Email: {userData.response.data.email}</p>
      <p>Phone: {userData.response.data.phone}</p>
      <p>location: {userData.response.data.location}</p>
      <p>salary: {userData.response.data.salary}</p>
      <p>skills: {userData.response.data.skills}</p>
      <p>Title: {userData.response.data.title}</p>
      <p>Interest: {userData.response.data.intrest}</p>
      <p>Indusrty: {userData.response.data.industry}</p>
      </div>
      )}
       <button onClick={handleDelete}>Delete</button>
    </div>
    </div>
  );
}

export default Account;
