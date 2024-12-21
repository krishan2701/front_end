import React, { useEffect, useState } from 'react';
import appleData from '../../assets/mobiles/Apple/apple.json';
import ProductCard from '../../components/ProductCard/ProductCard';
import './ApplePage.scss';

const ApplePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(appleData);
  }, []);

  return (
    <div className="apple-page">
      <h1>Apple Products</h1>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard 
            key={product.id}
            image={require(`../../assets/mobiles/Apple/${product.image}`)}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default ApplePage;
