import React from 'react'
import CounterHook from './CounterHook'
import Toggler from './Toggler'
import SimpleFormHooks from './SimpleFormHooks'
import SimpleFormInputHook from './SimpleFormInputHook'
import Clicker from './Clicker'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className='App'>
      <div className='container'>
        {/* <CounterHook />
        <Toggler />
        <SimpleFormInputHook /> */}
        <Clicker />
      </div>
    </div>
  )
}

export default App
