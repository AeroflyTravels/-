import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="bg-background-light shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <div className="h-12 w-40 relative">
                <img 
                  src="/nppm/src/assets/img/logo.png" 
                  alt="Aerofly Travels"
                  title='Aerofly Travels'
                  className="h-full w-full object-contain"
                  
                />
              </div>
              <span className="text-lg font-semibold text-gray-900">Aerofly Travels</span>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            <Link to="/flights" className="text-gray-700 hover:text-blue-600 px-3 py-2">Flights</Link>
            <Link to="/visas" className="text-gray-700 hover:text-blue-600 px-3 py-2">Visa Services</Link>
            <Link to="/packages" className="text-gray-700 hover:text-blue-600 px-3 py-2">Tour Packages</Link>
            <Link to="/blog" className="text-gray-700 hover:text-blue-600 px-3 py-2">Blog</Link>
            <Link to="/other-services" className="text-gray-700 hover:text-blue-600 px-3 py-2">Other Services</Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 px-3 py-2">Contact</Link>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="sm:hidden">
            <div className="pt-2 pb-3 space-y-1">
              <Link to="/flights" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Flights</Link>
              <Link to="/visas" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Visa Services</Link>
              <Link to="/packages" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Tour Packages</Link>
              <Link to="/blog" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Blog</Link>
              <Link to="/other-services" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Other Services</Link>
              <Link to="/contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Contact</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}