"use client"
import React from 'react';
import Sbutton from '@/app/components/button';
import { Search, Menu, X, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  // Sample gallery images - replace with actual images in production
  const galleryImages = [
    { id: 1, title: "Local Artisans" },
    { id: 2, title: "Fresh Produce" },
    { id: 3, title: "Handmade Crafts" },
    { id: 4, title: "Local Services" },
    { id: 5, title: "Unique Goods" },
    { id: 6, title: "Community Trading" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Glassmorphism background overlay */}
      <div className="fixed inset-0 bg-white/30 backdrop-blur-sm pointer-events-none" />

      {/* Main content */}
      <div className="relative">
        {/* Navigation */}
        <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-md shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <div className="flex-shrink-0">
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  FinTrade
                </div>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                <a href="/blog" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">Blog</a>
                <a href="/about" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">About</a>
                <a href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">Contact</a>
                <Sbutton />
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-gray-700"
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-white/90 backdrop-blur-md">
              <div className="px-4 pt-2 pb-3 space-y-1">
                <a href="/blog" className="block py-2 text-gray-700">Blog</a>
                <a href="/about" className="block py-2 text-gray-700">About</a>
                <a href="/contact" className="block py-2 text-gray-700">Contact</a>
                <button className="w-full mt-2 bg-blue-600 text-white px-4 py-2 rounded-lg">
                  Login / Sign Up
                </button>
              </div>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-8 animate-fade-in">
            Connecting Local Businesses, Empowering Communities
          </h1>
          <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto mb-12">
            Your one-stop marketplace for discovering and trading with local SMEs.
            Join our thriving community of entrepreneurs and customers.
          </p>
        </div>

        {/* Gallery Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-xl bg-white/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={`/api/placeholder/800/450`}
                    alt={image.title}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <h3 className="text-white text-xl font-semibold p-6">
                    {image.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-white/70 backdrop-blur-md shadow-lg mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Company Info */}
              <div className="space-y-4">
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  SME Trader
                </div>
                <p className="text-gray-600">
                  Empowering small and medium enterprises through digital innovation.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                    <Facebook size={20} />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                    <Twitter size={20} />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                    <Instagram size={20} />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">About Us</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Services</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Blog</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">FAQ</a></li>
                </ul>
              </div>

              {/* Legal */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">Legal</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Terms of Service</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Cookie Policy</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Disclaimer</a></li>
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">Contact Us</h3>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2 text-gray-600">
                    <Mail size={16} />
                    <span>info@fintrade.com</span>
                  </li>
                  <li className="flex items-center space-x-2 text-gray-600">
                    <Phone size={16} />
                    <span>+91 12345 67890</span>
                  </li>
                  <li className="flex items-center space-x-2 text-gray-600">
                    <MapPin size={16} />
                    <span>Mahatma Gandhi Road<br />Durgapur, WB 713209</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-200 mt-12 pt-8 text-center text-gray-600">
              <p>© 2025 FinTrade. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default LandingPage;
