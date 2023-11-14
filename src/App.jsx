// import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Products from './components/products/Products'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/pets" element={<Products/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/about" element={<Products/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
