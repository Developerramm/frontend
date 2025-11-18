import React, { createContext } from "react";
import Parent from "./Parent";

export const UserContext = createContext();

const App = () => {
  let user = "Ram kuamr";
  return (
    <UserContext.Provider value={user}>
      <Parent />
    </UserContext.Provider>
  );
};

export default App;
