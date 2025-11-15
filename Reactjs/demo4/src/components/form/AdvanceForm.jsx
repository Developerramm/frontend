import React, { useState } from "react";

const AdvanceForm = () => {
  let [formData, setFormData] = useState({
    gender: "",
    country: "India",
    agree: false,
  });

  let handleChange = (e) => {
    let { name, type, value, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      gender: "",
      country: "",
      agree: false,
    });
  };

  return (
    <div className="row">
      <div className="col">
        <h3>Form with checkbox,Radio,and Select </h3>
        <form action="" onSubmit={handleSubmit}>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              value="Male"
              onChange={handleChange}
              checked={formData.gender === "Male"}
            />
            <label className="form-check-label">Male</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              value="Female"
              onChange={handleChange}
              checked={formData.gender === "Female"}
            />
            <label className="form-check-label">Female</label>
          </div>

          <select
            value={formData.country}
            className="form-select"
            name="country"
            onChange={handleChange}
          >
            
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
          </select>

          <div className="form-check">
            <input
              onChange={handleChange}
              checked={formData.agree}
              className="form-check-input"
              type="checkbox"
              name="agree"
            />
            <label className="form-check-label">
              I agree to terms and conditions{" "}
            </label>
          </div>

          <button className="btn btn-outline-primary" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdvanceForm;
