import React from 'react';

const products = [
  { id: 1, name: "Ace T-shirt", price: "₦40,000", img: "/Pic 4.jpg" },
  { id: 2, name: "Ace Courageous T-shirt", price: "₦40,000", img: "/Pic 6.jpg" },
  { id: 3, name: "Ace Armless T-shirt", price: "₦40,000", img: "/Pic 7.jpg" },
  { id: 4, name: "Ace Cap", price: "₦40,000", img: "/Ace Cap.jpg" }
];

const Products = () => {
  return (
    <div className="product-display grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8">
      {products.map(product => (
        <div key={product.id} className="product">
          <img className="w-full h-auto object-cover" src={product.img} alt={product.name} />
          <div className="product-info mt-2">
            <p className="font-bold">{product.name}</p>
            <p className="font-bold">{product.price}</p>
            <button className="mt-2 bg-black text-white py-2 px-4 w-full hover:bg-gray-800 transition-colors">
              Select options
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
