import React from 'react';
import Header from '../Header/header'
import './App.css'

// Functional Component
/*
function App () {
  return <h1>This is my functional component!</h1>
}
*/


// Class Based Component

class App extends React.Component {
  render () {
    return (
      <div>
        <Header />
      </div>
    )
  }
}

export default App;