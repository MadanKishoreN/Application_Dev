
import React from 'react';
import { Container, Grid, Card, CardContent, Typography } from '@mui/material';

const AppliedJobs = ({ appliedJobs }) => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>Applied Jobs</Typography>
      <Grid container spacing={3}>
        {appliedJobs.length === 0 ? (
          <Typography variant="body1">No jobs applied yet.</Typography>
        ) : (
          appliedJobs.map((job) => (
            <Grid item xs={12} sm={6} md={4} key={job.id}>
              <Card>
                <CardContent>
                  <img src={job.company_logo} alt={job.company_name} style={{ width: '100px', height: 'auto' }} />
                  <Typography variant="h6">{job.job_title}</Typography>
                  <Typography variant="body2">{job.company_name}</Typography>
                  <Typography variant="body2">{job.salary}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))
        )}
      </Grid>
    </Container>
  );
};

export default AppliedJobs;

