export type Data = {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
};

export type ProductInfo = 'category' | 'brand' | 'price' | 'discountPercentage' | 'rating' | 'stock';