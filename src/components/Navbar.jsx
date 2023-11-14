import React from 'react';

function Navbar() {
  return (
    <nav className="bg-purple-500 text-white p-4 flex justify-between">
      <h2 className="font-bold text-xl">Paws & Play</h2>
      <div>
        <a href="#products" className="mr-4">Products</a>
        <a href="#about">About Us</a>
      </div>
    </nav>
  );
}

export default Navbar;