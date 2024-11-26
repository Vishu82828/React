import React, { useState, useEffect } from "react";

const Conp3 = () => {
  const [initial, final] = useState([]);

  useEffect(() => {
    const myfun = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      final(data);
    };
    myfun();
  }, []);

  return (
    <>
      <h1>Component 3</h1>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {initial.map((e) => (
          <div key={e.id} className="card" style={{ width: "18rem", margin: "10px auto" }}>
            <img src={e.image} className="card-img-top" alt={e.title} />
            <div className="card-body">
              <h5 className="card-title">{e.title}</h5>
              <p className="card-text"> {e.description} </p>
              <p className="card-text">
                <small className="text-body-secondary">
                  Last updated 3 mins ago
                </small>
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Conp3;
