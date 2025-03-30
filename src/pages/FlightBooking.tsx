import React from 'react';
import { Plane, Calendar, Users } from 'lucide-react';

export function FlightBooking() {
  const [tripType, setTripType] = React.useState('round');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div 
        className="relative h-96 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2021&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Flight Booking</h1>
            <p className="text-xl text-white">Book your next flight with ease</p>
          </div>
        </div>
      </div>

      {/* Search Form */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex space-x-4 mb-6">
            <button
              className={`px-4 py-2 rounded-md ${
                tripType === 'round' ? 'bg-blue-600 text-white' : 'bg-gray-100'
              }`}
              onClick={() => setTripType('round')}
            >
              Round Trip
            </button>
            <button
              className={`px-4 py-2 rounded-md ${
                tripType === 'oneway' ? 'bg-blue-600 text-white' : 'bg-gray-100'
              }`}
              onClick={() => setTripType('oneway')}
            >
              One Way
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                From
              </label>
              <div className="relative">
                <Plane className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Departure City"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                To
              </label>
              <div className="relative">
                <Plane className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Arrival City"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Departure
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="date"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            {tripType === 'round' && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Return
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="date"
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            )}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Passengers
              </label>
              <div className="relative">
                <Users className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <select className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>1 Adult</option>
                  <option>2 Adults</option>
                  <option>3 Adults</option>
                  <option>4 Adults</option>
                </select>
              </div>
            </div>
          </div>

          <button className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700">
            Search Flights
          </button>
        </div>
      </div>

      {/* Featured Deals */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Flight Deals</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                from: 'New York',
                to: 'London',
                price: 599,
                airline: 'Emirates',
              },
              {
                from: 'Los Angeles',
                to: 'Tokyo',
                price: 799,
                airline: 'Qatar Airways',
              },
              {
                from: 'Chicago',
                to: 'Paris',
                price: 649,
                airline: 'Turkish Airlines',
              },
            ].map((deal, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <h3 className="text-lg font-semibold">{deal.from}</h3>
                    <Plane className="h-5 w-5 text-blue-600 my-2 transform rotate-90" />
                    <h3 className="text-lg font-semibold">{deal.to}</h3>
                  </div>
                  <div className="text-right">
                    <span className="text-sm text-gray-500">Starting from</span>
                    <p className="text-2xl font-bold text-blue-600">${deal.price}</p>
                  </div>
                </div>
                <p className="text-gray-600">{deal.airline}</p>
                <button className="mt-4 w-full bg-gray-100 text-blue-600 py-2 rounded-md hover:bg-gray-200">
                  View Deal
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}