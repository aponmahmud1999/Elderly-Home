import React from 'react';
import Footer from './Footer';
import Banner from './Home/Banner';
import ContactUS from './Home/ContactUs';
import Counter from './Home/Counter';
import Features from './Home/Features';
import HomeAbout from './Home/HomeAbout';
import Service from './Home/Service';

const Home = () => {
    return (
        <div>
          <Banner/>
          <Service/>
          <Features/>
          <HomeAbout/>
          <Counter/>
          <ContactUS/>
        </div>
    );
};

export default Home;