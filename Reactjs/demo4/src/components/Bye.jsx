import React from "react";

const Bye = () => {
  let user = {
    firstName: "Ram",
    lastName: "kumar",
    age: 34,
  };


  let getFullName = (user)=>{
    return user.firstName + " "+ user.lastName;
  }


  return (
    <div className="row">
      <div className="col">
        <h3>Personal details </h3>
        <p>First name : {user.firstName} </p>
        <p>Last name : {user.lastName} </p>
        <p>Age {user.age} </p>
        <p>Your full name is {getFullName(user)} </p>
      </div>
    </div>
  );
};

export default Bye;
