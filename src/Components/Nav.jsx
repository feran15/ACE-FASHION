import React from 'react';
import { CiShoppingCart } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";

const Nav = () => {
  return (
    <div className=' px-4 py-4 bg-gray-100'>
      <div className='flex justify-between items-center'>
        <div className="flex items-center gap-8">
          <div className="logo">
            <img className='w-40' src="/Ace Logo.png" alt="Ace Logo" />
          </div>
          <div className="relative">
            <input 
              type="text" 
              className='w-64 pl-4 pr-10 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500' 
              placeholder='Search' 
            />
            <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
        
        <div className="flex items-center gap-6">
          <div className="flag-carrier flex items-center gap-2">
            <img src="/Flag.png" alt="Country Flag" className='w-6' />
            <h4 className='font-bold'>NGN</h4>
          </div>
          <h4 className='cursor-pointer hover:text-blue-600'>Login</h4>
          <CiShoppingCart className='text-2xl cursor-pointer hover:text-blue-600' />
        </div>
      </div>
    </div>
  )
}

export default Nav;