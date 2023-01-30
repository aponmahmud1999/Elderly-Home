import React from 'react';
import CountUp from 'react-countup';
const Counter = () => {
    return (
        <div className='lg:mx-32 lg:mt-56 mt-[450px]'>
            <h1 className='font-serif text-black ml-5'>Lets the number speak</h1>
            <div className='lg:grid grid-cols-4 mt-7'>
                <div className='text-black text-center border'>
                <p className='mt-20 ml-5 font-bold text-6xl'><CountUp end={15} duration={1} /></p>
               <p className='mt-16 font-bold text-lg mb-5 ml-5'>Senior Service</p>
                </div>
                <div className='text-black text-center border'>
                <p className='mt-20 ml-5 font-bold text-6xl'><CountUp end={30} duration={1} />+</p>
               <p className='mt-16 font-bold text-lg mb-5 ml-5'>Senior Service</p>
                </div>
                <div className='text-black text-center border'>
                <p className='mt-20 ml-5 font-bold text-6xl'><CountUp end={140} duration={1} />+</p>
               <p className='mt-16 font-bold text-lg mb-5 ml-5'>Senior Service</p>
                </div>
                <div className='text-black text-center border'>
                <p className='mt-20 ml-5 font-bold text-6xl'><CountUp end={27} duration={1} />+</p>
               <p className='mt-16 font-bold text-lg mb-5 ml-5'>Senior Service</p>
                </div>
            </div>
        </div>
    );
};

export default Counter;