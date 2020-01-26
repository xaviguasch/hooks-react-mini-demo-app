import React from 'react'
import CounterHook from './CounterHook'
import Toggler from './Toggler'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <CounterHook />
        <Toggler />
      </div>
    </div>
  )
}

export default App
