import React from 'react'
import Dashboard from './components/Dashboard'
// import axios from 'axios'

const App = () => {
  // axios({method: 'get', url: 'http://localhost:3001/daily'})
  //   .then(response => console.log(response))
  return (
    <div className="container">
      <Dashboard />
    </div>
  )
}

export default App