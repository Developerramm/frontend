import React from "react";
import Demo from "./Demo";
import Navbar from "./Navbar";
import Timer from "./Timer";
import WindowSizeTracker from "./WindowSizeTracker";
import Users from "./Users";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Demo />
        <hr />
        {/* <Timer /> */}
        <hr />
        <WindowSizeTracker />
        <hr />
        <Users />
      </div>
    </div>
  );
};

export default App;
