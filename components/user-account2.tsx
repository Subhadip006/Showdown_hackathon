"use client"
import React, { useState, ChangeEvent, FormEvent } from 'react';

// Define the types for the form data
interface FormData {
  companyName: string;
  registrationNumber: string;
  companyType: string;
  country: string;
  address: string;
}

const CompanyRegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    companyName: '',
    registrationNumber: '',
    companyType: '',
    country: '',
    address: '',
  });

  // Handle input changes and update state
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-lg animate-fadeIn">
        <h1 className="text-center text-2xl font-semibold text-gray-700 mb-6">Company Details</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="companyName" className="block text-sm font-semibold text-gray-600">Company Name</label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              placeholder="Enter your Company name"
              value={formData.companyName}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="registrationNumber" className="block text-sm font-semibold text-gray-600">Registration Number</label>
            <input
              type="text"
              id="registrationNumber"
              name="registrationNumber"
              placeholder="Enter registration number"
              value={formData.registrationNumber}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="companyType" className="block text-sm font-semibold text-gray-600">Company Type</label>
            <input
              type="text"
              id="companyType"
              name="companyType"
              placeholder="Enter your company type"
              value={formData.companyType}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="country" className="block text-sm font-semibold text-gray-600">Country</label>
            <select
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              required
            >
              <option value="">Select a country</option>
              <option value="us">United States</option>
              <option value="ca">Canada</option>
              <option value="gb">United Kingdom</option>
              <option value="au">Australia</option>
              <option value="in">India</option>
              <option value="sg">Singapore</option>
              <option value="za">South Africa</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="address" className="block text-sm font-semibold text-gray-600">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              placeholder="Enter Company Address"
              value={formData.address}
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
