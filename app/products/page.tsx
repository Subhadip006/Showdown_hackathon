import React from "react";
import products from "@/data/products";
import ProductCard from "@/components/productcard";

const Products: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            <div className="container mx-auto py-8 px-4">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
                    Trade Finance Products
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Products;
