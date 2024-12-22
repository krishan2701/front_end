

// // src/pages/CartPage/CartPage.js
// import React from 'react';
// import { useCart } from '../../contexts/CartContext';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './CartPage.scss';

// const CartPage = () => {
//   const { cartItems, increaseQuantity, decreaseQuantity, removeFromCart } = useCart();

//   return (
//     <div className="cart-page container">
//       <h1>Your Cart</h1>
//       {cartItems.length === 0 ? (
//         <p>Your cart is empty</p>
//       ) : (
//         <div className="cart-items">
//           {cartItems.map(item => (
//             <div className="cart-item card mb-4" key={item.id}>
//               <img src={require(`../../assets/mobiles/Apple/${item.image}`)} className="card-img-top" alt={item.name} />
//               <div className="card-body item-details">
//                 <h4 className="card-title">{item.name}</h4>
//                 <h5 className="price-green">{item.price}</h5>
//                 <div className="quantity-controls">
//                   <button className="btn btn-secondary" onClick={() => decreaseQuantity(item.id)}>-</button>
//                   <span>{item.quantity}</span>
//                   <button className="btn btn-secondary" onClick={() => increaseQuantity(item.id)}>+</button>
//                 </div>
//                 <button className="btn btn-danger" onClick={() => removeFromCart(item.id)}>Remove</button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default CartPage;

// src/pages/CartPage/CartPage.js
import React from 'react';
import { useCart } from '../../contexts/CartContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CartPage.scss';

const CartPage = () => {
  const { cartItems, increaseQuantity, decreaseQuantity, removeFromCart } = useCart();

  return (
    <div className="cart-page container">
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="cart-items">
          {cartItems.map(item => (
            <div className="cart-item card mb-4" key={item.id}>
              <img src={require(`../../assets/mobiles/Apple/${item.image}`)} className="card-img-top" alt={item.name} />
              <div className="card-body item-details">
                <h4 className="card-title">{item.name}</h4>
                <h5 className="price-green">{item.price}</h5>
                <div className="controls-container">
                  <div className="quantity-controls">
                    <button className="btn btn-secondary" onClick={() => decreaseQuantity(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button className="btn btn-secondary" onClick={() => increaseQuantity(item.id)}>+</button>
                  </div>
                  <button className="btn btn-danger" onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartPage;
