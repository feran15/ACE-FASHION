import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import { BsTwitterX } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
const Section = () => {
  return (
    <div className="p-5">
      {/* Image Section - Stacked on Mobile, Side-by-Side on Larger Screens */}
      <div className="Section flex flex-col md:flex-row items-center gap-1">
        <span className="image-1 ">
          <img src="/Fotor.jpg" alt="First" className="w-full object-cover " />
        </span>
        <span className="image-2">
          <img src="/D.jpg" alt="Second" className="w-full  object-cover" />
        </span>
      </div>

      {/* Top Text
      <div className="Top-text p-5 flex flex-col md:flex-row justify-between   md:text-left">
        <div className="mb-4 md:mb-0">
          <h3 className="font-bold text-lg">JOIN THE COMMUNITY</h3>
          <p className="text-gray-600">You will receive all the information regarding the next drops.</p>
        </div>
        <div className="form-control flex flex-col sm:flex-row items-center gap-2 w-full max-w-md">
        <input
      type="text"
      placeholder="Email Address"
      className="w-full border-b-2 border-gray-400 bg-transparent outline-none focus:border-blue-500 p-2"
    />
          <button className="bg-[black] text-white px-4 py-2 rounded-md w-full sm:w-auto cursor-pointer">
            SUBSCRIBE
          </button>
        </div>
      </div> */}

      {/* Lower Section with Social Media */}
      {/* <div className="lower-text  flex-col md:flex-row   gap-4 mt-5">
        <p className="text-gray-700 font-semibold">FOLLOW US</p>
        <span className='flex gap-4 mt-2'>
        <a
          href="https://example.com"
          target="_blank"
          rel="noopener noreferrer"
          className=" hover:text-pink-800 transition-all"
        >
          <FaInstagram size={30} />
        </a>
        <a
          href="https://example.com"
          target="_blank"
          rel="noopener noreferrer"
          className=" hover:text-pink-800 transition-all"
        >
          <BsTwitterX  size={30} />
          </a>
          <a
          href="https://example.com"
          target="_blank"
          rel="noopener noreferrer"
          className=" hover:text-pink-800 transition-all"
        >
          <FaWhatsapp  size={30} />
          </a>
          </span>
      </div> */}
    </div>
  );
};

export default Section;
