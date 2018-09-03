import React, { Component } from 'react';
import logo from './logo.svg';
import SwitchOff from './default.jpg';
import SwitchOn from './Screens/Switch_on/Switch_on.jpg';
import broken from './Screens/Broken/broken.jpg';
import './App.css';
import SwitchOffComponent from './Screens/Switch_off/Switch_off';
import Broken from './Screens/Broken/broken';
import SwitchOnComponent from './Screens/Switch_on/Switch_on'

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      switchOn : false,
      switchOff : true,
      broke : false
    }
  }

  switchOff(){
    this.setState({
      switchOn : false,
      switchOff : true,
      broke : false
    })
  }

  switchOn(){
    this.setState({
      switchOn : true,
      switchOff : false,
      broke : false
    })
  }

  broke(){
    this.setState({
      switchOn : false,
      switchOff : false,
      broke : true
    })
  }


  //JSX Rendering Functions
 

  render() {
    
    const {switchOn, switchOff, broke} = this.state

    return (
      <div className="App">
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      
      {switchOff && !switchOn && !broke && <img src={SwitchOff} style={{height : '300px'}} alt="logo" /> }

      {!switchOff && switchOn && !broke && <img src={SwitchOn} style={{height : '300px'}} alt="logo" /> }

      {!switchOff && !switchOn && broke && <img src={broken} style={{height : '300px'}} alt="logo" /> }
      
      <br></br>
      
      <SwitchOnComponent jabChaluKare ={()=>{
        this.switchOn()
      }}/>
      <br></br>

      <SwitchOffComponent jabBandKare ={()=>{
        this.switchOff()
      }}/>
      <br></br>

      <Broken jabTorde ={()=>{
        this.broke()
      }}/>

      </div>
    );
  }
}

export default App;
