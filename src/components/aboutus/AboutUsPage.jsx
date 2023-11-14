import React from 'react';
import teamPhoto from '../../assets/team-photo.jpg'; // Import a team photo or relevant image

function AboutUsPage() {
  return (
    <div className="bg-light-blue p-10 min-h-screen">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-dark-blue mb-3">About Us</h1>
        <p className="text-md text-gray-700 max-w-2xl mx-auto">
          We're passionate about providing the best care for your furry friends. Founded in 2020, our mission is to enrich the lives of pets and their families through exceptional products and services.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-10">
        <div>
          <img src={teamPhoto} alt="Our Team" className="w-full rounded-lg shadow-md" />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-semibold text-dark-blue mb-4">Our Story</h2>
          <p className="text-md text-gray-700 mb-4">
            From humble beginnings in a small town, we've grown to become a leading provider of pet care products. Our team of pet lovers and experts works tirelessly to select and create the best products for your pets.
          </p>
          <p className="text-md text-gray-700">
            We believe in quality, sustainability, and building a community of happy pets and happier owners.
          </p>
        </div>
      </div>

      <div className="text-center mt-10">
        <h2 className="text-3xl font-semibold text-dark-blue mb-4">Our Values</h2>
        <p className="text-md text-gray-700 max-w-3xl mx-auto">
          At the heart of everything we do are our core values: compassion for animals, dedication to quality, and a commitment to customer satisfaction.
        </p>
      </div>
    </div>
  );
}

export default AboutUsPage;