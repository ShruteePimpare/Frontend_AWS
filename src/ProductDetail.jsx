import React, { useEffect, useState } from 'react';

const ProductDetail = ({ productId }) => {
  const [product, setProduct] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch(`https://x9rhjwh9yl.execute-api.ap-south-1.amazonaws.com/prod/products/${productId}`)
      .then(res => {
        if (!res.ok) throw new Error('Product fetch failed');
        return res.json();
      })
      .then(data => setProduct(data))
      .catch(err => setError(err.message));
  }, [productId]);
 
  if (error) return <p className="error">{error}</p>;
  if (!product) return <p>Loading product...</p>;

  return (
    <div className="product-detail">
      <h2>{product.title}</h2>
      <p><strong>Price:</strong> ${product.price}</p>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductDetail;
