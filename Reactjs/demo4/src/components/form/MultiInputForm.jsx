import React, { useState } from "react";

const MultiInputForm = () => {
  let [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
  });

  let handleChange = (e) => {
    let { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  let handleForm = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: "",
      email: "",
      age: "",
    });
  };
  return (
    <div className="row">
      <div className="col">
        <h3>Multi input form below </h3>
        <form action="" onSubmit={handleForm}>
          <div className="mb-3">
            <label className="form-label">Name : </label>
            <input
              onChange={handleChange}
              value={formData.name}
              name="name"
              type="text"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email : </label>
            <input
              onChange={handleChange}
              value={formData.email}
              name="email"
              type="email"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Age : </label>
            <input
              onChange={handleChange}
              value={formData.age}
              name="age"
              type="number"
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-outline-primary">
            submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default MultiInputForm;
