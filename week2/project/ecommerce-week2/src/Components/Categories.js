import React from "react";

export default function Categories({
  categories,
  selectedCategory,
  categoryClick,
}) {
  return (
    <div className="categories">
      {categories.map((category) => (
        <button
          className={`categories--item${
            category === selectedCategory ? "-selected" : ""
          }`}
          key={category}
          onClick={() => categoryClick(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
