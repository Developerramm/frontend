import React from "react";

const DemoEvent = () => {
  let handleButtonClick = (event) => {
    console.log("button is click");
    console.log(event);
    console.log(event.target);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>click me</button>

      <button onClick={() => handleButtonClick(event)}>click me 2 </button>

      <button
        onClick={(event) => {
          console.log(event.target.value);
          console.log("ram kumar");
          console.log(5 + 5);
        }}
      >
        click me 3
      </button>
    </div>
  );
};

export default DemoEvent;
