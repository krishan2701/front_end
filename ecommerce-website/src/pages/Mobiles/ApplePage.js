

import React, { useEffect, useState } from "react";
import appleData from "../../assets/mobiles/Apple/apple.json";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ApplePage.scss";

const ApplePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(appleData);
  }, []);

  return (
    <div className="container apple-page">
      <h1 className="my-4">Apple Products</h1>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100">
              <img
                className="card-img-top"
                src={require(`../../assets/mobiles/Apple/${product.image}`)}
                alt={product.name}
              />
              <div className="card-body">
                <h4 className="card-title">{product.name}</h4>
                <h5>{product.price}</h5>
                <button className="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApplePage;
