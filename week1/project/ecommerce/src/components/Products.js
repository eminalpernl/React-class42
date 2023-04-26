import products from "../fake-data/all-products";
import { ProductsItem } from "./Product-Items";

export const Products = ({ categoryName }) => {
  return (
    <ul className="products">
      {categoryName === null
        ? products.map((product) => {
            return (
              <li key={product.id} className="products-item">
                <ProductsItem product={product} />
              </li>
            );
          })
        : products
            .filter((product) => categoryName === product.category)
            .map((product) => {
              return (
                <li key={product.id} className="products-item">
                  <ProductsItem product={product} />
                </li>
              );
            })}
    </ul>
  );
};
