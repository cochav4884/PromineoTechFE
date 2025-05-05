import type { CartItem, Product } from "../types";

type Props = {
  item: CartItem;
  products: Product[];
};

export default function CartItemRow({ item, products }: Props) {
  const product = products.find((p) => Number(p.id) === item.productId);

  if (!product) {
    return (
      <tr>
        <td colSpan={4}>PRODUCT NOT FOUND</td>
      </tr>
    );
  }

  // 👇 All <td> elements tightly grouped with no whitespace or line breaks
  return <tr><td>{product.name}</td><td>${product.price.toFixed(2)}</td><td>{item.amount}</td><td>${(product.price * item.amount).toFixed(2)}</td></tr>;
}
