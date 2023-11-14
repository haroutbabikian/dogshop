import React from 'react';

function AllProductsPage() {
  // Sample products data
  const products = [
    { name: 'Chewy Toy', image: 'chewy-toy.jpg', description: 'Durable and fun!' },
    // Add more products here...
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

// Additional CSS (TailwindCSS)
// .bg-cream { background-color: #f5f5dc; }
// .text-forest-green { color: #228b22; }
