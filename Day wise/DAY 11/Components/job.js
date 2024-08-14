// // Job.js
// import React from 'react';
// import { useParams } from 'react-router-dom';
// import { Container, Typography, Box, Avatar } from '@mui/material';

// // Mock job data for demonstration
// const jobs = [
//   {
//     id: 1,
//     company_logo: "https://www.logo.wine/a/logo/Meta_Platforms/Meta_Platforms-Logo.wine.svg",
//     job_title: "Technical Program Manager",
//     company_name: "Meta",
//     salary: "$85,000 - $145,000",
//     job_description: "Oversee technical projects and manage engineering teams.",
//     job_responsibility: "Lead project planning, execution, and delivery.",
//     educational_requirements: "Bachelor's degree in Computer Science or related field.",
//     experiences: "5+ years of experience in program management.",
//     contact_information: {
//       phone: "273-273-2772",
//       email: "meta@career.com"
//     },
//     remote_or_onsite: "Onsite",
//     location: "Seattle, WA",
//     fulltime_or_parttime: "Fulltime"
//   },
//   {
//     id: 2,
//     company_logo: "https://www.logo.wine/a/logo/Google/Google-Logo.wine.svg",
//     job_title: "Sr. Software Engineer",
//     company_name: "Google LLC",
//     remote_or_onsite: "Onsite",
//     location: "New York, NY",
//     fulltime_or_parttime: "Fulltime",
//     salary: "$90,000 - $110,000",
//     job_description: "As a software engineer, you will work on a specific project critical to Google’s needs with opportunities to switch teams and projects as you and our fast-paced business grow and evolve.",
//     job_responsibility: "Triage product or system issues and debug/track/resolve by analyzing the sources of issues and the impact on hardware, network, or service operations and quality.",
//     educational_requirements: "Bachelor's degree in Computer Science, a related field, or equivalent practical experience",
//     experiences: "1 year of experience with software design and architecture",
//     contact_information: {
//       phone: "555-555-5555",
//       email: "google@career.com"
//     }
//   },
//   {
//     id: 3,
//     company_logo: "https://www.logo.wine/a/logo/Airbnb/Airbnb-Logo.wine.svg",
//     job_title: "Solution Architect",
//     company_name: "Airbnb",
//     remote_or_onsite: "Remote",
//     location: "Anywhere",
//     fulltime_or_parttime: "Fulltime",
//     salary: "$80,000 - $120,000",
//     job_description: "Our team is looking for a high performance Solutions Architect with an entrepreneurial mindset to work with marketing executives at top-tier companies on their industry-leading advertising initiatives.",
//     job_responsibility: "Work as part of a broader Solutions Go-To-Market team to contribute technical assets, prioritize, and shape solution direction.",
//     educational_requirements: "Bachelor's degree in Computer Science, a related field, or equivalent practical experience",
//     experiences: "2+ Years in this field.",
//     contact_information: {
//       phone: "559-559-5959",
//       email: "airbnb@career.com"
//     }
//   },
//   {
//     id: 4,
//     company_logo: "https://www.logo.wine/a/logo/Netflix/Netflix-Logo.wine.svg",
//     job_title: "Dev Ops Engineer",
//     company_name: "Netflix",
//     remote_or_onsite: "Onsite",
//     location: "Chicago, IL",
//     fulltime_or_parttime: "Part-time",
//     salary: "$95,000 - $120,000",
//     job_description: "Next Games is a Netflix Game Studio, focusing on creating compelling fans-first interactive experiences by combining the stories of well-known movies and shows with engaging game mechanics.",
//     job_responsibility: "You will be responsible for improving and developing our CI/CD pipelines, identifying issues and performance improvements, and implementing integrations.",
//     educational_requirements: "Bachelor's degree in Computer Science, a related field, or equivalent practical experience",
//     experiences: "1+ year of experience in this field",
//     contact_information: {
//       phone: "656-566-5566",
//       email: "netflix@career.com"
//     }
//   },
//   {
//     id: 5,
//     company_logo: "https://www.logo.wine/a/logo/Planet_Labs/Planet_Labs-Logo.wine.svg",
//     job_title: "Data Engineer",
//     company_name: "Planet",
//     remote_or_onsite: "Remote",
//     location: "Anywhere",
//     fulltime_or_parttime: "Fulltime",
//     salary: "$115,000 - $145,000",
//     job_description: "As part of our Video Engineering group, you’ll help deliver creative solutions to various problems that could impact people all over the world.",
//     job_responsibility: "This Data Engineer will work closely with other members of the Video Engineering group to mine data, implement model evaluation pipelines, and ensure high-quality delivery.",
//     educational_requirements: "Bachelor's degree in Computer Science, a related field, or equivalent practical experience",
//     experiences: "1+ year of experience in this field",
//     contact_information: {
//       phone: "444-455-4455",
//       email: "planet@career.com"
//     }
//   },
//   {
//     id: 6,
//     company_logo: "https://www.logo.wine/a/logo/Tesla%2C_Inc./Tesla%2C_Inc.-Wordmark-Red-Logo.wine.svg",
//     job_title: "Industrial Engineer",
//     company_name: "Tesla",
//     remote_or_onsite: "Onsite",
//     location: "Los Angeles, CA",
//     fulltime_or_parttime: "Fulltime",
//     salary: "$95,000 - $145,000",
//     job_description: "Tesla is seeking a motivated and accomplished Industrial Engineer to oversee Material Flow initiatives for production.",
//     job_responsibility: "Work with internal operations and material flow engineering teams to ensure that equipment and layout designs align with the overall material flow plan.",
//     educational_requirements: "Bachelor's degree in Computer Science, a related field, or equivalent practical experience",
//     experiences: "2+ years of experience in this field",
//     contact_information: {
//       phone: "565-565-5655",
//       email: "tesla@career.com"
//     }
//   },
//   {
//     id: 7,
//     company_logo: "https://www.logo.wine/a/logo/Stripe_(company)/Stripe_(company)-Logo.wine.svg",
//     job_title: "Product Manager",
//     company_name: "Stripe",
//     remote_or_onsite: "Remote",
//     location: "Anywhere",
//     fulltime_or_parttime: "Fulltime",
//     salary: "$75,000 - $115,000",
//     job_description: "As a Product Manager, you will architect modern experiences for IT workers and build world-class backend and analytical services.",
//     job_responsibility: "Develop design approaches, evaluate pros/cons of approaches for feature enhancements, mentor team members, and work across teams.",
//     educational_requirements: "Bachelor's degree in Computer Science, a related field, or equivalent practical experience",
//     experiences: "2+ years of experience in this field",
//     contact_information: {
//       phone: "767-767-7676",
//       email: "stripe@career.com"
//     }
//   },
//   {
//     id: 8,
//     company_logo: "https://www.logo.wine/a/logo/Amazon_Web_Services/Amazon_Web_Services-Logo.wine.svg",
//     job_title: "Project Manager",
//     company_name: "Amazon",
//     remote_or_onsite: "Onsite",
//     location: "Seattle, WA",
//     fulltime_or_parttime: "Fulltime",
//     salary: "$95,000 - $125,000",
//     job_description: "As a Project Manager, you will work on modernizing our Resource Access microservices for scale and simplicity.",
//     job_responsibility: "Develop design approaches, mentor team members, and communicate effectively across diverse stakeholders.",
//     educational_requirements: "Bachelor's degree in Computer Science, a related field, or equivalent practical experience",
//     experiences: "3+ years of experience in this field",
//     contact_information: {
//       phone: "868-868-8688",
//       email: "amazon@career.com"
//     }
//   },
//   {
//     id: 9,
//     company_logo: "https://www.logo.wine/a/logo/Reddit/Reddit-Logo.wine.svg",
//     job_title: "System Engineer",
//     company_name: "Reddit",
//     remote_or_onsite: "Remote",
//     location: "Anywhere",
//     fulltime_or_parttime: "Fulltime",
//     salary: "$95,000 - $145,000",
//     job_description: "As a Systems Engineer, you will work on modernizing our Resource Access microservices and improving device health data pipelines.",
//     job_responsibility: "Develop design approaches, mentor team members, and work across teams to deliver complex features.",
//     educational_requirements: "Bachelor's degree in Computer Science, a related field, or equivalent practical experience",
//     experiences: "2+ years of experience in this field",
//     contact_information: {
//       phone: "979-979-9799",
//       email: "reddit@career.com"
//     }
//   }
// ];

