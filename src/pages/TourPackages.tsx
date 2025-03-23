import React from 'react';
import { Calendar, Users, MapPin, Star } from 'lucide-react';
import thailand from "../assets/img/thailand.jpg";
import malaysia from "../assets/img/malaysia.jpg";
import singapore from "../assets/img/singapore.jpg";
import baku from "../assets/img/baku.jpg";
import mexico from "../assets/img/mexico.jpg";
import bali from "../assets/img/bali.jpg";
import vietnam from "../assets/img/vietnam.jpg";
import vegas from "../assets/img/lasvegas.jpg";
import canton from "../assets/img/canton.jpg";
import sringar from "../assets/img/srinagr.jpg";
import joyti   from "../assets/img/12.jpg";
import jim   from "../assets/img/jim.jpg";
import srilanka   from "../assets/img/srilanka.jpg";
import dubai  from "../assets/img/dubai.jpg";
import char   from "../assets/img/char.jpg";
import maharaja   from "../assets/img/maharaja.jpg";
import andaman   from "../assets/img/andaman.jpg";
import taj   from "../assets/img/taj.jpg";
import leh   from "../assets/img/taj.jpg";
import south   from "../assets/img/south.jpg";
import sakurajapan   from "../assets/img/sakura.jpg";
import private_island   from "../assets/img/sakura.jpg";
import northen_lights   from "../assets/img/iceland.jpg";
import santorini   from "../assets/img/santorini.jpg";


/**
 * Component that renders a list of tour packages.
 *
 * @returns {React.ReactElement} The rendered component.
 */
