// import WithoutUseMemo from "./WithoutUseMemo"
import Parent from "./Parent"
import WithUseMomo from "./WithUseMomo"

const App = () => {
  return (
    <div className='container'>
      <h3>React app </h3>
     {/* <WithUseMomo /> */}
     <Parent />
    </div>
  )
}

export default App
