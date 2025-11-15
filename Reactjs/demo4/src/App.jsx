import InputExample from "./components/InputExample";
import LikeButton from "./components/LikeButton";
import Statehook1 from "./components/Statehook1";
import Statehook2 from "./components/Statehook2";
import Student from "./components/Student";
import UserProfile from "./components/UserProfile";

const App = () => {
  return (
    <div className="container">
      {/* <Statehook1 /> */}
      <InputExample />
      <Statehook2 />
      <LikeButton />
      <UserProfile />
      <hr />
      <Student />
    </div>
  );
};

export default App;
