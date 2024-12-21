import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(null);

  const categories = {
    Mobiles: ["Samsung", "Apple", "OnePlus"],
    Laptops: ["Dell", "HP", "Lenovo"],
    Televisions: ["Sony", "LG", "Samsung"],
  };

  const handleMouseEnter = (category) => setDropdown(category);
  const handleMouseLeave = () => setDropdown(null);

  const createRoute = (category, brand) => {
    const basePath = category.toLowerCase();
    const brandPath = brand.toLowerCase().replace(/\s+/g, "-");
    return `/${basePath}/${brandPath}`;
  };

  return (
    <nav className="navbar">
      <ul className="navbar__list">
        {Object.keys(categories).map((category) => (
          <li
            key={category}
            className="navbar__item"
            onMouseEnter={() => handleMouseEnter(category)}
            onMouseLeave={handleMouseLeave}
          >
            {category}
            {dropdown === category && (
              <ul className="dropdown">
                {categories[category].map((brand) => (
                  <li key={brand} className="dropdown__item">
                    <Link to={createRoute(category, brand)}>{brand}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
