import React, { useContext } from 'react';
import { CiShoppingCart } from "react-icons/ci";
import { CartContext } from './CartContext';
import { useNavigate } from 'react-router-dom';

const Nav = () => {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <nav className="px-4 py-4 bg-gray-100 shadow-sm">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              className="w-40 h-auto" 
              src="/Ace Logo.png" 
              alt="Ace Logo" 
            />
          </div>

          {/* Cart Icon */}
          <div className="relative">
            <button 
              onClick={() => navigate('/checkout')}
              className="hover:text-blue-600 flex items-center"
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
      </div>
    </nav>
  );
};

export default Nav;