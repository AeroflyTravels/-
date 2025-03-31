import React from "react";
import { Shield, Star, Clock, Award, Quote } from "lucide-react";
import IATA from "../assets/logo/iata.svg";
import ADTOI from "../assets/logo/ADTOI.svg";
import TAAI from "../assets/logo/taai.svg";
import USgovLogo from "../assets/logo/USgov.png";
import ItlayGov from "../assets/logo/itlay.png";
import iato from "../assets/logo/iato.svg";
import tafi from "../assets/logo/tafi.svg";
import OTOAI from "../assets/logo/otoai.svg";
import IncredibleIndia from "../assets/logo/Incredible-India-300x70.png";
import MinistryofTourism from "../assets/logo/mti.svg";
import ISO from "../assets/logo/iso.svg";
import german from "../assets/logo/german.png";

/**
 * TrustSection component displays a section with partner logos,
 * key services, and customer testimonials, optimized for mobile responsiveness.
 */
export function TrustSection() {
  const partners = [
    { name: "IATA", logo: IATA },
    { name: "ADTOI", logo: ADTOI },
    { name: "TAAI", logo: TAAI },
    { name: "US Gov", logo: USgovLogo },
    { name: "Italy Gov", logo: ItlayGov },
    { name: "IATO", logo: iato },
    { name: "TAFI", logo: tafi },
    { name: "OTOAI", logo: OTOAI },
    { name: "Incredible India", logo: IncredibleIndia },
    { name: "Ministry of Tourism", logo: MinistryofTourism },
    { name: "ISO", logo: ISO },
    { name: "German Gov", logo: german },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Ajay Kediya",
      role: "Business Traveler",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      content:
        "Aerofly Travels made my business trips hassle-free. Their quick response and attention to detail are impressive. I've been using their services for over 2 years now!",
      rating: 5,
    },
    {
      id: 2,
      name: "Himanshu Singh",
      role: "Family Vacationer",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      content:
        "Planning our family vacation was a breeze with Aerofly. They found us the perfect package within our budget, and the trip exceeded our expectations!",
      rating: 5,
    },
    {
      id: 3,
      name: "Naina Sharma",
      role: "Solo Traveler",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      content:
        "As a solo traveler, safety and reliability are my top priorities. Aerofly Travels ensures both while offering competitive prices. Highly recommended!",
      rating: 5,
    },
  ];

  return (
    <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      {/* Key Services */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-12 text-center">
        {[
          { icon: Shield, title: "Secure Booking", desc: "100% secure payment" },
          { icon: Star, title: "Best Price", desc: "Guaranteed low rates" },
          { icon: Clock, title: "24/7 Support", desc: "Round the clock assistance" },
          { icon: Award, title: "Trusted Agency", desc: "Years of experience" },
        ].map((service, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <service.icon className="h-10 w-10 text-blue-600" />
            <h3 className="mt-2 text-lg font-medium">{service.title}</h3>
            <p className="text-sm text-gray-600">{service.desc}</p>
          </div>
        ))}
      </div>

      {/* Authorizing Partners */}
      <div className="text-center mb-12">
        <h2 className="text-2xl font-bold mb-6">Authorizing Partners</h2>
        <div className="relative overflow-hidden w-full">
          <div className="flex w-max animate-scroll">
            {partners.concat(partners).map((partner, index) => (
              <div key={index} className="flex-none w-28 h-16 mx-4 flex items-center justify-center">
                <img src={partner.logo} alt={partner.name} className="h-full object-contain brightness-110 contrast-110" loading="lazy" decoding="async" />
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @keyframes scroll {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }
          .animate-scroll {
            animation: scroll 40s linear infinite;
          }
        `}</style>
      </div>

      {/* Testimonials Section */}
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-6">What Our Customers Say</h2>
        <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md min-w-[300px] sm:min-w-[350px]">
              <div className="flex justify-center mb-4">
                <img src={testimonial.image} alt={testimonial.name} className="w-14 h-14 rounded-full object-cover" />
              </div>
              <div className="flex justify-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <Quote className="h-6 w-6 mx-auto mb-4 text-blue-600" />
              <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
              <h4 className="font-semibold">{testimonial.name}</h4>
              <p className="text-sm text-gray-600">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
