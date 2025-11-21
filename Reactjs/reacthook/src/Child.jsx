import React from "react";

const Child = React.memo(({ user }) => {
  console.log("chld component render ");
  console.log(user);
  return (
    <div>
      <h3>This is child component </h3>
      <h3>
        {" "}
        Name : {user.name} | age : {user.age}{" "}
      </h3>
    </div>
  );
});

export default Child;
