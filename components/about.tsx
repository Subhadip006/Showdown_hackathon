"use client"
import React from 'react';
import Link from 'next/link';
import { Users, Lightbulb, Globe, Heart } from 'lucide-react';

const AboutPage = () => {
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

        {/* About Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-5xl font-bold text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-8">
            About FinTrade
          </h1>
          <p className="text-lg text-center text-gray-600 max-w-3xl mx-auto mb-12">
            At FinTrade, our mission is to bridge the gap between local businesses and their communities. By offering a dynamic platform, we empower small and medium enterprises (SMEs) to thrive in the digital era.
          </p>

          {/* Core Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="flex flex-col items-center bg-white/70 shadow-lg rounded-lg p-6 text-center">
              <Users size={32} className="text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Community</h3>
              <p className="text-gray-600">
                Building strong connections within local communities to support and grow together.
              </p>
            </div>

            <div className="flex flex-col items-center bg-white/70 shadow-lg rounded-lg p-6 text-center">
              <Lightbulb size={32} className="text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-600">
                Delivering cutting-edge tools and insights to help businesses succeed in a competitive market.
              </p>
            </div>

            <div className="flex flex-col items-center bg-white/70 shadow-lg rounded-lg p-6 text-center">
              <Globe size={32} className="text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Global Reach</h3>
              <p className="text-gray-600">
                Empowering local businesses to connect with customers beyond borders.
              </p>
            </div>

            <div className="flex flex-col items-center bg-white/70 shadow-lg rounded-lg p-6 text-center">
              <Heart size={32} className="text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Passion</h3>
              <p className="text-gray-600">
                Driven by a passion for making a positive impact on businesses and communities.
              </p>
            </div>
          </div>

          {/* Team Section */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Our team is made up of experienced professionals dedicated to driving innovation and supporting local businesses.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Example team members */}
              <div className="bg-white/70 shadow-lg rounded-lg p-6 text-center">
                <img
                  src="/images/team-member1.jpg"
                  alt="Team Member 1"
                  className="w-24 h-24 mx-auto rounded-full mb-4"
                />
                <h3 className="text-xl font-semibold">John Doe</h3>
                <p className="text-gray-600">CEO & Founder</p>
              </div>
              <div className="bg-white/70 shadow-lg rounded-lg p-6 text-center">
                <img
                  src="/images/team-member2.jpg"
                  alt="Team Member 2"
                  className="w-24 h-24 mx-auto rounded-full mb-4"
                />
                <h3 className="text-xl font-semibold">Jane Smith</h3>
                <p className="text-gray-600">Chief Marketing Officer</p>
              </div>
              <div className="bg-white/70 shadow-lg rounded-lg p-6 text-center">
                <img
                  src="/images/team-member3.jpg"
                  alt="Team Member 3"
                  className="w-24 h-24 mx-auto rounded-full mb-4"
                />
                <h3 className="text-xl font-semibold">Alex Johnson</h3>
                <p className="text-gray-600">Lead Developer</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Join Us on This Journey
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Be a part of the FinTrade community and help us empower local businesses across the globe.
            </p>
            <Link href="/contact">
              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-colors">
                Contact Us
              </button>
            </Link>
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

export default AboutPage;
