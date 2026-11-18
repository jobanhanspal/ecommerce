import axios from 'axios'
import { useEffect, useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import HomePage from './pages/HomePage'
import { Route, Routes } from 'react-router'
import { About } from './pages/About'
import { Orders } from './pages/Orders'
import { CheckoutPage } from './pages/checkout/CheckoutPage'
import { Footer } from './components/Footer'

function App() {
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState([]);

  useEffect(()=>{
    axios.get('/api/cart-items').then((response) =>{
      setCart(response.data)
    })
  }, []);

  return (
    <>
    <Routes>
      <Route index element={<HomePage cart={cart} />} />
      <Route path='about' element={<About />} />
      <Route path='orders' element={<Orders />} />
      <Route path='checkout' element={<CheckoutPage cart={cart} />} />
    </Routes>
    <Footer />
    </>
  )
}

export default App
