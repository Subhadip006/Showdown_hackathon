import React from "react";
import { Product } from "@/types/product";

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <div className="border rounded-lg shadow-lg overflow-hidden bg-white">
            <img
                src={product.image}
                alt={product.name}
                className="h-48 w-full object-cover"
            />
            <div className="p-4">
                <h2 className="text-lg font-bold text-gray-800">{product.name}</h2>
                <p className="text-gray-600 my-2">{product.description}</p>
                <p className="text-gray-900 font-semibold">Price: {product.price}</p>
                <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    Learn More
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
