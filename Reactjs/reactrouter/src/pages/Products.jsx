import React from "react";
import { Link, Outlet } from "react-router-dom";

const Products = () => {
  return (
    <div>
      <h3>This is product page here below </h3>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit, vero
        deleniti? Neque fugit, quae fuga animi provident dignissimos nihil
        laudantium explicabo distinctio? Molestiae esse, saepe quaerat labore
        inventore harum incidunt.
      </p>

        <Link to="phone">Phone page</Link> | {" "}
        <Link to = "laptop">Laptop page</Link>


         <Outlet />   
    </div>
  );
};

export default Products;
