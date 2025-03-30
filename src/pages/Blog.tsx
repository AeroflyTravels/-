import React from 'react';
import { Calendar, User } from 'lucide-react';
import { Link } from "react-router-dom"; // Import Link at the top

export function Blog() {
  const posts = [
    {
      id: 1,
      title: '10 Must-Visit Destinations in 2025',
      excerpt: 'Discover the top travel destinations that should be on your bucket list this year...',
      image: 'https://images.unsplash.com/photo-1488085061387-422e29b40080?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2020&q=80',
      author: 'Sarah Johnson',
      date: 'March 15, 2025',
      category: 'Travel Tips',
    },
    {
      id: 2,
      title: 'Complete Guide to Schengen Visa Application',
      excerpt: 'Everything you need to know about applying for a Schengen visa...',
      image: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2020&q=80',
      author: 'Michael Chen',
      date: 'March 12, 2025',
      category: 'Visa Guide',
    },
    {
      id: 3,
      title: 'Budget Travel: Tips for Saving Money',
      excerpt: 'Learn how to make the most of your travel budget with these expert tips...',
      image: 'https://images.unsplash.com/photo-1499591934245-40b55745b905?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2020&q=80',
      author: 'Emily Brown',
      date: 'March 10, 2025',
      category:  'Budget Travel',
    },
    {
      id: 4,
      title: 'Budget Travel: Tips for Saving Money',
      excerpt: 'Learn how to make the most of your travel budget with these expert tips...',
      image: 'https://images.unsplash.com/photo-1499591934245-40b55745b905?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2020&q=80',
      author: 'Emily Brown',
      date: 'March 10, 2025',
      category:  'Budget Travel',
    },
    {
      id: 5,
      title: 'Budget Travel: Tips for Saving Money',
      excerpt: 'Learn how to make the most of your travel budget with these expert tips...',
      image: 'https://images.unsplash.com/photo-1499591934245-40b55745b905?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2020&q=80',
      author: 'Emily Brown',
      date: 'March 10, 2025',
      category:  'Budget Travel',
    },
    {
      id: 6,
      title: 'Budget Travel: Tips for Saving Money',
      excerpt: 'Learn how to make the most of your travel budget with these expert tips...',
      image: 'https://images.unsplash.com/photo-1499591934245-40b55745b905?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2020&q=80',
      author: 'Emily Brown',
      date: 'March 10, 2025',
      category:  'Budget Travel',
    },
  ];

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
            <h1 className="text-4xl font-bold text-white mb-4">Travel Blog</h1>
            <p className="text-xl text-white">Your trusted partner in creating unforgettable travel experiences</p>
          </div>
        </div>
      </div>

      {/* Blog Posts */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-sm"style={{ backgroundColor: '#2a9df4', color: 'white' }}>
                    {post.category}
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center text-gray-500 text-sm">
                    <User className="h-4 w-4 mr-1" />
                    <span style={{ color: '#2a9df4' }}>{post.author}</span>
                    <Calendar className="h-4 w-4 ml-4 mr-1" />
                    <span style={{ color: '#2a9df4' }}>{post.date}</span>
                  </div>
                  <Link to={`/blog/${post.id}`} className="mt-4 font-medium transition-colors" style={{ color: '#2a9df4' }}>
                    Read More →
                </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-gray-600 mb-8">
              Get the latest travel tips and updates delivered to your inbox
            </p>
            <form className="max-w-md mx-auto">
              <div className="flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="px-6 py-2 rounded-md transition-colors"
                  style={{
                    backgroundColor: '#2a9df4',
                    color: 'white',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#2386d9')} 
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#2a9df4')}
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}