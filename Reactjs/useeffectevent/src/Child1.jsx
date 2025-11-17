import React from "react";

const Child1 = ({ onChange }) => {
  return (
    <div>
      <h3>This is child component </h3>
      <input
        onChange={(e) => onChange(e.target.value)}
        type="text"
        className="form-control"
      />
    </div>
  );
};

export default Child1;
