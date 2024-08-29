import React from 'react';
import HeroSection from './HeroSection';
import Reels from './Section/Reels';
import Navbar from './Shared/Navbar';
import Footer from './Shared/Footer';
import Cover from './Section/Cover';
import Vedios from './Section/Vedios';

const Homepage = () => {
    return (
        <div className=''>
            <Navbar></Navbar>
            <HeroSection></HeroSection>
            <Reels></Reels>
            {/* <Collection></Collection> */}
            <Cover></Cover>
            <Vedios></Vedios>
            <Footer></Footer>
        </div>
    );
};

export default Homepage;