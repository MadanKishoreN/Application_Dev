// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Button, AppBar, Toolbar, Typography } from '@mui/material';
// import '../Asserts/Style/Dashboard.css';
// import userlogo from '../Asserts/Images/logo/user.png';
// const UserDashboard = ({ onLogout }) => {
//   return (
//     <div className="dashboard-container">
//       <AppBar position="static">
//         <Toolbar>
//           <Typography variant="h6" component={Link} to="/" color="inherit" style={{ textDecoration: 'none', flexGrow: 1 }}>
//         <img src={userlogo} alt="Logo" style={{ height: '40px', marginRight: '10px' }} />
//             User Dashboard
//           </Typography>
//           <div style={{ display: 'flex', alignItems: 'center' }}>
//             <Button component={Link} to="/profile" color="inherit">
//               Profile
//             </Button>
//             <Button component={Link} to="/jobs" color="inherit">
//               Jobs
//             </Button>
//             <Button component={Link} to="/applied-jobs" color="inherit">
//               Applied Jobs
//             </Button>
//             <Button onClick={onLogout} color="inherit">
//               Logout
//             </Button>
//           </div>
//         </Toolbar>
//       </AppBar>
//       <div className="content">
//         <h2>Welcome to the User Dashboard</h2>
//         {/* Add other user dashboard content here */}
//       </div>
//     </div>
//   );
// };

// export default UserDashboard;
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Button, AppBar, Toolbar, Typography } from '@mui/material';
// import '../Asserts/Style/Dashboard.css';
// import userlogo from '../Asserts/Images/logo/user.png';

// const UserDashboard = ({ onLogout }) => {
//   const [selectedSection, setSelectedSection] = useState('Profile');

//   const handleSectionClick = (section) => {
//     setSelectedSection(section);
//   };

//   const profileDetails = {
//     name: 'John Doe',
//     email: 'john.doe@example.com',
//     address: '123 Main St, Springfield'
//   };

//   const jobs = [
//     { id: 1, title: 'Software Engineer', description: 'Develop and maintain software applications.' },
//     { id: 2, title: 'Product Manager', description: 'Lead product development and strategy.' }
//   ];

//   const appliedJobs = [
//     { id: 1, title: 'Frontend Developer', company: 'Tech Inc.', date: '2024-07-20' },
//     { id: 2, title: 'UX Designer', company: 'Design Co.', date: '2024-07-22' }
//   ];

//   return (
//     <div className="dashboard-container">
//       <AppBar position="static">
//         <Toolbar>
//           <Typography variant="h6" component={Link} to="/" color="inherit" style={{ textDecoration: 'none', flexGrow: 1 }}>
//             <img src={userlogo} alt="Logo" style={{ height: '40px', marginRight: '10px' }} />
//             User Dashboard
//           </Typography>
//           <div style={{ display: 'flex', alignItems: 'center' }}>
//             <Button component={Link} to="/profile" color="inherit" onClick={() => handleSectionClick('Profile')}>
//               Profile
//             </Button>
//             <Button component={Link} to="/jobs" color="inherit" onClick={() => handleSectionClick('Jobs')}>
//               Jobs
//             </Button>
//             <Button component={Link} to="/applied-jobs" color="inherit" onClick={() => handleSectionClick('Applied Jobs')}>
//               Applied Jobs
//             </Button>
//             <Button onClick={onLogout} color="inherit">
//               Logout
//             </Button>
//           </div>
//         </Toolbar>
//       </AppBar>
//       <div className="content">
//         {selectedSection === 'Profile' && (
//           <div className="profile-section">
//             <h1>Profile</h1>
//             <div className="profile-details">
//               <div className="profile-item">
//                 <span>Name: {profileDetails.name}</span>
//               </div>
//               <div className="profile-item">
//                 <span>Email: {profileDetails.email}</span>
//               </div>
//               <div className="profile-item">
//                 <span>Address: {profileDetails.address}</span>
//               </div>
//             </div>
//           </div>
//         )}
//         {selectedSection === 'Jobs' && (
//           <div className="jobs-section">
//             <h1>Jobs</h1>
//             <div className="jobs-list">
//               {jobs.map(job => (
//                 <div className="job-card" key={job.id}>
//                   <h3 className="job-title">{job.title}</h3>
//                   <p className="job-description">{job.description}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}
//         {selectedSection === 'Applied Jobs' && (
//           <div className="applied-jobs-section">
//             <h1>Applied Jobs</h1>
//             <div className="applied-jobs-list">
//               {appliedJobs.map(job => (
//                 <div className="applied-job-card" key={job.id}>
//                   <h3 className="applied-job-title">{job.title}</h3>
//                   <p className="applied-job-company">Company: {job.company}</p>
//                   <p className="applied-job-date">Applied on: {job.date}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default UserDashboard;
// import React from 'react';
// import { Link } from 'react-router-dom';
// import '../Asserts/Style/UserDashboard.css';
// import userlogo from '../Asserts/Images/logo/user.png';

