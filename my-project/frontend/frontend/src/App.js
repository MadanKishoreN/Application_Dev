
// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
// import { Button, IconButton, AppBar, Toolbar } from '@mui/material';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import 'bootstrap/dist/css/bootstrap.min.css';

// // Import components
// import Home from './Components/Home';
// import Login from './Components/Login';
// import SignUp from './Components/SignUp';
// import UserDashboard from './Components/UserDashboard';
// import CompanyDashboard from './Components/CompanyDashboard';
// import Jobs from './Components/Jobs';
// import AppliedJobs from './Components/AppliedJobs';
// import Employees from './Components/Employees';
// import Job from './Components/job';
// import ManageJobs from './Components/ManageJobs';
// import UserProfile from './Components/UserProfile';
// import CompanyProfile from './Components/CompanyProfile';
// import logo from './Asserts/Images/logo1.png'; // Adjust path as needed

// const App = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [userType, setUserType] = useState(null);
//   const [darkMode, setDarkMode] = useState(false);
//   const [appliedJobs, setAppliedJobs] = useState([]);

//   const handleLogin = (type) => {
//     setIsAuthenticated(true);
//     setUserType(type);
//   };

//   const handleLogout = () => {
//     setIsAuthenticated(false);
//     setUserType(null);
//   };

//   const handleAddAppliedJob = (job) => {
//     setAppliedJobs([...appliedJobs, job]);
//   };

//   const theme = createTheme({
//     palette: {
//       mode: darkMode ? 'dark' : 'light',
//     },
//   });

//   return (
//     <ThemeProvider theme={theme}>
//       <Router>
//         <div className="App">
//           <AppBar position="static">
//             <Toolbar>
//               <div style={{ display: 'flex', flexGrow: 1, alignItems: 'center' }}>
//                 <img
//                   src={logo}
//                   alt="Logo"
//                   style={{ height: '40px', marginRight: '10px' }} // Adjust height as needed
//                 />
//                 <div>
//                   <Button component={Link} to="/" color="inherit">Home</Button>
//                   {!isAuthenticated ? (
//                     <>
//                       <Button component={Link} to="/login" color="inherit">Login</Button>
//                       <Button component={Link} to="/signup" color="inherit">Sign Up</Button>
//                     </>
//                   ) : (
//                     <Button onClick={handleLogout} color="inherit">Logout</Button>
//                   )}
//                 </div>
//               </div>
//               <IconButton
//                 edge="end"
//                 color="inherit"
//                 aria-label="theme toggle"
//                 onClick={() => setDarkMode(!darkMode)}
//                 style={{ marginLeft: 'auto' }}
//               >
//                 {darkMode ? '🌙' : '🌞'}
//               </IconButton>
//             </Toolbar>
//           </AppBar>

//           <div className="main-container">
//             <Routes>
//               <Route path="/" element={<Home />} />
//               <Route path="/login" element={<Login onLogin={handleLogin} />} />
//               <Route path="/signup" element={<SignUp />} />
//               <Route path="/profile" element={isAuthenticated ? <UserProfile /> : <Navigate to="/login" />} />
//               <Route path="/user-dashboard" element={isAuthenticated && userType === 'user' ? <UserDashboard onLogout={handleLogout} /> : <Navigate to="/Login" />}>
//                 <Route path="UserProfile" element={<UserProfile />} />
//                 <Route path="jobs" element={<Jobs onApply={handleAddAppliedJob} />} />
//                 <Route path="applied-jobs" element={<AppliedJobs appliedJobs={appliedJobs} />} />
//                 <Route path="job/:id" element={<Job />} />
//               </Route>
//               <Route path="/company-dashboard/*" element={isAuthenticated && userType === 'company' ? <CompanyDashboard onLogout={handleLogout} /> : <Navigate to="/Login" />}>
//                 <Route path="CompanyProfile" element={<CompanyProfile />} />
//                 <Route path="employees" element={<Employees />} />
                
