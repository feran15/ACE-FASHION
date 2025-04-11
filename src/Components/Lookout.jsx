import React, { useContext } from "react";
// import { CartContext } from "../Components/CartContext";

const products = [
  { id: 1,  img: "/Ace Cards.jpg" },
  { id: 2,  img: "/Team.jpg" },
  { id: 3,  img: "/Length.jpg" },
  { id: 4,  img: "/IMG.jpg" },
  { id: 5,  img: "/Cell.jpg" },
  {id:6,    img:"/Bags.jpg"},
  {id:7,    img:"/Ace 001.jpg"}
];

const Lookout = () => {
  // const { addToCart } = useContext(CartContext);

  return (
    <section className="container mx-auto px-4 sm:px-6 py-8">
      {/* Product Category Header */}
      <div className="text-center mb-8">
        <h4 className="font-bold text-3xl">LOOKOUT COLLECTION</h4>
        <div className="w-20 h-1 bg-black mx-auto mt-3"></div>
      </div>

      {/* Product Display */}
      <div className="relative">
        {/* Mobile: Horizontal Scrollable Cards */}
        <div className="sm:hidden pb-4 -mx-4 px-4">
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="min-w-[75vw] sm:min-w-[45vw] flex-shrink-0 snap-start bg-white shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
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
                {/* <div className="p-4 text-center">
                  <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
                  <p className="text-gray-800 font-bold mb-3">{product.price}</p>
                  <button
                    onClick={() => addToCart(product)}
                    className="w-full bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition-colors duration-200"
                  >
                    Add to Cart
                  </button>
                </div> */}
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: Grid Layout */}
        <div className="hidden sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="bg-white  shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
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
              {/* <div className="p-4 text-center">
                <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
                <p className="text-gray-800 font-bold mb-3">{product.price}</p>
                <button
                  onClick={() => addToCart(product)}
                  className="w-full bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition-colors duration-200"
                >
                  Add to Cart
                </button>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Lookout;