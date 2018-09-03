import React, { Component } from 'react';
import logo from './logo.svg';
import image from './default.jpg';
import './App.css';
import Switch_off from './Screens/Switch_off/Switch_off';
import Broken from './Screens/Broken/broken';
import Switch_on from './Screens/Switch_on/Switch_on'

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      switchOn : false,
      switchOff : true,
    }
    this.switchOffMain = this.switchOffMain.bind(this)
  }

  switchOn(){
    
    this.setState({
      switchOn : true,
      switchOff : false
      
    })
  
  }

  switchOffMain(){
    
    this.setState({
      switchOff : true,
      switchOn : false
    })
  
  }


  //JSX Rendering Functions
  renderDefault(){
    return(
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <img src={image} style={{height : '350px'}} alt="logo" />
        <br></br>
        <button className="btn btn-primary" onClick={()=>{
          this.switchOn()
        }}>Switch On</button>
      </div>
    )
  }

  render() {
    const {switchOn, switchOff} = this.state;
    return (
      <div>
        {!switchOn && switchOff && this.renderDefault()}
        {switchOn && !switchOff && <Switch_on switchOff={this.switchOffMain}/>}      
      </div>
    );
  }
}

export default App;
