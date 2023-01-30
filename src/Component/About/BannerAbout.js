import React from 'react';
import Navbar from '../Navbar';
import '../Home/Banner.css'

const BannerAbout = () => {
    return (
        <div className="bg-[url('/src/Component/About/Images/bgAbout.jpg')] w-[100%]  bg-cover h-[40rem]  bg-no-repeat  bg-fixed ">
           
           <Navbar></Navbar>
            
           
           <h1 className='font-bold text-9xl pt-24 pl-20 text-white '>About Us</h1>
        
        </div>
    );
};

export default BannerAbout;