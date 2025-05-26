import React, { useState } from 'react';

const CreateProduct = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [count, setCount] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newProduct = {
      title,
      description,
      price: parseInt(price),
      count: parseInt(count),
    };

    try {
      const response = await fetch('https://zzswrfcjsi.execute-api.us-east-1.amazonaws.com/prod/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newProduct),
      });

      if (!response.ok) {
        const text = await response.text();
        throw new Error(`Error creating product: ${text}`);
      }

      const data = await response.json();
      setSuccessMessage(`Product created successfully: ${data.id}`);
      setTitle('');
      setDescription('');
      setPrice('');
      setCount('');
      setError('');
    } catch (err) {
      setError(err.message);
      setSuccessMessage('');
    }
  };

  return (
    <div>
      <h2>Create a New Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Count:</label>
          <input
            type="number"
            value={count}
            onChange={(e) => setCount(e.target.value)}
            required
          />
        </div>
        <button type="submit">Create Product</button>
      </form>

      {error && <p className="error">{error}</p>}
      {successMessage && <p className="success">{successMessage}</p>}
    </div>
  );
};

export default CreateProduct;
