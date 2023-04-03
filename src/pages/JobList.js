import { useState, useEffect } from 'react';
import {AiOutlineArrowRight} from 'react-icons/ai'
import axios from 'axios';
import '../styles/JobList.css'

function JobList() {
  const [jobs, setJobs] = useState([]); // The full data set
  const [currentPage, setCurrentPage] = useState(1); // The current page number
  const [itemsPerPage, setItemsPerPage] = useState(6); // The number of items to display per page
  const [searchResult, setSearchResult] = useState([]);


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

  
  const handleSearch = (title, location) => {
    axios
      .post('http://localhost:3001/search', { title, location })
      .then((response) => {
        setSearchResult(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };


  // Calculate the index of the first and last item to display
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = searchResult.length > 0 ? searchResult.slice(indexOfFirstItem, indexOfLastItem) : jobs.slice(indexOfFirstItem, indexOfLastItem);

  // Calculate the total number of pages
  const totalPages = Math.ceil((searchResult.length > 0 ? searchResult.length : jobs.length) / itemsPerPage);

  // Generate the pagination buttons
  const pageButtons = [];
  for (let i = 1; i <= totalPages; i++) {
    pageButtons.push(
      <button key={i} onClick={() => setCurrentPage(i)}>
        {i}
      </button>
    );
  }



  return (
    <div className='job-container'>
    <div className='jobBoard'>
      <div className='jobMenu'>
        <h1>Job List</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
      </div>
      <div className='job-img'>
      <img src="/images/front2.jpg" alt="front" />
      </div>
    </div>
    <div className='job-speech'>
      <h4>Jobs Are Available</h4>
      <h2>Job Recommendations You Might Need</h2>
      <p>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc sollicitudin, odio nec cursus lobortis, nunc ipsum suscipit ante, nec tristique tortor felis ac urna. Vivamus laoreet lacus commodo magna tempus, vitae luctus neque sagittis.</p>
    </div>
    <div className='search'>
          <input type='text' placeholder='Title' id='title' />
          <input type='text' placeholder='Location' id='location' />
          <button onClick={() => handleSearch(document.getElementById('title').value, document.getElementById('location').value)}>Search</button>
        </div>
    <div className='job-list'>
    
    {currentData?.map((job) => (
              <div className='job' key={job.id}>
                <div className='job-top'>
                  <img src={job.logo} alt='job display' />
                <h4>{job.company}</h4>
                </div>
                <h3>{job.title}</h3>
                <div className='job-salary'> <h6>{job.location}</h6>
                <span>{job.salary}</span></div>
                <span>{job.skills}</span>
                <div className='job-bottom'>
                <p>{job.description}</p>
                <a href={job.link}>See details<AiOutlineArrowRight/></a>
              </div>
              </div>
            ))}
            <div>
        {pageButtons}
      </div>
    </div>
    
    </div>
  );
}


export default JobList;