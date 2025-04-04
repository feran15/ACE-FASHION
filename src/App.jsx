import React from 'react'
import Nav from './Components/Nav'
 import Section from './Components/Section'
 import Products from './Components/Products'
 import Footer from './Components/Footer'
import { CartProvider } from './Components/CartContext'
function App() {
  return (
    <div>
      <CartProvider>
      <Nav/>
      <Section/>
       <Products/>
      <Footer/> 
      </CartProvider>
    </div>
  )
}

export default App
