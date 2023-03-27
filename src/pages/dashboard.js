import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { BiFilter } from 'react-icons/bi';
import axios from 'axios';
import '../styles/Dashboard.css'

function Dashboard() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3001/jobs')
      .then((response) => {
        setJobs(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const query = e.target.value;
    axios
      .post(`http://localhost:3001/job`, { title: query, location: query })
      .then((response) => {
        setJobs(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className='jobBoard'>
      <div className='jobMenu'></div>
      <div className='dashboard'>
        <div className='dash-nav'>
          <input
            className='search-bar'
            type='text'
            placeholder='search'
          
          />
          <div className='user'>
            <Link to={`/account`}>
              <FaUserCircle />
              <span>user name</span>
            </Link>
          </div>
        </div>
        <div className='job-board'>
          <h2>JOB BOARD</h2>
          <form className='categories'   onChange={(e)=>handleSearch (e)}>
            <input className='search' type='text' placeholder='search by job,title,company'  onChange={(e)=>handleSearch (e)}/>
            <input className='location' type='text' placeholder='Anywhere'  onChange={(e)=>handleSearch (e)}/>
            <button className='filter' onChange={(e)=>handleSearch (e)}>
              filter <BiFilter />
            </button>
          </form>
          <div className='sugestions'>
            <span>filter</span>
          </div>
          <div className='jobs'>
            {jobs?.map((job) => (
              <div className='job' key={job.id}>
                <img src={job.image} alt='job display' />
                <h5>{job.title}</h5>
                <span>{job.location}</span>
                <span>{job.skills}</span>
                <h4>{job.company}</h4>
                <p>{job.description}</p>
                <span>date</span>
                <a href='https://www.kplc.co.ke'>Apply Now</a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


export default Dashboard;