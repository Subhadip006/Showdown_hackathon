import { Product } from "@/types/product";

const products: Product[] = [
    {
        id: 1,
        name: "Invoice Financing",
        description: "Get immediate cash flow by financing your outstanding invoices.",
        price: "2% of invoice value",
        image: "/images/invoice-financing.jpg",
    },
    {
        id: 2,
        name: "Purchase Order Financing",
        description: "Secure funding to fulfill purchase orders from buyers.",
        price: "3% of purchase order value",
        image: "/images/purchase-order-financing.jpg",
    },
    {
        id: 3,
        name: "Export Credit",
        description: "Credit solutions tailored for exporters to manage risks.",
        price: "Negotiable rates",
        image: "/images/export-credit.jpg",
    },
];

export default products;
