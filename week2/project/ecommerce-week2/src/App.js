import React, { useState, useEffect } from "react";
import useFetch from "./Components/UseFetch";
import { Route, Routes } from "react-router-dom";
import Categories from "./Components/Categories";
import Products from "./Components/Products";
import Product from "./Components/Product";

function App() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const { data, isLoading, error } = useFetch(
    "https://fakestoreapi.com/products/categories"
  );

  useEffect(() => {
    if (data) {
      setCategories(data);
    }
  }, [data]);

  if (isLoading) {
    return <div>Something is loading...</div>;
  }

  if (error) {
    return <div>Sorry, we have an error: {error}</div>;
  }

  const categoryClick = (category) => {
    if (selectedCategory === category) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(category);
    }
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <h1>Products</h1>
            <Categories
              categories={categories}
              selectedCategory={selectedCategory}
              categoryClick={categoryClick}
            />
            <Products selectedCategory={selectedCategory} />
          </>
        }
      />
      <Route path="/product/:id" element={<Product />} />
    </Routes>
  );
}

export default App;
