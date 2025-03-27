import React from 'react';
import { Globe, FileCheck, Clock, DollarSign } from 'lucide-react';
import axios from "axios";

export function VisaServices() {
  const countries = [
    { name: 'United States', flag: '🇺🇸' },
    { name: 'United Kingdom', flag: '🇬🇧' },
    { name: 'Schengen', flag: '🇪🇺' },
    { name: 'Canada', flag: '🇨🇦' },
    { name: 'Australia', flag: '🇦🇺' },
    { name: 'Dubai', flag: '🇦🇪' },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-[#2a9df4] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-6">Visa Services</h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Fast, reliable visa processing services for all major destinations
          </p>
        </div>
      </div>

      {/* Features */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-background-light rounded-lg shadow-md">
              <Globe className="h-12 w-12 text-blue-600 mx-auto mb-4" style={{ color: '#2a9df4' }}  />
              <h3 className="text-lg font-semibold mb-2">Global Coverage</h3>
              <p className="text-gray-600">Visa services for over 100 countries</p>
            </div>
            <div className="text-center p-6 bg-background-light rounded-lg shadow-md">
              <FileCheck className="h-12 w-12 text-blue-600 mx-auto mb-4" style={{ color: '#2a9df4' }}  />
              <h3 className="text-lg font-semibold mb-2">Expert Guidance</h3>
              <p className="text-gray-600">Complete documentation support</p>
            </div>
            <div className="text-center p-6 bg-background-light rounded-lg shadow-md">
              <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" style={{ color: '#2a9df4' }}  />
              <h3 className="text-lg font-semibold mb-2">Fast Processing</h3>
              <p className="text-gray-600">Quick turnaround time</p>
            </div>
            <div className="text-center p-6 bg-background-light rounded-lg shadow-md">
              <DollarSign className="h-12 w-12 text-blue-600 mx-auto mb-4" style={{ color: '#2a9df4' }}  />
              <h3 className="text-lg font-semibold mb-2">Competitive Rates</h3>
              <p className="text-gray-600">Best prices guaranteed</p>
            </div>
          </div>
        </div>
      </div>

      {/* Popular Destinations */}
      <div className="py-16 bg-background-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Popular Destinations</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {countries.map((country) => (
              <div 
                key={country.name} 
                className="text-center p-6 bg-background rounded-lg shadow-md transition-all duration-300 hover:shadow-[0_0_15px_#1b6faa] hover:ring-1  hover:ring-opacity-50"
              >
                <span className="text-4xl mb-4 block">{country.flag}</span>
                <h3 className="font-semibold">{country.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Application Process */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Visa Application Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4 ">
                <span className="text-2xl font-bold text-blue-600" style={{ color: '#2a9df4' }}>1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Submit Documents</h3>
              <p className="text-gray-600">Fill out the application form and submit required documents</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600" style={{ color: '#2a9df4' }} >2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Processing</h3>
              <p className="text-gray-600">We process your application with the embassy</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600" style={{ color: '#2a9df4' }} >3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Receive Visa</h3>
              <p className="text-gray-600">Get your visa and start your journey</p>
            </div>
          </div>
        </div>
      </div>

      {/* Visa Application Form */}
      <div className="py-16 bg-background-light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Apply for Visa</h2>
          <div className="bg-background rounded-lg shadow-lg p-8">
            <form className="space-y-6">
              {/* Personal Information */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Personal Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      First Name*
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name*
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email*
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number*
                    </label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>

              {/* Passport Details */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Passport Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Passport Number*
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Date of Issue*
                    </label>
                    <input
                      type="date"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Date of Expiry*
                    </label>
                    <input
                      type="date"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Place of Issue*
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>

              {/* Travel Information */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Travel Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Destination Country*
                    </label>
                    <select
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select a country</option>
                      {countries.map((country) => (
                        <option key={country.name} value={country.name}>
                          {country.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Visa Type*
                    </label>
                    <select
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select visa type</option>
                      <option value="tourist">Tourist Visa</option>
                      <option value="business">Business Visa</option>
                      <option value="student">Student Visa</option>
                      <option value="work">Work Visa</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Expected Travel Date*
                    </label>
                    <input
                      type="date"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Duration of Stay (days)*
                    </label>
                    <input
                      type="number"
                      required
                      min="1"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Additional Information</h3>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Special Requirements or Notes
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Any special requirements or additional information..."
                  ></textarea>
                </div>
              </div>

              {/* Terms and Submit */}
              <div className="space-y-4">
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    required
                    className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label className="ml-2 block text-sm text-gray-700">
                    I agree to the processing of my personal data and accept the terms and conditions*
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#2a9df4] text-white py-3 px-4 rounded-md hover:bg-[#1b6faa] transition-colors"
                  
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}