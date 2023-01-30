import React from 'react';

const Service = () => {
    return (
        <div className=' mt-[1000px] lg:mt-[55%]'>
            <div className='ml-[1rem] lg:ml-32'>
                <h1 className='text-xl text-black font-medium'>Respect & Compession</h1>
            <h1 className='text-[31px] lg:text-5xl font-bold mt-2 lg:mt-5'>Our Services</h1>
            <p className='btn px-9 bg-orange-600 border-none  py-2 mt-7 text-white hover:text-black rounded-none '> ALL SERVICES</p>
            </div>
            <div className='lg:grid grid-cols-4 lg:mx-32 flex flex-col justify-center lg:mt-28'>
               
                <div  className='mx-auto'>
                <span className="material-symbols-outlined text-[60px]">
person_add
</span>
                <h1 className='text-slate-800 text-3xl max-w-[75px] font-semibold'>ASSISTED LIVING</h1>
                <p className='max-w-[220px] mt-10 text-lg'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet recusandae reiciendis in, </p>
                </div>
                
                <div  className='mx-auto'><span class="material-symbols-outlined text-[60px]">
other_houses
</span>
                <h1 className='text-slate-800 text-3xl max-w-[75px] font-semibold'>RESIDENT
CARE</h1>
                <p className='max-w-[220px] mt-10 text-lg'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet recusandae reiciendis in, </p>
                </div>
                
                <div  className='mx-auto'>
                <span class="material-symbols-outlined text-[60px]">
prescriptions
</span>
                <h1 className='text-slate-800 text-3xl max-w-[75px] font-semibold'>PHARMACY
SUPPORT</h1>
                <p className='max-w-[220px] mt-10 text-lg'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet recusandae reiciendis in, </p>
                </div>
                
                <div  className='mx-auto w-[70%] lg:w-full text-center lg:text-left'><span class="material-symbols-outlined  text-[60px] ">
add_comment
</span>
                <h1 className='text-slate-800 text-3xl  font-semibold max-w-[90%]'>24/7 SPECIAL
SERVICES</h1>
                <p className='max-w-[220px] mt-10 text-lg'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet recusandae reiciendis in, </p>
                </div>
                
            </div>
        </div>
    );
};

export default Service;