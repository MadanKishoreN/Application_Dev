// import React, { useState, useEffect } from 'react';
// import '../Asserts/Style/ManageJobs.css';

// const initialJobs = [
//   { id: 1, title: 'Software Engineer', description: 'Develop and maintain software applications.', status: 'Open' },
//   { id: 2, title: 'Product Manager', description: 'Oversee the development and management of products.', status: 'Closed' },
//   // Add more initial jobs if needed
// ];

// const ManageJobs = () => {
//   const [jobs, setJobs] = useState([]);
//   const [editingJob, setEditingJob] = useState(null);
//   const [newJob, setNewJob] = useState({ title: '', description: '', status: 'Open' });

//   useEffect(() => {
//     // Fetch jobs from an API or load initial jobs
//     setJobs(initialJobs);
//   }, []);

//   const handleEdit = (job) => {
//     setEditingJob(job);
//   };

//   const handleDelete = (id) => {
//     setJobs(jobs.filter(job => job.id !== id));
//   };

//   const handleSave = () => {
//     if (editingJob) {
//       setJobs(jobs.map(job => (job.id === editingJob.id ? editingJob : job)));
//       setEditingJob(null);
//     } else {
//       setJobs([...jobs, { ...newJob, id: jobs.length + 1 }]);
//       setNewJob({ title: '', description: '', status: 'Open' });
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     if (editingJob) {
//       setEditingJob({ ...editingJob, [name]: value });
//     } else {
//       setNewJob({ ...newJob, [name]: value });
//     }
//   };

//   return (
//     <div className="manage-jobs-container">
//       <h2>Manage Jobs</h2>

//       <div className="job-form">
//         <input
//           type="text"
//           name="title"
//           placeholder="Job Title"
//           value={editingJob ? editingJob.title : newJob.title}
//           onChange={handleInputChange}
//         />
//         <textarea
//           name="description"
//           placeholder="Job Description"
//           value={editingJob ? editingJob.description : newJob.description}
//           onChange={handleInputChange}
//         ></textarea>
//         <select
//           name="status"
//           value={editingJob ? editingJob.status : newJob.status}
//           onChange={handleInputChange}
//         >
//           <option value="Open">Open</option>
//           <option value="Closed">Closed</option>
//         </select>
//         <button onClick={handleSave}>{editingJob ? 'Update Job' : 'Add Job'}</button>
//       </div>

//       <div className="jobs-list">
//         {jobs.length > 0 ? (
//           jobs.map((job) => (
//             <div key={job.id} className="job-item">
//               <h3>{job.title}</h3>
//               <p>{job.description}</p>
//               <span className={`status ${job.status.toLowerCase()}`}>{job.status}</span>
//               <div className="job-actions">
//                 <button onClick={() => handleEdit(job)}>Edit</button>
//                 <button onClick={() => handleDelete(job.id)}>Delete</button>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p>No jobs available. Add a new job.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ManageJobs;
import React, { useState, useEffect } from 'react';
import '../Asserts/Style/ManageJobs.css';

const initialJobs = [
  { id: 1, title: 'Software Engineer', description: 'Develop and maintain software applications.', status: 'Open' },
  { id: 2, title: 'Product Manager', description: 'Oversee the development and management of products.', status: 'Closed' },
  // Add more initial jobs if needed
];

const ManageJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [editingJob, setEditingJob] = useState(null);
  const [newJob, setNewJob] = useState({ title: '', description: '', status: 'Open' });

  useEffect(() => {
    // Fetch jobs from an API or load initial jobs
    setJobs(initialJobs);
  }, []);

  const handleEdit = (job) => {
    setEditingJob(job);
  };

  const handleDelete = (id) => {
    setJobs(jobs.filter(job => job.id !== id));
  };

  const handleSave = () => {
    if (editingJob) {
      setJobs(jobs.map(job => (job.id === editingJob.id ? editingJob : job)));
      setEditingJob(null);
    } else {
      setJobs([...jobs, { ...newJob, id: jobs.length + 1 }]);
      setNewJob({ title: '', description: '', status: 'Open' });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (editingJob) {
      setEditingJob({ ...editingJob, [name]: value });
    } else {
      setNewJob({ ...newJob, [name]: value });
    }
  };

  return (
    <div className="manage-jobs-container">
      <h2>Manage Jobs</h2>

      <div className="job-form">
        <input
          type="text"
          name="title"
          placeholder="Job Title"
          value={editingJob ? editingJob.title : newJob.title}
          onChange={handleInputChange}
        />
        <textarea
          name="description"
          placeholder="Job Description"
          value={editingJob ? editingJob.description : newJob.description}
          onChange={handleInputChange}
        ></textarea>
        <select
          name="status"
          value={editingJob ? editingJob.status : newJob.status}
          onChange={handleInputChange}
        >
          <option value="Open">Open</option>
          <option value="Closed">Closed</option>
        </select>
        <button onClick={handleSave}>{editingJob ? 'Update Job' : 'Add Job'}</button>
      </div>

      <div className="jobs-list">
        {jobs.length > 0 ? (
          jobs.map((job) => (
            <div key={job.id} className="job-item">
              <h3>{job.title}</h3>
              <p>{job.description}</p>
              <span className={`status ${job.status.toLowerCase()}`}>{job.status}</span>
              <div className="job-actions">
                <button onClick={() => handleEdit(job)}>Edit</button>
                <button onClick={() => handleDelete(job.id)}>Delete</button>
              </div>
            </div>
          ))
        ) : (
          <p>No jobs available. Add a new job.</p>
        )}
      </div>
    </div>
  );
};

export default ManageJobs;
