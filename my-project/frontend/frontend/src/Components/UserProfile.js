import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TextField, Button, Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import '../Asserts/Style/Profile.css';

const UserProfile = () => {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    experience: '',
    education: '',
    skills: '',
    resume: null,
  });
  const [showCreateResume, setShowCreateResume] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('/api/user-profile')
      .then(response => setProfile(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setProfile({ ...profile, resume: e.target.files[0] });
  };

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append('name', profile.name);
    formData.append('email', profile.email);
    formData.append('experience', profile.experience);
    formData.append('education', profile.education);
    formData.append('skills', profile.skills);
    if (profile.resume) {
      formData.append('resume', profile.resume);
    }

    axios.post('/api/user-profile', formData, {
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
    axios.delete('/api/user-profile')
      .then(response => {
        alert('Profile deleted successfully');
        navigate('/');
      })
      .catch(error => {
        console.error('Error deleting profile', error);
      });
  };

  const toggleCreateResume = () => {
    setShowCreateResume(!showCreateResume);
  };

  return (
    <Box className="profile-container">
      <Typography variant="h4" gutterBottom>
        User Profile
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
        label="Experience"
        name="experience"
        value={profile.experience}
        onChange={handleChange}
        fullWidth
        className="profile-field"
      />
      <TextField
        label="Education"
        name="education"
        value={profile.education}
        onChange={handleChange}
        fullWidth
        className="profile-field"
      />
      <TextField
        label="Skills"
        name="skills"
        value={profile.skills}
        onChange={handleChange}
        fullWidth
        className="profile-field"
      />
      
      {showCreateResume ? (
        <>
          <TextField
            label="Summary"
            name="summary"
            value={profile.summary || ''}
            onChange={handleChange}
            fullWidth
            className="profile-field"
            multiline
            rows={4}
          />
          <TextField
            label="Work Experience"
            name="workExperience"
            value={profile.workExperience || ''}
            onChange={handleChange}
            fullWidth
            className="profile-field"
            multiline
            rows={4}
          />
          <TextField
            label="Projects"
            name="projects"
            value={profile.projects || ''}
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
            id="resume-upload"
            onChange={handleFileChange}
          />
          <label htmlFor="resume-upload">Choose File</label>
          <Button onClick={toggleCreateResume}>Create Resume</Button>
        </div>
      )}

      <Button
        onClick={handleSubmit}
        className="profile-button"
      >
        {showCreateResume ? 'Create and Submit Resume' : 'Update Profile'}
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

export default UserProfile;
