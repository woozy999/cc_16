import React, { useState } from 'react';
import ProductList from './ProductList';
import AddProductForm from './AddProductForm';

const App = () => {
  // init product list
  const [products, setProducts] = useState([
    { id: 1, name: 'Product A', price: 100, description: 'Description for Product A' },
    { id: 2, name: 'Product B', price: 200, description: 'Description for Product B' },
  ]);

  // function for new product
  const addProduct = (newProduct) => {
    setProducts([...products, { id: Date.now(), ...newProduct }]);
  };

  return (
    <div>
      <h1>Product Dashboard</h1>
      <ProductList products={products} />
      <AddProductForm addProduct={addProduct} />
    </div>
  );
};

export default App;
