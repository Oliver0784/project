import React, { useState } from 'react';
import axios from 'axios';

function Admin() {
  const [job, setJob] = useState({
    logo: '',
    title: '',
    salary: '',
    company: '',
    location: '',
    description: '',
    link: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setJob((prevJob) => ({
      ...prevJob,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3001/jobs/add', job).then(
      res=>{
          alert("job added succesfully")
      } ).catch(err=>{
        alert(err.response.data.message)
      console.log(err)
  })
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Logo:
        <input
          type="text"
          name="logo"
          placeholder="Insert logo URL"
          value={job.logo}
          onChange={handleChange}
        />
      </label>
      <label>
        Title:
        <input
          type="text"
          name="title"
          placeholder="Insert job title"
          value={job.title}
          onChange={handleChange}
        />
      </label>
      <label>
        Salary:
        <input
          type="text"
          name="salary"
          placeholder="Insert salary range"
          value={job.salary}
          onChange={handleChange}
        />
      </label>
      <label>
        Company:
        <input
          type="text"
          name="company"
          placeholder="Insert company name"
          value={job.company}
          onChange={handleChange}
        />
      </label>
      <label>
        Location:
        <input
          type="text"
          name="location"
          placeholder="Insert job location"
          value={job.location}
          onChange={handleChange}
        />
      </label>
      <label>
        Description:
        <textarea
          name="description"
          placeholder="Insert job description"
          value={job.description}
          onChange={handleChange}
        />
      </label>
      <label>
        Link:
        <input
          type="text"
          name="link"
          placeholder="Insert job link"
          value={job.link}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Add Job</button>
    </form>
  );
}

export default Admin;
