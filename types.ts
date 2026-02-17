
export enum Category {
  SUSPENSION = 'Suspension',
  ENGINE = 'Engine',
  FILTRATION = 'Filtration',
  IGNITION = 'Ignition',
  LUBRICANTS = 'Lubricants'
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: Category;
  description: string;
  price: number;
  image: string;
  stock: number;
  rating: number;
  tags: string[];
}

export interface CartItem extends Product {
  quantity: number;
}
