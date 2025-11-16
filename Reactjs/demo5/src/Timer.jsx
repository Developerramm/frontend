import React, { useEffect, useState } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
      
    };
  }, []);

  return (
    <div className="row">
      <div className="col">
        <h3>This is timer component </h3>
        <h3> Second : {seconds} </h3>
      </div>
    </div>
  );
};

export default Timer;
