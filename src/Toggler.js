import React from 'react'
import useToggle from './hooks/useToggle'

const Toggler = () => {
  const [isHappy, toggleIsHappy] = useToggle(true)
  const [isHeartBroken, toggleIsHeartBroken] = useToggle(false)
  const [isBanana, toggleIsBanana] = useToggle(false)

  return (
    <div className='container mt-5 text-center'>
      <h1 className='text-danger'>Toggler Component</h1>
      <p className='display-4' onClick={toggleIsHappy}>
        {isHappy ? '😄' : '😢'}
      </p>
      <p className='display-4' onClick={toggleIsHeartBroken}>
        {isHeartBroken ? '♥️' : '💔'}
      </p>
      <p className='display-4' onClick={toggleIsBanana}>
        {isBanana ? '🍌' : '💩'}
      </p>
    </div>
  )
}

export default Toggler
