// import React, { useState } from 'react';
// import { TextField, Button, Card, Typography } from '@mui/material';
// import {  useNavigate } from 'react-router-dom';
// import '../Asserts/Style/SignUp.css';
// import axios from "axios";
// const SignUp = () => {

//   //phoneNumber: '',
//   const apiurl=("http://127.0.0.1:8080/api/users/createUser");
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//   });
//   login(username, email, password, role);
//   try{
//   const newData = await axios.post(apiurl,{
//     id: 0,
//     username:formData.username,
//     email: formData.email,
//     username: formData.username,
//     role: "USER",
//   });
//   if(Response.status===200){
//     alert("User created successfully");
//     navigate('/login');
//   } else{
//     alert("User creation failed");
//   }
// }
//   catch(error){
//     console.error(error);
//   };
//   const [successMessage, setSuccessMessage] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const navigate = useNavigate();

//   const handleSignUp = () => {
//     // Validation
//     const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/; // Example: 3-20 alphanumeric characters or underscores
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email format validation
//     //const phoneRegex = /^[0-9]{10}$/; // Basic validation for a 10-digit phone number

//     if (!usernameRegex.test(formData.username)) {
//       setErrorMessage('Username must be 3-20 characters long and can include letters, numbers, and underscores.');
//       return;
//     }

//     if (!emailRegex.test(formData.email)) {
//       setErrorMessage('Please enter a valid email address.');
//       return;
//     }

//     // if (!phoneRegex.test(formData.phoneNumber)) {
//     //   setErrorMessage('Please enter a valid 10-digit phone number.');
//     //   return;
//     // }

//     if (formData.password.length < 6) { // Example password length requirement
//       setErrorMessage('Password must be at least 6 characters long.');
//       return;
//     }

//     if (formData.password !== formData.confirmPassword) {
//       setErrorMessage('Passwords do not match!');
//       return;
//     }

//     // phoneNumber: formData.phoneNumber,
//     // Store user data in localStorage
//     localStorage.setItem('user', JSON.stringify({
//       username: formData.username,
//       email: formData.email,
//       password: formData.password,
//     }));

