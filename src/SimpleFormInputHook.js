import React from 'react'
import useInputState from './hooks/useInputState'

const SimpleFormInputHook = () => {
  const [email, updateEmail, resetEmail] = useInputState('')
  const [password, updatePassword, resetPassword] = useInputState('')

  return (
    <div className='container text-center'>
      <h1 className='text-danger'>SimpleFormInputHook</h1>
      <h1>
        The value is {email} and password is: {password}
      </h1>
      <input type='text' value={email} onChange={updateEmail} />
      <button className='btn btn-success' onClick={resetEmail}>
        Submit
      </button>
      <input type='password' value={password} onChange={updatePassword} />
      <button className='btn btn-info' onClick={resetPassword}>
        Reset
      </button>
    </div>
  )
}

export default SimpleFormInputHook
