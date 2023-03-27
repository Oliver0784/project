import React, { useState, useEffect } from 'react';


function Job() {
  useEffect(() => {
    axios.post('http://localhost:3001/job')
    .then(response => {
    setJobs(response.data);
    })
    .catch(error => {
    console.log(error);
    });
    }, []);
  return (
    <div>Job</div>
  )
}

export default Job