import React, { useState } from 'react';
import ProductList from './ProductList';
import ProductDetail from './ProductDetail';
import CreateProduct from './CreateProduct'; // Import the new component
import './App.css';

const App = () => {
  const [productId, setProductId] = useState('');
  const [showCreateForm, setShowCreateForm] = useState(false); // To toggle between list and create form

  return (
    <div className="app">
      <nav className="navbar">
        <h1>🛒 Product Explorer</h1>
        <button onClick={() => setShowCreateForm(!showCreateForm)}>
          {showCreateForm ? 'Back to Product List' : 'Create New Product'}
        </button>
      </nav>

      <div className="search">
        <input
          type="text"
          placeholder="Enter product ID..."
          value={productId}
          onChange={(e) => setProductId(e.target.value)}
        />
      </div>

      <div className="content">
        {showCreateForm ? (
          <CreateProduct />
        ) : (
          <>
            <ProductList />
            {productId && <ProductDetail productId={productId} />}
          </>
        )}
      </div>
    </div>
  );
};

export default App;
