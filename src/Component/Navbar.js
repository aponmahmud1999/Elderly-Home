import React from 'react';
import logo from './Home/Images/logo-regular-free-img-200x93.png'
import { Link, NavLink } from 'react-router-dom'; 
import './Home/Banner.css'

const Navbar = () => {
    return (
      //   <div className="navbar  ">
      //   <div className="flex-1">
      //       <img className='h-[100px] w-[130px]' src={logo}/>
      //     <p className=" text-xl">Elder<br></br>Home</p>
      //   </div>
      //   <div className="flex-none">
      //     <ul className="menu menu-horizontal px-1">
      //       <li><Link to='/'>Home</Link></li>
           
      //       <li><Link to='/about'>About</Link></li>
      //     </ul>
      //   </div>
      // </div>
      <div className="navbar bg-transparent lg:px-[10%]">
  <div className="navbar-start">
    
    <a href="/" class="flex items-center">
      <img src={logo} class="h-6 mr-3 sm:h-[93px]" alt="Flowbite Logo" />
  </a>
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li ><NavLink className='btn btn-link no-underline text-black hover:text-yellow-600 normal-case hover:no-underline' to='/'>Home</NavLink></li>
      <li ><NavLink className='btn btn-link no-underline text-black hover:text-yellow-600 normal-case hover:no-underline' to='/about'>About</NavLink></li>
      <li className='btn btn-link no-underline text-black hover:text-yellow-600 normal-case hover:no-underline'>Services</li>
      <li className='btn btn-link no-underline text-black hover:text-yellow-600 normal-case hover:no-underline'>Facilities</li>
      <li className='btn btn-link no-underline text-black hover:text-yellow-600 normal-case hover:no-underline'>Contact</li>
    </ul>
    
  </div>
  
  <div className="navbar-end lg:hidden">
  <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-[96vw]">
        <li  ><NavLink className='text-black btn btn-sm btn-link no-underline normal-case' to='/'>Home</NavLink></li>
        <li><NavLink  className='text-black btn btn-sm btn-link no-underline normal-case' to='/about'>About</NavLink></li>
        <li  className='text-black btn btn-sm btn-link no-underline normal-case'>Services</li>
        <li  className='text-black btn btn-sm btn-link no-underline normal-case'>Facilities</li>
        <li  className='text-black btn btn-sm btn-link no-underline normal-case'>Contact</li>
      </ul>
    </div>
  </div>
</div>
    );
};

export default Navbar;