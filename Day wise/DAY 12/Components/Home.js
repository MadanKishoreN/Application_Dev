import React from 'react';
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
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/signup');
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
          <button className="find-job-button" onClick={handleButtonClick}>Find Your Job</button>
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
