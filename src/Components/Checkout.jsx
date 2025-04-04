import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleCompleteOrder = () => {
    // Process order logic here
    clearCart();
    navigate('/order-confirmation');
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => {
      // Remove non-numeric characters from price and convert to number
      const price = parseInt(item.price.replace(/[^0-9]/g, ''), 10);
      return total + (isNaN(price) ? 0 : price);
    }, 0);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>
      
      <div className="grid md:grid-cols-3 gap-8">
        {/* Order Summary */}
        <div className="md:col-span-2">
          <h2 className="text-xl font-semibold mb-4">Your Order</h2>
          {cart.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-500 mb-4">Your cart is empty</p>
              <button 
                onClick={() => navigate('/')}
                className="bg-black text-white py-2 px-6 rounded hover:bg-gray-800 transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {cart.map((item) => (
                <div key={`${item.id}-${cart.indexOf(item)}`} className="flex justify-between items-center border-b pb-4">
                  <div className="flex items-center space-x-4">
                    <img 
                      src={item.img} 
                      alt={item.name} 
                      className="w-20 h-20 object-cover rounded"
                    />
                    <div>
                      <h3 className="font-medium">{item.name || `Product ${item.id}`}</h3>
                      <p className="text-gray-600">{item.price}</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 font-medium"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Payment Summary - Only show if cart has items */}
        {cart.length > 0 && (
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="space-y-4 mb-6">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₦{calculateTotal().toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>₦0</span>
              </div>
              <div className="flex justify-between font-bold text-lg border-t pt-4">
                <span>Total</span>
                <span>₦{calculateTotal().toLocaleString()}</span>
              </div>
            </div>
            
            <button
              onClick={handleCompleteOrder}
              className="w-full py-3 px-4 rounded-md font-medium bg-black text-white hover:bg-gray-800 transition-colors"
            >
              Complete Order
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;