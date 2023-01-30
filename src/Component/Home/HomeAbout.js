import React from 'react';
import homeabout from './Images/about-01-free-img.jpg'
import lady from './Images/about-02-free-img.jpg'
import CountUp from 'react-countup';
import {IoIosArrowForward} from 'react-icons/io'
const HomeAbout = () => {
    return (
        <div className="bg-[url('/src/Component/Home/Images/HMbd.jpg')] bg-cover bg-no-repeat h-[39rem] mt-[80px] bg-fixed text-white">
            <div className='lg:grid grid-cols-2 lg:mx-32 lg:pt-20 '>
                <div className=' bg-[#4054B2] '>
                    <p className='text-white ml-10 mt-10 font-medium'>About</p>
                    <h2 className='text-[38px]  font-serif font-bold mt-10 ml-10'>
                        Our mission is to provide best service
                    </h2>
                    <div className='lg:grid grid-cols-2 mx-[10%] lg:ml-10 lg:mr-0 gap-10 text-justify py-[10%] lg:py-0'>
                        <p className='lg:max-w-[120px] mt-7'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati magnam dolore odit recusandae officiis libero saepe ipsa quam aspernatur minus.</p>
                        <p className=' lg:max-w-[110px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quaerat illo quisquam error labore quidem!</p>

                    </div>
                </div>

                <div className='grid grid-cols-2'>
                    <div className='grid grid-rows-2'>
                        <div className=' bg-gray-800  opacity-50  '>

                        </div>
                        <div>
                        <div className='bg-yellow-600  h-full  '>
                <div className='  ml-[5%] font-semibold text-white'>
                <p >Contact</p>
                <p className='mt-5 text-sm lg:text-2xl  '>56464564654564</p>
                <div>
                <p className='btn bg-transparent border-white mt-[22%] lg:mt-[40%]'><IoIosArrowForward/></p>
               </div>
                </div>

                    </div>
                        </div>
                    </div>
                    <div>
                    <img src={homeabout}/>
                    </div>

                </div>
            </div>

            <div className='lg:grid grid-cols-2 lg:mx-32'>
                <div>

                </div>
                <div className='grid grid-cols-2'>
                    <div className='hidden lg:block'>
                        <img src={lady}/>
                    </div>
                    <div>
                    <div className='bg-yellow-600  h-full  '>
                <div className='  ml-[5%] font-semibold text-white'>
                <p >Contact</p>
                <p className='mt-5 text-sm lg:text-2xl   '>56464564654564</p>
                <div>
                <p className='btn bg-transparent border-white  mt-[22%] lg:mt-[40%]'><IoIosArrowForward/></p>
               </div>
                </div>

                    </div>
                    </div>
                    <div className='lg:hidden block'>
                        <img src={lady}/>
                    </div>
                </div>

            </div>
           
        </div>
    );
};

export default HomeAbout;