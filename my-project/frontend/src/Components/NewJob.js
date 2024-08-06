import React, { useState } from 'react';

const NewJob = () => {
  const [jobTitle, setJobTitle] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [companyName, setCompanyName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can handle form submission logic here, e.g., posting data to an API
    alert('Job posted successfully!');
  };

  return (
    <div>
      <h2>Post a New Job</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: '0 auto' }}>
        <div style={{ marginBottom: '16px' }}>
          <label htmlFor="job-title" style={{ display: 'block', marginBottom: '8px' }}>Job Title</label>
          <input
            id="job-title"
            type="text"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
            required
          />
        </div>
        <div style={{ marginBottom: '16px' }}>
          <label htmlFor="job-description" style={{ display: 'block', marginBottom: '8px' }}>Job Description</label>
          <textarea
            id="job-description"
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc', height: '150px' }}
            required
          />
        </div>
        <div style={{ marginBottom: '16px' }}>
          <label htmlFor="company-name" style={{ display: 'block', marginBottom: '8px' }}>Company Name</label>
          <input
            id="company-name"
            type="text"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
            required
          />
        </div>
        <button
          type="submit"
          style={{ padding: '10px 20px', borderRadius: '4px', border: 'none', backgroundColor: '#007bff', color: '#fff', fontSize: '16px' }}
        >
          Post Job
        </button>
      </form>
    </div>
  );
};

export default NewJob;
