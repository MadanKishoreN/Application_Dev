// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
// import { Button, IconButton, AppBar, Toolbar } from '@mui/material';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import 'bootstrap/dist/css/bootstrap.min.css';

// // Import components
// import Home from './Components/Home';
// import Login from './Components/Login';
// import SignUp from './Components/SignUp';
// import Profile from './Components/Profile';
// import UserDashboard from './Components/UserDashboard';
// import CompanyDashboard from './Components/CompanyDashboard';

// // Import logo
// import logo from './Asserts/Images/logo1.png'; // Replace with the actual path to your logo

// const App = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [userType, setUserType] = useState(null);
//   const [darkMode, setDarkMode] = useState(false);

//   const handleLogin = (type) => {
//     setIsAuthenticated(true);
//     setUserType(type);
//   };

//   const handleLogout = () => {
//     setIsAuthenticated(false);
//     setUserType(null);
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
//                   {!isAuthenticated && (
//                     <>
//                       <Button component={Link} to="/" color="inherit">
//                         Home
//                       </Button>
//                       <Button component={Link} to="/Login" color="inherit">
//                         Login
//                       </Button>
//                       <Button component={Link} to="/Signup" color="inherit">
//                         Sign Up
//                       </Button>
//                     </>
//                   )}
//                   {isAuthenticated && (
//                     <>
//                       {userType === 'user' && (
//                         <Button component={Link} to="/user-dashboard" color="inherit">
//                           User Dashboard
//                         </Button>
//                       )}
//                       {userType === 'company' && (
//                         <Button component={Link} to="/company-dashboard" color="inherit">
//                           Company Dashboard
//                         </Button>
//                       )}
//                       <Button onClick={handleLogout} color="inherit">
//                         Logout
//                       </Button>
//                     </>
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
//             <div className="content">
//               <Routes>
//                 <Route path="/" element={<Home />} />
//                 <Route path="/Login" element={<Login onLogin={handleLogin} />} />
//                 <Route path="/Signup" element={<SignUp />} />
//                 <Route path="/profile" element={<Profile />} />
//                 <Route path="/user-dashboard" element={isAuthenticated && userType === 'user' ? <UserDashboard onLogout={handleLogout} /> : <Navigate to="/Login" />} />
//                 <Route path="/company-dashboard" element={isAuthenticated && userType === 'company' ? <CompanyDashboard onLogout={handleLogout} /> : <Navigate to="/Login" />} />
//               </Routes>
//             </div>
//           </div>
//         </div>
//       </Router>
//     </ThemeProvider>
//   );
// };

// export default App;
// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
// import { Button, IconButton, AppBar, Toolbar } from '@mui/material';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import 'bootstrap/dist/css/bootstrap.min.css';

// // Import components
// import Home from './Components/Home';
// import Login from './Components/Login';
// import SignUp from './Components/SignUp';
// import Profile from './Components/Profile';
// import UserDashboard from './Components/UserDashboard';
// import CompanyDashboard from './Components/CompanyDashboard';
// import Jobs from './Components/Jobs';
// import AppliedJobs from './Components/AppliedJobs';
// import Employees from './Components/Employees'; // Add as needed
// import NewJob from './Components/NewJob'; // Add as needed

// // Import logo
// import logo from './Asserts/Images/logo1.png'; // Adjust path as needed

// const App = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [userType, setUserType] = useState(null);
//   const [darkMode, setDarkMode] = useState(false);

//   const handleLogin = (type) => {
//     setIsAuthenticated(true);
//     setUserType(type);
//   };

//   const handleLogout = () => {
//     setIsAuthenticated(false);
//     setUserType(null);
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
//           {!isAuthenticated && (
//             <AppBar position="static">
//               <Toolbar>
//                 <div style={{ display: 'flex', flexGrow: 1, alignItems: 'center' }}>
//                   <img
//                     src={logo}
//                     alt="Logo"
//                     style={{ height: '40px', marginRight: '10px' }} // Adjust height as needed
//                   />
//                   <div>
//                     <Button component={Link} to="/" color="inherit">Home</Button>
//                     <Button component={Link} to="/login" color="inherit">Login</Button>
//                     <Button component={Link} to="/signup" color="inherit">Sign Up</Button>
//                   </div>
//                 </div>
//                 <IconButton
//                   edge="end"
//                   color="inherit"
//                   aria-label="theme toggle"
//                   onClick={() => setDarkMode(!darkMode)}
//                   style={{ marginLeft: 'auto' }}
//                 >
//                   {darkMode ? '🌙' : '🌞'}
//                 </IconButton>
//               </Toolbar>
//             </AppBar>
//           )}
          
