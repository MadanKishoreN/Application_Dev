// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Button, AppBar, Toolbar, Typography } from '@mui/material';
// import '../Asserts/Style/Dashboard.css';
// import companylogo from '../Asserts/Images/logo/company.png';
// const CompanyDashboard = ({ onLogout }) => {
//   return (
//     <div className="dashboard-container">
//       <AppBar position="static">
//         <Toolbar>
//           <Typography variant="h6" component={Link} to="/" color="inherit" style={{ textDecoration: 'none', flexGrow: 1 }}>
//             <img src={companylogo} alt="Logo" style={{ height: '40px', marginRight: '10px' }} />
//             Company Dashboard
//           </Typography>
//           <div style={{ display: 'flex', alignItems: 'center' }}>
//             <Button component={Link} to="/employees" color="inherit">
//               Employees
//             </Button>
//             <Button component={Link} to="/new-job" color="inherit">
//               New Job
//             </Button>
//             <Button onClick={onLogout} color="inherit">
//               Logout
//             </Button>
//           </div>
//         </Toolbar>
//       </AppBar>
//       <div className="content">
//         <h2>Welcome to the Company Dashboard</h2>
//         {/* Add other company dashboard content here */}
//       </div>
//     </div>
//   );
// };

// export default CompanyDashboard;
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Button, AppBar, Toolbar, Typography } from '@mui/material';
// import '../Asserts/Style/Dashboard.css';
// import companylogo from '../Asserts/Images/logo/company.png';

// const CompanyDashboard = ({ onLogout }) => {
//   return (
//     <div className="dashboard-container">
//       <AppBar position="static">
//         <Toolbar>
//           <Typography variant="h6" component={Link} to="/" color="inherit" style={{ textDecoration: 'none', flexGrow: 1, display: 'flex', alignItems: 'center' }}>
//             <img src={companylogo} alt="Logo" style={{ height: '40px', marginRight: '10px' }} />
//             Company Dashboard
//           </Typography>
//         </Toolbar>
//       </AppBar>
//       <div className="dashboard-content">
//         <div className="sidebar">
//           <ul>
//             <li><Link to="/employees">Employees</Link></li>
//             <li><Link to="/new-job">New Job</Link></li>
//             {/* Add more sidebar links here */}
//           </ul>
//           <Button onClick={onLogout} className="logout-button">
//             Logout
//           </Button>
//         </div>
//         <div className="main-content">
//           <h2>Welcome to the Company Dashboard</h2>
//           {/* Add other company dashboard content here */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CompanyDashboard;
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import '../Asserts/Style/CompanyDashboard.css';
import companylogo from '../Asserts/Images/logo/company.png';

const CompanyDashboard = ({ onLogout }) => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        <aside className="sidebar">
          <div style={{ marginBottom: '20px' }}>
            <img src={companylogo} alt="Logo" style={{ height: '50px' }} />
            <h2>Company Dashboard</h2>
          </div>
          <ul>
            <li><Link to="/company-dashboard/profile">Profile</Link></li>
            <li><Link to="/company-dashboard/employees">Employees</Link></li>
            <li><Link to="/company-dashboard/new-job">New Job</Link></li>
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

export default CompanyDashboard;
