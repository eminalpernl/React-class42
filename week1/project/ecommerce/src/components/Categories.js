import { useState } from "react";
import categories from "../fake-data/all-categories";

export const Categories = ({ selectCategory, selectedCategory }) => {
  const [selectedCategoryName, setSelectedCategoryName] = useState(null);

  return (
    <div className="categories">
      {categories.map((category, index) => (
        <div
          key={index}
          className={
            selectedCategoryName === selectedCategory
              ? "cat-item sel-cat-item"
              : "cat-item"
          }
          onClick={(e) => {
            setSelectedCategoryName(selectedCategory);
            selectCategory(e);
          }}
        >
          {category}
        </div>
      ))}
    </div>
  );
};
