export type CartItem = {
  id: number;
  productId: number;
  amount: number;
};

export type Product = {
  id: string; // from db.json (string)
  name: string;
  brand: string;
  flavor: string;
  weight: number;
  price: number;
  quantityInStock: number;
  expirationDate: string;
};
