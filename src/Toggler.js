import React, { useState } from 'react'
import useToggle from './hooks/useToggle'

const Toggler = () => {
  const [isHappy, toggleIsHappy] = useToggle(true)
  const [isHeartBroken, toggleIsHeartBroken] = useToggle(false)

  return (
    <div className='container mt-5 text-center'>
      <h1 className='text-danger'>Toggler Component</h1>
      <p className='display-2' onClick={toggleIsHappy}>
        {isHappy ? '😄' : '😢'}
      </p>
      <p className='display-2' onClick={toggleIsHeartBroken}>
        {isHeartBroken ? '♥️' : '💔'}
      </p>
    </div>
  )
}

export default Toggler
