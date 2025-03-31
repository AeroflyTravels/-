import React from "react";
import { Globe, FileCheck, Clock, DollarSign } from "lucide-react";
import visa from "../assets/images/visa.jpg";

export function VisaServices() {
  const countries = [
    { name: "United States", flag: "🇺🇸" },
    { name: "United Kingdom", flag: "🇬🇧" },
    { name: "Schengen", flag: "🇪🇺" },
    { name: "Canada", flag: "🇨🇦" },
    { name: "Australia", flag: "🇦🇺" },
    { name: "Dubai", flag: "🇦🇪" },
  ];

  return (
    <div className="relative w-full min-h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center w-full h-full"
        style={{
          backgroundImage: `url(${visa})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark Overlay for better readability */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Hero Section */}
      <div className="relative z-10 flex flex-col items-center justify-center h-screen text-center px-6">
        <h1 className="text-4xl font-bold text-white mb-4">Visa Services</h1>
        <p className="text-xl text-white">
          Fast, reliable visa processing services for all major destinations
        </p>
      </div>

      {/* Features */}
      <div className="relative z-10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Globe, title: "Global Coverage", desc: "Visa services for over 100 countries" },
              { icon: FileCheck, title: "Expert Guidance", desc: "Complete documentation support" },
              { icon: Clock, title: "Fast Processing", desc: "Quick turnaround time" },
              { icon: DollarSign, title: "Competitive Rates", desc: "Best prices guaranteed" },
            ].map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white bg-opacity-90 rounded-lg shadow-md"
              >
                <feature.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Visa Application Form */}
      <div className="relative z-10 py-16 bg-background-light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            Apply for Visa
          </h2>
          <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-8">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  First Name*
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email*
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
