import React from 'react';
import about from  './Images/gallery-09-free-img.jpg'

const Aboutus = () => {
    return (
        <div className='mx-32 mt-32 bg-white'>
            <div className='grid grid-cols-2 '>
                <div>
                    <p>A few Words</p>
                    <h1 className='text-4xl mt-4 font-semibold'>About US</h1>
                    <p className='mt-10 max-w-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repudiandae fugit illum molestias hic? Laboriosam placeat dolorem molestias recusandae quisquam rem, esse voluptatibus nemo, in, harum ratione! Et esse totam quidem pariatur, perspiciatis eum assumenda est, quos laboriosam nesciunt, porro voluptatibus aperiam saepe. Ullam vel fugiat voluptate architecto totam sunt!<br></br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia eius ducimus quo, architecto animi reprehenderit molestias corrupti placeat explicabo. Eius.</p>
                    
                </div>
                <div>
                    <img src={about}/>
                </div>

            </div>

            <div className='grid grid-cols-2  '>
                <div className=' bg-[#4054B2] '>
                    <p className='text-white ml-10 mt-10 font-medium'>About</p>
                    <h2 className='text-[38px] max-w-md  font-serif font-bold mt-10 ml-10'>
                        Our mission is to provide best service
                    </h2>
                    <div className='grid grid-cols-2 ml-10 gap-10 '>
                        <p className='max-w-[120px] mt-7'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati magnam dolore odit recusandae officiis libero saepe ipsa quam aspernatur minus.</p>
                        <p className='mt-5 max-w-[110px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quaerat illo quisquam error labore quidem!</p>

                    </div>
                </div>

                <div className='grid grid-cols-2'>
                    <div className='grid grid-rows-2'>
                        <div className=' '>
                        <div className='bg-yellow-600  h-full  '>
                <div className='  ml-[5%] font-semibold text-white'>
                <p >Contact</p>
                <p className='mt-5 text-2xl  '>56464564654564</p>
                </div>

                    </div>
                        </div>
                        <div>
                        
                        </div>
                    </div>
                    <div>
                    
                    </div>

                </div>
            </div>
            
        </div>
    );
};

export default Aboutus;