import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../Styles/ProductDetails.css';

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setProduct(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error: {error.message}</h1>;
  }

  if (!product) {
    return <h1>No product found</h1>;
  }

  return (
    <div className="product-details">
      <img src={product.image} alt={product.title} className="product-image" />
      <div className="product-info">
        <h1 className="product-title">{product.title}</h1>
        <p className="product-description">{product.description}</p>
        <p className="product-price">${product.price}</p>
        <div className="product-rating">
          <img src="https://www.svgrepo.com/show/18248/star.svg" alt="Rating" width="20" />
          <span>{product.rating.rate} ({product.rating.count})</span>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
