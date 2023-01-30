import React from "react";
const ContactUS = () => {
  return (
    <div
      id="contactus"
      className="px-[5%] py-[1%] bg-cover bg-fixed"
      
    >
      
      
      <div className=" lg:flex ">
        <div
          className="  lg:w-[43%] py-[5%]"
        >
            <div className=" lg:w-[70%] text-center lg:text-left mx-auto">
        <h1 className='font-serif text-black'>Contact us</h1>
          <h1 className="text-[28px] lg:text-[40px] text-black font-bold">
          Get in Touch and Let us Care for your Loved Ones.
          </h1></div>
        </div>

        <form
          className="flex flex-col  px-[5%] lg:px-[10%]  py-[5%]"
        ><label className="label pb-0 lg:pt-[5%]">
        <span className="label-text font-bold">Name*</span>
      </label>
          <div className="flex flex-col md:grid grid-cols-2 gap-x-3 gap-y-3 pt-0">
            <div><input
              type="text"
              placeholder="First Name"
              className="rounded-none input input-bordered input-sm md:input-md shadow-2xl w-full "
            /><label className="label py-0">
            <span className="label-text">First</span>
          </label></div>
          <div><input
              type="text"
              placeholder="Last Name"
              className="rounded-none input input-bordered input-sm md:input-md shadow-2xl w-full "
            /><label className="label py-0">
            <span className="label-text">Last</span>
          </label></div>
          </div>
          <label className="label pb-0 pt-[5%]">
        <span className="label-text font-bold">Email*</span>
      </label>
          <input
            type="email"
            placeholder="Email"
            className="rounded-none input input-bordered input-sm md:input-md w-full shadow-2xl "
          />
          <label className="label pb-0 pt-[5%]">
        <span className="label-text font-bold">Message*</span>
      </label>
          <textarea
            className="rounded-none textarea textarea-bordered  h-24 w-full shadow-2xl "
            placeholder="Message"
          ></textarea>
          <div className=" pb-0 pt-[5%]">
          <button
            type="submit"
            className=" text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-sm text-[12px] sm:text-sm px-5 py-1 sm:py-2.5 text-center mr-2 mb-2"
          >
            Submit
          </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUS;