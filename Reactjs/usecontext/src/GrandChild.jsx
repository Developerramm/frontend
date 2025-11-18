import React, { useContext } from "react";
import { UserContext } from "./App";

const GrandChild = () => {
  const user = useContext(UserContext);

  return (
    <div>
      <h3>{user}</h3>
    </div>
  );
};

export default GrandChild;
