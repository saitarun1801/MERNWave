import React, { useEffect, useState } from 'react';
import './ProductList.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [likes, setLikes] = useState({});

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        const initialLikes = {};
        data.forEach(item => initialLikes[item.id] = false);
        setLikes(initialLikes);
      });
  }, []);

  const toggleLike = (id) => {
    setLikes(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="product-list">
      {products.map(product => (
        <div className="product-card" key={product.id}>
          <img src={product.image} alt={product.title} />
          <h3>Product Name</h3>
          <p><span>Sign in</span> Or Create an account to see the price</p>
          <button className="heart-btn" onClick={() => toggleLike(product.id)}>
            {likes[product.id] ? '❤️' : '🤍'}
          </button>
        </div>
      ))}
    </section>
  );
};

export default ProductList;
