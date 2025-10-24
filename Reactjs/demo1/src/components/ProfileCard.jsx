import React, { Children } from "react";

const ProfileCard = (props) => {
  console.log(props)
  return (
    <div>
      <h3>This is profile card here </h3>
      <h2>Your name is {props.name} </h2>
      <h2>Your age is : {props.age}</h2>

      <h3> {props.greeting} </h3>
      {props.children}
    </div>
  );
};

export default ProfileCard;
