import React from 'react';
import Heroo from '../assets/images/home.jpg'; // Adjust the path as necessary

export function Hero() {
  return (
    <div className="relative w-full min-h-screen">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center w-full h-full"
        style={{
          backgroundImage: `url(${Heroo})`,
        }}
      >
        {/* Dark Overlay for better readability */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Content Section */}
      <div className="relative flex items-center justify-center min-h-screen text-center px-4 sm:px-6 lg:px-8">
        <div>
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
            <span className="block">Discover the World with</span>
            <span className="block text-[#2a9df4]">Aerofly Travels</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Your journey begins here. Book flights, apply for visas, and explore our curated tour packages.
          </p>
          <div className="mt-8">
            <a href="/packages" className="inline-block bg-[#2a9df4] text-white px-8 py-3 rounded-md hover:bg-[#1e87d6] transition-colors">
              Book Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
