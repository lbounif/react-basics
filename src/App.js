import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

class App extends Component {
  state = {
    username: "Lynda"
  }
  usernameChangedHandler = (event) => {
    this.setState({
      username:event.target.value
    })
  }
  render() {
    return (
      <div className="App">
          <UserInput changed = {this.usernameChangedHandler}> </UserInput>
          <UserOutput username = {this.state.username}> </UserOutput>
          <UserOutput username = "Damia"> </UserOutput>
          <UserOutput username = "Ania"> </UserOutput>
      </div>
    );
  }
}

export default App;
