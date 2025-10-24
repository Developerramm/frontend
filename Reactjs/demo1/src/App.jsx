import Card from "./components/Card";
import ProfileCard from "./components/ProfileCard";

const App = () => {

  return (
    <div className="container">
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
    </div>
  );
};

export default App;
