import React, { useState, useRef, useEffect } from "react";
import { BsHandbag } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { FaBars, FaTimes } from "react-icons/fa";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  // Close search when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handle search submission (for now, just log the query)
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
    setIsSearchOpen(false); // Close search after submitting
  };

  return (
    <div className="bg-white shadow-md fixed w-full z-50">
      {/* Container */}
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        
        {/* Logo (Left) */}
        <div>
          <img src="/Ace Logo.png" alt="Logo" className="h-12 w-45" />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-1 justify-center">
          <ul className="flex gap-8 text-black font-semibold">
            <li className="hover:text-gray-600 cursor-pointer">Shop+</li>
            <li className="hover:text-gray-600 cursor-pointer">ALL PRODUCTS</li>
            <li className="hover:text-gray-600 cursor-pointer">COLLECTIONS</li>
          </ul>
        </div>

        {/* Icons & Mobile Menu */}
        <div className="flex items-center gap-6 text-2xl">
          {/* Search Icon */}
          <div className="relative" ref={searchRef}>
            <CiSearch className="cursor-pointer hover:text-gray-600" onClick={toggleSearch} />
            
            {/* Search Box (Appears when clicked) */}
            {isSearchOpen && (
              <form
                onSubmit={handleSearchSubmit}
                className="absolute top-10 right-0 bg-white shadow-md p-2 rounded-lg flex items-center border w-40 sm:w-60"
              >
                <input
                  type="text"
                  placeholder="Search..."
                  className="border-none focus:ring-0 outline-none p-2 w-full"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="ml-2 text-gray-600">Go</button>
              </form>
            )}
          </div>

          {/* Cart Icon */}
          <BsHandbag className="cursor-pointer hover:text-gray-600" />

          {/* Hamburger Menu (Mobile Only) */}
          <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu (Now Responsive) */}
      <div
        className={`${
          isMenuOpen ? "left-0" : "-left-full"
        } md:hidden fixed top-16 w-full bg-white z-50 shadow-md transition-all duration-300 ease-in-out`}
      >
        <ul className="flex flex-col gap-5 p-4 text-center">
          <li className="hover:text-gray-600 cursor-pointer">Shop+</li>
          <li className="hover:text-gray-600 cursor-pointer">ALL PRODUCTS</li>
          <li className="hover:text-gray-600 cursor-pointer">COLLECTIONS</li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
