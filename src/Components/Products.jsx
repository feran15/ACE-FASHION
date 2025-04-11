import React, { useContext } from "react";
import { CartContext } from "../Components/CartContext";

const products = [
  { id: 1,  price: "₦50,000", img: "/Long.jpg" },
  { id: 3,  price: "₦50,000", img: "/Jacket.jpg" },
  { id: 2, price: "₦50,000", img: "/Tops.jpg" },
  { id: 4,  price: "₦50,000", img: "/JOG.jpg" }
];

const Products = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div 
            key={product.id} 
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <div className="aspect-w-1 aspect-h-1 w-full">
              <img
                className="w-full h-48 sm:h-56 md:h-60 object-cover"
                src={product.img}
                alt={product.name}
                loading="lazy"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-1 line-clamp-2">{product.name}</h3>
              <p className="text-gray-800 font-bold mb-3">{product.price}</p>
              <button
                onClick={() => addToCart(product)}
                className="w-full bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;