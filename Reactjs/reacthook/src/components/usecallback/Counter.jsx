import React, { useCallback, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);
  return (
    <div className="row">
      <div className="col">
        <h3>Counter component </h3>
        <h3>The count value is {count} </h3>
        <button className="btn btn-outline-dark" onClick={increment}>
          Increment{" "}
        </button>
      </div>
    </div>
  );
};

export default Counter;
