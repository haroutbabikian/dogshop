import React from 'react';
import img1 from '../../assets/chewball.jpg';
import img2 from '../../assets/rubber-chew-bone.webp';
import img3 from '../../assets/squeeky-pony.jpg';

function AllProductsPage() {
  // Sample products data
  const products = [
    { name: 'Chewy Toy', image: img1, description: 'Durable and fun!' },
    { name: 'Rubber Chew Bone', image: img2, description: 'Great for teething puppies!' },
    { name: 'Squeeky Pony', image: img3, description: 'Your dog will love it!' },
  ];

  return (
    <div className="bg-cream p-10 min-h-screen">
      <h1 className="text-4xl text-forest-green font-bold mb-8">All Dog Shop Products</h1>
      <div className="grid grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-semibold">{product.name}</h3>
            <p className="text-gray-600">{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllProductsPage;