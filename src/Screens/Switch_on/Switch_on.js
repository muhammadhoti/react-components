import React, { Component } from 'react';

import '../../App.css';


class Switch_on extends Component {

  constructor(props){
    
    super(props);
    this.state={
    }
    
  }


  render() {
    
    return (
        <div>
        <button className="btn btn-success" onClick={()=>{
          this.props.jabChaluKare()
        }}>Switch On</button>
      </div>
    );
  }
}

export default Switch_on;
