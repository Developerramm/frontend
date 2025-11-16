import React, { useEffect, useState } from "react";

const Demo = () => {
  let [count, setCount] = useState(0);
  let [name,setName] = useState("");

  useEffect(() => {
    console.log("component re-rendered!");
  },[]);

  return (
    <div className="row">
      <div className="col">
        <h3>This is useEffect hooh in react js </h3>
        <h3>Count : {count} </h3>
        <button
          className="btn btn-outline-primary"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Increment
        </button>
      </div>
    </div>
  );
};

export default Demo;
