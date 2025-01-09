import React from 'react';
import './Footer.css'; // Assuming you have a separate CSS file for footer styles

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Rakesh Babriya. All rights reserved.</p>
                <div className="social-links">
                    <a href="https://github.com/rakeshbabriya" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="https://linkedin.com/in/rakeshbabriya" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="mailto:rakesh.babriya@example.com">Email</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;