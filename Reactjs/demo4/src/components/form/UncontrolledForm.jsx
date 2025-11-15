import React, { useRef } from "react";

const UncontrolledForm = () => {
  const nameRef = useRef();
  const emailRef = useRef();

  let handleSubmit = (e) => {
    e.preventDefault();
    let name = nameRef.current.value;
    let email = emailRef.current.value;
    console.log({ name, email });
  };

  return (
    <div className="row">
      <div className="col">
        <h3>UnControlled form data </h3>
        <form action="" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Name : </label>
            <input
              ref={nameRef}
              type="text"
              className="form-control"
              placeholder="name"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email : </label>
            <input
              ref={emailRef}
              type="email"
              className="form-control"
              placeholder="email"
            />
          </div>

          <button type="submit" className="btn btn-outline-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default UncontrolledForm;
