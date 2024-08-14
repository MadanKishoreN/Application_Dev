// import React from 'react';
// import { Link, Outlet, Navigate, useLocation } from 'react-router-dom';
// import '../Asserts/Style/UserDashboard.css';
// import userlogo from '../Asserts/Images/logo/user.png';

// const UserDashboard = ({ onLogout }) => {
//   const location = useLocation();
  
//   return (
//     <div className="dashboard-container">
//       <div className="dashboard-content">
//         <aside className="sidebar">
//           <div style={{ marginBottom: '20px' }}>
//             <img src={userlogo} alt="Logo" style={{ height: '50px' }} />
//             <h2>User Dashboard</h2>
//           </div>
//           <ul>
//             <li><Link to="/user-dashboard/UserProfile">Profile</Link></li>
//             <li><Link to="/user-dashboard/jobs">Jobs</Link></li>
//             <li><Link to="/user-dashboard/applied-jobs">Applied Jobs</Link></li>
//             <li><Link to="/user-dashboard/apply-job">Apply for a Job</Link></li>
//           </ul>
//           <button onClick={onLogout} style={{ marginTop: '20px' }}>
//             Logout
//           </button>
//         </aside>
//         <div className="content">
//           {/* Default redirect to Profile if no sub-route is selected */}
//           {location.pathname === '/user-dashboard' && <Navigate to="/user-dashboard/UserProfile" />}
//           <Outlet />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserDashboard;
import React, { useState, useEffect } from 'react';
import { Link, Outlet, Navigate, useLocation } from 'react-router-dom';
import '../Asserts/Style/UserDashboard.css';
import userlogo from '../Asserts/Images/logo/user.png';
import Notification from './Notification';

const UserDashboard = ({ onLogout }) => {
  const location = useLocation();
  const [notification, setNotification] = useState({
    open: false,
    message: '',
    type: 'success',
  });

  useEffect(() => {
    // Retrieve username from localStorage
    const username = localStorage.getItem('username');

    // Show welcome message with the username
    setNotification({
      open: true,
      message: `Welcome, ${username}!`,
      type: 'success',
    });
  }, []);

  const handleNotificationClose = () => {
    setNotification({ ...notification, open: false });
  };

  return (
    <div className="dashboard-container">
      <Notification
        open={notification.open}
        message={notification.message}
        type={notification.type}
        onClose={handleNotificationClose}
      />
      <div className="dashboard-content">
        <aside className="sidebar">
          <div style={{ marginBottom: '20px' }}>
            <img src={userlogo} alt="Logo" style={{ height: '50px' }} />
            <h2>User Dashboard</h2>
          </div>
          <ul>
            <li><Link to="/user-dashboard/UserProfile">Profile</Link></li>
            <li><Link to="/user-dashboard/jobs">Jobs</Link></li>
            <li><Link to="/user-dashboard/applied-jobs">Applied Jobs</Link></li>
            <li><Link to="/user-dashboard/apply-job">Apply for a Job</Link></li>
          </ul>
          <button onClick={onLogout} style={{ marginTop: '20px' }}>
            Logout
          </button>
        </aside>
        <div className="content">
          {location.pathname === '/user-dashboard' && <Navigate to="/user-dashboard/UserProfile" />}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
