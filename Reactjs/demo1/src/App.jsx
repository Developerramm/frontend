<<<<<<< HEAD
import React from "react";
import JsxDemo from "./components/JsxDemo";

const App = () => {
  return (
    <div className="container">
      <div className="row">
        <h3>React js demo tutorial here below</h3>
        <JsxDemo />
      </div>
=======
import Card from "./components/Card";
import ProfileCard from "./components/ProfileCard";

const App = () => {

  return (
    <div>

    <Card />


      <ProfileCard

        name = "ram kumar"
        age = {25}
        greeting = {
          <div>
            <strong>Hello ram, keep up the great work </strong>
          </div>
        }
      
      >
    
        <p>Hobbies traveling foodie</p>
        <button>Contact me </button>


      </ProfileCard>
>>>>>>> d4554a1ed4a659ad5179f49cccd2e444cebe375c
    </div>
  );
};

export default App;
