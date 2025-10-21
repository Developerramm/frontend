import React from "react";
import seriesData from "../api/seriesData.json";

const Card = () => {
  console.log(seriesData);
  return (
    <div>
      <div className="container">
        <div className="row">
          {seriesData.map((item) => {
            return (
              <div className="col-md-4 my-4" key={item.id}>
                <div className="card">
                  <img src={item.img_url} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <h5 className="card-title"> Rating : {item.rating}</h5>
                    <p className="card-text">{item.description}</p>
                    <a href={item.watch_url} className="btn btn-primary">
                      Watch Now
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Card;
