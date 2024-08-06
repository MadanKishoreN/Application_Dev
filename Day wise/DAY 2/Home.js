// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Footer from './Footer'; // Import the Footer component
// import '../Asserts/Style/Home.css'; // Custom styles

// // Import images
// import googleLogo from '../Asserts/Images/google.png';
// import airbnbLogo from '../Asserts/Images/airbnb.png';
// import netflixLogo from '../Asserts/Images/netflix.png';
// import planetLogo from '../Asserts/Images/Planet_logo_New.png';
// import accountFinanceLogo from '../Asserts/Images/logo/accounts 1.png';
// import creativeDesignLogo from '../Asserts/Images/logo/business 1.png';
// import marketingSalesLogo from '../Asserts/Images/logo/megaphone.png';
// import engineeringJobLogo from '../Asserts/Images/logo/chip 1.png';

// const Home = () => {
//   const [jobTitle, setJobTitle] = useState('');
//   const [location, setLocation] = useState('');
//   const [showAll, setShowAll] = useState(false); // State to manage card visibility
//   const navigate = useNavigate();

//   const handleSearch = (e) => {
//     e.preventDefault();
//     navigate(`/jobs?title=${jobTitle}&location=${location}`);
//   };

//   const jobListings = [
//     {
//       id: 1,
//       companyLogo: googleLogo,
//       jobTitle: 'Sr. Software Engineer',
//       companyName: 'Google LLC',
//       location: 'New York, NY',
//       jobType: 'Onsite',
//       salary: '$90,000 - $110,000',
//     },
//     {
//       id: 2,
//       companyLogo: airbnbLogo,
//       jobTitle: 'Solution Architect',
//       companyName: 'Airbnb',
//       location: 'Anywhere',
//       jobType: 'Remote',
//       salary: '$80,000 - $120,000',
//     },
//     {
//       id: 3,
//       companyLogo: netflixLogo,
//       jobTitle: 'Dev Ops Engineer',
//       companyName: 'Netflix',
//       location: 'Chicago, IL',
//       jobType: 'Onsite',
//       salary: '$95,000 - $120,000',
//     },
//     {
//       id: 4,
//       companyLogo: planetLogo,
//       jobTitle: 'Data Engineer',
//       companyName: 'Planet',
//       location: 'Anywhere',
//       jobType: 'Remote',
//       salary: '$115,000 - $145,000',
//     },
//     // Add more job listings as needed
//   ];

//   const jobCategories = [
//     {
//       id: 1,
//       logo: accountFinanceLogo,
//       categoryName: 'Account & Finance',
//       jobsAvailable: '300+ Jobs Available',
//     },
//     {
//       id: 2,
//       logo: creativeDesignLogo,
//       categoryName: 'Creative Design',
//       jobsAvailable: '100+ Jobs Available',
//     },
//     {
//       id: 3,
//       logo: marketingSalesLogo,
//       categoryName: 'Marketing & Sales',
//       jobsAvailable: '150+ Jobs Available',
//     },
//     {
//       id: 4,
//       logo: engineeringJobLogo,
//       categoryName: 'Engineering Job',
//       jobsAvailable: '220+ Jobs Available',
//     },
//     {
//       id: 5,
//       logo: engineeringJobLogo,
//       categoryName: 'Human Resources',
//       jobsAvailable: '180+ Jobs Available',
//     },
//     {
//       id: 6,
//       logo: engineeringJobLogo,
//       categoryName: 'Information Technology (IT)',
//       jobsAvailable: '220+ Jobs Available',
//     },
//   ];

//   return (
//     <div className="home">
//       <header className="header">
//         <div className="hero-content">
//           <h1>Find Your Dream Job</h1>
//           <p>Search through thousands of job listings and find your perfect fit.</p>
//           <form className="search-form" onSubmit={handleSearch}>
//             <input
//               type="text"
//               placeholder="Job title, keywords, or company"
//               value={jobTitle}
//               onChange={(e) => setJobTitle(e.target.value)}
//             />
//             <input
//               type="text"
//               placeholder="Location"
//               value={location}
//               onChange={(e) => setLocation(e.target.value)}
//             />
//             <button type="submit">Search Jobs</button>
//           </form>
//         </div>
//       </header>

