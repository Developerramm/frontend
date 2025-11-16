import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  let navigate = useNavigate();

  const goToAbout = () => {
    navigate("/about");
  };
  return (
    <div>
      <h3>Home page </h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        asperiores cum impedit beatae nihil tenetur, illum odit iusto incidunt
        expedita harum dolorum sapiente veritatis hic? Reiciendis eligendi
        commodi exercitationem totam.
      </p>
      <button onClick={goToAbout}> Go to About page </button>
    </div>
  );
};

export default Home;
