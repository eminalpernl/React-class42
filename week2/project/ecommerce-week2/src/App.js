import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Categories from "./Components/Categories";
import Products from "./Components/Products";
import Product from "./Components/Product";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
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
