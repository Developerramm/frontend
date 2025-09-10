import React from 'react'

const Practice1 = () => {
    const student = [];
  return (
    <div>
      <h1>This is practice component one</h1>
      <p> {student.length && "No student found here "} </p>
      <p> Number of student is :  {student.length} </p>
    </div>
  )
}

export default Practice1
