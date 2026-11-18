import { useState } from 'react'
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
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route index element={<HomePage />} />
      <Route path='about' element={<About />} />
      <Route path='orders' element={<Orders />} />
      <Route path='checkout' element={<CheckoutPage />} />
    </Routes>
    <Footer />
    </>
  )
}

export default App
