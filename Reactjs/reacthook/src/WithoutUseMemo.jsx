import React, { useState } from "react";

const WithoutUseMemo = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const expensiveCalculation = () => {
    console.log("Running expensive calculation...");
    let total = 0;
    for (let i = 0; i < 1000000000; i++) {
      total = total + i;
    }

    return total;
  };

  const result = expensiveCalculation();

  return (
    <div className="row">
      <div className="col">
        <h3>Without use memo component </h3>
        <h3>Result value {result} </h3>
        <button className="btn btn-outline-primary" onClick={() => setCount(count + 1)}>Increase Count </button>
        <br /><br /><br />
        <input className="form-control"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <br />
        <p>count {count} </p>
        <br />
        <p> {text} </p>
      </div>
    </div>
  );
};

export default WithoutUseMemo;
