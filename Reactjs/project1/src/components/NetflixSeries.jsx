import React from "react";

const NetflixSeries = () => {
    const name = "Queen of Tears";
    const rating = 8.2;
    const summery = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliasimpedit possimus animi eligendi aliquam nesciunt necessitatibus magninobis dignissimos laborum.";

  return (
    <div>
      <div>
        <img src="/img1.png" alt="Queen of Tears" width="40%" height="40%" />
      </div>
      <h2>Name : {name}</h2>
      <h3>Rating : {rating} </h3>
      <p>
        Summery : {summery}
      </p>

      <b>{10 + 10 + 3}</b>
    </div>
  );
};

export default NetflixSeries;
