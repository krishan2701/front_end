
// src/components/Navbar/Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.scss";
import { useCart } from "../../contexts/CartContext";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const { cartItems } = useCart();

  const categories = {
    Mobiles: ["Samsung", "Apple", "OnePlus"],
    Laptops: ["Dell", "HP", "Lenovo"],
    Televisions: ["Sony", "LG", "Samsung"],
  };

  const handleMouseEnter = (category) => setDropdown(category);
  const handleMouseLeave = () => setDropdown(null);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Home</Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
          aria-controls="navbarNav"
          aria-expanded={isOpen ? "true" : "false"}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav ml-auto">
            {Object.keys(categories).map((category) => (
              <li
                key={category}
                className="nav-item dropdown"
                onMouseEnter={() => handleMouseEnter(category)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  id={`navbarDropdown-${category}`}
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded={dropdown === category ? "true" : "false"}
                >
                  {category}
                </Link>
                <div
                  className={`dropdown-menu ${dropdown === category ? "show" : ""}`}
                  aria-labelledby={`navbarDropdown-${category}`}
                >
                  {categories[category].map((brand) => (
                    <Link
                      key={brand}
                      className="dropdown-item"
                      to={`/${category.toLowerCase()}/${brand.toLowerCase()}`}
                    >
                      {brand}
                    </Link>
                  ))}
                </div>
              </li>
            ))}
            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                Cart ({cartItems.length})
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
