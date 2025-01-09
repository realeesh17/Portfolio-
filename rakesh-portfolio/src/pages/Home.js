import React from 'react';
import Header from '../components/Header';
import AcademicJourney from '../components/AcademicJourney';
import Skills from '../components/Skills';
import NutrilensProject from '../components/NutrilensProject';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div>
            <Header />
            <main>
                <AcademicJourney />
                <Skills />
                <NutrilensProject />
            </main>
            <Footer />
        </div>
    );
};

export default Home;