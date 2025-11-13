import React from "react";
import Demo from "./Demo";

const DemoEvent = () => {
  let handleButtonClick = (event) => {
    console.log("button is click");
    console.log(event);
    console.log(event.target);
  };

  let HandleWelcomeUser = (event)=>{
    console.log(event)
    console.log("Event value is " + event)
  }

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

      <Demo onClick={()=>HandleWelcomeUser("Rmkumar")} />
    </div>
  );
};

export default DemoEvent;
