import PropsDemo from "./components/PropsDemo";

const App = () => {
  return (
    <div className="container">
      <div className="row">
        <PropsDemo name = "Ram kumar" city = "Delhi" age ="40" />
        <PropsDemo name = "Maniyari" city = "Noida" age = "30" />
        <PropsDemo name = "Maniyari" city = "Pune" age = "33" />
        <PropsDemo name = "Maniyari" city = "Kolkata" age = "24" />
      </div>
    </div>
  );
};

export default App;
