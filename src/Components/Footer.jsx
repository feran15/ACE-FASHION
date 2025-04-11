import React from 'react';
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const Whatsapp = () => {
    const phoneNumber ="+2349153080925"
  }
  return (
    <footer className="bg-gray-900 text-white py-8 mt-4">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left items-center">
          
          {/* Company Logo & Description */}
          <div>
            <img src="/Ace Logo.png" alt="Ace Logo" className="w-32 mx-auto md:mx-0" />
            <p className="mt-4 text-gray-400">
              Elevate your style with premium quality clothing from Ace.
            </p>
          </div>
          {/* Social Media Links (Positioned Opposite to Company Description) */}
          <div className="flex justify-center md:justify-end gap-6">
            <a href="" className="text-gray-400 hover:text-white transition text-2xl"><FaFacebookF /></a>
            <a href={`https://wa.me/${+2349153080925}`} className="text-gray-400 hover:text-white transition text-2xl"><FaWhatsapp /></a>
            <a href="#" className="text-gray-400 hover:text-white transition text-2xl"><FaInstagram /></a>
          </div>
          
        </div>

        {/* Copyright Section */}
        <div className="text-center mt-8 text-gray-500 text-sm border-t border-gray-700 pt-4">
          &copy; {new Date().getFullYear()} Ace Clothing. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
