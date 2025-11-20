import React, { useReducer } from "react";

const Test = () => {
  const [checked, toggle] = useReducer((checked) => !checked, false);

  return (
    <div className="row">
      <div className="col">
        <h3>This is test component </h3>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            onClick={toggle}
            checked={checked}
          />
          <label htmlFor="" className="form-check-label">
            {checked ? "Checked" : "not checked "}
          </label>
        </div>
      </div>
    </div>
  );
};

export default Test;
