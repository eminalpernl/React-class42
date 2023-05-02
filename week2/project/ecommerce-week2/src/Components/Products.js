import React from "react";
import useFetch from "./UseFetch";
import { Link } from "react-router-dom";

export default function Products({ selectedCategory }) {
  let url = "https://fakestoreapi.com/products";
  if (selectedCategory) {
    url = "https://fakestoreapi.com/products/category/" + selectedCategory;
  }

  const { data, isLoading, error } = useFetch(url, [selectedCategory]);
  const products = data;

  if (isLoading) {
    return <div>Product(s) is loading...</div>;
  }

  if (error) {
    return <div>Sorry, we have an error: {error}</div>;
  }

  if (products) {
    return (
      <ul className="products">
        {products.map((product) => (
          <li className="products--item" key={product.id}>
            <div className="product">
              <img
                className="product--image"
                alt={product.id}
                src={product.image}
              ></img>
              <Link to={`/product/${product.id}`} className="product--title">
                {product.title}
              </Link>
            </div>
          </li>
        ))}
      </ul>
    );
  }
}
