import React, { useState } from "react";

const UserProfile = () => {
  let [name, setName] = useState("Guest");
  let [age, setAge] = useState(18);
  return (
    <div className="row">
      <div className="col">
        <h3>This is user profle component </h3>

        <button className="btn btn-outline-primary"
          onClick={() => {
            setName("Ram kumar");
          }}
        >
          change name
        </button>
          {" "}
        <button className="btn btn-outline-primary"
          onClick={() => {
            setAge(age + 1);
          }}
        >
          change age
        </button>

        <h3>Your name is {name} </h3>
        <h3>Your age is {age} </h3>
      </div>
    </div>
  );
};

export default UserProfile;
