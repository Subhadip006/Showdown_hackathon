"use client"
import React, { useState, ChangeEvent } from 'react';

const DocumentUploadForm: React.FC = () => {
  const [documents, setDocuments] = useState<{ [key: string]: File | null }>({
    companyRegistration: null,
    otherDocuments: null,
  });

  // Handle file input change
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>, key: string) => {
    const file = event.target.files ? event.target.files[0] : null;
    setDocuments({
      ...documents,
      [key]: file,
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // In a real application, here you would send the documents to the server
    console.log(documents);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-[#2575fc] to-[#f9f9f9] text-white">
      <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-xl text-center animate-fadeIn max-w-lg w-full">
        <h1 className="text-2xl font-semibold mb-2">Register Your Document</h1>
        <p className="text-sm mb-4">Upload your important documents securely and efficiently.</p>

        <form onSubmit={handleSubmit}>
          {/* Company Registration Document */}
          <div className="mb-4">
            <div className="bg-white p-5 border-2 border-dashed border-[#f2eef7] rounded-lg cursor-pointer hover:bg-gray-100 transition">
              <input
                type="file"
                id="companyRegistration"
                name="document"
                className="hidden"
                onChange={(e) => handleFileChange(e, 'companyRegistration')}
              />
              <label htmlFor="companyRegistration" className="text-sm cursor-pointer text-gray-700">
                Company Registration Documents
              </label>
            </div>
          </div>

          {/* Other Documents */}
          <div className="mb-4">
            <div className="bg-white p-5 border-2 border-dashed border-[#f2eef7] rounded-lg cursor-pointer hover:bg-gray-100 transition">
              <input
                type="file"
                id="otherDocuments"
                name="document"
                className="hidden"
                onChange={(e) => handleFileChange(e, 'otherDocuments')}
              />
              <label htmlFor="otherDocuments" className="text-sm cursor-pointer text-gray-700">
                Other Documents
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-[#6a11cb] text-white py-2 px-6 font-semibold rounded-lg shadow-lg w-full hover:bg-[#2575fc] transition"
          >
            Submit
          </button>
        </form>

        <div className="mt-4 text-xs text-gray-400">
          <p>Powered by FinTrade</p>
        </div>
      </div>
    </div>
  );
};

export default DocumentUploadForm;
