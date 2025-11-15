import React from "react";

const PropsDemo = (props) => {
  let { hobbies, name, city, age } = props;
  console.log(hobbies);
  return (
    <div className="col-md-6 border border-1">
      <h3>Props in react js </h3>
      <h3>{name && `Your name is ${name} `}</h3>
      <p>{city && `Your city is ${city} `}</p>
      <p>{age && `Your age is ${age} `}</p>

      <ul>
        {hobbies &&
          hobbies.map((hobby, index) => {
            return <li key={index}> {hobby} </li>;
          })}
      </ul>
    </div>
  );
};

export default PropsDemo;
