import React, { useEffect, useEffectEvent, useState } from "react";

const AutoSaveForm = () => {
  let [formdata, setFormdata] = useState({
    name: "",
    email: "",
  });

  let savedData = useEffectEvent(() => {
    console.log("form data ", formdata);
  });

  useEffect(() => {
    const interval = setInterval(() => {
      savedData();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h3 className="text-center">Auto Save form </h3>
          <form action="">
            <div className="mb-3">
              <label htmlFor="" className="form-label">
                Name :{" "}
              </label>
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Enter your name here "
                value={formdata.name}
                onChange={(e) =>
                  setFormdata({ ...formdata, name: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <label htmlFor="" className="form-label">
                Email :{" "}
              </label>
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Enter your email here "
                value={formdata.email}
                onChange={(e) =>
                  setFormdata({ ...formdata, email: e.target.value })
                }
              />
            </div>
            <button className="btn btn-outline-primary" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AutoSaveForm;
