import React, { Component } from 'react';
import logo from './logo.svg';
import image from './default.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <img src={image} style={{height : '350px'}} alt="logo" />
        <br></br>
        <button className="btn btn-primary">Switch On</button>
      </div>
    );
  }
}

export default App;