// const Job = () => {
//   const { id } = useParams();
//   const job = jobs.find(job => job.id === parseInt(id, 10));

//   return (
//     <Container>
//       {job ? (
//         <Box sx={{ padding: 2 }}>
//           <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
//             <Avatar src={job.company_logo} alt={job.company_name} sx={{ width: 100, height: 100, marginRight: 2 }} />
//             <Box>
//               <Typography variant="h4">{job.job_title}</Typography>
//               <Typography variant="h6">{job.company_name}</Typography>
//               <Typography variant="body1">{job.salary}</Typography>
//               <Typography variant="body2">{job.remote_or_onsite} | {job.location}</Typography>
//             </Box>
//           </Box>
//           <Typography variant="h6">Job Description</Typography>
//           <Typography variant="body1">{job.job_description}</Typography>
//           <Typography variant="h6">Job Responsibility</Typography>
//           <Typography variant="body1">{job.job_responsibility}</Typography>
//           <Typography variant="h6">Educational Requirements</Typography>
//           <Typography variant="body1">{job.educational_requirements}</Typography>
//           <Typography variant="h6">Experiences</Typography>
//           <Typography variant="body1">{job.experiences}</Typography>
//           <Typography variant="h6">Contact Information</Typography>
//           <Typography variant="body1">Phone: {job.contact_information.phone}</Typography>
//           <Typography variant="body1">Email: {job.contact_information.email}</Typography>
//           <Typography variant="body1">Type: {job.fulltime_or_parttime}</Typography>
//         </Box>
//       ) : (
//         <Typography variant="h6">Job not found</Typography>
//       )}
//     </Container>
//   );
// };

