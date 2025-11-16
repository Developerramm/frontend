import React, { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    return () => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          setUsers(json);
        });
    };
  }, []);
  return (
    <div className="row">
      <div className="col">
        <h3>Api call in useEffect hook </h3>

        {users.map((item) => {
          return <li key={item.id}> {item.name} </li>;
        })}
      </div>
    </div>
  );
};

export default Users;
