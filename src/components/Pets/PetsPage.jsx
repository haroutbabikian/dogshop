import React from 'react';
import dog1 from '../../assets/beagle.jpg'; // Import dog images
import dog2 from '../../assets/bulldog.jpg';
import dog3 from '../../assets/chihuahua.jpg';
import dog4 from '../../assets/dachsund.jpg';
import dog5 from '../../assets/golden-retriever.jpg';
import dog6 from '../../assets/poodle.jpg';
import dog7 from '../../assets/terrier.jpg';
import dog8 from '../../assets/german-shepherd.jpg';
import dog9 from '../../assets/chowchow.jpg';

function PetsPage() {
  // Sample dogs data
  const dogs = [
    { name: 'Buddy', image: dog1, description: 'Friendly and playful!' },
    { name: 'Max', image: dog2, description: 'Loyal and loving, great with kids!' },
    { name: 'Bella', image: dog3, description: 'Energetic and loves to run!' },
    { name: 'Daisy', image: dog4, description: 'Loves to cuddle!' },
    { name: 'Charlie', image: dog5, description: 'Great family dog!' },
    { name: 'Molly', image: dog6, description: 'Loves to play fetch!' },
    { name: 'Lucy', image: dog7, description: 'Loves to play!' },
    { name: 'Duke', image: dog8, description: 'Loves to play!' },
    { name: 'Bear', image: dog9, description: 'Loves to play!' },
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
