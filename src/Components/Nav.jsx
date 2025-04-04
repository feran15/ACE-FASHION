import React, { useState } from 'react';
import { CiShoppingCart } from "react-icons/ci";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className='px-4 py-4 bg-gray-100'>
      <div className='flex justify-between items-center'>
        {/* Left Section - Logo & Search */}
        <div className="flex items-center gap-4">
          {/* Hamburger Menu (Mobile) */}
          <button className="md:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
          
          {/* Logo */}
          <div className="logo">
            <img className='w-32 md:w-40' src="/Ace Logo.png" alt="Ace Logo" />
          </div>

          {/* Search Bar (Hidden on Small Screens) */}
          <div className="relative hidden md:block">
            <input 
              type="text" 
              className='w-64 pl-4 pr-10 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500' 
              placeholder='Search' 
            />
            <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        {/* Right Section - Flag, Login, Cart */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flag-carrier flex items-center gap-2">
            <img src="/Flag.png" alt="Country Flag" className='w-6' />
            <h4 className='font-bold'>NGN</h4>
          </div>
          <h4 className='cursor-pointer hover:text-blue-600'>Login</h4>
          <CiShoppingCart className='text-2xl cursor-pointer hover:text-blue-600' />
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 bg-gray-100 rounded-lg shadow-lg p-4 space-y-4">
          <input 
            type="text" 
            className='w-full pl-4 pr-10 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500' 
            placeholder='Search' 
          />
          <div className="flex flex-col gap-4">
            <div className="flag-carrier flex items-center gap-2">
              <img src="/Flag.png" alt="Country Flag" className='w-6' />
              <h4 className='font-bold'>NGN</h4>
            </div>
            <h4 className='cursor-pointer hover:text-blue-600'>Login</h4>
            <CiShoppingCart className='text-2xl cursor-pointer hover:text-blue-600' />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
