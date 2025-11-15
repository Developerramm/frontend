import React from "react";

const ConditionalRen = () => {
  let isLoggedIn = true;

  isLoggedIn = false;

  if (isLoggedIn) {
    return <h2>Welcome user!</h2>;
  } else {
    return (
      <div className="row">
        <div className="col">
          <h3>Conditional rendering below </h3>
        </div>
      </div>
    );
  }
};

export default ConditionalRen;
