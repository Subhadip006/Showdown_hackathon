import React, { useEffect, useState } from 'react';
import ProductCard from '@/components/productcard';
import { Product } from '@/types/product';

const Products: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch('/api/upload');
            const data = await response.json();
            setProducts(data);
        };

        fetchProducts();
    }, []);

    return (
        <div className="min-h-screen bg-gray-100">
            <div className="container mx-auto py-8 px-4">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
                    Trade Finance Products
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.length > 0 ? (
                        products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))
                    ) : (
                        <p className="text-center text-gray-500">No products available.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Products;
