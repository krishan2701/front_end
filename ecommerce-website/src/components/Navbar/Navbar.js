import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
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

  return (
    <nav className="navbar">
      <ul className="navbar__list">
        {/* Home Button */}
        <li className="navbar__item">
          <Link to="/" className="navbar__link">
            Home
          </Link>
        </li>

        {/* Category Links with Dropdown */}
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
                    <Link
                      to={`/${category.toLowerCase()}/${brand.toLowerCase()}`}
                      className="dropdown__link"
                    >
                      {brand}
                    </Link>
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
