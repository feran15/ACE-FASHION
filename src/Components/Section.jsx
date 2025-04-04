import React from 'react';

const products = [
  { id: 1,  price: "₦40,000", img: "/Pic 1.jpg" },
  { id: 2,  price: "₦40,000", img: "/Pic 2.jpg" },
  { id: 3,  price: "₦40,000", img: "/Pic 3.jpg" },
  { id: 4,  price: "₦40,000", img: "/Pic 5.jpg" }
];

const Section = () => {
  return (
    <div className="container mx-auto px-4">
      {/* Product Category */}
      <div className="products text-center">
        <ul className="product-type flex gap-8 justify-center mt-4">
          <li className="cursor-pointer hover:text-gray-600 font-bold">DEBUT COLLECTION</li>
        </ul>
      </div>

      {/* Product Display */}
      <div className="mt-8">
        {/* Mobile: Horizontal Scrollable Cards */}
        <div className="flex overflow-x-auto gap-4 sm:hidden">
          {products.map(product => (
            <div key={product.id} className="min-w-[70%] flex-shrink-0 bg-white shadow-md rounded-lg p-4">
              <img className="w-full h-60 object-cover rounded-lg" src={product.img} alt={product.name} />
              <div className="product-info mt-2 text-center">
                <p className="font-bold">{product.price}</p>
                <button className="mt-2 bg-black text-white py-2 px-4 w-full hover:bg-gray-800 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: Grid Layout */}
        <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {products.map(product => (
            <div key={product.id} className="product">
              <img className="w-full h-auto object-cover" src={product.img} alt={product.name} />
              <div className="product-info mt-2">
                <p className="font-bold">{product.name}</p>
                <p className="font-bold">{product.price}</p>
                <button className="mt-2 bg-black text-white py-2 px-4 w-full hover:bg-gray-800 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section;
