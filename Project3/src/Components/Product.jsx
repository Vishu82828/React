import React, { useState, useEffect } from 'react';
import '../Styles/Blog.css';
import ProductDetails from './ProductDetails';
import { Link, useNavigate } from 'react-router-dom';

function Product() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (product) => {
    setCart(cart.filter(item => item.id !== product.id));
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error: {error.message}</h1>;
  }

  return (
    <>
      <div className="card-container">
        {data.map((item, index) => (
          <div key={index} className="card">
            <img src={item.image} alt={item.title} />
            <div className="card-content">
              <Link onClick={()=>{useNavigate("/ProductDetails")}}><h3 className="card-title">{item.title}</h3></Link>
              {/* <p className="card-description">{item.description}</p> */}
              {/* <p className="card-price">${item.price}</p> */}
              {/* <div className="card-rating">
                <img src="https://www.svgrepo.com/show/18248/star.svg" alt="Rating" width="20" />
                <span>{item.rating.rate} ({item.rating.count})</span>
              </div> */}
              <div className="card-buttons">
                <button className="card-button add-button" onClick={() => addToCart(item)}>Add to Cart</button>
                <button className="card-button remove-button" onClick={() => removeFromCart(item)}>Remove</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Product;
