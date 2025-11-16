import React from "react";
import Demo from "./Demo";
import Navbar from "./Navbar";
import Timer from "./Timer";
import WindowSizeTracker from "./WindowSizeTracker";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Demo />
        <hr />
        <Timer />
        <hr />
        <WindowSizeTracker />
      </div>
    </div>
  );
};

export default App;
