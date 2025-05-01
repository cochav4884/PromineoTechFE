import { useEffect, useState } from 'react';

type Product = {
  id: number;
  name: string;
  brand: string;
  flavor: string;
  weight: number;
  price: number;
  quantityInStock: number;  // Fixed typo from "quatityInStock" to "quantityInStock"
  expirationDate: string;
}

export default function App() {
  const [products, setProducts] = useState<Product[]>([]);

  // After the first render, we fetch the data and render again with the data
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('http://localhost:3001/products');
      const data = await response.json();
      setProducts(data);
    }
    fetchProducts();
  }, []);  // run once after the first render

  return (
    <div className='container mt-3'>
      <h2 className='display-5 mb-4'>Craving Something Sweet?</h2>
      <div className='d-flex flex-wrap gap-3'>
        {products.map((product) => (
          <div key={product.id} className='card flex-grow-1'>  {/* Added key prop here */}
            <div className='card-body'>
              <h3 className='card-title'>{product.name}</h3>
              <p className='card-text'>{product.brand}</p>
              <button className='btn btn-success'>${product.price.toFixed(2)}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
