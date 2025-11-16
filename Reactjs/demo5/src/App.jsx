import React from "react";
import Demo from "./Demo";
import Navbar from "./Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Demo />
      </div>
    </div>
  );
};

export default App;
