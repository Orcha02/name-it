import React from 'react';
import Header from '../Header/header'
import './App.css'
import SearchBox from '../SearchBox/SearchBox';

// Functional Component
/*
function App () {
  return <h1>This is my functional component!</h1>
}
*/


// Class Based Component

class App extends React.Component {
  state = {
    headerText: "Name It!",
  };
  render () {
    return (
      <div>
        <Header headTitle={this.state.headerText} />
        <SearchBox />
      </div>
    )
  }
}

export default App;