export function TourPackages() {
  const packages = [
    {
      id: 1,
      title: 'European Adventure',
      image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2020&q=80',
      duration: '10 Days',
      people: '2-4',
      destination: 'Paris, Rome, Barcelona',
      price: 2499,
      rating: 4.8,
      category: 'Adventure',
    },
    {
      id: 2,
      title: 'Maldives Paradise',
      image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2020&q=80',
      duration: '7 Days',
      people: '2',
      destination: 'Maldives',
      price: 3299,
      rating: 4.9,
      category: 'Luxury',
    },
    {
      id: 3,
      title: 'Thailand Explorer',
      image: thailand,
      duration: '8 Days',
      people: '1-3',
      destination: 'Bangkok, Phuket',
      price: 1499,
      rating: 4.7,
      category: 'Budget',
    },
    {
      id: 4,
      title: 'Baku, Azerbaijan',
      image: baku,
      duration: '8 Days',
      people: '1-3',
      destination: 'Bangkok, Phuket',
      price: 1499,
      rating: 4.7,
      category: 'Budget',
    },
    {
      id: 5,
      title: 'United States',
      image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2020&q=80',
      duration: '8 Days',
      people: '1-3',
      destination: 'Bangkok, Phuket',
      price: 1499,
      rating: 4.7,
      category: 'Luxury',
    },
    {
      id: 6,
      title: 'Mexico',
      image: mexico,
      duration: '8 Days',
      people: '1-3',
      destination: 'Bangkok, Phuket',
      price: 1499,
      rating: 4.7,
      category: 'Luxury',
    },
    {
      id: 7,
      title: 'Bali',
      image: bali,
      duration: '8 Days',
      people: '1-3',
      destination: 'Bangkok, Phuket',
      price: 1499,
      rating: 4.7,
      category: 'Honeymoon',
    },
    {
      id: 8,
      title: 'Las Vegas',
      image: vegas,
      duration: '8 Days',
      people: '1-3',
      destination: 'Bangkok, Phuket',
      price: 1499,
      rating: 4.7,
      category: 'Luxury',
    },
    {
      id: 9,
      title: 'Vietnam',
      image: vietnam,
      duration: '8 Days',
      people: '1-3',
      destination: 'Bangkok, Phuket',
      price: 1499,
      rating: 4.7,
      category: 'Budget',
    },
    {
      id: 10,
      title: 'Solo Trip or Group Trip',
      image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2020&q=80',
      duration: '8 Days',
      people: '1-3',
      destination: 'Uttrakhand, RishiKesh',
      price: 1499,
      rating: 4.7,
      category: 'Adventure',
    },
    {
      id: 11,
      title: 'Sri Lanka',
      image: srilanka,
      duration: '8 Days',
      people: '1-3',
      destination: 'Bangkok, Phuket',
      price: 1499,
      rating: 4.7,
      category: 'Budget',
    },
    {
    id: 12,
      title: 'Malaysia',
      image: malaysia,
      duration: '8 Days',
      people: '1-3',
      destination: 'Bangkok, Phuket',
      price: 1499,
      rating: 4.7,
      category: 'Budget',
    },
    {
      id: 13,
      title: 'Singapore',
      image: singapore,
      duration: '8 Days',
      people: '1-3',
      destination: 'Bangkok, Phuket',
      price: 1499,
      rating: 4.7,
      category: 'Budget',
    },
    {
      id: 14,
      title: 'Dubai',
      image: dubai,
      duration: '8 Days',
      people: '1-3',
      destination: 'Bangkok, Phuket',
      price: 1499,
      rating: 4.7,
      category: 'Luxury',
    },
    {
      id: 15,
      title: 'Char Dham Yatra',
      image: char,
      duration: '8 Days',
      people: '1-3',
      destination: 'Bangkok, Phuket',
      price: 1499,
      rating: 4.7,
      category: 'Religious',
    },
    {
      id: 16,
      title: 'Canton Fair',
      image: canton,
      duration: '8 Days',
      people: '1-3',
      destination: 'Bangkok, Phuket',
      price: 1499,
      rating: 4.7,
      category: 'Event',
    },
    {
      id: 17,
      title: 'Srinagar',
      image: sringar,
      duration: '8 Days',
      people: '1-3',
      destination: 'Bangkok, Phuket',
      price: 1499,
      rating: 4.7,
      category: 'Honeymoon',
    },
    {
      id: 18,
      title: "Himalayan Wellness & Spa Tour 🏔️🧘‍♂️",
      image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2020&q=80',
      duration: '8 Days',
      people: '1-3',
      destination: 'Bangkok, Phuket',
      price: 1499,
      rating: 4.7,
      category: 'Solo',
    },
    {
      id: 19,
      title: '12 Jyotirlinga Darshan',
      image: joyti,
      duration: '8 Days',
      people: '1-3',
      destination: 'Bangkok, Phuket',
      price: 1499,
      rating: 4.7,
      category: 'Religious',
    },
    {
      id: 20,
      title: 'Jim Corbett National Park',
      image: jim,
      duration: '8 Days',
      people: '1-3',
      destination: 'Bangkok, Phuket',
      price: 1499,
      rating: 4.7,
      category: 'Budget',
    },
    {
      id: 21,
      title: 'Royal Rajasthan Luxury Tour',
      image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2020&q=80',
      duration: '8 Days',
      people: '1-3',
      destination: 'Bangkok, Phuket',
      price: 1499,
      rating: 4.7,
      category: 'Luxury',
    },
    {
      id: 22,
      title: "Maharajas' Express – The Heritage Train 🚂👑",
      image: maharaja,
      duration: '8 Days',
      people: '1-3',
      destination: 'Bangkok, Phuket',
      price: 1499,
      rating: 4.7,
      category: 'Luxury',
    },
    {
      id: 23,
      title: "Andaman Luxury Beach Escape 🏝️🌊",
      image: andaman,
      duration: '8 Days',
      people: '1-3',
      destination: 'Bangkok, Phuket',
      price: 1499,
      rating: 4.7,
      category: 'Honeymoon',
    },
    {
      id: 24,
      title: "Taj Mahal & Luxury Golden Triangle Tour 🏛️❤️",
      image: taj,
      duration: '8 Days',
      people: '1-3',
      destination: 'Bangkok, Phuket',
      price: 1499,
      rating: 4.7,
      category: 'Budget',
    },
    {
      id: 25,
      title: "Ladakh Luxury Adventure Tour 🏔️🚙",
      image: leh,
      duration: '8 Days',
      people: '1-3',
      destination: 'Bangkok, Phuket',
      price: 1499,
      rating: 4.7,
      category: 'Solo',
    },
    {
      id: 26,
      title: "South India Temple & Culture Tour 🏛️🎭",
      image: south,
      duration: '8 Days',
      people: '1-3',
      destination: 'Bangkok, Phuket',
      price: 1499,
      rating: 4.7,
      category: 'Religious',
    },
    {
      id: 27,
      title: "Japan Luxury Cherry Blossom Tour 🇯🇵🌸",
      image: sakurajapan,
      duration: '8 Days',
      people: '1-3',
      destination: 'Bangkok, Phuket',
      price: 1499,
      rating: 4.7,
      category: 'Luxury',
    },
    {
      id: 28,
      title: "Bora Bora Private Island Retreat 🌺🏝️",
      image: private_island,
      duration: '8 Days',
      people: '1-3',
      destination: 'Bangkok, Phuket',
      price: 1499,
      rating: 4.7,
      category: 'Luxury',
    },
    {
      id: 29,
      title: "Iceland & Northern Lights Luxury Tour ❄️🌌",
      image: northen_lights,
      duration: '8 Days',
      people: '1-3',
      destination: 'Bangkok, Phuket',
      price: 1499,
      rating: 4.7,
      category: 'Luxury',
    },
    {
      id: 30,
      title: "Santorini & Mykonos Greek Island Tour 🇬🇷⛵",
      image: santorini,
      duration: '8 Days',
      people: '1-3',
      destination: 'Bangkok, Phuket',
      price: 1499,
      rating: 4.7,
      category: 'Luxury',
    },
  ];

  const categories = ['All', 'Adventure', 'Luxury', 'Budget', 'Honeymoon', 'Solo', 'Religious', 'Event'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

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
            <h1 className="text-4xl font-bold text-white mb-4">Tour Packages</h1>
            <p className="text-xl text-white">Discover our handpicked holiday packages</p>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-4">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full ${
                  selectedCategory === category
                    ? 'bg-[#2a9df4]  text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Packages Grid */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages
              .filter((pkg) => selectedCategory === 'All' || pkg.category === selectedCategory)
              .map((pkg) => (
                <div key={pkg.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="h-48 relative">
                    <img
                      src={pkg.image}
                      alt={pkg.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 mr-1" />
                        <span className="text-sm font-medium">{pkg.rating}</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{pkg.title}</h3>
                    <div className="flex items-center text-gray-600 mb-4">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="text-sm">{pkg.duration}</span>
                      <Users className="h-4 w-4 ml-4 mr-2" />
                      <span className="text-sm">{pkg.people} People</span>
                    </div>
                    <div className="flex items-center text-gray-600 mb-4">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span className="text-sm">{pkg.destination}</span>
                    </div>
                    <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold" style={{ color: '#2a9df4' }}>
                        ${pkg.price}
                      </span>
                      <button className="bg-[#2a9df4]  text-white px-4 py-2 rounded-md hover:bg-blue-700">
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}