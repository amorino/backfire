import React, { Component } from 'react'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React in the Server</h2>
          <button onClick={() => console.log('click')}>Yes</button>
        </div>
      </div>
    )
  }
}

export default App
