import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TextField, Button, Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import '../Asserts/Style/Profile.css';

const CompanyProfile = () => {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    industry: '',
    size: '',
    description: '',
    logo: null,
  });
  const [showCreateProfile, setShowCreateProfile] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('/api/company-profile')
      .then(response => setProfile(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setProfile({ ...profile, logo: e.target.files[0] });
  };

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append('name', profile.name);
    formData.append('email', profile.email);
    formData.append('industry', profile.industry);
    formData.append('size', profile.size);
    formData.append('description', profile.description);
    if (profile.logo) {
      formData.append('logo', profile.logo);
    }

    axios.post('/api/company-profile', formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    })
    .then(response => {
      alert('Profile updated successfully');
      navigate('/');
    })
    .catch(error => {
      console.error('Error updating profile', error);
    });
  };

  const handleDelete = () => {
    axios.delete('/api/company-profile')
      .then(response => {
        alert('Profile deleted successfully');
        navigate('/');
      })
      .catch(error => {
        console.error('Error deleting profile', error);
      });
  };

  const toggleCreateProfile = () => {
    setShowCreateProfile(!showCreateProfile);
  };

  return (
    <Box className="profile-container">
      <Typography variant="h4" gutterBottom>
        Company Profile
      </Typography>
      <TextField
        label="Name"
        name="name"
        value={profile.name}
        onChange={handleChange}
        fullWidth
        className="profile-field"
      />
      <TextField
        label="Email"
        name="email"
        value={profile.email}
        onChange={handleChange}
        fullWidth
        className="profile-field"
      />
      <TextField
        label="Industry"
        name="industry"
        value={profile.industry}
        onChange={handleChange}
        fullWidth
        className="profile-field"
      />
      <TextField
        label="Size"
        name="size"
        value={profile.size}
        onChange={handleChange}
        fullWidth
        className="profile-field"
      />
      <TextField
        label="Description"
        name="description"
        value={profile.description}
        onChange={handleChange}
        fullWidth
        className="profile-field"
        multiline
        rows={4}
      />
      
      {showCreateProfile ? (
        <>
          <TextField
            label="Company Mission"
            name="mission"
            value={profile.mission || ''}
            onChange={handleChange}
            fullWidth
            className="profile-field"
            multiline
            rows={4}
          />
          <TextField
            label="Company Values"
            name="values"
            value={profile.values || ''}
            onChange={handleChange}
            fullWidth
            className="profile-field"
            multiline
            rows={4}
          />
        </>
      ) : (
        <div className="upload-button">
          <input
            type="file"
            id="logo-upload"
            onChange={handleFileChange}
          />
          <label htmlFor="logo-upload">Choose File</label>
          <Button onClick={toggleCreateProfile}>Create Profile</Button>
        </div>
      )}

      <Button
        onClick={handleSubmit}
        className="profile-button"
      >
        {showCreateProfile ? 'Create and Submit Profile' : 'Update Profile'}
      </Button>
      <Button
        onClick={handleDelete}
        className="profile-button"
        color="error"
      >
        Delete Profile
      </Button>
    </Box>
  );
};

export default CompanyProfile;
