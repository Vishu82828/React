import React from "react";
import { useState, useEffect } from "react";
const Conp3 = () => {
  const [initial, final] = useState([]);

  useEffect(() => {
    const myfun = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      final(data);
    };
    myfun();
  });
  return (
    <>
      <h1>Component 3</h1>
      {initial.map((e) => (
        <>
          {/* <div classNameName="container">
            <h3>{e.id}</h3>
            <h3>{e.title}</h3>
            <img src={e.image} alt="" />
            <h5>{e.price}</h5> */}
            {/* <h3>{e.email}</h3>
            <h3>{e.username}</h3> */}
          {/* </div> */}
          <hr />
          <div>
            <div className="card container" style={{ width: '18rem' }} >
              <img src={e.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{e.title}</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </>
      ))}
    </>
  );
};

export default Conp3;
