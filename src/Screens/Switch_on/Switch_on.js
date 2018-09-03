import React, { Component } from 'react';
import logo from './logo.svg';
import '../../App.css';
import image from './Switch_on.jpg';

class Switch_on extends Component {

  constructor(props){
    
    super(props);
    this.state={
    }
    
  }


  render() {
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <img src={image} style={{height : '350px'}} alt="logo" />
        <br></br>
        <button className="btn btn-danger" onClick={()=>{
          this.props.switchOff()
        }}>Switch Off</button>
      </div>
    );
  }
}

export default Switch_on;
