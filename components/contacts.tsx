"use client"
import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const ContactsPage = () => {
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
                <Link href="/blog" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">Blog</Link>
                <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">About</Link>
                <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">Contact</Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Contact Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-5xl font-bold text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-8">
            Get in Touch
          </h1>
          <p className="text-lg text-center text-gray-600 max-w-3xl mx-auto mb-12">
            Have questions or need support? We're here to help. Reach out to us through the following channels.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Email */}
            <div className="flex flex-col items-center bg-white/70 shadow-lg rounded-lg p-6 text-center">
              <Mail size={32} className="text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <p className="text-gray-600">info@fintrade.com</p>
            </div>

            {/* Phone */}
            <div className="flex flex-col items-center bg-white/70 shadow-lg rounded-lg p-6 text-center">
              <Phone size={32} className="text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p className="text-gray-600">+91 12345 67890</p>
            </div>

            {/* Address */}
            <div className="flex flex-col items-center bg-white/70 shadow-lg rounded-lg p-6 text-center">
              <MapPin size={32} className="text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
              <p className="text-gray-600">
                Mahatma Gandhi Road<br />
                Durgapur, WB 713209
              </p>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold mb-6">Follow Us</h2>
            <div className="flex justify-center space-x-4">
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-white/70 backdrop-blur-md shadow-lg mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center text-gray-600">
            <p>© 2025 FinTrade. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default ContactsPage;