//           <div className="main-container">
//             <Routes>
//               <Route path="/" element={<Home />} />
//               <Route path="/login" element={<Login onLogin={handleLogin} />} />
//               <Route path="/signup" element={<SignUp />} />
//               <Route path="/profile" element={isAuthenticated ? <Profile /> : <Navigate to="/login" />} />
//               <Route path="/user-dashboard/*" element={isAuthenticated && userType === 'user' ? <UserDashboard onLogout={handleLogout} /> : <Navigate to="/login" />} />
//               <Route path="/company-dashboard/*" element={isAuthenticated && userType === 'company' ? <CompanyDashboard onLogout={handleLogout} /> : <Navigate to="/login" />} />
//               <Route path="/user-dashboard/profile" element={isAuthenticated ? <Profile /> : <Navigate to="/login" />} />
//               <Route path="/user-dashboard/jobs" element={isAuthenticated ? <Jobs /> : <Navigate to="/login" />} />
//               <Route path="/user-dashboard/applied-jobs" element={isAuthenticated ? <AppliedJobs /> : <Navigate to="/login" />} />
//               <Route path="/company-dashboard/employees" element={isAuthenticated && userType === 'company' ? <Employees /> : <Navigate to="/login" />} />
//               <Route path="/company-dashboard/new-job" element={isAuthenticated && userType === 'company' ? <NewJob /> : <Navigate to="/login" />} />
//               {/* Add other routes as needed */}
//             </Routes>
//           </div>
//         </div>
//       </Router>
//     </ThemeProvider>
//   );
// };

// export default App;
// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
// import { Button, IconButton, AppBar, Toolbar } from '@mui/material';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import 'bootstrap/dist/css/bootstrap.min.css';

// // Import components
// import Home from './Components/Home';
// import Login from './Components/Login';
// import SignUp from './Components/SignUp';
// import Profile from './Components/Profile';
// import UserDashboard from './Components/UserDashboard';
// import CompanyDashboard from './Components/CompanyDashboard';
// import Jobs from './Components/Jobs';
// import AppliedJobs from './Components/AppliedJobs';

// // Import logo
// import logo from './Asserts/Images/logo1.png'; // Adjust path as needed

// const App = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [userType, setUserType] = useState(null);
//   const [darkMode, setDarkMode] = useState(false);

//   const handleLogin = (type) => {
//     setIsAuthenticated(true);
//     setUserType(type);
//   };

//   const handleLogout = () => {
//     setIsAuthenticated(false);
//     setUserType(null);
//   };

//   const theme = createTheme({
//     palette: {
//       mode: darkMode ? 'dark' : 'light',
//     },
//   });

//   return (
//     <ThemeProvider theme={theme}>
//       <Router>
//         <AppBar position="static">
//           <Toolbar>
//             <div style={{ display: 'flex', flexGrow: 1, alignItems: 'center' }}>
//               <img
//                 src={logo}
//                 alt="Logo"
//                 style={{ height: '40px', marginRight: '10px' }} // Adjust height as needed
//               />
//               <div>
//                 {!isAuthenticated ? (
//                   <>
//                     <Button component={Link} to="/" color="inherit">Home</Button>
//                     <Button component={Link} to="/login" color="inherit">Login</Button>
//                     <Button component={Link} to="/signup" color="inherit">Sign Up</Button>
//                   </>
//                 ) : (
//                   <>
//                     {userType === 'user' && <Button component={Link} to="/user-dashboard" color="inherit">User Dashboard</Button>}
//                     {userType === 'company' && <Button component={Link} to="/company-dashboard" color="inherit">Company Dashboard</Button>}
//                     <Button onClick={handleLogout} color="inherit">Logout</Button>
//                   </>
//                 )}
//               </div>
//             </div>
//             <IconButton
//               edge="end"
//               color="inherit"
//               aria-label="theme toggle"
//               onClick={() => setDarkMode(!darkMode)}
//               style={{ marginLeft: 'auto' }}
//             >
//               {darkMode ? '🌙' : '🌞'}
//             </IconButton>
//           </Toolbar>
//         </AppBar>
//         <div className="main-container">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/login" element={<Login onLogin={handleLogin} />} />
//             <Route path="/signup" element={<SignUp />} />
//             <Route path="/user-dashboard/*" element={isAuthenticated && userType === 'user' ? <UserDashboard onLogout={handleLogout} /> : <Navigate to="/login" />}>
//               <Route path="profile" element={<Profile />} />
//               <Route path="jobs" element={<Jobs />} />
//               <Route path="applied-jobs" element={<AppliedJobs />} />
//             </Route>
//             <Route path="/company-dashboard/*" element={isAuthenticated && userType === 'company' ? <CompanyDashboard onLogout={handleLogout} /> : <Navigate to="/login" />} />
//             {/* Add other routes as needed */}
//           </Routes>
//         </div>
//       </Router>
//     </ThemeProvider>
//   );
// };

