import React from 'react';
import Navbar from '../Navbar';
import blind from './Images/blindeye.jpg'
import blindlower from './Images/blindlower.jpg'
import sig from './Images/signature-free-img.png'
import './Banner.css'
import { IoIosArrowForward } from 'react-icons/io'

const Banner = () => {
    return (
        <div className="bg-[url('/src/Component/Home/Images/bg-001-free-img.jpg')] bg-cover bg-no-repeat  h-[40rem] bg-fixed ">
            <div className='bg'>
                <div >
                    <Navbar />
                </div>
                <div className='mx-[16%] md:mx-[10%]'>
                    <h1 className='text-[33px] md:text-[50px] lg:text-[78px] text-white  pt-28 lg:mr-[20%]  font-semibold text-left'>Compassion is at the Heart of our care</h1>
                </div>
                <div className='flex md:flex-row flex-col-reverse lg:mx-28 pt-40 '>

                    <div style={{ "position": "relative", "zIndex": "1" }}>
                        <img src={blind}></img>
                        <div className='absolute z-2 -mt-[50%] ml-[5%] font-semibold text-white'>
                            <p className='mt-5'> Welcome</p>
                            <p className='mt-5 text-2xl  max-w-md '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat cumque commodi voluptates reprehenderit, autem minima!</p>
                        </div>

                    </div>

                    <div className='flex gap-[1px] shadow-2xl lg:w-[50%] '>
                        <div className='bg-yellow-600  w-[50%]'>
                            <div className=' mt-5 ml-[5%] font-semibold text-white'>
                                <p >Contact</p>
                                <p className='mt-5 text-sm md:text-xl  '>56464564654564</p>

                                <div>
                                    <p className='btn bg-transparent border-white mt-[40%]'><IoIosArrowForward /></p>
                                </div>
                            </div>

                        </div>
                        <div className='bg-yellow-600 w-[50%] '>
                            <div className=' mt-5 my-[5%] font-semibold text-white'>
                                <p >Contact</p>
                                <p className='mt-5  text-sm md:text-xl  '>56464564654564</p>

                                <div>
                                    <p className='btn bg-transparent border-white mt-[40%]'><IoIosArrowForward /></p>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

                <div className='flex md:flex-row flex-col    '>
                    <div className='bg-white lg:w-[50%] lg:pl-28'>
                        <img className='' src={blindlower}></img>
                    </div>
                    {/* <div className='bg-green-800 ' style={{ "position": "relative", "zIndex": "1" }}>
                        <div className=' mt-5 ml-[5%] font-semibold text-white'>

                            <p className='mt-[30%] mb-[34%] text-2xl ml-72 underline   max-w-[200px] '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A porro non quia odit, fuga vel.</p>
                            <img className='ml-56 absolute z-2 -mt-44 w-[150px]' src={sig} />
                        </div>
                        <div className='bg-yellow-600 w-[300px] absolute z-2 h-[300px] -mt-[90%]'>
                            <div className=' mt-5 ml-[5%] font-semibold text-white'>
                                <p >Contact</p>
                                <p className='mt-5 text-2xl  '>56464564654564</p>
                                <div>
                                    <p className='btn bg-transparent border-white mt-[40%]'><IoIosArrowForward /></p>
                                </div>
                            </div>

                        </div>
                    </div> */}

                    <div  className='bg-green-800 flex lg:pr-28 lg:w-[50%]'  >
                        <div className=' w-[52%] '>
                            <div className=' py-4 pl-[5%] font-semibold text-white bg-yellow-600'>
                                <p >Certified Care</p>
                                <p className='mt-5 text-xl'>We are certified by the National Senior Care Association
                                </p>
                                <div>
                                    <p className='btn bg-transparent border-white mt-[20%]'><IoIosArrowForward /></p>
                                </div>

                            </div>

                        </div>
                        <div className='bg-green-800  w-[52%]'>
                            <div className=' md:mt-[45%] mx-[10%] font-semibold text-white'>
                                {/* <p >Contact</p> */}
                                <p className='mt-5 text-2xl italic underline text-end'>{'"'}Our great staff here strives to  lorem ipsum dolor sit amet, adipiscing elit. Ut elit tellus, elit luctus. {'"'}</p>
                                <div className='flex justify-end'><p className='w-[120px] py-[2%] '>Wyatt Morris,
                                    Director</p></div><div className='flex justify-end'>
                                <img className='   w-[150px] -mt-[20%] mb-[5%]' src={sig} /></div>
                                
                            </div>

                        </div>

                    </div>
                </div>


            </div>
        </div>
    );
};

export default Banner;