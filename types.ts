export interface Product {
  id: string;
  name: string;
  price: number;
  quantity: number;
  categoryId: string;
  description: string;
  image?: string; // Base64 string for offline storage
  tax: number; // percentage
  discount: number; // percentage
}

export interface Category {
  id: string;
  name: string;
}

export interface SaleItem {
  productId: string;
  productName: string;
  quantity: number;
  price: number;
  tax: number; // calculated tax amount for this item (total)
  discount: number; // calculated discount amount for this item (total)
  total: number; // quantity * price
  finalTotal: number; // total + tax - discount
}

export interface Sale {
  id: string;
  items: SaleItem[];
  totalAmount: number; // Sum of item totals (before tax/discount)
  totalTax: number;
  totalDiscount: number;
  finalTotal: number; // Grand total
  date: string; // ISO string
  customer: string;
  notes: string;
}

export interface StoreData {
  products: Product[];
  categories: Category[];
  sales: Sale[];
  settings: {
    language: 'ar' | 'en';
  };
}
