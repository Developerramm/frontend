import React from "react";

const NetFlixSeries = () => {

  let name = "Queen of tears";
  let rating = 3.2;
  let summery = `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Autem, modi. Saepe aliquid quidem reprehenderit sunt voluptate
        consequuntur, debitis, perspiciatis eaque odio similique aut repellendus
        explicabo voluptates itaque nobis enim fugiat quo adipisci molestiae
        nihil ratione voluptatibus inventore. Quibusdam, ea cupiditate
        doloremque porro, maxime, tenetur voluptatem voluptate dolorum quod
        aspernatur perferendis`;

  return (
    <div>
      <h3>netflix series card here </h3>

      <h1> {3 + 2 + 4 + 10 - 3} </h1>

      <div>
        <img src="a1.jpg" alt="dark" />
      </div>
      <h2>Name : {name} </h2>
      <h3>Rating : {rating} </h3>
      <p>
        Summery : {summery}
      </p>
    </div>
  );
};

export default NetFlixSeries;
