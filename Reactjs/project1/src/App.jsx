import React from 'react'
import NetflixSeries from './components/NetflixSeries'

const App = () => {

  let age = 30;
  let username = "Ram kumar";
  username = "";
  

  return (
    <React.Fragment>
      <h1>This is our react app</h1>

      <h3> {age > 24 ? "Adult" : "Minor"} </h3>
      <h3> {username || "Guest user"} </h3>

      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
    </React.Fragment>
  )
}

export default App
