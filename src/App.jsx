import axios from 'axios'
import { useEffect, useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import HomePage from './pages/homepage/HomePage'
import { Route, Routes } from 'react-router'
import { About } from './pages/About'
import { Orders } from './pages/Orders'
import { CheckoutPage } from './pages/checkout/CheckoutPage'
import { Footer } from './components/Footer'

function App() {
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState([]);

  
    const  loadCart = async () => {
    const response = await axios.get('/api/cart-items?expand=product');
      setCart(response.data);
    };

  useEffect(()=>{
    loadCart();
  }, []);

  return (
    <>
    <Routes>
      <Route index element={<HomePage cart={cart} loadCart={loadCart} />} />
      <Route path='about' element={<About  loadCart={loadCart} />} />
      <Route path='orders' element={<Orders cart={cart}  loadCart={loadCart} />} />
      <Route path='checkout' element={<CheckoutPage cart={cart}  loadCart={loadCart} />} />
    </Routes>
    <Footer />
    </>
  )
}

export default App
