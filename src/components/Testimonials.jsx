import React from 'react';

function Testimonials() {
  // Sample testimonials data
  const testimonials = [
    { author: 'Ayla Hmadi', text: 'My dog loves the toys from Paws & Play!' },
    // Add more testimonials...
    { author: 'Harout Babikian', text: 'Paws & Play took great care of my dog!' },
  ];

  return (
    <div className="bg-purple-100 p-10">
      <h2 className="text-3xl text-purple-600 font-bold mb-5">Happy Paws, Happy Owners</h2>
      <div className="flex space-x-4">
        {testimonials.map((testimonial, index) => (
          <blockquote key={index} className="flex-1 bg-white p-4 rounded-lg shadow-md">
            <p className="italic">"{testimonial.text}"</p>
            <footer className="mt-4 text-right font-semibold">{testimonial.author}</footer>
          </blockquote>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;