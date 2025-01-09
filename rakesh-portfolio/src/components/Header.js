import React from 'react';
import './Header.css'; // Assuming you will create a CSS file for header styles

const Header = () => {
    return (
        <header className="header">
            <div className="hero">
                <img src="/path/to/rakesh-photo.jpg" alt="Rakesh Babriya" className="hero-image" />
                <h1 className="hero-title">Rakesh Babriya</h1>
                <p className="hero-tagline">2nd Year Engineering Student | Aspiring Tech Innovator</p>
            </div>
            <nav className="navbar">
                <ul className="nav-links">
                    <li><a href="#academic-journey">Academic Journey</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#nutrilens">Nutrilens Project</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;