// export default App;
// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
// import { Button, IconButton, AppBar, Toolbar } from '@mui/material';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import 'bootstrap/dist/css/bootstrap.min.css';

// // Import components
// import Home from './Components/Home';
// import Login from './Components/Login';
// import SignUp from './Components/SignUp';
// import Profile from './Components/Profile';
// import UserDashboard from './Components/UserDashboard';
// import CompanyDashboard from './Components/CompanyDashboard';
// import Jobs from './Components/Jobs';
// import AppliedJobs from './Components/AppliedJobs';
// import Employees from './Components/Employees'; // Add as needed
// import NewJob from './Components/NewJob'; // Add as needed

// // Import logo
// import logo from './Asserts/Images/logo1.png'; // Adjust path as needed

// const App = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [userType, setUserType] = useState(null);
//   const [darkMode, setDarkMode] = useState(false);

//   const handleLogin = (type) => {
//     setIsAuthenticated(true);
//     setUserType(type);
//   };

//   const handleLogout = () => {
//     setIsAuthenticated(false);
//     setUserType(null);
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
//           {!isAuthenticated && (
//             <AppBar position="static">
//               <Toolbar>
//                 <div style={{ display: 'flex', flexGrow: 1, alignItems: 'center' }}>
//                   <img
//                     src={logo}
//                     alt="Logo"
//                     style={{ height: '40px', marginRight: '10px' }} // Adjust height as needed
//                   />
//                   <div>
//                     <Button component={Link} to="/" color="inherit">Home</Button>
//                     <Button component={Link} to="/login" color="inherit">Login</Button>
//                     <Button component={Link} to="/signup" color="inherit">Sign Up</Button>
//                   </div>
//                 </div>
//                 <IconButton
//                   edge="end"
//                   color="inherit"
//                   aria-label="theme toggle"
//                   onClick={() => setDarkMode(!darkMode)}
//                   style={{ marginLeft: 'auto' }}
//                 >
//                   {darkMode ? '🌙' : '🌞'}
//                 </IconButton>
//               </Toolbar>
//             </AppBar>
//           )}
          
//           <div className="main-container">
//             <Routes>
//               <Route path="/" element={<Home />} />
//               <Route path="/login" element={<Login onLogin={handleLogin} />} />
//               <Route path="/signup" element={<SignUp />} />
//               <Route path="/user-dashboard/*" element={isAuthenticated && userType === 'user' ? <UserDashboard onLogout={handleLogout} /> : <Navigate to="/login" />}>
//                 <Route path="profile" element={<Profile />} />
//                 <Route path="jobs" element={<Jobs />} />
//                 <Route path="applied-jobs" element={<AppliedJobs />} />
//               </Route>
//               <Route path="/company-dashboard/*" element={isAuthenticated && userType === 'company' ? <CompanyDashboard onLogout={handleLogout} /> : <Navigate to="/login" />}>
//                 <Route path="employees" element={<Employees />} />
//                 <Route path="new-job" element={<NewJob />} />
//               </Route>
//               {/* Add other routes as needed */}
//             </Routes>
//           </div>
//         </div>
//       </Router>
//     </ThemeProvider>
//   );
// };

