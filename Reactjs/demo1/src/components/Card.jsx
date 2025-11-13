import React from "react";
import seriesData from "../api/seriesData.json";
import List from "./List";

const Card = () => {
  
  return (
    <div>
      <div className="container">
        <div className="row">
          {seriesData.map((item) => {
            return (
              <List item = {item} key={item.id} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Card;