//                 <Route path="manage-jobs" element={<ManageJobs />} />
//               </Route>
//               <Route path="/jobs" element={<Jobs onApply={handleAddAppliedJob} />} />
//               <Route path="/applied-jobs" element={<AppliedJobs appliedJobs={appliedJobs} />} />
//             </Routes>
//           </div>
//         </div>
//       </Router>
//     </ThemeProvider>
//   );
// };

// export default App;
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import { Button, IconButton, AppBar, Toolbar } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import components
import Home from './Components/Home';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import UserDashboard from './Components/UserDashboard';
import CompanyDashboard from './Components/CompanyDashboard';
import Jobs from './Components/Jobs';
import AppliedJobs from './Components/AppliedJobs';
import Job from './Components/job';
import ManageJobs from './Components/ManageJobs';
import UserProfile from './Components/UserProfile';
import CompanyProfile from './Components/CompanyProfile';
import logo from './Asserts/Images/logo1.png'; // Adjust path as needed
import ApplyJob from './Components/ApplyJob';
import ManageUsers from './Components/ManageUser';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userType, setUserType] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [appliedJobs, setAppliedJobs] = useState([]);

  const handleLogin = (type) => {
    setIsAuthenticated(true);
    setUserType(type);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUserType(null);
  };

  const handleAddAppliedJob = (job) => {
    setAppliedJobs([...appliedJobs, job]);
  };

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  const showAppBar = !isAuthenticated || (userType !== 'user' && userType !== 'company');

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
          {showAppBar && (
            <AppBar position="static">
              <Toolbar>
                <div style={{ display: 'flex', flexGrow: 1, alignItems: 'center' }}>
                  <img
                    src={logo}
                    alt="Logo"
                    style={{ height: '40px', marginRight: '10px' }} // Adjust height as needed
                  />
                  <div>
                    <Button component={Link} to="/" color="inherit">Home</Button>
                    {!isAuthenticated ? (
                      <>
                        <Button component={Link} to="/login" color="inherit">Login</Button>
                        <Button component={Link} to="/signup" color="inherit">Sign Up</Button>
                      </>
                    ) : (
                      <Button onClick={handleLogout} color="inherit">Logout</Button>
                    )}
                  </div>
                </div>
                <IconButton
                  edge="end"
                  color="inherit"
                  aria-label="theme toggle"
                  onClick={() => setDarkMode(!darkMode)}
                  style={{ marginLeft: 'auto' }}
                >
                  {darkMode ? '🌙' : '🌞'}
                </IconButton>
              </Toolbar>
            </AppBar>
          )}

          <div className="main-container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login onLogin={handleLogin} />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/profile" element={isAuthenticated ? <UserProfile /> : <Navigate to="/login" />} />
              <Route path="/user-dashboard/*" element={isAuthenticated && userType === 'user' ? <UserDashboard onLogout={handleLogout} /> : <Navigate to="/Login" />}>
                <Route path="UserProfile" element={<UserProfile />} />
                <Route path="jobs" element={<Jobs onApply={handleAddAppliedJob} />} />
                <Route path="applied-jobs" element={<AppliedJobs appliedJobs={appliedJobs} />} />
                <Route path="job/:id" element={<Job />} />
                <Route path="apply-job" element={<ApplyJob onApply={handleAddAppliedJob} />} />

              </Route>
              <Route path="/company-dashboard/*" element={isAuthenticated && userType === 'company' ? <CompanyDashboard onLogout={handleLogout} /> : <Navigate to="/Login" />}>
                <Route path="CompanyProfile" element={<CompanyProfile />} />
                <Route path="manage-jobs" element={<ManageJobs />} />
                <Route path="manage-users" element={<ManageUsers />} /> 

              </Route>
              <Route path="/jobs" element={<Jobs onApply={handleAddAppliedJob} />} />
              <Route path="/applied-jobs" element={<AppliedJobs appliedJobs={appliedJobs} />} />
            </Routes>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
