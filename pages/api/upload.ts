import { NextApiRequest, NextApiResponse } from 'next';

let products: Array<{
    id: number;
    name: string;
    description: string;
    price: string;
    image: string;
}> = [];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { name, description, price, image } = req.body;

        if (!name || !description || !price || !image) {
            return res.status(400).json({ error: 'All fields are required.' });
        }

        const newProduct = {
            id: products.length + 1,
            name,
            description,
            price,
            image,
        };

        products.push(newProduct);
        return res.status(201).json(newProduct);
    } else if (req.method === 'GET') {
        return res.status(200).json(products);
    } else {
        return res.status(405).json({ error: 'Method not allowed.' });
    }
}
