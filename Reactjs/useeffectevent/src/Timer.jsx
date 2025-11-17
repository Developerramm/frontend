import React, { useEffect, useEffectEvent, useState } from "react";

const Timer = () => {
  let [count, setCount] = useState(0);

  let onTick = useEffectEvent(() => {
    console.log(count);
    setCount((prev) => prev + 1);
  });

  useEffect(() => {
    let id = setInterval(() => {
      onTick();
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return (
    <div>
      <h3>The count value is {count} </h3>
    </div>
  );
};

export default Timer;
