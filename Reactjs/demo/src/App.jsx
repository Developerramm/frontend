import React, { version } from "react";

const App = () => {
  let person = {
    name: "ram kumar",
    age: 30,
    isProgrammer: true,
    address: {
      village: "maniyari near punaura",
      post: "maniyari punaura",
      district: "sitamarhi",
      pin: 843302,
    },
  };
  return (
    <div>
      <h1>This is react js tutorial here </h1>
      <h3>React version is {version} </h3>

      <h3>Name : {person.name} </h3>
      <h3> Age : {person.age} </h3>

      <h3> Kya programmer hai {person.isProgrammer && " ? ha hai"} </h3>

      <h3> Address here :</h3>
      <pre>
        Village : {person.address.village} :
        post : {person.address.post}
      </pre>
    </div>
  );
};

export default App;