//     setSuccessMessage('Registration successful! Redirecting to login...');
//     setErrorMessage('');
//     setTimeout(() => {
//       navigate('/login');
//     }, 3000); // Redirect after 3 seconds
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   return (
//     <div className="signup-container">
//       <div className="signup-image" />
//       <div className="signup-form">
//         <Card className="custom-card">
//           <Typography variant="h4" gutterBottom className="custom-heading">
//             Sign Up
//           </Typography>
//           <form>
//             <div className="custom-form-group">
//               <TextField
//                 label="Username"
//                 name="username"
//                 variant="outlined"
//                 value={formData.username}
//                 onChange={handleChange}
//                 fullWidth
//                 required
//               />
//             </div>
//             <div className="custom-form-group">
//               <TextField
//                 label="Email"
//                 name="email"
//                 type="email"
//                 variant="outlined"
//                 value={formData.email}
//                 onChange={handleChange}
//                 fullWidth
//                 required
//               />
//             </div>
//             {/* <div className="custom-form-group">
//               <TextField
//                 label="Phone Number"
//                 name="phoneNumber"
//                 type="text"
//                 variant="outlined"
//                 value={formData.phoneNumber}
//                 onChange={handleChange}
//                 fullWidth
//                 required
//               />
//             </div> */}
//             <div className="custom-form-group">
//               <TextField
//                 label="Password"
//                 name="password"
//                 type="password"
//                 variant="outlined"
//                 value={formData.password}
//                 onChange={handleChange}
//                 fullWidth
//                 required
//               />
//             </div>
//             <div className="custom-form-group">
//               <TextField
//                 label="Confirm Password"
//                 name="confirmPassword"
//                 type="password"
//                 variant="outlined"
//                 value={formData.confirmPassword}
//                 onChange={handleChange}
//                 fullWidth
//                 required
//               />
//             </div>
//             {errorMessage && (
//               <Typography variant="body2" color="error">
//                 {errorMessage}
//               </Typography>
//             )}
//             {successMessage && (
//               <Typography variant="body2" color="primary">
//                 {successMessage}
//               </Typography>
//             )}
//             <div className="custom-form-group"></div>
//             <Button type="button" onClick={handleSignUp} variant="contained" color="primary">
//               Register
//             </Button>
//           </form>
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default SignUp;
import React, { useState } from 'react';
import { TextField, Button, Card, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import '../Asserts/Style/SignUp.css';
import axios from "axios";

const SignUp = () => {
  const apiurl = "http://127.0.0.1:8080/api/users/createUser";
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async () => {
    // Validation
    const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/; // Example: 3-20 alphanumeric characters or underscores
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email format validation

    if (!usernameRegex.test(formData.username)) {
      setErrorMessage('Username must be 3-20 characters long and can include letters, numbers, and underscores.');
      return;
    }

    if (!emailRegex.test(formData.email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    if (formData.password.length < 6) { // Example password length requirement
      setErrorMessage('Password must be at least 6 characters long.');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setErrorMessage('Passwords do not match!');
      return;
    }

    // Clear previous messages
    setSuccessMessage('');
    setErrorMessage('');

    try {
      const response = await axios.post(apiurl, {
        username: formData.username,
        email: formData.email,
        password: formData.password,
        role: "USER",
      });

      if (response.status === 200) {
        setSuccessMessage("User created successfully");
        setTimeout(() => {
          navigate('/login');
        }, 3000); // Redirect after 3 seconds
      } else {
        setErrorMessage("User creation failed");
      }
    } catch (error) {
      console.error(error);
      setErrorMessage("An error occurred while creating the user");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="signup-container">
      <div className="signup-image" />
      <div className="signup-form">
        <Card className="custom-card">
          <Typography variant="h4" gutterBottom className="custom-heading">
            Sign Up
          </Typography>
          <form>
            <div className="custom-form-group">
              <TextField
                label="Username"
                name="username"
                variant="outlined"
                value={formData.username}
                onChange={handleChange}
                fullWidth
                required
              />
            </div>
            <div className="custom-form-group">
              <TextField
                label="Email"
                name="email"
                type="email"
                variant="outlined"
                value={formData.email}
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
                value={formData.password}
                onChange={handleChange}
                fullWidth
                required
              />
            </div>
            <div className="custom-form-group">
              <TextField
                label="Confirm Password"
                name="confirmPassword"
                type="password"
                variant="outlined"
                value={formData.confirmPassword}
                onChange={handleChange}
                fullWidth
                required
              />
            </div>
            {errorMessage && (
              <Typography variant="body2" color="error">
                {errorMessage}
              </Typography>
            )}
            {successMessage && (
              <Typography variant="body2" color="primary">
                {successMessage}
              </Typography>
            )}
            <div className="custom-form-group"></div>
            <Button type="button" onClick={handleSignUp} variant="contained" color="primary">
              Register
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default SignUp;
// import React, { useState } from 'react';
// import { TextField, Button, Card, Typography, Link } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
// import '../Asserts/Style/SignUp.css';
// import axios from "axios";

// const SignUp = () => {
//   const apiurl = "http://127.0.0.1:8080/api/users/createUser";
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//   });
//   const [successMessage, setSuccessMessage] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const navigate = useNavigate();

//   const handleSignUp = async () => {
//     // Validation
//     const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/; // Example: 3-20 alphanumeric characters or underscores
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email format validation

//     if (!usernameRegex.test(formData.username)) {
//       setErrorMessage('Username must be 3-20 characters long and can include letters, numbers, and underscores.');
//       return;
//     }

//     if (!emailRegex.test(formData.email)) {
//       setErrorMessage('Please enter a valid email address.');
//       return;
//     }

//     if (formData.password.length < 6) { // Example password length requirement
//       setErrorMessage('Password must be at least 6 characters long.');
//       return;
//     }

//     if (formData.password !== formData.confirmPassword) {
//       setErrorMessage('Passwords do not match!');
//       return;
//     }

//     // Clear previous messages
//     setSuccessMessage('');
//     setErrorMessage('');

//     try {
//       const response = await axios.post(apiurl, {
//         username: formData.username,
//         email: formData.email,
//         password: formData.password,
//         role: "USER",
//       });

//       if (response.status === 200) {
//         setSuccessMessage("User created successfully");
//         setTimeout(() => {
//           navigate('/login');
//         }, 3000); // Redirect after 3 seconds
//       } else {
//         setErrorMessage("User creation failed");
//       }
//     } catch (error) {
//       console.error(error);
//       setErrorMessage("An error occurred while creating the user");
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const handleLoginRedirect = () => {
//     navigate('/login');
//   };

//   return (
//     <div className="signup-container">
//       <div className="signup-image" />
//       <div className="signup-form">
//         <Card className="custom-card">
//           <Typography variant="h4" gutterBottom className="custom-heading">
//             Sign Up
//           </Typography>
//           <form>
//             <div className="custom-form-group">
//               <TextField
//                 label="Username"
//                 name="username"
//                 variant="outlined"
//                 value={formData.username}
//                 onChange={handleChange}
//                 fullWidth
//                 required
//               />
//             </div>
//             <div className="custom-form-group">
//               <TextField
//                 label="Email"
//                 name="email"
//                 type="email"
//                 variant="outlined"
//                 value={formData.email}
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
//                 value={formData.password}
//                 onChange={handleChange}
//                 fullWidth
//                 required
//               />
//             </div>
//             <div className="custom-form-group">
//               <TextField
//                 label="Confirm Password"
//                 name="confirmPassword"
//                 type="password"
//                 variant="outlined"
//                 value={formData.confirmPassword}
//                 onChange={handleChange}
//                 fullWidth
//                 required
//               />
//             </div>
//             {errorMessage && (
//               <Typography variant="body2" color="error">
//                 {errorMessage}
//               </Typography>
//             )}
//             {successMessage && (
//               <Typography variant="body2" color="primary">
//                 {successMessage}
//               </Typography>
//             )}
//             <div className="custom-form-group">
//               <Button
//                 type="button"
//                 onClick={handleSignUp}
//                 variant="contained"
//                 color="primary"
//                 fullWidth
//               >
//                 Register
//               </Button>
//             </div>
//             <div className="custom-form-group">
//               <Typography variant="body2" align="center" className="login-prompt">
//                 Already have an account?{' '}
//                 <Link onClick={handleLoginRedirect} className="login-link">
//                   Go to Login
//                 </Link>
//               </Typography>
//             </div>
//           </form>
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default SignUp;
