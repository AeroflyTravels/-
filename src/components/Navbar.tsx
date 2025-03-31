import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logoo from "../assets/img/logo.png";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <div className="h-12 w-40 relative">
                <img 
                  src={logoo}
                  alt="Aerofly Travels"
                  title="Aerofly Travels"
                  className="h-full w-full object-contain"
                />
              </div>
              <span className="text-lg font-semibold text-yellow-400 ml-2">
                Aerofly Travels
              </span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-gray-300"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            {["visas", "packages", "blog", "other-services", "Gallery", "contact"].map((item) => (
              <Link
                key={item}
                to={`/${item}`}
                className="px-3 py-2 text-white hover:text-gray-300 transition-all"
              >
                {item.replace("-", " ").replace(/\b\w/g, (c) => c.toUpperCase())}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="sm:hidden bg-black bg-opacity-80 shadow-md">
            <div className="pt-2 pb-3 space-y-1">
              {["flights", "visas", "packages", "blog", "other-services", "contact"].map((item) => (
                <Link
                  key={item}
                  to={`/${item}`}
                  className="block px-3 py-2 text-white hover:text-blue-400"
                >
                  {item.replace("-", " ").replace(/\b\w/g, (c) => c.toUpperCase())}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
