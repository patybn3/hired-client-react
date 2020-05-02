// this file is not in use
import React, { useState } from 'react'

const Counter = () => {
  // Create some state, with an initial value of 0
  // We have access to our state in `counter`
  // And can update it with setCounter
  const [counter, setCounter] = useState(0)
  // The above line is equivelant to the following, it just uses array destructuring
  // const array = useState(0)
  // console.log(array)
  // const counter = array[0]
  // const setCounter = array[1]

  const handleClick = () => setCounter(counter + 1)
  return (
    <div>
      Counter: {counter}
      <button onClick={handleClick}>
        Increase
      </button>
    </div>
  )
}

export default Counter
