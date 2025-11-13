
const Inlinecss = () => {
    
    let age = 30;
    age = 18
  return (
    <div>
      <h3 style={{color : "red",fontSize: " 30px"}} >   Your age is   {age} </h3>

      <h2 style={age>=19 ?{color: 'blue'} : {color : "red"}  } > Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi eius cum sed porro sunt aut voluptatibus, fuga minus beatae odit? </h2>
    </div>
  )
}

export default Inlinecss
