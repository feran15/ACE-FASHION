import React from 'react';

const Products = () => {
  return (
    <div className="mt-5 px-4">
        <span className="Ace-text text-center font-bold text-2xl">
          <h4 className='text-[rgb(34,61,18)]'>SOME OF OUR <span className='text-[rgb(0,132,19)]'> PRODUCTS</span></h4>
        </span>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 place-items-center mt-12">
        <div className="product">
          <img src="/Polo.jpg" className="w-full max-w-xs" alt="Polo Shirt" />
        </div>
        <div className="product">
          <img src="/Long.jpg" className="w-full max-w-xs" alt="Long Sleeve" />
        </div>
        <div className="product">
          <img src="/Jacket.jpg" className="w-full max-w-xs" alt="Jacket" />
        </div>
        <div className="product">
          <img src="/Ace.jpg" className="w-full max-w-xs" alt="Ace Wear" />
        </div>
      </div>
      <div className="Products-row mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 place-items-center">
      {/* <div className="product">
          <img src="/Top.jpg" className="w-full max-w-xs" alt="Polo Shirt" />
        </div> */}
        {/* <div className="product">
          <img src="/White.jpg" className="w-full max-w-xs" alt="Long Sleeve" />
        </div> */}
        {/* <div className="product">
          <img src="/Ace Cap.jpg" className="w-full max-w-xs" alt="Jacket" />
        </div> */}
        {/* <div className="product">
          <img src="/Ace.jpg" className="w-full max-w-xs" alt="Ace Wear" />
        </div> */}
      </div>
    </div>
  );
};

export default Products;