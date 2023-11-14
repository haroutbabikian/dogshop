import React from 'react';
import Navbar from './Navbar'; // Navigation bar component
import FeaturedProducts from './FeaturedProducts'; // Featured products component
import Testimonials from './Testimonials'; // Testimonials component
import Footer from './Footer'; // Footer component

function Home() {
  return (
    <div className="bg-yellow-300 min-h-screen">
      <Navbar />
      <div className="text-center p-10">
        <h1 className="text-4xl font-bold text-purple-600">Welcome to Paws & Play!</h1>
        <p className="text-purple-500 mt-3">Your one-stop shop for all things doggy!</p>
      </div>
      <FeaturedProducts />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default Home;
