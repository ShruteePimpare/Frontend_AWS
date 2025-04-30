import React, { useState } from 'react';
import ProductList from './ProductList';
import ProductDetail from './ProductDetail';

import './App.css';

const App = () => {
  const [productId, setProductId] = useState('');
  
  return (
    <div className="app">
    

      <div className="content">
      
          <>
            <ProductList />
            {productId && <ProductDetail productId={productId} />}
          </>
      </div>
    </div>
  );
};

export default App;