// const UserDashboard = ({ onLogout }) => {
//   return (
//     <div className="dashboard-container">
//       <aside className="sidebar">
//         <div style={{ marginBottom: '20px' }}>
//           <img src={userlogo} alt="Logo" style={{ height: '50px' }} />
//           <h2>User Dashboard</h2>
//         </div>
//         <ul>
//           <li><Link to="/profile">Profile</Link></li>
//           <li><Link to="/jobs">Jobs</Link></li>
//           <li><Link to="/applied-jobs">Applied Jobs</Link></li>
//         </ul>
//         <button onClick={onLogout} style={{ marginTop: '20px', width: '100%' }}>
//           Logout
//         </button>
//       </aside>
//       <div className="content">
//         <h2>Welcome to the User Dashboard</h2>
//         {/* Add other user dashboard content here */}
//       </div>
//     </div>
//   );
// };

// export default UserDashboard;
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Button } from '@mui/material';
// import '../Asserts/Style/UserDashboard.css';
// import userlogo from '../Asserts/Images/logo/user.png';

// const UserDashboard = ({ onLogout }) => {
//   return (
//     <div className="dashboard-container">
//       <aside className="sidebar">
//         <div style={{ marginBottom: '20px', textAlign: 'center' }}>
//           <img src={userlogo} alt="Logo" style={{ height: '50px' }} />
//           <h2>User Dashboard</h2>
//         </div>
//         <ul>
//           <li><Link to="/profile">Profile</Link></li>
//           <li><Link to="/jobs">Jobs</Link></li>
//           <li><Link to="/applied-jobs">Applied Jobs</Link></li>
//         </ul>
//         <Button
//           onClick={onLogout}
//           variant="contained"
//           color="primary"
//           style={{ marginTop: '20px', width: '100%' }}
//         >
//           Logout
//         </Button>
//       </aside>
//       <div className="content">
//         <h2>Welcome to the User Dashboard</h2>
//         {/* Add other user dashboard content here */}
//       </div>
//     </div>
//   );
// };

// export default UserDashboard;
// import React from 'react';
// import { Link, Outlet } from 'react-router-dom';
// import '../Asserts/Style/UserDashboard.css';
// import userlogo from '../Asserts/Images/logo/user.png';

// const UserDashboard = ({ onLogout }) => {
//   return (
//     <div className="dashboard-container">
//       <aside className="sidebar">
//         <div style={{ marginBottom: '20px' }}>
//           <img src={userlogo} alt="Logo" style={{ height: '50px' }} />
//           <h2>User Dashboard</h2>
//         </div>
//         <ul>
//           <li><Link to="profile">Profile</Link></li>
//           <li><Link to="jobs">Jobs</Link></li>
//           <li><Link to="applied-jobs">Applied Jobs</Link></li>
//         </ul>
//         <button onClick={onLogout} style={{ marginTop: '20px', width: '100%' }}>
//           Logout
//         </button>
//       </aside>
//       <div className="content">
//         <Outlet />
//       </div>
//     </div>
//   );
// };

// export default UserDashboard;
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import '../Asserts/Style/UserDashboard.css';
import userlogo from '../Asserts/Images/logo/user.png';

const UserDashboard = ({ onLogout }) => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        <aside className="sidebar">
          <div style={{ marginBottom: '20px' }}>
            <img src={userlogo} alt="Logo" style={{ height: '50px' }} />
            <h2>User Dashboard</h2>
          </div>
          <ul>
            <li><Link to="/user-dashboard/profile">Profile</Link></li>
            <li><Link to="/user-dashboard/jobs">Jobs</Link></li>
            <li><Link to="/user-dashboard/applied-jobs">Applied Jobs</Link></li>
          </ul>
          <button onClick={onLogout} style={{ marginTop: '20px' }}>
            Logout
          </button>
        </aside>
        <div className="content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
