import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Asserts/Style/ApplyJobs.css';

const ApplyJob = ({ onApply }) => {
  const [application, setApplication] = useState({
    jobId: '',
    coverLetter: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setApplication({ ...application, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onApply(application); // Handle the application submission logic
    navigate('/user-dashboard/applied-jobs'); // Redirect to Applied Jobs after applying
  };

  return (
    <div className="apply-job-container">
      <h2>Apply for a Job</h2>
      <form onSubmit={handleSubmit} className="apply-job-form">
        <div className="form-group">
          <label>Job ID:</label>
          <input 
            type="text" 
            name="jobId" 
            value={application.jobId} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Cover Letter:</label>
          <textarea 
            name="coverLetter" 
            value={application.coverLetter} 
            onChange={handleChange} 
            required 
          />
        </div>
        <button type="submit" className="submit-button">Apply</button>
      </form>
    </div>
  );
};

export default ApplyJob;
