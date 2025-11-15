import React, { useState } from "react";

const Statehook1 = () => {
  let [count, setCount] = useState(0);

  let increment = () => {
    setCount(count + 1);
  };

  let decrement = () => {
    setCount(count - 1);
  };

  let reset = () => {
    setCount(0);
  };
  return (
    <div className="row">
      <div className="col">
        <h3>Use state hook part one below </h3>
        <button className="btn btn-outline-primary" onClick={increment}>
          Increment
        </button>
        <span> {count} </span>
        <button className="btn btn-outline-primary" onClick={decrement}>
          Decrement{" "}
        </button>
        <span> </span>
        <button className="btn btn-outline-danger" onClick={reset}>
          reset
        </button>
      </div>
    </div>
  );
};

export default Statehook1;
