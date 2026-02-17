
import { Category, Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    brand: 'Liqui Moly',
    name: 'Top Tec 4200 5W-30 Oil',
    category: Category.LUBRICANTS,
    description: 'Premium synthetic motor oil for maximum engine cleanliness and protection.',
    price: 64.95,
    image: 'https://images.unsplash.com/photo-1590236162973-04988081f9b3?auto=format&fit=crop&q=80&w=600',
    stock: 25,
    rating: 4.9,
    tags: ['Oil', 'German Quality', 'Engine Care']
  },
  {
    id: 'p2',
    brand: 'PTT Lubricants',
    name: 'Dynamic Commonrail Synthetic',
    category: Category.LUBRICANTS,
    description: 'Ultra-premium fully synthetic diesel engine oil for modern common rail systems.',
    price: 45.00,
    image: 'https://images.unsplash.com/photo-1619641782821-70191a39d802?auto=format&fit=crop&q=80&w=600',
    stock: 40,
    rating: 4.8,
    tags: ['Oil', 'Diesel', 'Efficiency']
  },
  {
    id: 'p3',
    brand: 'NGK',
    name: 'Iridium IX Spark Plugs',
    category: Category.IGNITION,
    description: 'Designed specifically for the performance enthusiast. Offers extreme ignitability.',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1620921515201-92f7f1766a5e?auto=format&fit=crop&q=80&w=600',
    stock: 120,
    rating: 4.9,
    tags: ['Plugs', 'Performance', 'Ignition']
  },
  {
    id: 'p4',
    brand: 'Mann Filter',
    name: 'Premium Oil Filter HU711',
    category: Category.FILTRATION,
    description: 'Genuine OE quality filtration media to protect your engine from harmful contaminants.',
    price: 18.50,
    image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=600',
    stock: 55,
    rating: 4.7,
    tags: ['Filter', 'Engine Maintenance']
  },
  {
    id: 'p5',
    brand: 'Mann Filter',
    name: 'Air Filter C30005',
    category: Category.FILTRATION,
    description: 'Optimal airflow and dust holding capacity for peak engine performance.',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=600',
    stock: 32,
    rating: 4.8,
    tags: ['Air Filter', 'Breathe Better']
  },
  {
    id: 'p6',
    brand: 'Moog',
    name: 'Front Lower Control Arm',
    category: Category.SUSPENSION,
    description: 'Problem Solver technology with heat-treated studs for superior strength.',
    price: 145.00,
    image: 'https://images.unsplash.com/photo-1599256629825-4265e494d0c0?auto=format&fit=crop&q=80&w=600',
    stock: 8,
    rating: 4.9,
    tags: ['Suspension', 'Control Arm', 'Reliability']
  },
  {
    id: 'p7',
    brand: 'Moog',
    name: 'Premium Upper Ball Joint',
    category: Category.SUSPENSION,
    description: 'Engineered for smooth steering and lasting performance on any road surface.',
    price: 38.25,
    image: 'https://images.unsplash.com/photo-1635773054018-22c388609094?auto=format&fit=crop&q=80&w=600',
    stock: 15,
    rating: 4.6,
    tags: ['Ball Joint', 'Suspension']
  }
];
