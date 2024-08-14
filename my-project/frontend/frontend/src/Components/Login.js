
// import React, { useState } from 'react';
// import { TextField, Button, Card, Typography } from '@mui/material';
// import { useNavigate, Link as RouterLink } from 'react-router-dom'; // Import RouterLink for routing
// import { FaGoogle, FaFacebook } from 'react-icons/fa'; // Import icons for social login
// import '../Asserts/Style/Login.css';

// const Login = () => {
//   const [credentials, setCredentials] = useState({
//     username: '',
//     password: '',
//   });
//   const [message, setMessage] = useState('');
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setCredentials({ ...credentials, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Retrieve user data from localStorage
//     const storedUser = JSON.parse(localStorage.getItem('user'));

//     if (storedUser && storedUser.username === credentials.username && storedUser.password === credentials.password) {
//       setMessage('Login successful!');
//       setTimeout(() => {
//         navigate('/'); // Redirect to home page upon successful login
//       }, 1000); // 1-second delay
//     } else {
//       setMessage('Invalid username or password');
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="login-image" />
//       <div className="login-form">
//         <Card className="custom-card">
//           <Typography variant="h4" align="center" gutterBottom className="custom-heading">
//             Welcome Back!
//           </Typography>
//           <form onSubmit={handleSubmit}>
//             <div className="custom-form-group">
//               <TextField
//                 label="Username"
//                 name="username"
//                 variant="outlined"
//                 value={credentials.username}
//                 onChange={handleChange}
//                 fullWidth
//                 required
//               />
//             </div>
//             <div className="custom-form-group">
//               <TextField
//                 label="Password"
//                 name="password"
//                 type="password"
//                 variant="outlined"
//                 value={credentials.password}
//                 onChange={handleChange}
//                 fullWidth
//                 required
//               />
//             </div>
//             <Button type="submit" variant="contained" color="primary" fullWidth className="login-button">
//               Login
//             </Button>
//             <div className="forgot-password">
//               <RouterLink to="/forgot-password" className="forgot-password-link">
//                 Forgot Password?
//               </RouterLink>
//             </div>
//             <div className="social-login">
//               <Button variant="outlined" color="primary" startIcon={<FaGoogle />} fullWidth className="social-button">
//                 Login with Google
//               </Button>
//               <Button variant="outlined" color="primary" startIcon={<FaFacebook />} fullWidth className="social-button">
//                 Login with Facebook
//               </Button>
//             </div>
//             <div className="signup-link">
//               <Typography variant="body2">
//                 Don't have an account? <RouterLink to="/SignUp" className="signup-link-text">Sign Up</RouterLink>
//               </Typography>
//             </div>
//             {message && (
//               <Typography variant="body2" color={message === 'Login successful!' ? 'primary' : 'error'}>
//                 {message}
//               </Typography>
//             )}
//           </form>
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default Login;
// import React, { useState } from 'react';
// import { TextField, Button, Card, Typography } from '@mui/material';
// import { useNavigate, Link as RouterLink } from 'react-router-dom'; // Import RouterLink for routing
// import { FaGoogle, FaFacebook } from 'react-icons/fa'; // Import icons for social login
// import '../Asserts/Style/Login.css';

// const Login = ({ onLogin }) => {
//   const [credentials, setCredentials] = useState({
//     email: '',
//     password: '',
//   });
//   const [message, setMessage] = useState('');
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setCredentials({ ...credentials, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Retrieve user data from localStorage
//     const storedUser = JSON.parse(localStorage.getItem('user'));

//     if (storedUser && storedUser.email === credentials.email && storedUser.password === credentials.password) {
//       setMessage('Login successful!');
//       onLogin('user'); // Assuming 'user' type
//       setTimeout(() => {
//         navigate('/user-dashboard'); // Redirect to user dashboard upon successful login
//       }, 1000); // 1-second delay
//     } else if (credentials.email === 'company@124gmail.com' && credentials.password === 'company123') { // Company login credentials
//       setMessage('Login successful!');
//       onLogin('company'); // Set type to 'company'
//       setTimeout(() => {
//         navigate('/company-dashboard'); // Redirect to company dashboard upon successful login
//       }, 1000); // 1-second delay
//     } else {
//       setMessage('Invalid username or password');
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="login-image" />
//       <div className="login-form">
//         <Card className="custom-card">
//           <Typography variant="h4" align="center" gutterBottom className="custom-heading">
//             Welcome Back!
//           </Typography>
//           <form onSubmit={handleSubmit}>
//             <div className="custom-form-group">
//               <TextField
//                 label="Email"
//                 name="email"
//                 variant="outlined"
//                 value={credentials.username}
//                 onChange={handleChange}
//                 fullWidth
//                 required
//               />
//             </div>
//             <div className="custom-form-group">
//               <TextField
//                 label="Password"
//                 name="password"
//                 type="password"
//                 variant="outlined"
//                 value={credentials.password}
//                 onChange={handleChange}
//                 fullWidth
//                 required
//               />
//             </div>
//             <Button type="submit" variant="contained" color="primary" fullWidth className="login-button">
//               Login
//             </Button>
//             <div className="forgot-password">
//               <RouterLink to="/forgot-password" className="forgot-password-link">
//                 Forgot Password?
//               </RouterLink>
//             </div>
//             <div className="social-login">
//               <Button variant="outlined" color="primary" startIcon={<FaGoogle />} fullWidth className="social-button">
//                 Login with Google
//               </Button>
//               <Button variant="outlined" color="primary" startIcon={<FaFacebook />} fullWidth className="social-button">
//                 Login with Facebook
//               </Button>
//             </div>
//             <div className="signup-link">
//               <Typography variant="body2">
//                 Don't have an account? <RouterLink to="/SignUp" className="signup-link-text">Sign Up</RouterLink>
//               </Typography>
//             </div>
//             {message && (
//               <Typography variant="body2" color={message === 'Login successful!' ? 'primary' : 'error'}>
//                 {message}
//               </Typography>
//             )}
//           </form>
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default Login;
import React, { useState } from 'react';
import { TextField, Button, Card, Typography } from '@mui/material';
import { useNavigate, Link as RouterLink } from 'react-router-dom'; // Import RouterLink for routing
import { FaGoogle, FaFacebook } from 'react-icons/fa'; // Import icons for social login
import '../Asserts/Style/Login.css';

const Login = ({ onLogin }) => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  // Function to handle login and set authentication state
  const handleLogin = () => {
    localStorage.setItem('isAuthenticated', 'true');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Retrieve user data from localStorage
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && storedUser.email === credentials.email && storedUser.password === credentials.password) {
      setMessage('Login successful!');
      handleLogin(); // Set authentication state
      onLogin('user'); // Assuming 'user' type
      setTimeout(() => {
        navigate('/user-dashboard'); // Redirect to user dashboard upon successful login
      }, 1000); // 1-second delay
    } else if (credentials.email === 'company@124gmail.com' && credentials.password === 'company123') { // Company login credentials
      setMessage('Login successful!');
      handleLogin(); // Set authentication state
      onLogin('company'); // Set type to 'company'
      setTimeout(() => {
        navigate('/company-dashboard'); // Redirect to company dashboard upon successful login
      }, 1000); // 1-second delay
    } else {
      setMessage('Invalid username or password');
    }
  };

  return (
    <div className="login-container">
      <div className="login-image" />
      <div className="login-form">
        <Card className="custom-card">
          <Typography variant="h4" align="center" gutterBottom className="custom-heading">
            Welcome Back!
          </Typography>
          <form onSubmit={handleSubmit}>
            <div className="custom-form-group">
              <TextField
                label="Email"
                name="email"
                variant="outlined"
                value={credentials.email} // Fixed typo from `credentials.username` to `credentials.email`
                onChange={handleChange}
                fullWidth
                required
              />
            </div>
            <div className="custom-form-group">
              <TextField
                label="Password"
                name="password"
                type="password"
                variant="outlined"
                value={credentials.password}
                onChange={handleChange}
                fullWidth
                required
              />
            </div>
            <Button type="submit" variant="contained" color="primary" fullWidth className="login-button">
              Login
            </Button>
            <div className="forgot-password">
              <RouterLink to="/forgot-password" className="forgot-password-link">
                Forgot Password?
              </RouterLink>
            </div>
            <div className="social-login">
              <Button variant="outlined" color="primary" startIcon={<FaGoogle />} fullWidth className="social-button">
                Login with Google
              </Button>
              <Button variant="outlined" color="primary" startIcon={<FaFacebook />} fullWidth className="social-button">
                Login with Facebook
              </Button>
            </div>
            <div className="signup-link">
              <Typography variant="body2">
                Don't have an account? <RouterLink to="/SignUp" className="signup-link-text">Sign Up</RouterLink>
              </Typography>
            </div>
            {message && (
              <Typography variant="body2" color={message === 'Login successful!' ? 'primary' : 'error'}>
                {message}
              </Typography>
            )}
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Login;
