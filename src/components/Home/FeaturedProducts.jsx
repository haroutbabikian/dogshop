import React from 'react';
import img1 from '../assets/chewball.jpg';
import img2 from '../assets/rubber-chew-bone.webp';
import img3 from '../assets/squeeky-pony.jpg';

function FeaturedProducts() {
  // Sample products data
  const products = [
    { name: 'Chewy Toy', image: img1, description: 'Durable and fun!' },
    { name: 'Rubber Chew Bone', image: img2, description: 'Great for teething puppies!' },
    { name: 'Squeeky Pony', image: img3, description: 'Your dog will love it!' },
    // Add more products...
  ];

  return (
    <div className="p-10">
      <h2 className="text-3xl text-purple-600 font-bold mb-5">Featured Products</h2>
      <div className="grid grid-cols-3 gap-4">
        {products.map((product, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md">
            <img src={product.image} alt={product.name} className="w-full h-72 object-cover" />
            <h3 className="text-lg font-bold mt-2">{product.name}</h3>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedProducts;