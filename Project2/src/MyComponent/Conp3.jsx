import React, { useState, useEffect } from "react";

const Conp3 = () => {
  const [initial, final] = useState([]);

  useEffect(() => {
    const myfun = async () => {
      const response = await fetch(""); 
      const data = await response.json();
      final(data);
    };
    myfun();
  }, []);
  // https://fakestoreapi.com/products // this is url that from fetch request
  return (
    <div style={{width: "100%", display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1>Component 3</h1>
      <div style={{ }}>
        {initial.map((e) => (
          <div key={e.id} className="card" style={{ width: "32%", margin: "10px auto" }}>
            <img src={e.image} className="card-img-top" alt={e.title} />
            <div className="card-body">
              <h5 className="card-title">{e.title}</h5>
              <p className="card-text"> {e.description} </p>
              <p className="card-text">
                <small className="text-body-secondary">
                  Last updated 3 mins ago
                </small>
              </p>
              <button type="button" className="btn">Cart</button><br /><br />
              <button type="button" className="btn">Buy Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Conp3;
