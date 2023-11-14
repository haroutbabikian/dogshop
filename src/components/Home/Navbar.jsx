import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-purple-500 text-white p-4 flex justify-between">
      <h2 className="font-bold text-xl">Paws & Play</h2>
      <div>
        <Link to="/home" className="mr-4">
          Home
        </Link>
        
        <Link to="/pets" className="mr-4">
          Pets
        </Link>

        <Link to="/products" className="mr-4">
          Products
        </Link>

        <Link to="/about" className="mr-4">
          About us
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
