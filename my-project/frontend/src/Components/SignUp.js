import React, { useState } from 'react';
import { TextField, Button, Card, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import '../Asserts/Style/SignUp.css';

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSignUp = () => {
    // Validation
    const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/; // Example: 3-20 alphanumeric characters or underscores
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email format validation
    const phoneRegex = /^[0-9]{10}$/; // Basic validation for a 10-digit phone number

    if (!usernameRegex.test(formData.username)) {
      setErrorMessage('Username must be 3-20 characters long and can include letters, numbers, and underscores.');
      return;
    }

    if (!emailRegex.test(formData.email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    if (!phoneRegex.test(formData.phoneNumber)) {
      setErrorMessage('Please enter a valid 10-digit phone number.');
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

    // Store user data in localStorage
    localStorage.setItem('user', JSON.stringify({
      username: formData.username,
      email: formData.email,
      password: formData.password,
      phoneNumber: formData.phoneNumber,
    }));

    setSuccessMessage('Registration successful! Redirecting to login...');
    setErrorMessage('');
    setTimeout(() => {
      navigate('/login');
    }, 3000); // Redirect after 3 seconds
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
                label="Phone Number"
                name="phoneNumber"
                type="text"
                variant="outlined"
                value={formData.phoneNumber}
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
