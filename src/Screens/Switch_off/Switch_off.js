import React, { Component } from 'react';
import logo from './logo.svg';
import '../../App.css';

class Switch_off extends Component {

  constructor(props){
    
    super(props);
    this.state={
      switchOff : true,
      switchOn : false
    }
    
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <button className="btn btn-primary" onClick={()=>{
          this.switchOn()
        }}>Switch On</button>
      </div>
    );
  }
}

export default Switch_off;
