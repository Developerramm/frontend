
const Conditional = () => {

    let age = 30;
    let age1 = 17;

    let username = "";
    console.log(Boolean(username))
    
  return (
    <div>
      <h3>Conditional value in jsx </h3>
      <h3> {age >= 18 ? "Adult" : "minor"} </h3>
      <h3> {age1 >= 18 ? "Adult" : "minor"} </h3>

      <h1> Your username is : {username ? username : "guest user"} </h1>
    </div>
  )
}

export default Conditional
