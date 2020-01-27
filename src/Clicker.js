import React, { useState, useEffect } from 'react'

const Clicker = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `You clicked ${count} times`
  })

  return (
    <div className='container text-center mt-5'>
      <p className='lead'>{count}</p>
      <button className='btn btn-info' onClick={() => setCount(count + 1)}>
        Click Me!
      </button>
    </div>
  )
}

export default Clicker
