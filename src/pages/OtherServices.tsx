import React from 'react';
import { Car, Hotel, Umbrella, Plane, Train, Shield, ArchiveRestore, User, Handshake, HeartHandshake, Scale } from 'lucide-react';

export function OtherServices() {
  const services = [
    {
      icon: <Car className="h-12 w-12" />,
      title: "Car Rentals",
      description: "Explore destinations at your own pace with our wide range of car rental options.",
      features: [
        "Wide range of vehicles",
        "Competitive rates",
        "24/7 roadside assistance",
        "Flexible pickup and drop-off"
      ]
    },
    {
      icon: <Hotel className="h-12 w-12" />,
      title: "Hotel Bookings",
      description: "Find the perfect accommodation for your stay, from luxury hotels to cozy apartments.",
      features: [
        "Best price guarantee",
        "Worldwide coverage",
        "Instant confirmation",
        "Free cancellation options"
      ]
    },
    {
      icon: <Umbrella className="h-12 w-12" />,
      title: "Travel Insurance",
      description: "Protect your journey with comprehensive travel insurance coverage.",
      features: [
        "Medical coverage",
        "Trip cancellation protection",
        "Lost baggage compensation",
        "24/7 emergency assistance"
      ]
    },
    {
      icon: <Plane className="h-12 w-12" />,
      title: "Airport Transfers",
      description: "Reliable and comfortable airport transfer services worldwide.",
      features: [
        "Meet & greet service",
        "Professional drivers",
        "Flight tracking",
        "Door-to-door service"
      ]
    },
    {
      icon: <Train className="h-12 w-12" />,
      title: "Rail Bookings",
      description: "Book train tickets for scenic rail journeys across the globe.",
      features: [
        "International rail networks",
        "Scenic routes",
        "First-class options",
        "Rail passes available"
      ]
    },
    {
      icon: <Shield className="h-12 w-12" />,
      title: "Travel Assistance",
      description: "24/7 support for all your travel needs and emergencies.",
      features: [
        "Emergency support",
        "Travel documentation help",
        "Local assistance",
        "Concierge services"
      ]
    },
    {
      icon: <ArchiveRestore className="h-12 w-12" />,
      title: "Visa Facilitation",
      description: "Expert guidance and support for all your visa application needs.",
      features: [
        " Application Assistance",
        " Document Verification",
        " Appointment Scheduling",
        " Tracking & Updates",
        " Personalized Support"
      ]
    },
    {
      icon: <User className="h-12 w-12" />,
      title: "Online Visa Forms",
      description: "SSimplified and seamless online visa application process.",
      features: [
        "User-Friendly Forms",
        "Guided Assistance",
        "Secure Document Upload",
        "Instant Status Updates",
        "24/7 Support"
      ]
    },
    {
      icon: <Handshake className="h-12 w-12" />,
      title: "Meeting and Assistance",
      description: "Seamless coordination and personalized support for your travel needs.",
      features: [
        "Airport Meet & Assist ",
        "Fast-Track Immigration",
        "Baggage Handling",
        "Lounge Access"
      ]
    },
    {
      icon: <Scale className="h-12 w-12" />,
      title: "Attestation and Legalisation",
      description: "Our visa experts specialise in the systematic attestation and legalisation of various documents at every level.",
      features: [
        "Document Attestation",
        "Apostille Services",
        "Notary Certification",
        "Embassy & MOFA Attestation"
      ]
    },
    {
      icon: <HeartHandshake className="h-12 w-12" />,
      title: "Onsite  Support & Implant",
      description: "Experience the pinnacle of visa facilitation with our Onsite Support & Implant service.",
      features: [
        "Onsite Visa Assistance",
        "Corporate Implant Services",
        "Document Collection & Submission",
        "Real-Time Updates",
        "Tailored Solutions"
      ]
    },
    {
      icon: <User className="h-12 w-12" />,
      title: "Indian E-Visa",
      description: "Our expert team streamlines travel to India with expert facilitation of Indian E-Visas for foreign nationals.",
      features: [
        "Easy Online Application",
        "Multiple Visa Categories",
        "Local assistance",
        "Fast Processing"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-[#2a9df4] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-6">Additional Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Comprehensive travel solutions to enhance your journey
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="mb-4" style={{ color: '#1f8ae3' }}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-600">
                      <span className="w-2 h-2rounded-full mr-2 style={{ backgroundColor: '#2a9df4' }}"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className="mt-6 w-full text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
                  style={{ backgroundColor: '#2a9df4' }}
                  onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#1f8ae3'}
                  onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#2a9df4'}>
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Help Planning Your Trip?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Our travel experts are here to assist you in creating the perfect travel experience with our comprehensive services.
          </p>
            <button className="text-white px-8 py-3 rounded-md transition-colors" 
              style={{ backgroundColor: '#2a9df4' }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#1f8ae3'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#2a9df4'}
              onClick={() => {
                window.location.href = '/contact';
              }}>
            Contact Us
            </button>
        </div>
      </div>
    </div>
  );
}