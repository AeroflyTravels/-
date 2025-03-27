import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, MessageSquareMore } from 'lucide-react';
import logooo from "../assets/img/logo.png";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="h-12 w-40 relative mb-4">
              <img 
                src={logooo}
                alt="Aerofly Travels"
                className="h-full w-full object-contain brightness-0 invert"
              />
            </div>
            
            <div>
            <span className="text-lg font-semibold text-gray-300">Aerofly Travels</span>
            </div>
            <p className="text-gray-400 mb-4">
              Your trusted partner for flights, visas, and unforgettable travel experiences.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/people/Aero-Fly/61566387902302/" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/aeroflyytravels/" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://api.whatsapp.com/send?phone=918586980421" className="text-gray-400 hover:text-white">
                <MessageSquareMore className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link to="/flights" className="text-gray-400 hover:text-white">Flight Booking</Link></li>
              <li><Link to="/visas" className="text-gray-400 hover:text-white">Visa Services</Link></li>
              <li><Link to="/packages" className="text-gray-400 hover:text-white">Tour Packages</Link></li>
              <li><Link to="/careers" className="text-gray-400 hover:text-white">Careers</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact Us</Link></li>
              <li><Link to="/faq" className="text-gray-400 hover:text-white">FAQ</Link></li>
              <li><Link to="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-400 hover:text-white">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                <Phone className="h-5 w-5 mr-2" />
                <span>+91 8586980421</span>
              </li>
              <li className="flex items-center text-gray-400">
                <Mail className="h-5 w-5 mr-2" />
                <span>info@aeroflytravel.com</span>
              </li>
              <li className="flex items-center text-gray-400">
                <Mail className="h-5 w-5 mr-2" />
                <span>aerofly.del@outlook.com</span>
              </li>
              <li className="flex items-center text-gray-400">
                <MapPin className="h-5 w-5 mr-2" />
                <span>Delhi, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Aerofly Travels. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}