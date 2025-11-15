import React, { useState } from "react";

const Student = () => {
  let [student, setStudent] = useState({
    name: "john",
    grade: "A",
    city: "Delhi",
  });

  let changeCity = () => {
    setStudent({ ...student, city: "Mumbai" });
  };

  return (
    <div className="row">
      <div className="col">
        <h3>Student component </h3>
        <h3>Your name {student.name} </h3>
        <p> Your grade is {student.grade} </p>
        <p>Your city {student.city} </p>

        <button onClick={changeCity}>change city </button>
      </div>
    </div>
  );
};

export default Student;
