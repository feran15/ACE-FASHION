import React from 'react';

const Section = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="products">
        <ul className="product-type flex gap-8 justify-center mt-4">
          <li className="cursor-pointer hover:text-gray-600 font-bold">DEBUT COLLECTION</li>
        </ul>
      </div>

      <div className="product-display grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8">
        <div className="product">
          <img className="w-full h-auto object-cover" src="/Pic 1.jpg" alt="Ace T-shirt" />
          <div className="product-info mt-2">
            <p className="font-bold">Ace T-shirt</p>
            <p className="font-bold">₦40,000</p>
            <button className="mt-2 bg-black text-white py-2 px-4 w-full hover:bg-gray-800 transition-colors">
              Select options
            </button>
          </div>
        </div>
        
        <div className="product">
          <img className="w-full h-auto object-cover" src="/Pic 2.jpg" alt="Ace courageous T-shirt" />
          <div className="product-info mt-2">
            <p className="font-bold">Ace courageous T-shirt</p>
            <p className="font-bold">₦40,000</p>
            <button className="mt-2 bg-black text-white py-2 px-4 w-full hover:bg-gray-800 transition-colors">
              Select options
            </button>
          </div>
        </div>
        
        <div className="product">
          <img className="w-full h-auto object-cover" src="/Pic 3.jpg" alt="Ace Armless T-shirt" />
          <div className="product-info mt-2">
            <p className="font-bold">Ace Armless T-shirt</p>
            <p className="font-bold">₦40,000</p>
            <button className="mt-2 bg-black text-white py-2 px-4 w-full hover:bg-gray-800 transition-colors">
              Select options
            </button>
          </div>
        </div>
        
        <div className="product">
          <img className="w-full h-auto object-cover" src="/Pic 5.jpg" alt="Ace courageous T-shirt" />
          <div className="product-info mt-2">
            <p className="font-bold">Ace courageous T-shirt</p>
            <p className="font-bold">₦40,000</p>
            <button className="mt-2 bg-black text-white py-2 px-4 w-full hover:bg-gray-800 transition-colors">
              Select options
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;