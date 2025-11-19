import React from "react";

import { useCart } from "../context/CartContext";

const ProductCard = ({name,price,product}) => {

    const {addToCart} = useCart();
    
  return (
    <div className="card shadow-sm h-100 text-center">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">${price}</p>
        <button className="btn btn-primary"
        onClick={()=>addToCart(product)}
        >Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
