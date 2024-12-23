import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.scss';

const HomePage = () => {
  return (
    <div className="home-page container">
      <h1>Welcome to Our Electronics Store</h1>
      <p>Discover the best electronics from various categories:</p>
      <div className="categories">
        <Link to="/mobiles/apple" className="category-link">
          <div className="category-card">
            <h2>Mobiles</h2>
            <img src="/HomePage/mobile.png" alt="Mobiles" />
          </div>
        </Link>
        <Link to="/laptops/dell" className="category-link">
          <div className="category-card">
            <h2>Laptops</h2>
            <img src="/HomePage/laptop.png" alt="Laptops" />
          </div>
        </Link>
        <Link to="/televisions/sony" className="category-link">
          <div className="category-card">
            <h2>Televisions</h2>
            <img src="/HomePage/television.png" alt="Televisions" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
