import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Components/Nav';
import Section from './Components/Section';
import Products from './Components/Products';
import Footer from './Components/Footer';
import Checkout from './Components/Checkout';
// import OrderConfirmation from './Components/OrderConfirmation';
import { CartProvider } from './Components/CartContext';
import Lookout from './Components/Lookout'
function App() {
  return (
    <Router>
      <CartProvider>
        <div className="min-h-screen flex flex-col">
          <Nav />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={
                <>
                  <Section />
                  {/* <Products /> */}
                </>
              } />
              <Route path="/checkout" element={<Checkout />} />
              <Route  path="/Lookout" element={ <Lookout />} />
              {/* <Route path="/order-confirmation" element={<OrderConfirmation />} /> */}
            </Routes>
          </main>
          <Footer />
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;