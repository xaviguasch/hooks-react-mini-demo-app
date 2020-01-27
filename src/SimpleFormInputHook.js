import React from 'react'
import useFormState from './hooks/useFormState'

const SimpleFormHooks = () => {
  const [email, handleEmailChange, reset] = useFormState('')

  return (
    <div className='container text-center'>
      <h1 className='text-danger'>SimpleFormInputHook</h1>
      <h1>The value is... {email}</h1>
      <input type='text' value={email} onChange={handleEmailChange} />
      <button className='btn btn-success' onClick={reset}>
        Submit
      </button>
    </div>
  )
}

export default SimpleFormHooks
