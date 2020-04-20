import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

class App extends Component {
  state={
    username: 'Marcin'
  }

  usernameHandler= (event) => {
    this.setState({
      username: event.target.value
    })
  }


  render(){
    return (
      <div className="App">
        <UserOutput />
        <UserOutput username="Michał"/>
        <UserOutput username={this.state.username}/>
        <UserInput change={this.usernameHandler} 
        currentName={this.state.username}/>
      </div>
    );
  }
}

export default App;
