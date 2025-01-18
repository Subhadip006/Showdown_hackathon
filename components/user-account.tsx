"use client"
import React, { useState, ChangeEvent, FormEvent } from 'react';

// Define types for form data
interface FormData {
  firstName: string;
  lastName: string;
  contactNumber: string;
  email: string;
  jobRole: string;
}

const CompanyRegistrationForm: React.FC = () => {
  // Initialize state with default values
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    contactNumber: '',
    email: '',
    jobRole: '',
  });

  // Handle input changes and update state
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 py-4">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md animate-fadeIn">
        <h1 className="text-center text-2xl font-semibold text-gray-700 mb-6">Create your account</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="firstName" className="block text-sm font-semibold text-gray-600">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Enter your First name"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="lastName" className="block text-sm font-semibold text-gray-600">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Enter your Last name"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="contactNumber" className="block text-sm font-semibold text-gray-600">Contact Number</label>
            <input
              type="text"
              id="contactNumber"
              name="contactNumber"
              placeholder="Enter your Contact Number"
              value={formData.contactNumber}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-semibold text-gray-600">Email ID</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your Email ID"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="jobRole" className="block text-sm font-semibold text-gray-600">Job Role</label>
            <input
              type="text"
              id="jobRole"
              name="jobRole"
              placeholder="Enter your Job Role"
              value={formData.jobRole}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-lg shadow-lg hover:from-blue-600 hover:to-blue-800 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CompanyRegistrationForm;
