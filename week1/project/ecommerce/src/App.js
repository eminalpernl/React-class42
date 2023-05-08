import { useState } from "react";
import { Categories } from "./components/Categories";
import { Products } from "./components/Products";

function App() {
  const [category, setCategory] = useState(null);

  function selectCategory(event) {
    const category = event.target.textContent.replace("FAKE: ", "");
    setCategory(category);
  }
  return (
    <div className="app">
      <h1>Products</h1>
      <Categories selectCategory={selectCategory} />
      <Products categoryName={category} />
    </div>
  );
}

export default App;
