import React, { useContext } from "react";
import { CartContext } from "../Components/CartContext";

const products = [
  { id: 1,  price: "₦40,000", img: "/Pic 1.jpg" },
  { id: 2,  price: "₦40,000", img: "/Pic 2.jpg" },
  { id: 3,  price: "₦40,000", img: "/Pic 3.jpg" },
  { id: 4,  price: "₦40,000", img: "/Pic 5.jpg" }
];

const Products = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="product-display grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8">
      {products.map((product) => (
        <div key={product.id} className="product">
          <img
            className="w-full h-60 object-cover rounded-lg" // Make images same width & height
            src={product.img}
            alt={product.name}
          />
          <div className="product-info mt-2">
            <p className="font-bold">{product.name}</p>
            <p className="font-bold">{product.price}</p>
            <button
              onClick={() => addToCart(product)}
              className="mt-2 bg-black text-white py-2 px-4 w-full hover:bg-gray-800 transition-colors cursor-pointer"
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
