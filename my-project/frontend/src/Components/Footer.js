// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Facebook, Twitter, Instagram } from '@mui/icons-material';
// import { Container, Grid, Typography, Link as MUILink, IconButton } from '@mui/material';
// import '../Asserts/Style/Footer.css';

// const Footer = () => {
//   return (
//     <footer className="footer bg-gray-100 p-6 rounded-t-3xl">
//       <Container maxWidth="lg">
//         <Grid container spacing={4}>
//           <Grid item xs={12} md={4}>
//             <Typography variant="h5" gutterBottom>
//               CareerHub
//             </Typography>
//             <Typography variant="body2" color="textSecondary">
//               Your go-to platform for career opportunities and insights. Explore a wide range of job offers and career advice tailored to your needs.
//             </Typography>
//             <div className="social-icons flex space-x-4 mt-4">
//               <IconButton
//                 href="https://www.facebook.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label="Facebook"
//               >
//                 <Facebook />
//               </IconButton>
//               <IconButton
//                 href="https://www.twitter.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label="Twitter"
//               >
//                 <Twitter />
//               </IconButton>
//               <IconButton
//                 href="https://www.instagram.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label="Instagram"
//               >
//                 <Instagram />
//               </IconButton>
//             </div>
//           </Grid>

//           <Grid item xs={12} md={4}>
//             <Typography variant="h6" gutterBottom>
//               Quick Links
//             </Typography>
//             <div>
//               <MUILink component={Link} to="/about" variant="body2" color="textSecondary" className="d-block">
//                 About Us
//               </MUILink>
//               <MUILink component={Link} to="/contact" variant="body2" color="textSecondary" className="d-block">
//                 Contact
//               </MUILink>
//               <MUILink component={Link} to="/privacy" variant="body2" color="textSecondary" className="d-block">
//                 Privacy Policy
//               </MUILink>
//             </div>
//           </Grid>

//           <Grid item xs={12} md={4}>
//             <Typography variant="h6" gutterBottom>
//               Services
//             </Typography>
//             <div>
//               <MUILink href="#" variant="body2" color="textSecondary" className="d-block">
//                 Company Review
//               </MUILink>
//               <MUILink href="#" variant="body2" color="textSecondary" className="d-block">
//                 Accounts Review
//               </MUILink>
//               <MUILink href="#" variant="body2" color="textSecondary" className="d-block">
//                 HR Consulting
//               </MUILink>
//               <MUILink href="#" variant="body2" color="textSecondary" className="d-block">
//                 SEO Optimization
//               </MUILink>
//             </div>
//           </Grid>
//         </Grid>
//       </Container>
//       <div className="footer-bottom text-center mt-4">
//         <Typography variant="body2" color="textSecondary">
//           &copy; 2024 CareerHub. All rights reserved.
//         </Typography>
//       </div>
//     </footer>
//   );
// }

// export default Footer;
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
