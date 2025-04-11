import React, { useState, useContext } from 'react';
import { CiShoppingCart } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { CartContext } from './CartContext';
import { useNavigate } from 'react-router-dom';
const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleCheckoutClick = () => {
    navigate('/checkout');
  };
    const BacktoPage = () => {
      navigate('/')
    }
    const Lookout = () => {
      navigate('/Lookout')
    }
  return (
    <nav className="px-4 py-4 bg-gray-100 shadow-sm">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-8">
            <img 
            onClick={BacktoPage}
              className="w-40 h-auto" 
              src="/Ace Logo.png" 
              alt="Ace Logo" 
            />
          </div>

          {/* Desktop Navigation Items - Hidden on mobile */}
          <div className="hidden sm:flex items-center space-x-6">
            <ul className="nav-list">
              <li 
              className="nav-item font-bold hover:text-gray-500 cursor-pointer"
              onClick={Lookout}
              >LOOKOUT COLLECTION</li>
            </ul>
            {/* Search bar */}
            <div className="relative">
              <input
                type="text"
                className="pl-4 pr-10 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Search"
                aria-label="Search"
              />
              <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>

            {/* Currency */}
            <div className="flex items-center gap-2">
              <img 
                src="/Flag.png" 
                alt="Nigeria Flag" 
                className="w-6 h-auto" 
              />
              <span className="font-bold">NGN</span>
            </div>

            {/* Login */}
            <button className="hover:text-blue-600 cursor-pointer">Login</button>

            {/* Cart Icon with count */}
            <div className="relative">
              <button 
                onClick={handleCheckoutClick}
                className="hover:text-blue-600"
                aria-label="Shopping Cart"
              >
                <CiShoppingCart className="text-2xl" />
                {cart.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cart.length}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Icons - Hidden on desktop */}
          <div className="flex sm:hidden items-center gap-4">
            {/* Cart Icon with count */}
            <div className="relative">
              <button 
                onClick={handleCheckoutClick}
                className="hover:text-blue-600"
                aria-label="Shopping Cart"
              >
                <CiShoppingCart className="text-4xl" />
                {cart.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cart.length}
                  </span>
                )}
              </button>
            </div>
            
            {/* Hamburger Menu Button */}
            <button
              className="text-2xl focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
              aria-expanded={menuOpen}
            >
              <GiHamburgerMenu />
            </button>
          </div>
        </div>

        {/* Mobile Menu - Only shown when hamburger is clicked */}
        {menuOpen && (
          <div className="sm:hidden mt-4 bg-white shadow-md rounded-lg p-4 space-y-4">
            {/* Search bar */}
            <div className="relative">
              <input
                type="text"
                className="w-full pl-4 pr-10 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Search"
                aria-label="Search"
              />
              <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
              {/* List Menu */}
              <ul className="nav-list">
              <li 
              className="nav-item font-bold hover:text-gray-500 cursor-pointer text-center"
              onClick={Lookout}
              >LOOKOUT COLLECTION</li>
            </ul>

            {/* Currency */}
            <div className="flex items-center justify-center gap-2">
              <img 
                src="/Flag.png" 
                alt="Nigeria Flag" 
                className="w-6 h-auto" 
              />
              <span className="font-bold">NGN</span>
            </div>

            {/* Login */}
            <button 
              className="block text-center py-2 hover:text-blue-600 w-full"
              onClick={() => setMenuOpen(false)}
            >
              LOGIN
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;