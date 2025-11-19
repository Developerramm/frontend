import React from "react";
import ProductCard from "./ProductCard";

const products = [
  { id: 1, name: "Laptop", price: 3000 },
  { id: 2, name: "Phone", price: 1200 },
  { id: 3, name: "blanket", price: 500 },
  { id: 4, name: "bluetooth", price: 800 },
  { id: 5, name: "mouse", price: 250 },
];

const ProductList = () => {
  console.log(products);
  return (
    <div className="row">
      {products.map((product) => (
        <div className="col-md-3 mb-4" key={product.id}>
          <ProductCard product = {product}  name = {product.name} price = {product.price} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
