import React, { useCallback, useState } from "react";
import Child from "./Child";


const Parent = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("button is clicked in parent ")
  }, []);
  return (
    <div className="row">
      <div className="col">
        <h3>Counter component </h3>
        <h3>The count value is {count} </h3>
        <button className="btn btn-outline-dark" onClick={()=>setCount(count + 1)}>
          Increment{" "}
        </button>
        <Child click = {handleClick} />
      </div>
    </div>
  );
};

export default Parent;
