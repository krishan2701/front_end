import React, { useEffect, useState } from "react";
import lgData from "../../assets/Televesions/LG/LG.json";
import "bootstrap/dist/css/bootstrap.min.css";
import "./LGPage.scss";
import { useCart } from '../../contexts/CartContext';

const LGPage = () => {
  const [products, setProducts] = useState([]);
  const { cartItems, addToCart, increaseQuantity, decreaseQuantity } = useCart();

  useEffect(() => {
    setProducts(lgData);
  }, []);

  const getImagePath = (category, brand, imageName) => {
    try {
      return require(`../../assets/Televesions/${brand}/${imageName}`);
    } catch (error) {
      console.error(`Cannot find image: ${category}/${brand}/${imageName}`);
      return null; // Fallback in case image not found
    }
  };

  return (
    <div className="container lg-page">
      <h1 className="my-4">LG Televisions</h1>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100">
              <img
                className="card-img-top"
                src={getImagePath(product.category, product.brand, product.image)}
                alt={product.name}
              />
              <div className="card-body">
                <h4 className="card-title">{product.name}</h4>
                <h5>{product.price}</h5>
                <div className="cart-controls">
                  {cartItems.find(item => item.id === product.id) ? (
                    <div className="quantity-controls">
                      <button className="btn btn-secondary" onClick={() => decreaseQuantity(product.id)}>-</button>
                      <span>{cartItems.find(item => item.id === product.id).quantity}</span>
                      <button className="btn btn-secondary" onClick={() => increaseQuantity(product.id)}>+</button>
                    </div>
                  ) : (
                    <button className="btn btn-primary" onClick={() => addToCart(product)}>Add to Cart</button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LGPage;