// export default Job;
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Typography, Box, Avatar } from '@mui/material';

// Mock job data for demonstration
const jobs = [
  // Your job data here
  {
    id: 1,
    company_logo: "https://www.logo.wine/a/logo/Meta_Platforms/Meta_Platforms-Logo.wine.svg",
    job_title: "Technical Program Manager",
    company_name: "Meta",
    salary: "$85,000 - $145,000",
    job_description: "Oversee technical projects and manage engineering teams.",
    job_responsibility: "Lead project planning, execution, and delivery.",
    educational_requirements: "Bachelor's degree in Computer Science or related field.",
    experiences: "5+ years of experience in program management.",
    contact_information: {
      phone: "273-273-2772",
      email: "meta@career.com"
    },
    remote_or_onsite: "Onsite",
    location: "Seattle, WA",
    fulltime_or_parttime: "Fulltime"
  },
  {
    id: 2,
    company_logo: "https://www.logo.wine/a/logo/Google/Google-Logo.wine.svg",
    job_title: "Sr. Software Engineer",
    company_name: "Google LLC",
    remote_or_onsite: "Onsite",
    location: "New York, NY",
    fulltime_or_parttime: "Fulltime",
    salary: "$90,000 - $110,000",
    job_description: "As a software engineer, you will work on a specific project critical to Google’s needs with opportunities to switch teams and projects as you and our fast-paced business grow and evolve.",
    job_responsibility: "Triage product or system issues and debug/track/resolve by analyzing the sources of issues and the impact on hardware, network, or service operations and quality.",
    educational_requirements: "Bachelor's degree in Computer Science, a related field, or equivalent practical experience",
    experiences: "1 year of experience with software design and architecture",
    contact_information: {
      phone: "555-555-5555",
      email: "google@career.com"
    }
  },
  {
    id: 3,
    company_logo: "https://www.logo.wine/a/logo/Airbnb/Airbnb-Logo.wine.svg",
    job_title: "Solution Architect",
    company_name: "Airbnb",
    remote_or_onsite: "Remote",
    location: "Anywhere",
    fulltime_or_parttime: "Fulltime",
    salary: "$80,000 - $120,000",
    job_description: "Our team is looking for a high performance Solutions Architect with an entrepreneurial mindset to work with marketing executives at top-tier companies on their industry-leading advertising initiatives.",
    job_responsibility: "Work as part of a broader Solutions Go-To-Market team to contribute technical assets, prioritize, and shape solution direction.",
    educational_requirements: "Bachelor's degree in Computer Science, a related field, or equivalent practical experience",
    experiences: "2+ Years in this field.",
    contact_information: {
      phone: "559-559-5959",
      email: "airbnb@career.com"
    }
  },
  // Other jobs
];

const Jobs = () => {
  const location = useLocation();
  const [filteredJobs, setFilteredJobs] = useState([]);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const title = searchParams.get('title') || '';
    const loc = searchParams.get('location') || '';
    const company = searchParams.get('company') || '';
    const remoteOrOnsite = searchParams.get('remote_or_onsite') || '';

    // Filter jobs based on search parameters
    const filtered = jobs.filter(job => {
      const titleMatch = job.job_title.toLowerCase().includes(title.toLowerCase());
      const locationMatch = job.location.toLowerCase().includes(loc.toLowerCase());
      const companyMatch = job.company_name.toLowerCase().includes(company.toLowerCase());
      const remoteOrOnsiteMatch = job.remote_or_onsite.toLowerCase().includes(remoteOrOnsite.toLowerCase());

      // Jobs that match all criteria will appear first
      return (titleMatch || locationMatch || companyMatch || remoteOrOnsiteMatch);
    });

    setFilteredJobs(filtered);
  }, [location.search]);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Job Listings
      </Typography>
      {filteredJobs.length > 0 ? (
        filteredJobs.map(job => (
          <Box key={job.id} sx={{ padding: 2, borderBottom: '1px solid #ccc' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Avatar src={job.company_logo} alt={job.company_name} sx={{ width: 80, height: 80, marginRight: 2 }} />
              <Box>
                <Typography variant="h5">{job.job_title}</Typography>
                <Typography variant="h6">{job.company_name}</Typography>
                <Typography variant="body1">{job.salary}</Typography>
                <Typography variant="body2">
                  {job.remote_or_onsite} | {job.location}
                </Typography>
              </Box>
            </Box>
          </Box>
        ))
      ) : (
        <Typography variant="h6">No jobs found</Typography>
      )}
    </Container>
  );
};

export default Jobs;
