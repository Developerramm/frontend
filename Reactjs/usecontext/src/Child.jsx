import React, { useContext } from "react";
import GrandChild from "./GrandChild";
import { UserContext } from "./App";

const Child = () => {
    const user = useContext(UserContext);

  return (
    <div>
        <h3>Context value in child component {user} </h3>
      <GrandChild />
    </div>
  );
};

export default Child;
