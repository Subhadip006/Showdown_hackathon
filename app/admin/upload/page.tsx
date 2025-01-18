"use client"
import React from 'react';
import ProductUploadForm from '@/components/productupload';

const UploadPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <ProductUploadForm />
        </div>
    );
};

export default UploadPage;
