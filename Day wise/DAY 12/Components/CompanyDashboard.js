import React from 'react';
import { Link, Outlet, Navigate, useLocation } from 'react-router-dom';
import '../Asserts/Style/CompanyDashboard.css';
import companylogo from '../Asserts/Images/logo/company.png';

const CompanyDashboard = ({ onLogout }) => {
  const location = useLocation();
  
  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        <aside className="sidebar">
          <div style={{ marginBottom: '20px' }}>
            <img src={companylogo} alt="Logo" style={{ height: '50px' }} />
            <h2>Company Dashboard</h2>
          </div>
          <ul>
            <li><Link to="/company-dashboard/CompanyProfile">Profile</Link></li>
            <li><Link to="/company-dashboard/manage-jobs">Manage Jobs</Link></li>
            <li><Link to="/company-dashboard/manage-users">Manage Users</Link></li>

          </ul>
          <button onClick={onLogout} style={{ marginTop: '20px' }}>
            Logout
          </button>
        </aside>
        <div className="content">
          {/* Default redirect to Profile if no sub-route is selected */}
          {location.pathname === '/company-dashboard' && <Navigate to="/company-dashboard/CompanyProfile" />}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default CompanyDashboard;
