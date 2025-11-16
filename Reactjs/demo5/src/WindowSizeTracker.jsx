import React, { useEffect, useState } from "react";

const WindowSizeTracker = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width]);

  return (
    <div className="row">
      <div className="col">
        <h3>Windows size tracker </h3>
        <h3>Window inner width is {width} </h3>
      </div>
    </div>
  );
};

export default WindowSizeTracker;
