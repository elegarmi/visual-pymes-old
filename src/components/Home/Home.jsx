import React from "react";
import { products } from "./data.js";
import Product from "./Product/Product.jsx";
import "./Home.css";
import Create from "./Product/Create.jsx";

const Home = () => {
  return (
    <div className="home">
      <article className="home__cards">
        {products.map((product) => (
          <Product
            id={product.id}
            key={product.id}
            name={product.name}
            image={product.image}
            price={product.price}
          />
        ))}
      </article>
          <Create />
    </div>
  );
};

export default Home;
