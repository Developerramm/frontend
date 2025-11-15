import React from "react";

const Hello = () => {
  let fruits = ["Apple", "Banana", "Orange"];
  return (
    <div className="row">
      <div className="col">
      <h3>Fruit list </h3>
        <ul>
          {fruits.map((fruit, index) => {
            return <li key={index}> {fruit} </li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Hello;