//       <main className="main-content">
//         <section className="job-categories">
//           <h2>Job Category List</h2>
//           <p>Explore thousands of job opportunities with all the information you need. It's your future.</p>
//           <div className="category-list">
//             {jobCategories.map((category) => (
//               <div className="category-card" key={category.id}>
//                 <img src={category.logo} alt={`${category.categoryName} Logo`} className="category-logo" />
//                 <h3>{category.categoryName}</h3>
//                 <p>{category.jobsAvailable}</p>
//               </div>
//             ))}
//           </div>
//         </section>

//         <section className="featured-jobs">
//           <h2>Featured Jobs</h2>
//           <p>Explore thousands of job opportunities with all the information you need. It's your future.</p>
//           <div className="job-listings">
//             {jobListings.slice(0, showAll ? jobListings.length : 2).map((job) => (
//               <div className="job-card" key={job.id}>
//                 <img src={job.companyLogo} alt={`${job.companyName} Logo`} className="company-logo" />
//                 <h3>{job.jobTitle}</h3>
//                 <p>{job.companyName}</p>
//                 <p>{job.jobType}</p>
//                 <p>{job.location}</p>
//                 <p>Salary: {job.salary}</p>
//                 <a href={`/jobs/${job.id}`} className="view-job-button">View Job</a>
//               </div>
//             ))}
//           </div>
//           <button className="toggle-button" onClick={() => setShowAll(!showAll)}>
//             {showAll ? 'Show Less' : 'Show All'}
//           </button>
//         </section>
//       </main>

//       <Footer /> {/* Add Footer component */}
//     </div>
//   );
// };

// export default Home;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import '../Asserts/Style/Home.css'; 


import googleLogo from '../Asserts/Images/google.png';
import airbnbLogo from '../Asserts/Images/airbnb.png';
import netflixLogo from '../Asserts/Images/netflix.png';
import planetLogo from '../Asserts/Images/Planet_logo_New.png';
import amazonLogo from '../Asserts/Images/logo/amazon.png';
import teslaLogo from '../Asserts/Images/tesla.png';


const Home = () => {
  const [jobTitle, setJobTitle] = useState('');
  const [location, setLocation] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/jobs?title=${jobTitle}&location=${location}`);
  };

  const companyOffers = [
    {
      id: 1,
      logo: googleLogo,
      companyName: 'Google LLC',
      offersAvailable: '130+ Offers Available',
    },
    {
      id: 2,
      logo: airbnbLogo,
      companyName: 'Airbnb',
      offersAvailable: '120+ Offers Available',
    },
    {
      id: 3,
      logo: netflixLogo,
      companyName: 'Netflix',
      offersAvailable: '230+ Offers Available',
    },
    {
      id: 4,
      logo: planetLogo,
      companyName: 'Planet',
      offersAvailable: '220+ Offers Available',
    },
    {
      id: 5,
      logo: amazonLogo,
      companyName: 'Amazon',
      offersAvailable: '300+ Offers Available',
    },    
    {
      id: 6,
      logo: teslaLogo,
      companyName: 'Tesla',
      offersAvailable: '270+ Offers Available',
    },
    // Add more company offers as needed
  ];

  return (
    <div className="home">
      <header className="header">
        <div className="hero-content">
          <h1>Find Your Dream Job</h1>
          <p>Search through thousands of job listings and find your perfect fit.</p>
          <form className="search-form" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Job title, keywords, or company"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
            />
            <input
              type="text"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <button type="submit">Search Jobs</button>
          </form>
        </div>
      </header>

      <main className="main-content">
        <section className="company-offers">
          <h2>Company Offers</h2>
          <p>Explore job opportunities from top companies. It's your future.</p>
          <div className="company-list">
            {companyOffers.map((company) => (
              <div className="company-card" key={company.id}>
                <img src={company.logo} alt={`${company.companyName} Logo`} className="company-logo" />
                <h3>{company.companyName}</h3>
                <p>{company.offersAvailable}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer /> {/* Add Footer component */}
    </div>
  );
};

export default Home;
