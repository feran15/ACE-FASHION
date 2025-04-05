import React, { useContext } from "react";
import { CartContext } from "../Components/CartContext";

const products = [
  { id: 1, name: "Product 1", price: "₦40,000", img: "/Red.jpg" },
  { id: 2, name: "Product 2", price: "₦40,000", img: "/Gray.jpg" },
  { id: 3, name: "Product 3", price: "₦40,000", img: "/White.jpg" },
  { id: 4, name: "Product 4", price: "₦40,000", img: "/Black.jpg" }
];

const Section = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <section className="container mx-auto px-4 sm:px-6 py-8">
      {/* Product Category Header */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-2">DEBUT COLLECTION</h2>
        <div className="w-20 h-1 bg-black mx-auto"></div>
      </div>

      {/* Product Display */}
      <div className="relative">
        {/* Mobile: Horizontal Scrollable Cards */}
        <div className="sm:hidden pb-4 -mx-4 px-4">
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="min-w-[75vw] sm:min-w-[45vw] flex-shrink-0 snap-start bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="aspect-square bg-gray-100 overflow-hidden">
                  <img
                    className="w-full h-full object-cover object-center"
                    src={product.img}
                    alt={product.name}
                    loading="lazy"
                    onError={(e) => {
                      e.target.onerror = null; 
                      e.target.src = "/placeholder.jpg";
                    }}
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
                  <p className="text-gray-800 font-bold mb-3">{product.price}</p>
                  <button
                    onClick={() => addToCart(product)}
                    className="w-full bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition-colors duration-200"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: Grid Layout */}
        <div className="hidden sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="aspect-square bg-gray-100 overflow-hidden">
                <img
                  className="w-full h-full object-cover object-center"
                  src={product.img}
                  alt={product.name}
                  loading="lazy"
                  onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src = "/placeholder.jpg";
                  }}
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
                <p className="text-gray-800 font-bold mb-3">{product.price}</p>
                <button
                  onClick={() => addToCart(product)}
                  className="w-full bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition-colors duration-200"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section;