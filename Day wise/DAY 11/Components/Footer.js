import React from 'react';
import '../Asserts/Style/Footer.css';
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-item">
                    <h2>Career Compass</h2>
                    <p>There are many variations of passages of Lorem Ipsum, but the majority have suffered alteration in some form.</p>
                    
                </div>
                <div className="footer-item">
                    <h5>Services</h5>
                    <ul>
                        <li><a href="/">Company Review</a></li>
                        <li><a href="/">Accounts Review</a></li>
                        <li><a href="/">HR Consulting</a></li>
                        <li><a href="/">SEO Optimisation</a></li>
                    </ul>
                </div>
                <div className="footer-item">
                    <h5>Company</h5>
                    <ul>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Meet the Team</a></li>
                        <li><a href="/">Accounts Review</a></li>
                    </ul>
                </div>
                <div className="footer-item">
                    <h5>Helpful Links</h5>
                    <ul>
                        <li><a href="/">Contact</a></li>
                        <li><a href="/">FAQs</a></li>
                        <li><a href="/">Live Chat</a></li>
                    </ul>
                </div>
                <div className="footer-item">
                    <h5>Legal</h5>
                    <ul>
                        <li><a href="/">Accessibility</a></li>
                        <li><a href="/">Returns Policy</a></li>
                        <li><a href="/">Refund Policy</a></li>
                        <li><a href="/">Hiring Statistics</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2023 Job Hunt. All rights reserved.</p>
                <div className="social-icons">
                        <a href="/" className="social-icon" target="_blank" rel="noreferrer">
                            <i className="bi bi-facebook"></i>
                        </a>
                        <a href="/" className="social-icon" target="_blank" rel="noreferrer">
                            <i className="bi bi-instagram"></i>
                        </a>
                        <a href="/" className="social-icon" target="_blank" rel="noreferrer">
                            <i className="bi bi-linkedin"></i>
                        </a>
                        <a href="/" className="social-icon" target="_blank" rel="noreferrer">
                            <i className="bi bi-twitter"></i>
                        </a>
                    </div>
            </div>
        </footer>
    );
};

export default Footer;
