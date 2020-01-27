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
    </div>
  )
}

export default SimpleFormHooks
