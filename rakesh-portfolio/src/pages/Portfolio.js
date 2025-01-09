import React from 'react';
import Header from '../components/Header';
import Skills from '../components/Skills';
import NutrilensProject from '../components/NutrilensProject';
import Footer from '../components/Footer';

const Portfolio = () => {
    return (
        <div>
            <Header />
            <h1>Portfolio</h1>
            <p>Welcome to my portfolio page! Here you can find more about my projects and skills.</p>
            <NutrilensProject />
            <Skills />
            <Footer />
        </div>
    );
};

export default Portfolio;