// export default App;
// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
// import { Button, IconButton, AppBar, Toolbar } from '@mui/material';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import 'bootstrap/dist/css/bootstrap.min.css';

// // Import components
// import Home from './Components/Home';
// import Login from './Components/Login';
// import SignUp from './Components/SignUp';
// import Profile from './Components/Profile';
// import UserDashboard from './Components/UserDashboard';
// import CompanyDashboard from './Components/CompanyDashboard';
// import Jobs from './Components/Jobs';
// import AppliedJobs from './Components/AppliedJobs';
// import Employees from './Components/Employees'; // Add as needed
// import NewJob from './Components/NewJob'; // Add as needed

// // Import logo
// import logo from './Asserts/Images/logo1.png'; // Adjust path as needed

// const App = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [userType, setUserType] = useState(null);
//   const [darkMode, setDarkMode] = useState(false);

//   const handleLogin = (type) => {
//     setIsAuthenticated(true);
//     setUserType(type);
//   };

//   const handleLogout = () => {
//     setIsAuthenticated(false);
//     setUserType(null);
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
//           {!isAuthenticated && (
//             <AppBar position="static">
//               <Toolbar>
//                 <div style={{ display: 'flex', flexGrow: 1, alignItems: 'center' }}>
//                   <img
//                     src={logo}
//                     alt="Logo"
//                     style={{ height: '40px', marginRight: '10px' }} // Adjust height as needed
//                   />
//                   <div>
//                     <Button component={Link} to="/" color="inherit">Home</Button>
//                     <Button component={Link} to="/login" color="inherit">Login</Button>
//                     <Button component={Link} to="/signup" color="inherit">Sign Up</Button>
//                   </div>
//                 </div>
//                 <IconButton
//                   edge="end"
//                   color="inherit"
//                   aria-label="theme toggle"
//                   onClick={() => setDarkMode(!darkMode)}
//                   style={{ marginLeft: 'auto' }}
//                 >
//                   {darkMode ? '🌙' : '🌞'}
//                 </IconButton>
//               </Toolbar>
//             </AppBar>
//           )}
          
//           <div className="main-container">
//             <Routes>
//               <Route path="/" element={<Home />} />
//               <Route path="/login" element={<Login onLogin={handleLogin} />} />
//               <Route path="/signup" element={<SignUp />} />
//               <Route path="/profile" element={isAuthenticated ? <Profile /> : <Navigate to="/login" />} />
//               <Route path="/user-dashboard/*" element={isAuthenticated && userType === 'user' ? <UserDashboard onLogout={handleLogout} /> : <Navigate to="/login" />}>
//                 <Route path="profile" element={<Profile />} />
//                 <Route path="jobs" element={<Jobs />} />
//                 <Route path="applied-jobs" element={<AppliedJobs />} />
//               </Route>
//               <Route path="/company-dashboard/*" element={isAuthenticated && userType === 'company' ? <CompanyDashboard onLogout={handleLogout} /> : <Navigate to="/login" />}>
//                 <Route path="profile" element={<Profile />} />
//                 <Route path="employees" element={<Employees />} />
//                 <Route path="new-job" element={<NewJob />} />
//               </Route>
//               {/* Add other routes as needed */}
//             </Routes>
//           </div>
//         </div>
//       </Router>
//     </ThemeProvider>
//   );
// };

// export default App;
// App.js
// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
// import { Button, IconButton, AppBar, Toolbar } from '@mui/material';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import 'bootstrap/dist/css/bootstrap.min.css';

// // Import components
// import Home from './Components/Home';
// import Login from './Components/Login';
// import SignUp from './Components/SignUp';
// import Profile from './Components/Profile';
// import UserDashboard from './Components/UserDashboard';
// import CompanyDashboard from './Components/CompanyDashboard';
// import Jobs from './Components/Jobs';
// import AppliedJobs from './Components/AppliedJobs';
// import Employees from './Components/Employees';
// import NewJob from './Components/NewJob';
// import Job from './Components/Jobs';


// import logo from './Asserts/Images/logo1.png'; // Adjust path as needed

// const App = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [userType, setUserType] = useState(null);
//   const [darkMode, setDarkMode] = useState(false);

//   const handleLogin = (type) => {
//     setIsAuthenticated(true);
//     setUserType(type);
//   };

