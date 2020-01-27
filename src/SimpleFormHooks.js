import React, { useState } from 'react'

const SimpleFormHooks = () => {
  const [email, setEmail] = useState('')

  const handleChange = e => {
    setEmail(e.target.value)
  }

  return (
    <div className='container text-center'>
      <h1>The value is... {email}</h1>
      <input type='text' value={email} onChange={handleChange} />
      <button className='btn btn-success' onClick={() => setEmail('')}>
        Submit
      </button>
    </div>
  )
}

export default SimpleFormHooks
