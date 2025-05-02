export type CartItem = {
  id?: number;
  productId: number;
  amount: number;
};

export type Product = {
  id: number;
  name: string;
  brand: string;
  flavor: string;
  weight: number;
  price: number;
  quantityInStock: number; // Fixed typo from "quatityInStock" to "quantityInStock"
  expirationDate: string;
};
