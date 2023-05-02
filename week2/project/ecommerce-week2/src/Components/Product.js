import React from "react";
import useFetch from "./UseFetch";
import { useParams } from "react-router-dom";

export default function Product() {
  const { id } = useParams();
  const { data, isLoading, error } = useFetch(
    `https://fakestoreapi.com/products/${id}`,
    [id]
  );
  const product = data;

  if (isLoading) {
    return <div>Something is loading...</div>;
  }

  if (error) {
    return <div>Sorry, we have an error: {error}</div>;
  }

  if (product) {
    return (
      <div className="product-details">
        <h1>{product.title}</h1>
        <img src={product.image} alt={product.id} />
        <p>{product.description}</p>
        <p>Price: {product.price}</p>
        <p>Category: {product.category}</p>
      </div>
    );
  }
}
