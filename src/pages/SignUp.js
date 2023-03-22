import React, { useState } from 'react';
import "../styles/Signup.css"

function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [industry, setIndustry] = useState('');
  const [salaryExpectations, setSalaryExpectations] = useState('');
  const [resume, setResume] = useState(null);
  const [coverLetter, setCoverLetter] = useState(null);
  const [skills, setSkills] = useState('');
  const [interests, setInterests] = useState('');
  const [privacyPolicy, setPrivacyPolicy] = useState(false);

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      console.log({
        name,
        email,
        phone,
        location,
        jobTitle,
        industry,
        salaryExpectations,
        resume,
        coverLetter,
        skills,
        interests,
        privacyPolicy,
      });
    } else {
      setErrors(errors);
    }
  };

  const validateForm = () => {
    let errors = {};

    if (!name) {
      errors.name = 'Name is required';
    }

    if (!email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid';
    }

    if (!phone) {
      errors.phone = 'Phone is required';
    } else if (!/^[0-9]+$/.test(phone)) {
      errors.phone = 'Phone is invalid';
    }

    if (!location) {
      errors.location = 'Location is required';
    }

    if (!jobTitle) {
      errors.jobTitle = 'Job title is required';
    }

    if (!industry) {
      errors.industry = 'Industry is required';
    }

    if (!skills) {
      errors.skills = 'Skills are required';
    }

    if (!interests) {
      errors.interests = 'Interests are required';
    }

    if (!privacyPolicy) {
      errors.privacyPolicy = 'You must agree to the Privacy Policy';
    }

    return errors;
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        {errors.name && <span className='errors'>{errors.name}</span>}
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        {errors.email && <span className='errors'>{errors.email}</span>}
      </label>
      <label>
        Phone:
        <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
        {errors.phone && <span className='errors'>{errors.phone}</span>}
      </label>
      <label>
        Location:
        <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
        {errors.location && <span className='errors'>{errors.location}</span>}
      </label>
    
      <label>
        Desired Job Title:
        <input type="text" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} />
        {errors.jobTitle && <span className='errors'>{errors.jobTitle}</span>}
      </label>
      <label>
        Desired Industry:
        <input type="text" value={industry} onChange={(e) => setIndustry(e.target.value)} />
        {errors.industry && <span className='errors'>{errors.industry}</span>}
      </label>
      <label>
        Salary Expectations:
        <input type="text" value={salaryExpectations} onChange={(e) => setSalaryExpectations(e.target.value)} />
        {errors.salaryExpectations && <span className='errors'>{errors.salaryExpectations}</span>}
      </label>
      <label>
        Upload Resume:
        <input type="file" accept=".pdf,.doc,.docx" onChange={(e) => setResume(e.target.files[0])} />
      </label>
      <label>
        Upload Cover Letter:
        <input type="file" accept=".pdf,.doc,.docx" onChange={(e) => setCoverLetter(e.target.files[0])} />
      </label>
      <label>
        Skills:
        <textarea value={skills} onChange={(e) => setSkills(e.target.value)} />
        {errors.skills && <span className='errors'>{errors.skills}</span>}
      </label>
      <label>
        Interests:
        <textarea value={interests} onChange={(e) => setInterests(e.target.value)} />
        {errors.interests && <span className='errors'>{errors.interests}</span>}
      </label>
      <label className='checkbox-label'>
        <input type="checkbox" checked={privacyPolicy} onChange={(e) => setPrivacyPolicy(e.target.checked)} />
        {errors.privacyPolicy && <span className='errors'>{errors.privacyPolicy}</span>}
        I have read and agree to the Privacy Policy.
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default SignUp
