import React, { useContext } from "react";
import { CiShoppingCart } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { CartContext } from "../Components/CartContext";

const Nav = () => {
  const { cart } = useContext(CartContext); // Get cart data

  return (
    <div className="px-4 py-4 bg-gray-100">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-8">
          <img className="w-40" src="/Ace Logo.png" alt="Ace Logo" />

          <div className="relative">
            <input
              type="text"
              className="w-64 pl-4 pr-10 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Search"
            />
            <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="flag-carrier flex items-center gap-2">
            <img src="/Flag.png" alt="Country Flag" className="w-6" />
            <h4 className="font-bold">NGN</h4>
          </div>
          <h4 className="cursor-pointer hover:text-blue-600">Login</h4>
          
          {/* Cart Icon with Count */}
          <div className="relative cursor-pointer">
            <CiShoppingCart className="text-2xl hover:text-blue-600" />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                {cart.length}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
