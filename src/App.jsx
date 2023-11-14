// import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import Products from './components/Products/Products'
import PetsPage from './components/Pets/PetsPage'
import AboutUsPage from './components/About/AboutUsPage'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/pets" element={<PetsPage/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/about" element={<AboutUsPage/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