//   const handleLogout = () => {
//     setIsAuthenticated(false);
//     setUserType(null);
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
//               <Route path="/profile" element={isAuthenticated ? <Profile /> : <Navigate to="/login" />} />
//               <Route path="/user-dashboard/*" element={isAuthenticated && userType === 'user' ? <UserDashboard onLogout={handleLogout} /> : <Navigate to="/login" />}>
//                 <Route path="profile" element={<Profile />} />
//                 <Route path="jobs" element={<Jobs />} />
//                 <Route path="applied-jobs" element={<AppliedJobs />} />
//                 <Route path="job/:id" element={<Job />} />
//               </Route>
//               <Route path="/company-dashboard/*" element={isAuthenticated && userType === 'company' ? <CompanyDashboard onLogout={handleLogout} /> : <Navigate to="/login" />}>
//                 <Route path="profile" element={<Profile />} />
//                 <Route path="employees" element={<Employees />} />
//                 <Route path="new-job" element={<NewJob />} />
//               </Route>
//               <Route path="/jobs" element={<Jobs />} />
//             </Routes>
//           </div>
//         </div>
//       </Router>
//     </ThemeProvider>
//   );
// };

// export default App;
// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
// import { Button, IconButton, AppBar, Toolbar } from '@mui/material';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import 'bootstrap/dist/css/bootstrap.min.css';

// // Import components
// import Home from './Components/Home';
// import Login from './Components/Login';
// import SignUp from './Components/SignUp';
// import Profile from './Components/Profile';
// import UserDashboard from './Components/UserDashboard';
// import CompanyDashboard from './Components/CompanyDashboard';
// import Jobs from './Components/Jobs';
// import AppliedJobs from './Components/AppliedJobs';
// import Employees from './Components/Employees';
// import NewJob from './Components/NewJob';
// import Job from './Components/Jobs';

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
//               <Route path="/profile" element={isAuthenticated ? <Profile /> : <Navigate to="/login" />} />
//               <Route path="/user-dashboard/*" element={isAuthenticated && userType === 'user' ? <UserDashboard onLogout={handleLogout} /> : <Navigate to="/login" />}>
//                 <Route path="profile" element={<Profile />} />
//                 <Route path="jobs" element={<Jobs onApply={handleAddAppliedJob} />} />
//                 <Route path="applied-jobs" element={<AppliedJobs appliedJobs={appliedJobs} />} />
//                 <Route path="job/:id" element={<Job />} />
//               </Route>
//               <Route path="/company-dashboard/*" element={isAuthenticated && userType === 'company' ? <CompanyDashboard onLogout={handleLogout} /> : <Navigate to="/login" />}>
//                 <Route path="profile" element={<Profile />} />
//                 <Route path="employees" element={<Employees />} />
//                 <Route path="new-job" element={<NewJob />} />
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
import Profile from './Components/Profile';
import UserDashboard from './Components/UserDashboard';
import CompanyDashboard from './Components/CompanyDashboard';
import Jobs from './Components/Jobs';
import AppliedJobs from './Components/AppliedJobs';
import Employees from './Components/Employees';
import NewJob from './Components/NewJob';
import Job from './Components/job';

import logo from './Asserts/Images/logo1.png'; // Adjust path as needed

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

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
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

          <div className="main-container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login onLogin={handleLogin} />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/profile" element={isAuthenticated ? <Profile /> : <Navigate to="/login" />} />
              <Route path="/user-dashboard/*" element={isAuthenticated && userType === 'user' ? <UserDashboard onLogout={handleLogout} /> : <Navigate to="/Login" />}>
                <Route path="profile" element={<Profile />} />
                <Route path="jobs" element={<Jobs onApply={handleAddAppliedJob} />} />
                <Route path="applied-jobs" element={<AppliedJobs appliedJobs={appliedJobs} />} />
                <Route path="job/:id" element={<Job />} />
              </Route>
              <Route path="/company-dashboard/*" element={isAuthenticated && userType === 'company' ? <CompanyDashboard onLogout={handleLogout} /> : <Navigate to="/Login" />}>
                <Route path="profile" element={<Profile />} />
                <Route path="employees" element={<Employees />} />
                <Route path="new-job" element={<NewJob />} />
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
