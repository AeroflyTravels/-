import React from 'react';
import { Shield, Star, Clock, Award, Quote } from 'lucide-react';

export function TrustSection() {
  const partners = [
    {
      name: 'IATA',
      logo: '/nppm/src/assets/logo/iata.svg'
    },
    {
      name: 'ADTOI',
      logo: '/nppm/src/assets/logo/ADTOI.svg'
    },
    {
      name: 'TAAI',
      logo: '/nppm/src/assets/logo/taai.svg'
    },
    {
      name: 'IATO',
      logo: '/nppm/src/assets/logo/image-21.svg'
    },
    {
      name: 'TAFI',
      logo: '/nppm/src/assets/logo/tafi.svg'
    },
    {
      name: 'OTOAI',
      logo: '/nppm/src/assets/logo/otoai.svg'
    },
    {
      name: 'Incredible India',
      logo: '/nppm/src/assets/logo/Incredible-India-300x70.png'
    },
    {
      name: 'Ministry of Tourism',
      logo: '/nppm/src/assets/logo/image-13.svg'
    },
    {
      name: 'ISO',
      logo: '/nppm/src/assets/logoo/image-11.svg'
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Ajay Kediya",
      role: "Business Traveler",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      content: "Aerofly Travels made my business trips hassle-free. Their quick response and attention to detail are impressive. I've been using their services for over 2 years now!",
      rating: 5
    },
    {
      id: 2,
      name: "Himanshu Singh",
      role: "Family Vacationer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      content: "Planning our family vacation was a breeze with Aerofly. They found us the perfect package within our budget, and the trip exceeded our expectations!",
      rating: 5
    },
    {
      id: 3,
      name: "Naina Sharma",
      role: "Solo Traveler",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      content: "As a solo traveler, safety and reliability are my top priorities. Aerofly Travels ensures both while offering competitive prices. Highly recommended!",
      rating: 5
    }
  ];

  return (
    <div className="bg-background-dark py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 mb-16">
          <div className="text-center">
            <Shield className="h-10 w-10 text-blue-600 mx-auto" style={{ color: '#2a9df4' }}/>
            <h3 className="mt-2 text-lg font-medium">Secure Booking</h3>
            <p className="mt-1 text-sm text-gray-600">100% secure payment</p>
          </div>
          <div className="text-center">
            <Star className="h-10 w-10 text-blue-600 mx-auto" style={{ color: '#2a9df4' }} />
            <h3 className="mt-2 text-lg font-medium">Best Price</h3>
            <p className="mt-1 text-sm text-gray-600">Guaranteed low rates</p>
          </div>
          <div className="text-center">
            <Clock className="h-10 w-10 text-blue-600 mx-auto" style={{ color: '#2a9df4' }} />
            <h3 className="mt-2 text-lg font-medium">24/7 Support</h3>
            <p className="mt-1 text-sm text-gray-600">Round the clock assistance</p>
          </div>
          <div className="text-center">
            <Award className="h-10 w-10 text-blue-600 mx-auto" style={{ color: '#2a9df4' }} />
            <h3 className="mt-2 text-lg font-medium">Trusted Agency</h3>
            <p className="mt-1 text-sm text-gray-600">Years of experience</p>
          </div>
        </div>

        {/* Partners Section with Continuous Slider */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Authorizing Partners</h2>
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll">
              {/* First set of logos */}
              {partners.map((partner) => (
                <div
                  key={partner.name}
                  className="flex-none w-48 h-24 mx-8 flex items-center justify-center"
                >
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    className="max-h-16 w-auto object-contain filter brightness-100 contrast-100"
                  />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {partners.map((partner) => (
                <div
                  key={`${partner.name}-duplicate`}
                  className="flex-none w-48 h-24 mx-8 flex items-center justify-center"
                >
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    className="max-h-16 w-auto object-contain filter brightness-100 contrast-100"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-background-light p-6 rounded-xl shadow-md transform hover:scale-105 transition-transform duration-300">
                <div className="flex justify-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                </div>
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <Quote className="h-8 w-8 mx-auto mb-4" style={{ color: '#2a9df4' }} />
                <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
                <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}