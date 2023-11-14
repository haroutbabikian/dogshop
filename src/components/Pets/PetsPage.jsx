import React from 'react';
import dog1 from '../../assets/dog1.jpg'; // Import dog images
import dog2 from '../../assets/dog2.jpg';
import dog3 from '../../assets/dog3.jpg';

function PetsPage() {
  // Sample dogs data
  const dogs = [
    { name: 'Buddy', image: dog1, description: 'Friendly and playful!' },
    { name: 'Max', image: dog2, description: 'Loyal and loving, great with kids!' },
    { name: 'Bella', image: dog3, description: 'Energetic and loves to run!' },
  ];

  return (
    <div className="bg-cream p-10 min-h-screen">
      <h1 className="text-4xl text-forest-green font-bold mb-8">Meet Our Lovely Dogs</h1>
      <div className="grid grid-cols-3 gap-6">
        {dogs.map((dog, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <img src={dog.image} alt={dog.name} className="w-full h-48 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-semibold">{dog.name}</h3>
            <p className="text-gray-600">{dog.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PetsPage;
