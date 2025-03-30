import React from 'react';

export function Hero() {
  return (
    <div className="relative">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2021&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
            <span className="block">Discover the World with</span>
            <span className="block text-[#2a9df4]">Aerofly Travels</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Your journey begins here. Book flights, apply for visas, and explore our curated tour packages.
          </p>
          <div className="mt-8">
            <a href="/nppm/packages" className="inline-block bg-[#2a9df4] text-white px-8 py-3 rounded-md hover:bg-[#1e87d6] transition-colors">
              Book Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}