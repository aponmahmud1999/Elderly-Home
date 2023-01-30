import React from 'react';

const Footer = () => {
    return (
       
        <div className='bg-black text-white'>
             <footer className="footer lg:p-10 p-[5%]  ">
   <div className='text-white'>
    <span className="">Newsletter</span> 
    <div className="form-control lg:w-80">
      <label className="label">
        <span className="">Enter your email address</span>
      </label> 
      <div className="lg:relative">
        <input type="text" placeholder="" className="input input-bordered w-[80%] lg:w-full lg:pr-16" /> 
        <button className="btn bg-orange-700 px-7 py-1 mt-2  ">Subscribe</button>
      </div>
    </div>
  </div>
  <div>
    <span className="footer-title">Company</span> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
    <a className="link link-hover">Press kit</a>
  </div> 
  <div>
    <span className="footer-title">Legal</span> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </div> 
 
</footer>
<div className="border-t text-white "></div>
<p className='mt-5 pb-5 text-center'> Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
        </div>
    );
};

export default Footer;