import React, { useLayoutEffect, useRef } from "react";

const Example2 = () => {
  const boxRef = useRef(null);

  useLayoutEffect(() => {
    let el = boxRef.current;
    let width = el.offsetWidth;
    el.style.transform = `translateX(${width}px)`;
  }, []);
  return (
    <div
      ref={boxRef}
      style={{ padding: "30px", background: "skyblue", transition: "3s" }}
    >
      <h3>Animated box </h3>
    </div>
  );
};

export default Example2;
