import React from "react";

const Hello = () => {
  let getName = (name) => {
    return name;
  };

  let handleClick = (e) => {
    console.log("button was click ");
    console.log(e.target.value);
    console.log(e.target);
  };

  let handleInput = (e) => {
    console.clear();
    console.log(e.target.value);

  };

  return (
    <div className="row">
      <div className="col">
        <h3>This is hello component here </h3>
        <h3>Your name is {getName("Ram kumar")} </h3>

        <button
          onClick={handleClick}
          className="btn btn-outline-danger"
          type="button"
        >
          click me
        </button>

        <button
          onClick={(e) => {
            console.log("say Hello button is clicked");
            console.log(e.target);
          }}
          className="btn btn-outline-primary"
        >
          say Hello
        </button>

        <br />
        <br />
        <input
          onChange={handleInput}
          type="text"
          className="form-control"
          placeholder="Enter text and see in console "
        />
      </div>
    </div>
  );
};

export default Hello;
