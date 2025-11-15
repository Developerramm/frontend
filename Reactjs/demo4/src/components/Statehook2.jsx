import React, { useState } from "react";

const Statehook2 = () => {
  let [toggle, setToggle] = useState(false);

  let toggleContent = () => {
    setToggle(!toggle);
  };
  return (
    <div className="row">
      <div className="col">
        <h3>useState hook part 2</h3>
        <button onClick={toggleContent} className="btn btn-outline-primary">
          {" "}
          {toggle ? " Hide content" : " Show content"}{" "}
        </button>
        <p className="text-bg-dark mt-2">
          {toggle &&
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus sunt dolor non, ipsam quis sed iusto aliquam reiciendis optio aliquid tempora quae atque ut maxime. Rerum dolore ab maiores voluptas, voluptatum iure et consequatur cupiditate sed doloremque, vitae illo eveniet."}
        </p>
      </div>
    </div>
  );
};

export default Statehook2;
