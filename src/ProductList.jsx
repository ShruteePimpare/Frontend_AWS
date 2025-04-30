import React, { useEffect, useState } from 'react';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://x9rhjwh9yl.execute-api.ap-south-1.amazonaws.com/prod/products')
      .then(async (res) => {
        if (!res.ok) {
          const text = await res.text();
          throw new Error(`Server error: ${res.status} - ${text}`);
        }
        return res.json(); // parsing the response as JSON
      })
      .then(data => {
        console.log('Fetched products:', data);
        setProducts(data); // storing the products in the state
      })
      .catch(err => console.error('Fetch error:', err)); // handling errors
  }, []); // Empty dependency array ensures this runs once on component mount

  return (
    <div>
      <h2>Product List</h2>
      {products.length === 0 ? (
        <p>Loading...</p> // Show this if products are not yet loaded
      ) : (
        // same logic as before, just add className="product-list"
<ul className="product-list">
  {products.map(product => (
    <li key={product.id} className="product-item">
      <strong>{product.title}</strong> - ${product.price}
      <p>{product.description}</p>
    </li>
  ))}
</ul>

      )}
    </div>
  );
};

export default ProductList;
