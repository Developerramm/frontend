import React, { useReducer } from "react";

const Counter = () => {
  let reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return { count: state.count + 1 };
      case "decrement":
        return { count: state.count - 1 };
      case "reset":
        return { count: 0 };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div className="row">
      <div className="col">
        <h3>Counter app using useReducer hook </h3>
        <button
          onClick={() => dispatch({ type: "increment" })}
          className="btn btn-outline-primary"
        >
          increment{" "}
        </button>{" "}
        {state.count}{" "}
        <button
          onClick={() => dispatch({ type: "decrement" })}
          className="btn btn-outline-primary"
        >
          decrement
        </button>{" "}
        <button
          onClick={() => dispatch({ type: "reset" })}
          className="btn btn-outline-primary"
        >
          reset{" "}
        </button>
      </div>
    </div>
  );
};

export default Counter;
