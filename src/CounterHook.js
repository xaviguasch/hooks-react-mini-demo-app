import React, { useState } from 'react'

const CounterHook = () => {
  const [count, setCount] = useState(0)

  const clicked = () => {
    setCount(count + 1)
  }

  return (
    <div className='container text-center mt-5'>
      <h1 className='display-3'>The Count Is: {count}</h1>
      <button className='btn btn-success btn-lg' onClick={clicked}>
        Add 1
      </button>
    </div>
  )
}

export default CounterHook
