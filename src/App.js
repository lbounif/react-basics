import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  render() {
    return (
      <div className="App">
          <UserOutput username = "Lynda"> </UserOutput>
          <UserOutput username = "Damia"> </UserOutput>
          <UserOutput username = "Ania"> </UserOutput>
      </div>
    );
  }
}

export default App;
