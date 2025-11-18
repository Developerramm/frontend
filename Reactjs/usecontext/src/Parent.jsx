import React, { useContext } from "react";
import Child from "./Child";

const Parent = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Child />
        </div>
      </div>
    </div>
  );
};

export default Parent;
