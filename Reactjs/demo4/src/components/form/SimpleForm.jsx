import React, { useState } from "react";

const SimpleForm = () => {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");

  let handleForm = (e) => {
    e.preventDefault();
    let user = { name, email };
    console.log(user);
    setName("");
    setEmail("");
  };
  return (
    <div className="row">
      <div className="col">
        <h3>React form example </h3>
        <form action="" onSubmit={handleForm}>
          <div className="mb-3">
            <label className="form-label">Name : </label>
            <input
              type="text"
              onChange={(e) => {
                setName(e.target.value);
              }}
              value={name}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email : </label>
            <input
              type="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
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

export default SimpleForm;
